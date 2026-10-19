import React from 'react';

interface HeroSectionProps {
  lang: 'KOR' | 'ENG';
  onOpenCompany: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onOpenCompany }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A1B2A] text-[#FFFFFF]">
      {/* Background Image with Clean Industrial Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-35 object-center"
          alt="Heavy industrial liquefied gas transport tank trucks and cryogenic trailers lined up precisely at modern Korean chemical distribution center"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuChdX-z_7LQP21ccBuwPiKlbVOj9tLyoL7mCeRQG_8PG-wtRj1w2YGWh_aC18n9m7VTDu2xGX5KcxajHGDGnV8mKllVGgmfsfPrM428Pr4_EvGuX_bYrVSc5h2afBCZcwecq2J0vH2XTJeViB3sWBijRPO4pM2q5Q6_aE3EtCe_qluFPQpFeknf-R0deG2eQRo_ug9EsdHlNgeisNmSMLuZ74AXcfEWZ_Y_FDuZU8-155vDTcydlxss"
        />
        <div className="absolute inset-0 custom-gradient-overlay"></div>
        <div className="absolute inset-0 dark-grid-pattern opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-16">
        <div className="max-w-4xl flex flex-col gap-6">
          {/* Live Infrastructure Chip */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#1E3A56]/80 border border-[#38BDF8]/30 w-fit backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#38BDF8]">
              {lang === 'KOR'
                ? '24/7 전국 통합 가스 공급망 실시간 가동 중'
                : '24/7 NATIONWIDE INTEGRATED GAS GRID ACTIVE'}
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-[36px] sm:text-[46px] lg:text-[56px] font-bold text-[#FFFFFF] tracking-tight leading-[1.15] font-display">
            {lang === 'KOR' ? (
              <>
                가스 설계부터 공급, 유지까지
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#c6e7ff]">
                  전 공정을 아우르는 원스톱 토탈 솔루션
                </span>
              </>
            ) : (
              <>
                From Gas Design to Supply &amp; Maintenance
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#c6e7ff]">
                  One-Stop Total Cryogenic &amp; Clean Energy Solutions
                </span>
              </>
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-[16px] sm:text-[18px] text-[#d8eafe]/90 max-w-2xl leading-relaxed">
            {lang === 'KOR'
              ? '1974년 설립 이래 대한민국 산업과 일상의 에너지를 든든하게 지켜온 고부가가치형 가스 전문 선도 기업. 전국을 아우르는 고도화된 운송 인프라와 첨단 분석 체계로 완벽한 안전을 실현합니다.'
              : 'Established in 1974, MS GAS has powered Korean industrial growth as a premier high-value gas and clean energy pioneer. We deliver uncompromised safety through nationwide logistics and certified precision analysis.'}
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2.5 bg-[#38BDF8] text-[#001428] font-bold px-7 py-3.5 rounded-lg text-[14px] hover:bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#38BDF8]/20 transition-all duration-200"
            >
              <span>{lang === 'KOR' ? '제품 라인업 둘러보기' : 'Explore Catalog'}</span>
              <span className="material-symbols-outlined text-[20px]">grid_view</span>
            </a>
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2.5 bg-[#1E3A56]/70 hover:bg-[#1E3A56] text-[#FFFFFF] border border-[#E2E8F0]/30 px-7 py-3.5 rounded-lg text-[14px] font-semibold transition-all duration-200"
            >
              <span>{lang === 'KOR' ? '공급 및 견적 문의' : 'Request Quotation'}</span>
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
            </a>
            <button
              onClick={onOpenCompany}
              className="inline-flex items-center gap-2 text-[#c3c6ce] hover:text-[#38BDF8] px-4 py-3.5 text-[14px] font-semibold transition-colors group"
            >
              <span>{lang === 'KOR' ? 'MS가스 회사소개' : 'About MS GAS'}</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </button>
          </div>
        </div>

        {/* Quick Operational Indicator Strip */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-[#1E3A56]">
          <div className="flex items-center gap-4 bg-[#0f2942]/40 border border-[#1E3A56] p-4 rounded-lg">
            <div className="p-2.5 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
              <span className="material-symbols-outlined text-[24px]">local_shipping</span>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-[#FFFFFF]">
                {lang === 'KOR' ? '전국 직영 운송 인프라' : 'Nationwide Direct Logistics'}
              </h4>
              <p className="text-[12px] text-[#c3c6ce]">
                {lang === 'KOR' ? '초저온 탱크로리 및 전용 튜브트레일러 항시 가동' : 'Cryogenic tankers & tube trailers 24/7'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#0f2942]/40 border border-[#1E3A56] p-4 rounded-lg">
            <div className="p-2.5 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-[#FFFFFF]">
                {lang === 'KOR' ? '엄격한 품질 및 순도 관리' : 'Certified Purity Control'}
              </h4>
              <p className="text-[12px] text-[#c3c6ce]">
                {lang === 'KOR' ? '초정밀 GC 정밀 분석실 운영 (99.999% 이상)' : 'Operating precision GC lab (99.999%+ purity)'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#0f2942]/40 border border-[#1E3A56] p-4 rounded-lg">
            <div className="p-2.5 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
              <span className="material-symbols-outlined text-[24px]">security</span>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-[#FFFFFF]">
                {lang === 'KOR' ? '24/7 긴급 안전관제' : '24/7 Real-Time Safety Control'}
              </h4>
              <p className="text-[12px] text-[#c3c6ce]">
                {lang === 'KOR' ? '원격 잔량 감지 및 가스누출 사전차단 시스템' : 'Telemetry monitoring & auto shut-off safety skids'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
