import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

interface TopNavBarProps {
  lang: 'KOR' | 'ENG';
  setLang: (lang: 'KOR' | 'ENG') => void;
  onOpenCompany: () => void;
  onOpenLocations: () => void;
  onOpenCalculator: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  lang,
  setLang,
  onOpenCompany,
  onOpenLocations,
  onOpenCalculator
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: lang === 'KOR' ? '회사소개' : 'About Us', href: '#company', onClick: onOpenCompany },
    { label: lang === 'KOR' ? '제품소개' : 'Products', href: '#products' },
    { label: lang === 'KOR' ? '서비스' : 'Services', href: '#services' },
    { label: lang === 'KOR' ? '생산설비' : 'Facilities', href: '#facilities', onClick: onOpenLocations },
    { label: lang === 'KOR' ? 'ESG' : 'ESG & Clean Energy', href: '#esg' },
    { label: lang === 'KOR' ? '고객지원' : 'Support', href: '#support' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { href: string; onClick?: () => void }) => {
    if (item.onClick) {
      e.preventDefault();
      item.onClick();
      setMobileMenuOpen(false);
      return;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
      <div className="max-w-[1440px] mx-auto h-20 px-6 lg:px-12 flex items-center justify-between">
        {/* Logo Unit */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#38BDF8]">
          <div className="w-10 h-10 rounded-lg bg-[#0f2942] flex items-center justify-center text-[#38BDF8] shadow-inner group-hover:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[#38BDF8] text-[24px]">mode_heat</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[22px] font-bold tracking-tight text-[#001428] font-headline">MS GAS</span>
            <span className="text-[11px] text-[#74777e] -mt-1 tracking-widest font-semibold uppercase">Clean Energy &amp; Gases</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-[14px] font-semibold transition-colors py-2 ${
                item.href === '#products'
                  ? 'text-[#00658d] font-bold border-b-2 border-[#00658d] pb-1'
                  : 'text-[#43474d] hover:text-[#00658d]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onOpenCalculator}
            className="text-[13px] font-semibold text-[#00658d] hover:text-[#001428] flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#edf4ff] border border-[#c6e7ff] transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">calculate</span>
            <span>{lang === 'KOR' ? '가스 단위 계산기' : 'Gas Calculator'}</span>
          </button>
        </nav>

        {/* Trailing Controls: Language Switcher & Primary Action */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="hidden sm:inline-flex items-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-0.5 text-[11px] font-medium">
            <button
              onClick={() => setLang('KOR')}
              className={`px-2.5 py-1 rounded transition-colors ${
                lang === 'KOR'
                  ? 'bg-[#FFFFFF] text-[#001428] font-bold shadow-xs'
                  : 'text-[#74777e] hover:text-[#001428]'
              }`}
            >
              KOR
            </button>
            <span className="text-[#c3c6ce] px-1">|</span>
            <button
              onClick={() => setLang('ENG')}
              className={`px-2.5 py-1 rounded transition-colors ${
                lang === 'ENG'
                  ? 'bg-[#FFFFFF] text-[#001428] font-bold shadow-xs'
                  : 'text-[#74777e] hover:text-[#001428]'
              }`}
            >
              ENG
            </button>
          </div>

          {/* Trailing Primary Action */}
          <a
            href="#inquiry"
            className="inline-flex items-center gap-2 bg-[#0f2942] text-[#FFFFFF] hover:bg-[#00658d] px-5 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-150 active:scale-95 shadow-xs"
          >
            <span>{lang === 'KOR' ? '온라인 문의' : 'Online RFQ'}</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#001428] hover:bg-[#edf4ff]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-6 py-4 space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-[#E2E8F0]">
            <span className="text-[12px] font-bold text-[#74777e] uppercase">Language</span>
            <div className="inline-flex items-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-0.5 text-[11px]">
              <button
                onClick={() => setLang('KOR')}
                className={`px-3 py-1 rounded ${lang === 'KOR' ? 'bg-white font-bold text-[#001428]' : 'text-gray-500'}`}
              >
                KOR
              </button>
              <button
                onClick={() => setLang('ENG')}
                className={`px-3 py-1 rounded ${lang === 'ENG' ? 'bg-white font-bold text-[#001428]' : 'text-gray-500'}`}
              >
                ENG
              </button>
            </div>
          </div>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className="block text-[15px] font-semibold text-[#001428] hover:text-[#00658d] py-1.5"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCalculator();
            }}
            className="w-full text-left text-[14px] font-semibold text-[#00658d] py-2 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">calculate</span>
            <span>{lang === 'KOR' ? '가스 단위 계산기' : 'Gas Unit Calculator'}</span>
          </button>
        </div>
      )}
    </header>
  );
};
