/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { MetricsRibbon } from './components/MetricsRibbon';
import { ProductCatalog } from './components/ProductCatalog';
import { ServicesSection } from './components/ServicesSection';
import { EsgSection } from './components/EsgSection';
import { NoticesSection } from './components/NoticesSection';
import { QuickAccessBento } from './components/QuickAccessBento';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { LocationsModal } from './components/LocationsModal';
import { CompanyModal } from './components/CompanyModal';
import { GasCalculatorModal } from './components/GasCalculatorModal';
import { ChatbotWidget } from './components/ChatbotWidget';
import { GasProduct } from './data/gasData';

export default function App() {
  const [lang, setLang] = useState<'KOR' | 'ENG'>('KOR');
  
  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<GasProduct | null>(null);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [prefilledProductForQuote, setPrefilledProductForQuote] = useState<string | null>(null);
  const [externalNoticeId, setExternalNoticeId] = useState<string | null>(null);

  const handleSelectForQuote = (product: GasProduct) => {
    setPrefilledProductForQuote(product.title);
    const inquiryElement = document.getElementById('inquiry');
    if (inquiryElement) {
      inquiryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuoteGeneral = () => {
    const inquiryElement = document.getElementById('inquiry');
    if (inquiryElement) {
      inquiryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenNoticeAward = () => {
    setExternalNoticeId('notice-press-award');
    const supportElement = document.getElementById('support');
    if (supportElement) {
      supportElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteFromChatbot = (topic: string) => {
    setPrefilledProductForQuote(topic);
    const inquiryElement = document.getElementById('inquiry');
    if (inquiryElement) {
      inquiryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#0b1d2b] flex flex-col font-sans selection:bg-[#c6e7ff] selection:text-[#001428]">
      {/* Fixed Sticky Header Navigation */}
      <TopNavBar
        lang={lang}
        setLang={setLang}
        onOpenCompany={() => setIsCompanyOpen(true)}
        onOpenLocations={() => setIsLocationsOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      <main className="flex-1">
        {/* Master Transportation Fleet & Total Solution Hero */}
        <HeroSection
          lang={lang}
          onOpenCompany={() => setIsCompanyOpen(true)}
        />

        {/* Audited Operational Scale Metric Ribbon */}
        <MetricsRibbon
          lang={lang}
          onOpenLocations={() => setIsLocationsOpen(true)}
        />

        {/* Comprehensive Gas Catalog */}
        <ProductCatalog
          lang={lang}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onRequestQuote={handleRequestQuoteGeneral}
        />

        {/* Specialized Services & Total Solutions */}
        <ServicesSection
          lang={lang}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />

        {/* ESG & Clean Energy R&D Showcase */}
        <EsgSection
          lang={lang}
          onOpenNoticeAward={handleOpenNoticeAward}
        />

        {/* Latest Notices & Regulatory Press */}
        <NoticesSection
          lang={lang}
          externalNoticeIdToOpen={externalNoticeId}
          onClearExternalNotice={() => setExternalNoticeId(null)}
        />

        {/* Quick Access Bento Cards */}
        <QuickAccessBento
          lang={lang}
          onOpenCompany={() => setIsCompanyOpen(true)}
          onOpenLocations={() => setIsLocationsOpen(true)}
        />

        {/* Enterprise Consultation & Quotation Form */}
        <InquirySection
          lang={lang}
          prefilledProduct={prefilledProductForQuote}
        />
      </main>

      {/* Corporate Certified Footer */}
      <Footer
        lang={lang}
        onOpenLocations={() => setIsLocationsOpen(true)}
        onOpenCompany={() => setIsCompanyOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Interactive Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        lang={lang}
        onSelectForQuote={handleSelectForQuote}
      />

      <LocationsModal
        isOpen={isLocationsOpen}
        onClose={() => setIsLocationsOpen(false)}
        lang={lang}
      />

      <CompanyModal
        isOpen={isCompanyOpen}
        onClose={() => setIsCompanyOpen(false)}
        lang={lang}
      />

      <GasCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        lang={lang}
      />

      {/* 24/7 AI Gas Engineering Chatbot */}
      <ChatbotWidget
        lang={lang}
        onRequestQuoteWithTopic={handleQuoteFromChatbot}
      />
    </div>
  );
}
