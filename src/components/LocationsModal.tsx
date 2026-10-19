import React, { useState } from 'react';
import { X, MapPin, Phone, Building2, ExternalLink, ShieldCheck } from 'lucide-react';
import { BRANCH_LOCATIONS, BranchLocation } from '../data/locationsData';

interface LocationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'KOR' | 'ENG';
}

export const LocationsModal: React.FC<LocationsModalProps> = ({ isOpen, onClose, lang }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  if (!isOpen) return null;

  const filteredLocations = BRANCH_LOCATIONS.filter((item) => {
    if (selectedRegion === 'all') return true;
    return item.region === selectedRegion;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#001428] text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0f2942] text-[#38BDF8] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">location_on</span>
            </div>
            <div>
              <h3 className="text-[20px] font-bold font-headline">
                {lang === 'KOR' ? '전국 사업장 및 오시는 길' : 'Nationwide Network & Locations'}
              </h3>
              <p className="text-[12px] text-[#c3c6ce]">
                {lang === 'KOR'
                  ? '8대 전략 생산·저장 거점 및 17개 지사 네트워크'
                  : '8 Regional Hubs and 17 Direct Branches Across Korea'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Region Filter Bar */}
        <div className="p-4 bg-[#F8FAFC] border-b border-[#E2E8F0] flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedRegion('all')}
            className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-colors cursor-pointer ${
              selectedRegion === 'all'
                ? 'bg-[#001428] text-white'
                : 'bg-white border border-[#E2E8F0] text-[#43474d] hover:text-[#001428]'
            }`}
          >
            {lang === 'KOR' ? '전체 거점 (6)' : 'All Bases'}
          </button>
          <button
            onClick={() => setSelectedRegion('영남권(본사)')}
            className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-colors cursor-pointer ${
              selectedRegion === '영남권(본사)'
                ? 'bg-[#001428] text-white'
                : 'bg-white border border-[#E2E8F0] text-[#43474d] hover:text-[#001428]'
            }`}
          >
            {lang === 'KOR' ? '영남권 (부산 본사·포항·울산)' : 'Yeongnam / Busan HQ'}
          </button>
          <button
            onClick={() => setSelectedRegion('수도권·중부')}
            className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-colors cursor-pointer ${
              selectedRegion === '수도권·중부'
                ? 'bg-[#001428] text-white'
                : 'bg-white border border-[#E2E8F0] text-[#43474d] hover:text-[#001428]'
            }`}
          >
            {lang === 'KOR' ? '수도권·중부 (당진·화성)' : 'Central / Seoul Met.'}
          </button>
          <button
            onClick={() => setSelectedRegion('호남·충청')}
            className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-colors cursor-pointer ${
              selectedRegion === '호남·충청'
                ? 'bg-[#001428] text-white'
                : 'bg-white border border-[#E2E8F0] text-[#43474d] hover:text-[#001428]'
            }`}
          >
            {lang === 'KOR' ? '호남·충청 (광양·여수)' : 'Honam / Chungcheong'}
          </button>
        </div>

        {/* Location Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="p-5 rounded-xl border border-[#E2E8F0] bg-white hover:border-[#00658d] hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#edf4ff] text-[#00658d] text-[11px] font-bold">
                    {loc.type}
                  </span>
                  <span className="text-[11px] text-[#74777e]">{loc.region}</span>
                </div>
                <h4 className="text-[16px] font-bold text-[#001428] mb-2 font-headline">
                  {lang === 'KOR' ? loc.name : loc.nameEn}
                </h4>
                <div className="space-y-1.5 text-[12px] text-[#43474d] mb-4">
                  <p className="flex items-start gap-1.5">
                    <MapPin size={15} className="text-[#00658d] mt-0.5 flex-shrink-0" />
                    <span>{lang === 'KOR' ? loc.address : loc.addressEn}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone size={15} className="text-[#00658d] flex-shrink-0" />
                    <span className="font-semibold text-[#001428]">{loc.tel}</span>
                    <span className="text-[#74777e]">(FAX: {loc.fax})</span>
                  </p>
                </div>

                <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0] text-[11px] text-[#43474d]">
                  <strong className="text-[#001428] block mb-1">
                    {lang === 'KOR' ? '주요 거점 설비' : 'Key Infrastructure'}
                  </strong>
                  <ul className="list-disc list-inside space-y-0.5">
                    {loc.keyFacilities.map((fac, idx) => (
                      <li key={idx}>{fac}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <a
                  href={`tel:${loc.tel.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-1 text-[12px] font-bold text-[#00658d] hover:underline"
                >
                  <Phone size={14} />
                  <span>{lang === 'KOR' ? '지사 직통 연결' : 'Call Base'}</span>
                </a>
                <span className="text-[11px] text-[#74777e]">24h 관제 연계</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#001428] text-white rounded-lg text-[13px] font-semibold hover:bg-[#00658d]"
          >
            {lang === 'KOR' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
