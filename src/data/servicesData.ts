export interface TechnicalService {
  id: string;
  icon: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  bullet1: string;
  bullet2: string;
  details: {
    description: string;
    targetIndustries: string[];
    equipment: string[];
    certifications: string[];
    workflow: string[];
  };
}

export const TECHNICAL_SERVICES: TechnicalService[] = [
  {
    id: 'gas-analysis',
    icon: 'biotech',
    title: '가스분석 서비스',
    titleEn: 'Gas Composition & Impurity Analysis',
    summary: '초정밀 가스크로마토그래피(GC) 및 불순물 검출기를 활용한 가스 조성 분석, 수분 측정, 공인 시험분석 성적서 발행.',
    summaryEn: 'High-precision Gas Chromatography (GC) and trace impurity detection for composition analysis, moisture measurement, and certified laboratory test reports.',
    bullet1: 'PPM·PPB 정밀 불순물 검출',
    bullet2: '현장 채취 및 방문 분석',
    details: {
      description: '반도체, 광학, 제약 및 정밀 제조 공정에 사용되는 특수가스 및 원료 가스의 순도와 미량 불순물(수분, 탄화수소, 산소, 일산화탄소 등)을 ppm/ppb 단위로 정밀 분석하여 국가 공인 시험성적서를 제공합니다.',
      targetIndustries: ['반도체 파운드리 및 패키징', '제약 바이오 생산 라인', '수소 충전소 품질 검사', '화학물질 안전 관리 시설'],
      equipment: ['가스크로마토그래피 (GC-TCD, GC-FID, GC-PDHID)', '초정밀 수소 불순물 분석기', '정전용량형/전해식 수분계', '미량 산소 분석기(Trace O₂ Analyzer)'],
      certifications: ['KOLAS 공인시험기관 인정', 'ISO/IEC 17025 시험소 역량 인증', '식약처 의약품 시험 검사기관 승인'],
      workflow: [
        '1단계: 시료 채취(전용 실린더 현장 채취 또는 수거)',
        '2단계: 정밀 전처리 및 3회 연속 크로마토그래피 측정',
        '3단계: 데이터 검증 및 피크 정량 분석',
        '4단계: 공인 시험성적서(COA) 원본 및 디지털 문서 발행'
      ]
    }
  },
  {
    id: 'gas-purge',
    icon: 'air',
    title: '가스퍼지 서비스',
    titleEn: 'Nitrogen Purging & Inerting Solutions',
    summary: '플랜트 배관, 저장탱크, 선박 연료탱크 신설 및 보수 시 고순도 질소를 투입하여 잔존 유해가스 및 산소를 완벽 치환.',
    summaryEn: 'Injecting high-purity nitrogen during pipeline, storage tank, and LNG/ammonia vessel maintenance to completely inert hazardous gases and oxygen.',
    bullet1: '폭발 및 산화 위험 원천 제거',
    bullet2: '대용량 펌프/기화기 지원',
    details: {
      description: '석유화학 플랜트 대정비(TA), 조선소 선박 시운전, 가스 배관 개보수 시 폭발 위험을 예방하기 위해 대용량 초저온 질소 탱크로리와 전용 가온 기화기를 투입하여 내부 산소 농도를 1% 이하로 안전하게 치환합니다.',
      targetIndustries: ['정유·석유화학 플랜트 대정비(Turn Around)', '조선해양 LNG/암모니아 운반선 시운전', '도시가스 및 산업 배관 연결 공사', '저장탱크 내부 진입 전 안전 환기'],
      equipment: ['대용량 이동식 온수/스팀 가스 기화기 (최대 5,000Nm³/h)', '초저온 액화질소 전용 탱크로리 (15~25톤)', '방폭형 산소/가연성 복합 측정기', '자동 배압 벤트 밸브 스키드'],
      certifications: ['KOSHA PSM(공정안전관리) 승인 기준 시공', '고압가스 이동식 설비 검사 필증 보유', '전문 안전작업허가(PTW) 매뉴얼 완비'],
      workflow: [
        '1단계: 배관/탱크 용적 계산 및 치환 질소 소요량 산출',
        '2단계: 기화기 및 공급 라인 임시 결속 후 기밀 압력 테스트',
        '3단계: 단계별 압력 치환(Pressure Purge) 및 스위프 치환(Sweep Purge)',
        '4단계: 배출구 산소 잔류 농도 실시간 측정 및 안전 보증서 교부'
      ]
    }
  },
  {
    id: 'import-export',
    icon: 'hub',
    title: '수출입 솔루션',
    titleEn: 'Global Cross-Border ISO Tank Logistics',
    summary: 'ISO 탱크컨테이너 및 고압 실린더 국제 위험물 운송 규격(IMDG) 준수, 글로벌 해외 10개국 직결 수출입 통관 및 물류.',
    summaryEn: 'Full cross-border hazardous gas forwarding and supply chains adhering to IMDG codes with direct trading channels across 10 global partners.',
    bullet1: 'ISO Tank 해상 운송',
    bullet2: '글로벌 소싱 및 현지 납품',
    details: {
      description: '국제해상위험물규칙(IMDG Code) 및 미국 DOT, 유럽 ADR 인증을 갖춘 ISO 탱크 컨테이너와 특수 실린더를 운영하여 동남아시아, 일본, 중동, 미주 등 글로벌 파트너사와 고순도 가스를 안정적으로 수출입 공급합니다.',
      targetIndustries: ['글로벌 반도체 소재 공급망', '해외 엔지니어링 프로젝트 현장', '다국적 가스 유통 기업', '해외 조선소 및 플랜트 거점'],
      equipment: ['초저온 액화가스 전용 ISO 탱크컨테이너 (T75 규격)', '고압 복합재 튜브트레일러 (DOT/UN 인증)', 'GPS 연동 원격 압력·온도 모니터링 시스템', '항만 전용 환적 밸브 커플링'],
      certifications: ['IMDG Code 국제 위험물 운송 면허', '관세청 AEO(수출입안전관리우수공인업체) 기준 준수', '국제 가스협회(EIGA/CGA) 가이드라인 적용'],
      workflow: [
        '1단계: 수출입 가스 품목별 UN 번호 및 위험물 검사 증명 발급',
        '2단계: ISO Tank 진공도 및 청정도 검사 후 정밀 충전',
        '3단계: 해상 컨테이너 부킹 및 세관 위험물 통관 완료',
        '4단계: 해외 도착지 항만 양하 및 도어투도어(Door-to-Door) 직송'
      ]
    }
  },
  {
    id: 'safety-management',
    icon: 'health_and_safety',
    title: '전문 안전관리',
    titleEn: 'Comprehensive Process Safety & HAZOP Engineering',
    summary: '고압가스안전관리법 및 중대재해처벌법 대비, 사업장별 설비 정기검사, 위험성평가(HAZOP) 및 긴급 누출 복구 훈련.',
    summaryEn: 'Full compliance with high-pressure gas regulations and severe accident prevention laws: regular facility inspections, HAZOP safety studies, and 24/7 leak mitigation.',
    bullet1: '공인 가스안전관리자 파견',
    bullet2: 'MSDS 실시간 현장 비치',
    details: {
      description: '가스설비의 설계부터 인허가 수검, 정기 법정검사 대행, 공정위험성평가(HAZOP) 및 비상대응 매뉴얼 수립까지 기업 고객이 법적 규제에 빈틈없이 대응할 수 있도록 전담 안전 엔지니어가 밀착 자문합니다.',
      targetIndustries: ['대규모 화학 공장 및 정밀 제련소', '산업단지 입주 중소제조업체', '신축 연구동 가스 사용 시설', '암모니아·수소 신에너지 실증 단지'],
      equipment: ['초음파 가스 누출 탐지기 (Acoustic Imaging Camera)', '방폭형 적외선 광학 가스 이미징(OGI) 카메라', '배관 두께 초음파 비파괴 측정기', '정전기 전위 측정기'],
      certifications: ['한국가스안전공사(KGS) 전문시공면허 제1종', '공인 위험물안전관리자 / 가스기술사 상주', '중대재해예방 안전보건경영시스템(ISO 45001)'],
      workflow: [
        '1단계: 고객사 사업장 고압가스 인허가 및 현장 설비 전수 진단',
        '2단계: 잠재 위험요소 도출(HAZOP 워크숍 진행)',
        '3단계: 취약 구간 개선 시공 및 비상 차단 시스템(ESV) 보강',
        '4단계: KGS 정기검사 수검 대행 및 비상대응 훈련 지도'
      ]
    }
  }
];
