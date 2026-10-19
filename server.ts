import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize Google GenAI SDK (server-side only)
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const SYSTEM_INSTRUCTION = `당신은 대한민국 고압가스 및 청정 에너지 선도 기업 (주)MS가스(MS GAS)의 공식 AI 고객 상담 챗봇 'MS가스 상담 어시스턴트'입니다.

[기업 핵심 정보]
- 설립: 1974년 창립 (50년 전통의 무차입 건전 기업)
- 주요 제품:
  1. 산업용 가스: 고순도 액화산소(L-O₂), 액화질소(L-N₂), 아르곤(Ar), 액화탄산(CO₂) 등 대용량 벌크 및 실린더
  2. 연료용 가스: 프로판(Propane), 절단용 프라멕스(Flammex), 부탄, 에탄 등 고발열량 청정 연료
  3. 특수가스: 6N(99.9999%) 초고순도 헬륨(He), 수소(H₂), 반도체/디스플레이용 에칭 및 증착 가스, 레이저 믹스 가스
  4. 의료용 가스: 식약처 KGMP 승인 의료용 산소, 아산화질소(N₂O), 의료용 탄산
  5. 표준가스: 환경 대기 측정 및 계측기 교정용 다성분 정밀 표준가스 (KOLAS 국가공인 시험성적서 발급)
  6. 가스 설비: 초저온 저장탱크, 대기식/온수식 기화기, 자동 절체 매니폴드, 배관 엔지니어링 턴키 시공
- 4대 기술 엔지니어링 서비스:
  1. 가스분석 서비스: GC(가스크로마토그래피) 기반 ppm/ppb 단위 정밀 순도·불순물 분석 및 시험성적서(COA) 발행
  2. 가스퍼지(Purge) 서비스: 플랜트 정기보수(TA), 조선소 선박 시운전, 배관 신설 시 고순도 질소(N₂) 투입 폭발 위험 치환
  3. 수출입 솔루션: ISO 탱크컨테이너 및 고압 실린더 국제 위험물 운송(IMDG Code) 준수 해외 10개국 직결 물류
  4. 전문 안전관리: 사업장 설비 정기검사, HAZOP 위험성평가, 긴급 가스누출 복구 및 24시간 안전관제
- R&D 및 친환경 미래 에너지: 울산 규제자유특구 암모니아 TTS(Truck-to-Ship) 선박 벙커링 실증 인프라 주관
- 전국 공급망: 부산 본사 및 학감공장, 포항 공장, 울산 온산기지, 충남 당진공장, 경기 화성/평택 지원센터, 광양/여수 기지 등 전국 8개 권역 허브 및 17개 영업소
- 대표 문의처: 대표전화 051-312-3000, 웹사이트 하단 '온라인 문의' 신청 폼

[응대 가이드라인]
1. 정중하고 전문적이며 신뢰감 있는 비즈니스 어조로 답변합니다. 한국어를 기본으로 하되, 외국어 질문에는 해당 언어로 대응합니다.
2. 제품 사양, 순도 규격, 공급 방식(탱크로리, LGC, 실린더, 배관 직송) 및 안전 규정에 대해 명확하게 안내합니다.
3. 안전 및 준법 원칙:
   - 가스를 유해 무기나 폭발물로 제조/전용하는 방법 또는 불법 화학물질 합성 방법에 대한 질문은 즉각 정중히 거부하고 안전 법규 준수를 강조하십시오.
4. 구체적인 견적서 발행이나 대량 공급 계약 체결을 원하실 경우, 웹사이트 하단의 '온라인 문의(견적 신청)' 폼이나 대표전화(051-312-3000)로 문의하도록 자연스럽게 유도해 주세요.`;

// Chatbot API Endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    if (!ai) {
      // Graceful fallback response if API key is not configured in environment
      res.json({
        reply: `(주)MS가스 고객센터입니다. 현재 AI 전용 엔진이 초기화 중입니다. 
산업용·특수가스 견적, 질소 치환(Purge) 및 MSDS 발급에 관한 급하신 문의는 대표전화(051-312-3000) 또는 페이지 하단 [온라인 문의] 폼을 통해 접수해주시면 담당 엔지니어가 24시간 이내 신속히 답변드리겠습니다.`,
      });
      return;
    }

    // Prepare contents array for multi-turn chat
    const contents: any[] = [];

    if (Array.isArray(history)) {
      for (const turn of history) {
        if (turn.role === 'user' || turn.role === 'model') {
          contents.push({
            role: turn.role,
            parts: [{ text: String(turn.text) }],
          });
        }
      }
    }

    // Append the latest user query
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    const reply = response.text || '죄송합니다. 일시적으로 답변을 생성하지 못했습니다. 다시 시도해 주세요.';
    res.json({ reply });
  } catch (error: any) {
    console.error('Chat error:', error);
    res.status(500).json({
      error: '챗봇 응답 처리 중 오류가 발생했습니다.',
      reply: '죄송합니다. 일시적인 시스템 지연으로 응답을 처리하지 못했습니다. 잠시 후 다시 질문해 주시거나 대표전화(051-312-3000)로 문의해 주시기 바랍니다.',
    });
  }
});

// Mounting Vite in development or serving static files in production
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`MS GAS full-stack server running on http://localhost:${PORT}`);
  });
}

startServer();
