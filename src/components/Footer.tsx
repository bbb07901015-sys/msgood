import React from 'react';

interface FooterProps {
  lang: 'KOR' | 'ENG';
  onOpenLocations: () => void;
  onOpenCompany: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenLocations,
  onOpenCompany,
  onOpenCalculator
}) => {
  return (
    <footer className="w-full pt-16 pb-12 bg-[#0A1B2A] text-[#FFFFFF] border-t border-[#1E3A56]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Upper Section: Brand + Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8]">
                <span className="material-symbols-outlined text-[20px]">mode_heat</span>
              </div>
              <span className="text-[24px] font-bold text-[#FFFFFF] tracking-tight font-headline">
                MS GAS
              </span>
            </div>
            <p className="text-[13px] text-[#c3c6ce] mt-2 max-w-md leading-relaxed">
              {lang === 'KOR'
                ? '1974년 창립 이래 신뢰와 안전을 바탕으로 대한민국 고압가스 및 에너지 유통의 표준을 만들어가는 글로벌 가스 솔루션 기업입니다.'
                : 'Since 1974, setting standards in industrial gas supply and clean cryogenic logistics across South Korea with zero-debt reliability.'}
            </p>
          </div>

          {/* Secondary Direct Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] font-semibold">
            <button
              onClick={onOpenCompany}
              className="text-[#c3c6ce] hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              {lang === 'KOR' ? '개인정보처리방침' : 'Privacy Policy'}
            </button>
            <span className="text-[#1E3A56]">•</span>
            <button
              onClick={onOpenCompany}
              className="text-[#c3c6ce] hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              {lang === 'KOR' ? '이용약관' : 'Terms of Use'}
            </button>
            <span className="text-[#1E3A56]">•</span>
            <button
              onClick={onOpenLocations}
              className="text-[#c3c6ce] hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              {lang === 'KOR' ? '오시는 길' : 'Locations'}
            </button>
            <span className="text-[#1E3A56]">•</span>
            <a
              href="#inquiry"
              className="text-[#38BDF8] hover:text-[#FFFFFF] transition-colors"
            >
              {lang === 'KOR' ? '온라인 문의' : 'Online RFQ'}
            </a>
            <span className="text-[#1E3A56]">•</span>
            <button
              onClick={onOpenCompany}
              className="text-[#c3c6ce] hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              {lang === 'KOR' ? '인재채용' : 'Careers'}
            </button>
            <span className="text-[#1E3A56]">•</span>
            <a
              href="#products"
              className="text-[#c3c6ce] hover:text-[#38BDF8] transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">download</span>
              <span>{lang === 'KOR' ? 'MSDS 다운로드' : 'MSDS Portal'}</span>
            </a>
          </div>
        </div>

        {/* Lower Section: Regulatory and Legal Corporate Strings */}
        <div className="border-t border-[#1E3A56] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-[#c3c6ce]">
          <div>
            <p>
              Copyright © 2025 (주)MS가스 All rights reserved. 본사: 부산광역시 사상구 학감대로 | 사업자등록번호: 606-81-06180 | 대표전화: 051-312-3000
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[#c3c6ce]">
            <span className="px-2 py-0.5 rounded bg-[#1E3A56]/60 border border-[#1E3A56]">KOLAS 공인시험기관</span>
            <span className="px-2 py-0.5 rounded bg-[#1E3A56]/60 border border-[#1E3A56]">ISO 9001 / 14001 인증</span>
            <span className="px-2 py-0.5 rounded bg-[#1E3A56]/60 border border-[#1E3A56]">KGMP 의약품 제조시설</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
