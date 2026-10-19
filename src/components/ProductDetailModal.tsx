import React, { useState } from 'react';
import { X, Download, Send, CheckCircle, ShieldAlert, FileText } from 'lucide-react';
import { GasProduct } from '../data/gasData';

interface ProductDetailModalProps {
  product: GasProduct | null;
  onClose: () => void;
  lang: 'KOR' | 'ENG';
  onSelectForQuote: (product: GasProduct) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  lang,
  onSelectForQuote,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!product) return null;

  const handleDownloadMsds = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Modal Header Banner */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-[#0A1B2A] flex-shrink-0">
          <img
            src={product.imageUrl}
            alt={product.imageAlt}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B2A] via-[#0A1B2A]/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-[#38BDF8] text-[#001428] text-[11px] font-bold tracking-wider uppercase">
                {product.categoryTag}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-white/20 text-white text-[11px] font-medium backdrop-blur-xs">
                {product.badge}
              </span>
            </div>
            <h2 className="text-[24px] sm:text-[30px] font-bold text-white font-headline">
              {lang === 'KOR' ? product.title : product.titleEn}
            </h2>
            {product.specs.formula && (
              <p className="text-[14px] text-[#38BDF8] font-mono mt-0.5">
                Formula: {product.specs.formula}
              </p>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          {/* Overview */}
          <div>
            <h3 className="text-[15px] font-bold text-[#001428] mb-2">
              {lang === 'KOR' ? '개요 및 품질 특성' : 'Overview & Quality Profile'}
            </h3>
            <p className="text-[14px] text-[#43474d] leading-relaxed">
              {lang === 'KOR' ? product.description : product.descriptionEn}
            </p>
          </div>

          {/* Technical Specifications Matrix */}
          <div>
            <h3 className="text-[15px] font-bold text-[#001428] mb-3 flex items-center gap-2">
              <FileText size={18} className="text-[#00658d]" />
              <span>{lang === 'KOR' ? '제품 기술 규격 (Technical Specifications)' : 'Technical Specifications'}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] text-[13px]">
              <div>
                <span className="text-[#74777e] block text-[11px] font-semibold uppercase">순도 (Purity)</span>
                <span className="font-semibold text-[#001428]">{product.specs.purity}</span>
              </div>
              <div>
                <span className="text-[#74777e] block text-[11px] font-semibold uppercase">UN 번호 / CAS No.</span>
                <span className="font-mono text-[#001428]">
                  {product.specs.unNumber || 'N/A'} {product.specs.casNumber ? `| CAS: ${product.specs.casNumber}` : ''}
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#74777e] block text-[11px] font-semibold uppercase mb-1">공급 방식 (Packaging &amp; Supply)</span>
                <div className="flex flex-wrap gap-1.5">
                  {product.specs.supplyMethods.map((method, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-white border border-[#E2E8F0] rounded text-[#001428] text-[12px]">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#74777e] block text-[11px] font-semibold uppercase mb-1">주요 적용 공정 (Applications)</span>
                <ul className="list-disc list-inside space-y-0.5 text-[#43474d]">
                  {product.specs.majorApplications.map((app, idx) => (
                    <li key={idx}>{app}</li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-2 pt-2 border-t border-[#E2E8F0]">
                <span className="text-[#74777e] block text-[11px] font-semibold uppercase">저장 및 취급 기준 (Storage)</span>
                <span className="text-[#43474d]">{product.specs.storageConditions}</span>
              </div>
            </div>
          </div>

          {/* MSDS Safety Card */}
          <div className="bg-[#edf4ff]/60 border border-[#c6e7ff] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2 text-[#00658d] font-bold text-[14px]">
              <ShieldAlert size={18} className="text-[#00658d]" />
              <span>MSDS 물질안전보건자료 요약 (Material Safety Data)</span>
            </div>
            <div className="text-[12px] text-[#43474d] space-y-2">
              <p>
                <strong className="text-[#001428]">위험성·유해성 분류:</strong> {product.msdsSummary.hazardClass}
              </p>
              <div>
                <strong className="text-[#001428] block mb-1">취급상 주의사항:</strong>
                <ul className="list-disc list-inside space-y-1">
                  {product.msdsSummary.precautionaryStatements.map((stmt, idx) => (
                    <li key={idx}>{stmt}</li>
                  ))}
                </ul>
              </div>
              <p className="text-[11px] text-[#74777e] pt-1">
                24시간 비상대응 연락처: <span className="font-semibold text-[#001428]">{product.msdsSummary.emergencyContact}</span>
              </p>
            </div>
          </div>

          {/* Toast Notification for Download */}
          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-[13px] flex items-center gap-2 animate-in fade-in">
              <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" />
              <span>
                {lang === 'KOR'
                  ? `[${product.title}] 공식 MSDS 및 성적서 규격 사본이 준비되었습니다.`
                  : `MSDS and specification data sheet for ${product.titleEn} prepared.`}
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleDownloadMsds}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[#001428] hover:bg-[#edf4ff] text-[13px] font-semibold transition-colors"
          >
            <Download size={16} />
            <span>{lang === 'KOR' ? 'MSDS 데이터시트 다운로드' : 'Download MSDS PDF'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-[#74777e] hover:text-[#001428] text-[13px] font-semibold transition-colors"
            >
              {lang === 'KOR' ? '닫기' : 'Close'}
            </button>
            <button
              onClick={() => {
                onSelectForQuote(product);
                onClose();
              }}
              className="inline-flex items-center gap-2 bg-[#0f2942] hover:bg-[#00658d] text-white px-5 py-2.5 rounded-lg text-[13px] font-bold shadow-xs transition-colors"
            >
              <Send size={16} />
              <span>{lang === 'KOR' ? '이 품목으로 견적 문의' : 'Inquire for this Gas'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
