import React, { useState } from 'react';
import { NOTICES, NoticeItem } from '../data/noticesData';
import { ArrowRight, ChevronRight, X, Download, FileText, CheckCircle2 } from 'lucide-react';

interface NoticesSectionProps {
  lang: 'KOR' | 'ENG';
  externalNoticeIdToOpen?: string | null;
  onClearExternalNotice?: () => void;
}

export const NoticesSection: React.FC<NoticesSectionProps> = ({
  lang,
  externalNoticeIdToOpen,
  onClearExternalNotice
}) => {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'tender' | 'press'>('all');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  // If triggered externally (e.g. from ESG button)
  React.useEffect(() => {
    if (externalNoticeIdToOpen) {
      const match = NOTICES.find((n) => n.id === externalNoticeIdToOpen);
      if (match) {
        setSelectedNotice(match);
      }
      if (onClearExternalNotice) onClearExternalNotice();
    }
  }, [externalNoticeIdToOpen, onClearExternalNotice]);

  const filteredNotices = NOTICES.filter((item) => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  const handleDownload = (filename: string) => {
    setDownloadToast(filename);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3000);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]" id="support">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[12px] uppercase tracking-wider text-[#00658d] font-bold">
              News &amp; Regulatory Notices
            </span>
            <h2 className="text-[24px] sm:text-[28px] font-bold text-[#0B1926] font-headline">
              {lang === 'KOR' ? 'MS가스의 새로운 소식을 전달드립니다' : 'Official Press Releases & Tender Announcements'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-lg border border-[#E2E8F0] bg-white p-1 text-[12px] font-semibold">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1 rounded transition-colors ${filterType === 'all' ? 'bg-[#001428] text-white' : 'text-[#74777e]'}`}
              >
                {lang === 'KOR' ? '전체' : 'All'}
              </button>
              <button
                onClick={() => setFilterType('tender')}
                className={`px-3 py-1 rounded transition-colors ${filterType === 'tender' ? 'bg-[#001428] text-white' : 'text-[#74777e]'}`}
              >
                {lang === 'KOR' ? '입찰공고' : 'Tenders'}
              </button>
              <button
                onClick={() => setFilterType('press')}
                className={`px-3 py-1 rounded transition-colors ${filterType === 'press' ? 'bg-[#001428] text-white' : 'text-[#74777e]'}`}
              >
                {lang === 'KOR' ? '기업소식' : 'Press'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNotices.slice(0, 3).map((notice) => (
            <article
              key={notice.id}
              onClick={() => setSelectedNotice(notice)}
              className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 hover:shadow-md hover:border-[#00658d] transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-1 rounded text-[11px] font-bold ${notice.typeBadgeClass}`}>
                    {notice.typeLabel}
                  </span>
                  <span className="text-[12px] text-[#74777e]">{notice.date}</span>
                </div>
                <h3 className="text-[16px] font-bold text-[#001428] group-hover:text-[#00658d] leading-snug mb-3 line-clamp-2 font-headline">
                  {notice.title}
                </h3>
                <p className="text-[13px] text-[#43474d] line-clamp-3 mb-4 leading-relaxed">
                  {notice.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-[12px] text-[#74777e]">{notice.noticeNumber}</span>
                <span className="text-[13px] font-bold text-[#00658d] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>{lang === 'KOR' ? '상세보기' : 'View Notice'}</span>
                  <ChevronRight size={16} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Notice Detail Reader Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-1 rounded text-[12px] font-bold ${selectedNotice.typeBadgeClass}`}>
                  {selectedNotice.typeLabel}
                </span>
                <span className="text-[12px] text-[#74777e]">{selectedNotice.date}</span>
                {selectedNotice.noticeNumber && (
                  <span className="text-[12px] text-[#74777e]">| {selectedNotice.noticeNumber}</span>
                )}
              </div>
              <button
                onClick={() => setSelectedNotice(null)}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <h3 className="text-[20px] font-bold text-[#001428] leading-snug font-headline">
              {selectedNotice.title}
            </h3>

            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] text-[13px] text-[#43474d] whitespace-pre-line leading-relaxed font-sans">
              {selectedNotice.content}
            </div>

            {selectedNotice.attachments && selectedNotice.attachments.length > 0 && (
              <div>
                <h4 className="text-[13px] font-bold text-[#001428] mb-2 flex items-center gap-1.5">
                  <FileText size={16} className="text-[#00658d]" />
                  <span>{lang === 'KOR' ? '첨부파일 다운로드' : 'Attachments'}</span>
                </h4>
                <div className="space-y-2">
                  {selectedNotice.attachments.map((file, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDownload(file.name)}
                      className="w-full flex items-center justify-between p-3 bg-white border border-[#E2E8F0] hover:border-[#00658d] hover:bg-[#edf4ff]/30 rounded-lg text-[13px] text-left transition-all"
                    >
                      <span className="text-[#001428] font-medium truncate">{file.name}</span>
                      <div className="flex items-center gap-2 text-[12px] text-[#74777e] flex-shrink-0">
                        <span>{file.size}</span>
                        <Download size={15} className="text-[#00658d]" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {downloadToast && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-[12px] flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                <span>[{downloadToast}] 다운로드가 시작되었습니다.</span>
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedNotice(null)}
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
