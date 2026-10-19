import React from 'react';

interface MetricsRibbonProps {
  lang: 'KOR' | 'ENG';
  onOpenLocations: () => void;
}

export const MetricsRibbon: React.FC<MetricsRibbonProps> = ({ lang, onOpenLocations }) => {
  return (
    <section className="relative bg-[#FFFFFF] border-b border-[#E2E8F0] py-10 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[12px] tracking-widest uppercase font-bold text-[#00658d]">
              Operational Scale
            </span>
            <h2 className="text-[24px] sm:text-[28px] font-bold text-[#0B1926] mt-1 font-headline">
              {lang === 'KOR'
                ? '전국적인 네트워크를 통한 유기적인 가스 공급망'
                : 'Strategic Nationwide Network & Integrated Distribution Grid'}
            </h2>
          </div>
          <p className="text-[13px] text-[#74777e]">
            {lang === 'KOR'
              ? '* 2024년 회계연도 기준 및 공시 데이터 요약'
              : '* Based on FY2024 audited corporate disclosure'}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#E2E8F0] rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden">
          {/* Metric 1: Regions */}
          <div
            onClick={onOpenLocations}
            className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FFFFFF] transition-colors group cursor-pointer"
          >
            <div className="flex items-center justify-between text-[#74777e] mb-2">
              <span className="text-[12px] font-semibold tracking-wider">REGIONAL HUBS</span>
              <span className="material-symbols-outlined text-[#74777e] group-hover:text-[#00658d] transition-colors">
                domain
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 my-2">
              <span className="text-[40px] sm:text-[48px] font-bold text-[#001428] tracking-tight font-display">
                8
              </span>
              <span className="text-[18px] text-[#00658d] font-bold">
                {lang === 'KOR' ? '개 권역' : 'Hubs'}
              </span>
            </div>
            <p className="text-[12px] text-[#74777e] leading-snug">
              {lang === 'KOR'
                ? '수도권·영남·충청·호남을 연결하는 8대 전략적 생산·저장 거점'
                : 'Strategic production and cryogenic bulk storage hubs connecting major regions'}
            </p>
          </div>

          {/* Metric 2: Branches */}
          <div
            onClick={onOpenLocations}
            className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FFFFFF] transition-colors group cursor-pointer"
          >
            <div className="flex items-center justify-between text-[#74777e] mb-2">
              <span className="text-[12px] font-semibold tracking-wider">BRANCH NETWORK</span>
              <span className="material-symbols-outlined text-[#74777e] group-hover:text-[#00658d] transition-colors">
                share_location
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 my-2">
              <span className="text-[40px] sm:text-[48px] font-bold text-[#001428] tracking-tight font-display">
                17
              </span>
              <span className="text-[18px] text-[#00658d] font-bold">
                {lang === 'KOR' ? '개 영업소' : 'Branches'}
              </span>
            </div>
            <p className="text-[12px] text-[#74777e] leading-snug">
              {lang === 'KOR'
                ? '신속한 근접 출하와 1시간 이내 긴급 대응 시스템 체계화'
                : 'Rapid localized deliveries and guaranteed within-1-hour emergency support'}
            </p>
          </div>

          {/* Metric 3: Global Links */}
          <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FFFFFF] transition-colors group">
            <div className="flex items-center justify-between text-[#74777e] mb-2">
              <span className="text-[12px] font-semibold tracking-wider">GLOBAL EXPORTS</span>
              <span className="material-symbols-outlined text-[#74777e] group-hover:text-[#00658d] transition-colors">
                public
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 my-2">
              <span className="text-[40px] sm:text-[48px] font-bold text-[#001428] tracking-tight font-display">
                10
              </span>
              <span className="text-[18px] text-[#00658d] font-bold">
                {lang === 'KOR' ? '개국 파트너십' : 'Nations'}
              </span>
            </div>
            <p className="text-[12px] text-[#74777e] leading-snug">
              {lang === 'KOR'
                ? '특수가스 및 초정밀 표준가스 동남아 및 미주 해외 직수출'
                : 'Direct export channels for specialty gases and calibration standards'}
            </p>
          </div>

          {/* Metric 4: Annual Revenue */}
          <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FFFFFF] transition-colors group">
            <div className="flex items-center justify-between text-[#74777e] mb-2">
              <span className="text-[12px] font-semibold tracking-wider">ANNUAL REVENUE</span>
              <span className="material-symbols-outlined text-[#74777e] group-hover:text-[#00658d] transition-colors">
                payments
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 my-2">
              <span className="text-[40px] sm:text-[48px] font-bold text-[#001428] tracking-tight font-display">
                935
              </span>
              <span className="text-[18px] text-[#00658d] font-bold">
                {lang === 'KOR' ? '억 원' : 'B KRW'}
              </span>
            </div>
            <p className="text-[12px] text-[#74777e] leading-snug">
              {lang === 'KOR'
                ? '2024 GAAP 기준 연간 매출 / 건실한 무차입 재무 건전성 보유'
                : '2024 GAAP annual sales with robust zero-debt balance sheet reliability'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
