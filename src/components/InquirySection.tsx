import React, { useState } from 'react';
import { CheckCircle2, Phone, Clock, FileCheck, Send } from 'lucide-react';

interface InquirySectionProps {
  lang: 'KOR' | 'ENG';
  prefilledProduct?: string | null;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ lang, prefilledProduct }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    category: '산업용 가스 (산소, 질소, 아르곤, 탄산)',
    deliveryMethod: '초저온 탱크로리 직송 (대용량)',
    message: '',
    agreePrivacy: false,
  });

  const [submittedTicket, setSubmittedTicket] = useState<{
    ticketNumber: string;
    company: string;
    category: string;
    date: string;
  } | null>(null);

  // Update prefilled product if supplied
  React.useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        category: prefilledProduct,
        message: prev.message ? prev.message : `[문의 요청 품목: ${prefilledProduct}]\n희망 견적 및 공급 주기 협의 희망합니다.`
      }));
    }
  }, [prefilledProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert(lang === 'KOR' ? '개인정보 처리방침에 동의해 주세요.' : 'Please agree to the privacy policy.');
      return;
    }

    const ticketNumber = `MSG-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;
    const ticket = {
      ticketNumber,
      company: formData.companyName,
      category: formData.category,
      date: new Date().toLocaleDateString('ko-KR')
    };

    setSubmittedTicket(ticket);
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setFormData({
      companyName: '',
      contactPerson: '',
      phone: '',
      email: '',
      category: '산업용 가스 (산소, 질소, 아르곤, 탄산)',
      deliveryMethod: '초저온 탱크로리 직송 (대용량)',
      message: '',
      agreePrivacy: false,
    });
  };

  return (
    <section className="py-16 lg:py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]" id="inquiry">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl shadow-sm p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Narrative & Support Contacts */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="text-[12px] text-[#00658d] font-bold uppercase tracking-wider">
                  Fast Enterprise Consultation
                </span>
                <h3 className="text-[26px] sm:text-[30px] font-bold text-[#001428] mt-2 font-headline">
                  {lang === 'KOR' ? '가스 공급 및 견적 문의' : 'Gas Supply & Quotation Consultation'}
                </h3>
                <p className="text-[14px] text-[#43474d] mt-3 leading-relaxed">
                  {lang === 'KOR'
                    ? '가스 종류, 요구 순도, 사용처 및 공급 방식(벌크/실린더/배관)을 남겨주시면 담당 엔지니어가 24시간 이내 최적의 솔루션을 제안해 드립니다.'
                    : 'Provide your gas requirements, purity grade, delivery mode (bulk tanker, LGC, cylinders, or pipeline), and our technical engineers will respond within 24 hours.'}
                </p>
              </div>

              <div className="mt-8 space-y-4 pt-6 border-t border-[#E2E8F0]">
                <div className="flex items-center gap-3 text-[14px] text-[#001428]">
                  <div className="w-8 h-8 rounded-lg bg-[#edf4ff] text-[#00658d] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#74777e]">{lang === 'KOR' ? '대표전화' : 'Hotline'}</span>
                    <span className="font-bold">051-312-3000</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[14px] text-[#001428]">
                  <div className="w-8 h-8 rounded-lg bg-[#edf4ff] text-[#00658d] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#74777e]">{lang === 'KOR' ? '상담 가능 시간' : 'Hours'}</span>
                    <span className="font-medium">{lang === 'KOR' ? '평일 08:30 ~ 18:00 (야간 24/7 안전관제)' : 'Mon-Fri 08:30 ~ 18:00 KST'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[14px] text-[#001428]">
                  <div className="w-8 h-8 rounded-lg bg-[#edf4ff] text-[#00658d] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">description</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#74777e]">{lang === 'KOR' ? '인증 지원' : 'Documentation'}</span>
                    <span className="font-medium">{lang === 'KOR' ? 'MSDS 및 시험성적서 즉시 발급 가능' : 'COA & MSDS issued upon request'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form or Success State */}
            <div className="lg:col-span-8">
              {submittedTicket ? (
                <div className="bg-[#edf4ff]/60 border border-[#c6e7ff] rounded-xl p-8 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-[22px] font-bold text-[#001428] font-headline">
                    {lang === 'KOR' ? '견적 및 공급 상담이 접수되었습니다' : 'Quotation Request Received'}
                  </h4>
                  <p className="text-[14px] text-[#43474d] max-w-lg mx-auto">
                    {lang === 'KOR'
                      ? `[${submittedTicket.company}] 고객님의 [${submittedTicket.category}] 공급 견적 요청이 담당 엔지니어에게 배정되었습니다. 접수번호를 통해 신속히 안내해 드립니다.`
                      : `Your request has been routed to our specialized gas engineer. We will review your specification and contact you within 24 hours.`}
                  </p>
                  <div className="inline-block bg-white border border-[#E2E8F0] px-5 py-3 rounded-lg text-[13px] font-mono font-bold text-[#00658d] shadow-2xs">
                    접수번호: {submittedTicket.ticketNumber} ({submittedTicket.date})
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg bg-[#001428] text-white text-[13px] font-semibold hover:bg-[#00658d] transition-colors"
                    >
                      {lang === 'KOR' ? '새 문의 작성하기' : 'Submit Another Inquiry'}
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] text-[#001428] mb-1.5 font-semibold">
                        {lang === 'KOR' ? '회사명 / 기관명 *' : 'Company Name *'}
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[13px] outline-none bg-[#F8FAFC]"
                        placeholder={lang === 'KOR' ? '(주)한국엔지니어링' : 'e.g. Korea Tech Corp'}
                        required
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] text-[#001428] mb-1.5 font-semibold">
                        {lang === 'KOR' ? '담당자 성함 및 직함 *' : 'Contact Person & Title *'}
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[13px] outline-none bg-[#F8FAFC]"
                        placeholder={lang === 'KOR' ? '홍길동 팀장' : 'e.g. Gil-dong Hong (Manager)'}
                        required
                        type="text"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] text-[#001428] mb-1.5 font-semibold">
                        {lang === 'KOR' ? '연락처 *' : 'Phone Number *'}
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[13px] outline-none bg-[#F8FAFC]"
                        placeholder="010-0000-0000"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] text-[#001428] mb-1.5 font-semibold">
                        {lang === 'KOR' ? '이메일 *' : 'Business Email *'}
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[13px] outline-none bg-[#F8FAFC]"
                        placeholder="contact@example.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] text-[#001428] mb-1.5 font-semibold">
                        {lang === 'KOR' ? '관심 품목 카테고리' : 'Gas Product Category'}
                      </label>
                      <select
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[13px] outline-none bg-[#F8FAFC]"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        <option value="산업용 가스 (산소, 질소, 아르곤, 탄산)">
                          산업용 가스 (산소, 질소, 아르곤, 탄산)
                        </option>
                        <option value="연료용 가스 (프로판, 프라멕스, 에탄, 부탄)">
                          연료용 가스 (프로판, 프라멕스, 에탄, 부탄)
                        </option>
                        <option value="반도체/특수 가스 (초고순도, 레이저가스, 헬륨)">
                          반도체/특수 가스 (초고순도 6N, 레이저가스, 헬륨)
                        </option>
                        <option value="의료용 가스 (KGMP 의료용 산소/흡입가스)">
                          의료용 가스 (KGMP 의료용 산소/흡입가스)
                        </option>
                        <option value="표준 및 교정 가스 (정밀 분석용)">
                          표준 및 교정 가스 (정밀 분석용, KOLAS)
                        </option>
                        <option value="엔지니어링 설비 / 가스퍼지 서비스">
                          엔지니어링 설비 / 가스퍼지 / 질소 치환 서비스
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] text-[#001428] mb-1.5 font-semibold">
                        {lang === 'KOR' ? '희망 납품 방식' : 'Preferred Delivery Mode'}
                      </label>
                      <select
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[13px] outline-none bg-[#F8FAFC]"
                        value={formData.deliveryMethod}
                        onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value })}
                      >
                        <option value="초저온 탱크로리 직송 (대용량)">
                          초저온 탱크로리 직송 (대용량 벌크)
                        </option>
                        <option value="초저온 액화용기 (LGC) 정기 납품">
                          초저온 액화용기 (LGC 175L) 정기 납품
                        </option>
                        <option value="고압 가스 실린더 (단품/번들)">
                          고압 가스 실린더 (단품/번들 16병~30병)
                        </option>
                        <option value="온사이트 플랜트 배관 직공급">
                          온사이트 플랜트 배관 직공급 및 설비 시공
                        </option>
                        <option value="수출입 ISO Tank 해상 운송">
                          수출입 ISO Tank 해상 컨테이너
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] text-[#001428] mb-1.5 font-semibold">
                      {lang === 'KOR' ? '문의 상세 내용' : 'Inquiry Specifications & Address'}
                    </label>
                    <textarea
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[13px] outline-none bg-[#F8FAFC]"
                      placeholder={
                        lang === 'KOR'
                          ? '요청 순도, 사용 예정 수량, 납품 지역(주소지) 등을 기재해 주시면 더 신속하게 견적을 산출해 드립니다.'
                          : 'Please specify required purity, monthly volume estimate, delivery location (city/district), and schedule.'
                      }
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <label className="flex items-center gap-2 text-[12px] text-[#74777e] cursor-pointer">
                      <input
                        className="rounded text-[#001428] focus:ring-[#38BDF8]"
                        required
                        type="checkbox"
                        checked={formData.agreePrivacy}
                        onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                      />
                      <span>
                        {lang === 'KOR'
                          ? '개인정보 수집 및 이용 목적에 동의합니다. (견적 상담용)'
                          : 'I agree to the privacy policy for quotation consultation.'}
                      </span>
                    </label>

                    <button
                      className="bg-[#0f2942] hover:bg-[#00658d] text-[#FFFFFF] px-8 py-3 rounded-lg font-bold text-[14px] transition-colors flex items-center gap-2 shadow-xs cursor-pointer w-full sm:w-auto justify-center"
                      type="submit"
                    >
                      <span>{lang === 'KOR' ? '온라인 문의 제출하기' : 'Submit Consultation Request'}</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
