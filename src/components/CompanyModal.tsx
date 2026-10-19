import React from 'react';
import { X, Award, ShieldCheck, Factory, Calendar, TrendingUp } from 'lucide-react';

interface CompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'KOR' | 'ENG';
}

export const CompanyModal: React.FC<CompanyModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Header Banner */}
        <div className="p-6 bg-[#001428] text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0f2942] text-[#38BDF8] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">corporate_fare</span>
            </div>
            <div>
              <h3 className="text-[20px] font-bold font-headline">
                {lang === 'KOR' ? '(주)MS가스 회사소개' : 'About MS GAS Co., Ltd.'}
              </h3>
              <p className="text-[12px] text-[#c3c6ce]">
                {lang === 'KOR'
                  ? '1974년부터 대한민국 산업 에너지의 든든한 동반자'
                  : 'Powering Korean Heavy Industry & Clean Energy Since 1974'}
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

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1 text-[#43474d] text-[14px] leading-relaxed">
          {/* CEO Greeting */}
          <div className="bg-[#edf4ff]/50 border border-[#c6e7ff] p-5 rounded-xl">
            <span className="text-[11px] text-[#00658d] font-bold uppercase tracking-wider block mb-1">
              CEO Greeting &amp; Vision
            </span>
            <h4 className="text-[17px] font-bold text-[#001428] mb-2 font-headline">
              {lang === 'KOR'
                ? '"타협 없는 안전과 무결점 품질로 고객의 성공을 지탱합니다"'
                : '"Uncompromising Safety & Flawless Quality for Client Success"'}
            </h4>
            <p className="text-[13px] text-[#43474d]">
              {lang === 'KOR'
                ? '(주)MS가스는 반세기 동안 산업용 고압가스 국산화와 전국 직영 유통망 혁신을 이끌어왔습니다. 철강, 조선, 반도체 등 핵심 기간산업의 원동력이었던 고순도 가스에서 출발하여, 현재는 울산 규제자유특구 암모니아 벙커링 및 청정 수소 인프라까지 미래 에너지 전환의 중심에서 책임을 다하고 있습니다.'
                : 'For half a century, MS GAS has led Korea’s industrial gas localized supply and direct distribution innovations. From essential gases for steel and semiconductors to zero-emission maritime ammonia bunkering in Ulsan, we spearhead sustainable industrial energy.'}
            </p>
            <div className="mt-3 text-right text-[12px] font-bold text-[#001428]">
              (주)MS가스 대표이사 전청민 (은탑산업훈장 수훈)
            </div>
          </div>

          {/* 3 Core Values */}
          <div>
            <h4 className="text-[15px] font-bold text-[#001428] mb-3">
              {lang === 'KOR' ? '경영 핵심 가치 (Core Principles)' : 'Core Management Principles'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[13px]">
              <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                <ShieldCheck className="text-[#00658d] mb-2" size={24} />
                <h5 className="font-bold text-[#001428] mb-1">완벽 안전 (Zero Defect)</h5>
                <p className="text-[12px] text-[#74777e]">
                  50년 무재해 운용 원칙, 24시간 원격 압력·누출 관제 및 KGS 합동 안전진단.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                <TrendingUp className="text-[#00658d] mb-2" size={24} />
                <h5 className="font-bold text-[#001428] mb-1">재무 건전성 (Trust)</h5>
                <p className="text-[12px] text-[#74777e]">
                  창립 이래 무차입 경영 지속, 연간 935억원 매출의 탄탄한 재무 신뢰도.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                <Factory className="text-[#00658d] mb-2" size={24} />
                <h5 className="font-bold text-[#001428] mb-1">기술 자립 (Innovation)</h5>
                <p className="text-[12px] text-[#74777e]">
                  KOLAS 공인시험기관, KGMP 의약품 제조시설 및 6N급 특수가스 정밀 분석.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div>
            <h4 className="text-[15px] font-bold text-[#001428] mb-3 flex items-center gap-2">
              <Calendar size={18} className="text-[#00658d]" />
              <span>{lang === 'KOR' ? '연혁 및 주요 발자취' : 'Milestones'}</span>
            </h4>
            <div className="space-y-2.5 text-[12px] border-l-2 border-[#d8eafe] pl-4 ml-2">
              <div>
                <span className="font-bold text-[#00658d]">2024 ~ 현재:</span>{' '}
                <span className="text-[#001428] font-medium">국가 규제자유특구 암모니아 실증 사업자 선정</span> 및 탄소중립 유공 충남도지사 표창 수여, 대표이사 은탑산업훈장 수훈.
              </div>
              <div>
                <span className="font-bold text-[#00658d]">2018 ~ 2023:</span>{' '}
                전국 8대 권역 초저온 벌크 저장 터미널 확충 및 연간 매출 900억원 돌파.
              </div>
              <div>
                <span className="font-bold text-[#00658d]">2010 ~ 2017:</span>{' '}
                KOLAS 국제공인시험기관 및 식약처 KGMP 의약품 가스 제조소 허가 취득.
              </div>
              <div>
                <span className="font-bold text-[#00658d]">1974:</span>{' '}
                (주)MS가스 창립, 고압가스 충전 및 특수가스 유통 사업 개시.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#001428] text-white rounded-lg text-[13px] font-semibold hover:bg-[#00658d]"
          >
            {lang === 'KOR' ? '확인' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
