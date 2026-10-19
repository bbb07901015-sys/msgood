import React, { useState } from 'react';
import { TECHNICAL_SERVICES, TechnicalService } from '../data/servicesData';
import { ArrowRight, CheckCircle2, ChevronRight, X } from 'lucide-react';

interface ServicesSectionProps {
  lang: 'KOR' | 'ENG';
  onOpenCalculator: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onOpenCalculator }) => {
  const [selectedService, setSelectedService] = useState<TechnicalService | null>(null);

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] border-y border-[#E2E8F0]" id="services">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[12px] uppercase tracking-widest text-[#00658d] font-bold">
            Total Service Architecture
          </span>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#0B1926] mt-2 font-headline">
            {lang === 'KOR'
              ? '가스 공급을 넘어 안전과 공정의 완성도를 높이는 기술 서비스'
              : 'Beyond Gas Supply: Technical Engineering for Process Perfection'}
          </h2>
          <p className="text-[15px] text-[#43474d] mt-3">
            {lang === 'KOR'
              ? '단순한 제품 공급에 그치지 않고, 고객사의 안전 규제 준수와 공정 효율을 극대화하는 4대 전문 엔지니어링 서비스를 제공합니다.'
              : 'Empowering enterprise safety compliance and operating throughput across 4 mission-critical engineering verticals.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNICAL_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#00658d] hover:bg-[#FFFFFF] hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#d8eafe] flex items-center justify-center text-[#001428] group-hover:bg-[#001428] group-hover:text-[#38BDF8] transition-colors mb-6">
                  <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                </div>
                <h3 className="text-[18px] font-bold text-[#001428] mb-2 font-headline">
                  {lang === 'KOR' ? service.title : service.titleEn}
                </h3>
                <p className="text-[13px] text-[#43474d] leading-relaxed mb-4">
                  {lang === 'KOR' ? service.summary : service.summaryEn}
                </p>
                <ul className="text-[11px] text-[#74777e] space-y-1.5 border-t border-[#E2E8F0] pt-3">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#00658d]"></span>
                    {service.bullet1}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#00658d]"></span>
                    {service.bullet2}
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[12px] font-bold text-[#00658d] group-hover:text-[#001428]">
                <span>{lang === 'KOR' ? '자세히 보기' : 'Explore Details'}</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Action banner to gas calculator */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0f2942] to-[#0A1B2A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/20 text-[#38BDF8] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[28px]">speed</span>
            </div>
            <div>
              <h4 className="text-[16px] font-bold">
                {lang === 'KOR' ? '산업용 가스 단위 환산 & 질소 치환(Purge) 용량 계산기' : 'Industrial Gas Converter & Nitrogen Purge Estimator'}
              </h4>
              <p className="text-[13px] text-[#d8eafe]/80">
                {lang === 'KOR'
                  ? '배관 체적(㎥)에 따른 필요 질소 소요량 및 Nm³, kg, L 상호 환산을 현장에서 즉시 시뮬레이션하세요.'
                  : 'Simulate required nitrogen volume for pipeline purging and convert between Nm³, kg, and liquid liters.'}
              </p>
            </div>
          </div>
          <button
            onClick={onOpenCalculator}
            className="px-5 py-2.5 bg-[#38BDF8] hover:bg-white text-[#001428] font-bold text-[13px] rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <span>{lang === 'KOR' ? '계산기 열기' : 'Open Calculator'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#001428] text-[#38BDF8] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">{selectedService.icon}</span>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#001428] font-headline">
                    {lang === 'KOR' ? selectedService.title : selectedService.titleEn}
                  </h3>
                  <span className="text-[12px] text-[#00658d] font-semibold">Total Engineering Service</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-[14px] text-[#43474d] leading-relaxed">
              {selectedService.details.description}
            </p>

            {/* Workflow steps */}
            <div>
              <h4 className="text-[14px] font-bold text-[#001428] mb-3">
                {lang === 'KOR' ? '표준 수행 프로세스' : 'Standard Execution Workflow'}
              </h4>
              <div className="space-y-2">
                {selectedService.details.workflow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[13px] text-[#43474d] bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0]">
                    <CheckCircle2 size={16} className="text-[#00658d] mt-0.5 flex-shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[12px]">
              <div className="bg-[#edf4ff]/50 p-4 rounded-xl border border-[#c6e7ff]">
                <strong className="text-[#001428] block mb-1">
                  {lang === 'KOR' ? '투입 전문 장비' : 'Precision Equipment'}
                </strong>
                <ul className="list-disc list-inside space-y-1 text-[#43474d]">
                  {selectedService.details.equipment.map((eq, idx) => (
                    <li key={idx}>{eq}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#edf4ff]/50 p-4 rounded-xl border border-[#c6e7ff]">
                <strong className="text-[#001428] block mb-1">
                  {lang === 'KOR' ? '공인 자격 및 인증' : 'Certifications & Standards'}
                </strong>
                <ul className="list-disc list-inside space-y-1 text-[#43474d]">
                  {selectedService.details.certifications.map((cert, idx) => (
                    <li key={idx}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 bg-[#001428] text-white rounded-lg text-[13px] font-semibold hover:bg-[#00658d]"
              >
                {lang === 'KOR' ? '확인' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
