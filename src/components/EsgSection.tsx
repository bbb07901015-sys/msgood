import React, { useState } from 'react';
import { FileText, ArrowRight, X, ExternalLink, Award, CheckCircle } from 'lucide-react';

interface EsgSectionProps {
  lang: 'KOR' | 'ENG';
  onOpenNoticeAward?: () => void;
}

export const EsgSection: React.FC<EsgSectionProps> = ({ lang, onOpenNoticeAward }) => {
  const [esgModalOpen, setEsgModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-24 bg-[#0A1B2A] text-[#FFFFFF] relative overflow-hidden" id="esg">
      {/* Atmospheric Glow */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-[#38BDF8]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-[#00658d]/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30 w-fit text-[11px] font-bold">
              <span className="material-symbols-outlined text-[16px]">eco</span>
              <span>NEXT-GEN CLEAN ENERGY R&amp;D</span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#FFFFFF] tracking-tight leading-snug font-headline">
              {lang === 'KOR' ? (
                <>
                  탄소중립을 선도하는
                  <br />
                  <span className="text-[#38BDF8]">친환경 암모니아·수소 벙커링 인프라</span>
                </>
              ) : (
                <>
                  Pioneering Carbon Neutrality
                  <br />
                  <span className="text-[#38BDF8]">Green Ammonia &amp; Hydrogen Bunkering</span>
                </>
              )}
            </h2>

            <p className="text-[15px] text-[#d8eafe]/90 leading-relaxed">
              {lang === 'KOR'
                ? '(주)MS가스는 국가 규제자유특구 실증 사업자로 선정되어, 무탄소 선박 연료로 주목받는 암모니아의 TTS(Truck-to-Ship) 벙커링 인프라 구축과 위험성평가(HAZOP), 안전표준 수립을 총괄하며 미래 친환경 에너지 시장을 선점하고 있습니다.'
                : '(주)MS GAS has been designated as an official regulatory sandbox operator in Ulsan, establishing Truck-to-Ship (TTS) zero-carbon ammonia bunkering terminals, quantitative HAZOP risk assessments, and national safety guidelines.'}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1E3A56]">
              <div>
                <span className="text-[11px] text-[#c3c6ce] uppercase">E (환경)</span>
                <p className="text-[18px] font-bold text-[#FFFFFF] mt-1 font-headline">
                  {lang === 'KOR' ? '도지사 표창' : 'Governor Award'}
                </p>
                <span className="text-[11px] text-[#c3c6ce]">
                  {lang === 'KOR' ? '탄소중립 성과확산' : 'Carbon Reduction'}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-[#c3c6ce] uppercase">S (사회/안전)</span>
                <p className="text-[18px] font-bold text-[#38BDF8] mt-1 font-headline">
                  {lang === 'KOR' ? '은탑산업훈장' : 'Silver Tower'}
                </p>
                <span className="text-[11px] text-[#c3c6ce]">
                  {lang === 'KOR' ? '대표이사 수훈' : 'Presidential Order'}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-[#c3c6ce] uppercase">G (지배구조)</span>
                <p className="text-[18px] font-bold text-[#FFFFFF] mt-1 font-headline">1974~</p>
                <span className="text-[11px] text-[#c3c6ce]">
                  {lang === 'KOR' ? '50년 무차입 신뢰' : '50Y Debt-Free'}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setEsgModalOpen(true)}
                className="inline-flex items-center gap-2 text-[#38BDF8] font-bold text-[14px] hover:text-[#FFFFFF] transition-colors group cursor-pointer"
              >
                <span>
                  {lang === 'KOR'
                    ? 'MS가스 지속가능경영(ESG) 보고서 열람하기'
                    : 'View MS GAS Sustainability (ESG) Report'}
                </span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Right Visual Showcase Bento */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0f2942]/60 border border-[#1E3A56] rounded-xl p-5 hover:border-[#38BDF8]/50 transition-colors">
              <img
                className="w-full h-44 object-cover rounded-lg mb-4"
                alt="Maritime green ammonia bunkering trucks transferring liquid fuel to an eco-friendly marine vessel in port"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmEtFnu_i6Pco1UVr8aBQCJ-VVupoa6B3U81L-E30R_fKjv6G6s9_NErcdSKq_N1EFkouT4_Zscb8iG0eYGibDe4IfEfSTktzFrdPVpzNBoiPSL9aJl56rDRpRv6AVekjIUn6r-H1gGtTBIIIKn8LYJ6Gk9xo2KCqV4IbwXLd8eRiIuk09dp11dn-lh53aSfui3nD4lfIKPQhE0b4_Az-mXuEYtFX9mMvbm4OL-QP9vcuF8t9GZraQ"
              />
              <span className="text-[11px] text-[#38BDF8] font-bold">국가 실증 R&amp;D 프로젝트</span>
              <h4 className="text-[18px] font-bold text-[#FFFFFF] mt-1 font-headline">
                {lang === 'KOR' ? '울산 규제자유특구 암모니아 실증' : 'Ulsan Ammonia Bunkering Pilot'}
              </h4>
              <p className="text-[13px] text-[#c3c6ce] mt-1.5">
                {lang === 'KOR'
                  ? '탱크로리를 활용한 친환경 암모니아 벙커링 표준 절차 개발 및 3자 안전진단'
                  : 'TTS mobile bunkering protocol & certified 3rd party hazard safety engineering'}
              </p>
            </div>

            <div className="bg-[#0f2942]/60 border border-[#1E3A56] rounded-xl p-5 hover:border-[#38BDF8]/50 transition-colors flex flex-col justify-between">
              <div>
                <img
                  className="w-full h-44 object-cover rounded-lg mb-4"
                  alt="Precision testing laboratory for cryogenic gas cylinders and safety test benches"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQuGmW7oZbJMTT-TYbWNRdsPnyJLYsZgznlbIV80jfTsPoHCDngNhl3h9rxMPf6_hWSbqr8xcBUwGgdV_GT5Mb_MkUkHk5B_y6UfexlYftqY2vMyASsCYxNpcaJFd6C6NQMmDFszYRihT8bs8TaoP4cooBJxNMjXTyHVvwssMK6ZQIq4ZlS9k7P_dqoGpSTayYns0teyLi79hfS5Dq7ATTWKyzMz-jxlvcF5Di9eCLPXBPviM95F3L"
                />
                <span className="text-[11px] text-[#41befd] font-bold">탄소저감 선도</span>
                <h4 className="text-[18px] font-bold text-[#FFFFFF] mt-1 font-headline">
                  {lang === 'KOR' ? '충남 중소기업 탄소중립 표창' : 'Chungnam Carbon Neutral Commendation'}
                </h4>
                <p className="text-[13px] text-[#c3c6ce] mt-1.5">
                  {lang === 'KOR'
                    ? '제조 및 유통 공정 전반의 탄소 배출 저감 기술 도입 유공 표창 수상'
                    : 'Commended for energy-efficient vaporizers and supply-chain greenhouse emission reduction'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1E3A56]/80">
                <button
                  type="button"
                  onClick={onOpenNoticeAward}
                  className="text-[11px] text-[#38BDF8] flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>{lang === 'KOR' ? '관련 보도자료 보기' : 'Read Official Press Release'}</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ESG Modal */}
      {esgModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs text-[#001428]">
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#001428] text-[#38BDF8] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">eco</span>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#001428] font-headline">
                    {lang === 'KOR' ? 'MS가스 지속가능경영(ESG) 핵심 요약' : 'MS GAS ESG Sustainability Report'}
                  </h3>
                  <span className="text-[12px] text-[#00658d] font-semibold">Vision 2030 Clean Energy</span>
                </div>
              </div>
              <button
                onClick={() => setEsgModalOpen(false)}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 text-[13px] text-[#43474d] leading-relaxed">
              <div className="p-4 bg-[#edf4ff]/50 rounded-xl border border-[#c6e7ff]">
                <h4 className="font-bold text-[#001428] text-[14px] mb-1 flex items-center gap-2">
                  <Award size={16} className="text-[#00658d]" />
                  <span>Environment (환경)</span>
                </h4>
                <p>
                  - 무탄소 친환경 대체연료 실증: 울산 규제자유특구 암모니아 TTS 벙커링 인프라 구축 주관<br />
                  - 대기식 기화기 열효율 28% 개선 및 유통 수송 차량의 친환경 LNG/전기 트럭 순차 전환<br />
                  - 배출가스 ZERO 표준가스 제조설비 도입을 통한 공정 내 탄소 배출 저감
                </p>
              </div>

              <div className="p-4 bg-[#edf4ff]/50 rounded-xl border border-[#c6e7ff]">
                <h4 className="font-bold text-[#001428] text-[14px] mb-1 flex items-center gap-2">
                  <Award size={16} className="text-[#00658d]" />
                  <span>Social (안전과 사회)</span>
                </h4>
                <p>
                  - 50년 연속 사업장 무재해 유지 및 24시간 원격 긴급 안전 관제센터(TOC) 운영<br />
                  - 전 직원 안전 자격증 취득 지원 및 가스안전공사 합동 긴급 복구 훈련 연 4회 실시<br />
                  - 지역 공업계 고교 및 대학과의 산학협력을 통한 청년 엔지니어 양성
                </p>
              </div>

              <div className="p-4 bg-[#edf4ff]/50 rounded-xl border border-[#c6e7ff]">
                <h4 className="font-bold text-[#001428] text-[14px] mb-1 flex items-center gap-2">
                  <Award size={16} className="text-[#00658d]" />
                  <span>Governance (투명 경영)</span>
                </h4>
                <p>
                  - 1974년 창립 이래 50년간 건실한 무차입 경영 원칙 고수<br />
                  - 외부 감사인에 의한 투명한 회계 공시 및 윤리경영 강령 실천<br />
                  - 중대재해처벌법 및 ISO 45001 안전보건경영시스템 준수
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setEsgModalOpen(false)}
                className="px-5 py-2.5 bg-[#001428] text-white rounded-lg text-[13px] font-semibold hover:bg-[#00658d]"
              >
                {lang === 'KOR' ? '닫기' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
