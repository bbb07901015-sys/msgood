import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  RotateCcw,
  Sparkles,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

interface ChatbotWidgetProps {
  lang: 'KOR' | 'ENG';
  onRequestQuoteWithTopic?: (topic: string) => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  lang,
  onRequestQuoteWithTopic,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'model',
      text:
        lang === 'KOR'
          ? '반갑습니다! (주)MS가스 공식 AI 기술상담원입니다.\n산업용·특수가스 제품 규격, 순도(99.999%~6N), 질소 치환(Purge) 엔지니어링, 전국 납품 및 견적에 대해 궁금한 점을 편하게 질문해 주세요.'
          : 'Welcome to MS GAS! I am your AI Technical Assistant. Ask me anything about industrial & specialty gases, purity grades (99.999% to 6N), nitrogen purging, MSDS, or quotation procedures.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickQuestions =
    lang === 'KOR'
      ? [
          '질소 치환(Purge) 절차 및 견적 의뢰 방법',
          '반도체용 6N 초고순도 헬륨/수소 규격',
          '병원용 의료가스 식약처 KGMP 공급 방식',
          '초저온 탱크로리 vs LGC 납품 단위 차이',
          'MSDS 및 시험성적서(COA) 발급 안내',
        ]
      : [
          'Nitrogen Purging procedures & RFQ',
          '6N Ultra-Pure Helium & Hydrogen specs',
          'KGMP certified medical gas supply',
          'Bulk tanker vs LGC delivery formats',
          'MSDS & test report issuance guide',
        ];

  const handleSend = async (messageText?: string) => {
    const textToSend = (messageText || input).trim();
    if (!textToSend || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Build history excluding greeting
      const history = messages
        .filter((m) => m.id !== 'welcome-1')
        .map((m) => ({
          role: m.role,
          text: m.text,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history,
        }),
      });

      if (!res.ok) {
        throw new Error('API server returned error');
      }

      const data = await res.json();
      const botReply = data.reply || (lang === 'KOR' ? '응답을 받지 못했습니다.' : 'No response received.');

      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text:
          lang === 'KOR'
            ? '일시적인 네트워크 지연이 발생했습니다. 상세한 가스 규격 및 대량 공급 견적 문의는 대표전화(051-312-3000) 또는 페이지 하단 [온라인 문의] 폼을 이용해 주시기 바랍니다.'
            : 'Temporary network issue. For direct inquiries, please call +82-51-312-3000 or use the Online RFQ form below.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-1',
        role: 'model',
        text:
          lang === 'KOR'
            ? '대화가 초기화되었습니다. 추가로 궁금하신 가스 품목이나 기술 지원 서비스가 있으신가요?'
            : 'Chat reset. How else can we assist your enterprise today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleGoToInquiry = (topic: string) => {
    if (onRequestQuoteWithTopic) {
      onRequestQuoteWithTopic(topic);
    }
    const elem = document.getElementById('inquiry');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside aria-label="MS GAS AI Customer Support Chatbot" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window Panel */}
      {isOpen && (
        <div className="mb-4 w-[360px] sm:w-[420px] max-w-[95vw] h-[580px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#001428] text-white p-4 flex items-center justify-between border-b border-[#1E3A56]">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-lg bg-[#0f2942] flex items-center justify-center text-[#38BDF8]">
                <span className="material-symbols-outlined text-[20px]">mode_heat</span>
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#001428]"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-[14px] font-headline text-white">
                    {lang === 'KOR' ? 'MS가스 AI 기술상담원' : 'MS GAS AI Assistant'}
                  </h3>
                  <span className="px-1.5 py-0.2 rounded bg-[#38BDF8]/20 text-[#38BDF8] text-[9px] font-bold">
                    Gemini 3.8
                  </span>
                </div>
                <p className="text-[11px] text-[#c3c6ce] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{lang === 'KOR' ? '실시간 24/7 전문 가스 상담' : '24/7 Live Gas Consultation'}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title={lang === 'KOR' ? '대화 초기화' : 'Reset Chat'}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title={lang === 'KOR' ? '닫기' : 'Close'}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Quick FAQ / Prompt Chips Bar */}
          <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] p-2.5 overflow-x-auto flex gap-1.5 scrollbar-thin">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={isLoading}
                className="flex-shrink-0 px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0] hover:border-[#00658d] hover:bg-[#edf4ff] text-[11px] text-[#001428] font-medium transition-all whitespace-nowrap cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#f7f9ff]/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-7 h-7 rounded-lg bg-[#001428] text-[#38BDF8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={15} />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed shadow-2xs whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-[#00658d] text-white rounded-br-xs'
                      : 'bg-white text-[#001428] border border-[#E2E8F0] rounded-bl-xs'
                  }`}
                >
                  {msg.text}

                  {msg.role === 'model' && msg.id !== 'welcome-1' && (
                    <div className="mt-2.5 pt-2 border-t border-[#E2E8F0]/80 flex items-center justify-between gap-2">
                      <span className="text-[10px] text-[#74777e]">{msg.timestamp}</span>
                      <button
                        onClick={() => handleGoToInquiry(msg.text.slice(0, 30))}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00658d] hover:underline cursor-pointer"
                      >
                        <span>{lang === 'KOR' ? '견적 문의 작성' : 'Quote this'}</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  )}

                  {msg.role === 'user' && (
                    <div className="text-[10px] text-white/70 text-right mt-1">{msg.timestamp}</div>
                  )}
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-[#d8eafe] text-[#001428] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User size={15} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg bg-[#001428] text-[#38BDF8] flex items-center justify-center flex-shrink-0">
                  <Bot size={15} />
                </div>
                <div className="bg-white border border-[#E2E8F0] rounded-2xl rounded-bl-xs px-4 py-3 text-[13px] text-[#74777e] flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#00658d] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-[#00658d] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-[#00658d] rounded-full animate-bounce"></div>
                  </div>
                  <span>{lang === 'KOR' ? '가스 사양 검토 및 답변 생성 중...' : 'Analyzing specifications...'}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-[#E2E8F0]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  lang === 'KOR'
                    ? '가스 품목, 순도, 질소 치환, 견적 문의...'
                    : 'Ask about gas specs, nitrogen purging...'
                }
                disabled={isLoading}
                className="flex-1 px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[13px] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={`p-2.5 rounded-xl transition-all flex items-center justify-center ${
                  input.trim() && !isLoading
                    ? 'bg-[#001428] hover:bg-[#00658d] text-white shadow-xs cursor-pointer'
                    : 'bg-[#E2E8F0] text-gray-400 cursor-not-allowed'
                }`}
                title={lang === 'KOR' ? '전송' : 'Send'}
              >
                <Send size={16} />
              </button>
            </form>
            <div className="flex items-center justify-between mt-2 text-[10px] text-[#74777e] px-1">
              <span>(주)MS가스 기술지원센터</span>
              <span className="flex items-center gap-1 text-[#00658d]">
                <ShieldCheck size={12} />
                <span>안전 및 공인 성적서 연동</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-[#001428] hover:bg-[#00658d] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center border-2 border-[#38BDF8]/40 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
        aria-label="Toggle MS GAS Chatbot"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#38BDF8]"></span>
        </span>

        {isOpen ? (
          <ChevronDown size={24} className="text-[#38BDF8]" />
        ) : (
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#38BDF8]">mode_heat</span>
            <span className="hidden sm:inline-block text-[13px] font-bold pr-1">
              {lang === 'KOR' ? 'AI 가스 상담' : 'AI Support'}
            </span>
          </div>
        )}
      </button>
    </aside>
  );
};
