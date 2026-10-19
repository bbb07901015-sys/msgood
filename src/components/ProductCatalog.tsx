import React, { useState } from 'react';
import { GAS_PRODUCTS, GasProduct } from '../data/gasData';

interface ProductCatalogProps {
  lang: 'KOR' | 'ENG';
  onSelectProduct: (product: GasProduct) => void;
  onRequestQuote: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  lang,
  onSelectProduct,
  onRequestQuote
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'industrial' | 'specialty' | 'medical'>('all');

  const filterTabs = [
    { id: 'all', label: lang === 'KOR' ? '전체 라인업' : 'All Catalog' },
    { id: 'industrial', label: lang === 'KOR' ? '산업용' : 'Industrial & Fuel' },
    { id: 'specialty', label: lang === 'KOR' ? '특수·반도체용' : 'Specialty & Semiconductor' },
    { id: 'medical', label: lang === 'KOR' ? '의료·표준' : 'Medical & Standard' },
  ];

  const filteredProducts = GAS_PRODUCTS.filter((product) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'industrial') return product.category === 'industrial' || product.category === 'fuel' || product.category === 'equipment';
    if (activeTab === 'specialty') return product.category === 'specialty';
    if (activeTab === 'medical') return product.category === 'medical' || product.category === 'standard';
    return true;
  });

  return (
    <section className="py-20 lg:py-24 technical-grid-pattern relative" id="products">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#00658d] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00658d]"></span>
              <span className="text-[12px] uppercase tracking-wider">
                Comprehensive Gas Catalog
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#0B1926] tracking-tight font-headline">
              {lang === 'KOR'
                ? '다양한 산업분야를 아우르는 고부가가치형 가스산업'
                : 'High-Value Gas Innovations Powering Diverse Core Industries'}
            </h2>
            <p className="text-[15px] text-[#43474d] mt-2 max-w-2xl">
              {lang === 'KOR'
                ? '반도체, 조선, 화학 플랜트, 의료기관 등 국가 핵심 산업 현장에 최적화된 고순도 및 다성분 혼합가스 라인업을 제공합니다.'
                : 'Supplying optimized ultra-pure single and multi-component specialty gas formulations across semiconductor fabrication, maritime shipbuilding, chemical plants, and hospitals.'}
            </p>
          </div>

          {/* Navigation Pill Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded text-[13px] font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#001428] text-[#FFFFFF] shadow-xs'
                    : 'bg-[#FFFFFF] border border-[#E2E8F0] text-[#43474d] hover:text-[#001428] hover:border-[#00658d]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#00658d] transition-all duration-300 rounded-xl overflow-hidden shadow-xs hover:shadow-lg flex flex-col justify-between cursor-pointer"
            >
              {/* Product Card Image Container */}
              <div className="relative h-56 overflow-hidden bg-[#F8FAFC]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={product.imageAlt}
                  src={product.imageUrl}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0A1B2A]/90 text-[#FFFFFF] text-[11px] rounded font-semibold backdrop-blur-xs tracking-wider">
                    {product.categoryTag}
                  </span>
                </div>
              </div>

              {/* Product Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[20px] font-bold text-[#001428] group-hover:text-[#00658d] transition-colors font-headline">
                      {lang === 'KOR' ? product.title : product.titleEn}
                    </h3>
                    <span
                      className={`text-[12px] font-bold px-2 py-0.5 rounded ${
                        product.badgeType === 'cyan'
                          ? 'text-[#38BDF8] bg-[#0A1B2A]'
                          : 'text-[#00658d]'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#43474d] leading-relaxed mb-4">
                    {lang === 'KOR' ? product.description : product.descriptionEn}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded bg-[#F8FAFC] text-[11px] text-[#43474d] border border-[#E2E8F0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="text-[13px] font-bold text-[#001428] group-hover:text-[#00658d] flex items-center gap-1 cursor-pointer"
                  >
                    <span>{lang === 'KOR' ? product.footerActionText : 'Technical Specs & MSDS'}</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </button>
                  <span className="text-[11px] text-[#74777e]">{product.footerNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Button Anchor */}
        <div className="mt-12 flex justify-center">
          <a
            href="#inquiry"
            onClick={onRequestQuote}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#0f2942] text-[#FFFFFF] rounded-lg font-bold text-[14px] hover:bg-[#00658d] transition-colors duration-200 shadow-sm"
          >
            <span>
              {lang === 'KOR'
                ? '맞춤형 가스 배합 및 견적 의뢰하기'
                : 'Request Custom Gas Blend & Quotation'}
            </span>
            <span className="material-symbols-outlined text-[20px]">send</span>
          </a>
        </div>
      </div>
    </section>
  );
};
