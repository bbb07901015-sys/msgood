import React from 'react';

interface QuickAccessBentoProps {
  lang: 'KOR' | 'ENG';
  onOpenCompany: () => void;
  onOpenLocations: () => void;
}

export const QuickAccessBento: React.FC<QuickAccessBentoProps> = ({
  lang,
  onOpenCompany,
  onOpenLocations
}) => {
  return (
    <section className="py-10 lg:py-12 bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Quick Card 1: 회사소개 */}
          <button
            type="button"
            onClick={onOpenCompany}
            className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#d8eafe]/60 hover:border-[#00658d] transition-all flex items-center justify-between group cursor-pointer text-left w-full"
          >
            <div>
              <span className="text-[11px] text-[#00658d] font-bold uppercase">About MS GAS</span>
              <h4 className="text-[18px] font-bold text-[#001428] mt-1 font-headline">
                {lang === 'KOR' ? '회사소개' : 'Company Overview'}
              </h4>
              <p className="text-[12px] text-[#74777e] mt-1">
                {lang === 'KOR' ? 'MS가스에 대해 소개합니다' : 'Learn about our heritage since 1974'}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] flex items-center justify-center text-[#001428] group-hover:bg-[#001428] group-hover:text-[#38BDF8] transition-colors flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
            </div>
          </button>

          {/* Quick Card 2: 온라인 문의 */}
          <a
            href="#inquiry"
            className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#d8eafe]/60 hover:border-[#00658d] transition-all flex items-center justify-between group cursor-pointer text-left"
          >
            <div>
              <span className="text-[11px] text-[#00658d] font-bold uppercase">Online Support</span>
              <h4 className="text-[18px] font-bold text-[#001428] mt-1 font-headline">
                {lang === 'KOR' ? '온라인 문의' : 'Online RFQ'}
              </h4>
              <p className="text-[12px] text-[#74777e] mt-1">
                {lang === 'KOR' ? '온라인을 통해 신속한 상담 가능' : 'Rapid quotation & tech consultation'}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] flex items-center justify-center text-[#001428] group-hover:bg-[#001428] group-hover:text-[#38BDF8] transition-colors flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">contact_support</span>
            </div>
          </a>

          {/* Quick Card 3: 새로운 소식 */}
          <a
            href="#support"
            className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#d8eafe]/60 hover:border-[#00658d] transition-all flex items-center justify-between group cursor-pointer text-left"
          >
            <div>
              <span className="text-[11px] text-[#00658d] font-bold uppercase">Latest Updates</span>
              <h4 className="text-[18px] font-bold text-[#001428] mt-1 font-headline">
                {lang === 'KOR' ? '새로운 소식' : 'Latest News'}
              </h4>
              <p className="text-[12px] text-[#74777e] mt-1">
                {lang === 'KOR' ? 'MS가스의 최신 공지와 소식' : 'Tenders, regulatory & media updates'}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] flex items-center justify-center text-[#001428] group-hover:bg-[#001428] group-hover:text-[#38BDF8] transition-colors flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">campaign</span>
            </div>
          </a>

          {/* Quick Card 4: 오시는 길 */}
          <button
            type="button"
            onClick={onOpenLocations}
            className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#d8eafe]/60 hover:border-[#00658d] transition-all flex items-center justify-between group cursor-pointer text-left w-full"
          >
            <div>
              <span className="text-[11px] text-[#00658d] font-bold uppercase">Locations</span>
              <h4 className="text-[18px] font-bold text-[#001428] mt-1 font-headline">
                {lang === 'KOR' ? '오시는 길' : 'Our Network'}
              </h4>
              <p className="text-[12px] text-[#74777e] mt-1">
                {lang === 'KOR' ? '지역별 영업지점 및 관계사 안내' : '8 regional hubs & 17 nationwide bases'}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] flex items-center justify-center text-[#001428] group-hover:bg-[#001428] group-hover:text-[#38BDF8] transition-colors flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
