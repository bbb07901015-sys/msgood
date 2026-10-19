import React, { useState } from 'react';
import { X, Calculator, ArrowRightLeft, RefreshCw, Info } from 'lucide-react';

interface GasCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'KOR' | 'ENG';
}

// Gas physical conversion constants (at 0°C, 101.325 kPa)
const GAS_PROPERTIES: Record<string, { nameKo: string; nameEn: string; gasDensity: number; liquidDensity: number; expansionRatio: number }> = {
  nitrogen: {
    nameKo: '질소 (N₂)',
    nameEn: 'Nitrogen (N₂)',
    gasDensity: 1.2506, // kg/Nm³
    liquidDensity: 0.808, // kg/L (at boiling point)
    expansionRatio: 646, // 1L liquid = ~646L gas at STP
  },
  oxygen: {
    nameKo: '산소 (O₂)',
    nameEn: 'Oxygen (O₂)',
    gasDensity: 1.429, // kg/Nm³
    liquidDensity: 1.141, // kg/L
    expansionRatio: 798,
  },
  argon: {
    nameKo: '아르곤 (Ar)',
    nameEn: 'Argon (Ar)',
    gasDensity: 1.784, // kg/Nm³
    liquidDensity: 1.402, // kg/L
    expansionRatio: 785,
  },
  co2: {
    nameKo: '탄산 (CO₂)',
    nameEn: 'Carbon Dioxide (CO₂)',
    gasDensity: 1.977, // kg/Nm³
    liquidDensity: 1.020, // kg/L
    expansionRatio: 516,
  },
  hydrogen: {
    nameKo: '수소 (H₂)',
    nameEn: 'Hydrogen (H₂)',
    gasDensity: 0.0899, // kg/Nm³
    liquidDensity: 0.071, // kg/L
    expansionRatio: 788,
  },
  helium: {
    nameKo: '헬륨 (He)',
    nameEn: 'Helium (He)',
    gasDensity: 0.1785, // kg/Nm³
    liquidDensity: 0.125, // kg/L
    expansionRatio: 700,
  }
};

export const GasCalculatorModal: React.FC<GasCalculatorModalProps> = ({ isOpen, onClose, lang }) => {
  const [activeTab, setActiveTab] = useState<'converter' | 'purge'>('converter');

  // Converter state
  const [selectedGas, setSelectedGas] = useState<string>('nitrogen');
  const [inputValue, setInputValue] = useState<number>(100);
  const [inputUnit, setInputUnit] = useState<'nm3' | 'kg' | 'liquidLiters'>('nm3');

  // Purge state
  const [calcMode, setCalcMode] = useState<'pipe' | 'tank'>('pipe');
  const [pipeDiameterInch, setPipeDiameterInch] = useState<number>(6); // 6 inches
  const [pipeLengthMeter, setPipeLengthMeter] = useState<number>(150); // 150m
  const [tankVolumeM3, setTankVolumeM3] = useState<number>(50); // 50 m³
  const [purgeCycles, setPurgeCycles] = useState<number>(2.5); // 2.5 times geometric volume

  if (!isOpen) return null;

  const gasProp = GAS_PROPERTIES[selectedGas];

  // Convert input value to Nm³, kg, and Liquid Liters
  let resultNm3 = 0;
  let resultKg = 0;
  let resultLiters = 0;

  if (inputUnit === 'nm3') {
    resultNm3 = inputValue;
    resultKg = inputValue * gasProp.gasDensity;
    resultLiters = resultKg / gasProp.liquidDensity;
  } else if (inputUnit === 'kg') {
    resultKg = inputValue;
    resultNm3 = inputValue / gasProp.gasDensity;
    resultLiters = inputValue / gasProp.liquidDensity;
  } else {
    resultLiters = inputValue;
    resultKg = inputValue * gasProp.liquidDensity;
    resultNm3 = resultKg / gasProp.gasDensity;
  }

  // Purge calculations
  let internalVolumeM3 = 0;
  if (calcMode === 'pipe') {
    const radiusM = (pipeDiameterInch * 0.0254) / 2;
    internalVolumeM3 = Math.PI * radiusM * radiusM * pipeLengthMeter;
  } else {
    internalVolumeM3 = tankVolumeM3;
  }

  const requiredNitrogenNm3 = internalVolumeM3 * purgeCycles;
  const requiredNitrogenKg = requiredNitrogenNm3 * GAS_PROPERTIES.nitrogen.gasDensity;
  const cylindersNeeded = Math.ceil(requiredNitrogenNm3 / 7); // ~7 Nm³ per 47L 150bar cylinder
  const lgcsNeeded = (requiredNitrogenNm3 / 110).toFixed(1); // ~110 Nm³ per 175L LGC

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#001428] text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0f2942] text-[#38BDF8] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">calculate</span>
            </div>
            <div>
              <h3 className="text-[20px] font-bold font-headline">
                {lang === 'KOR' ? '엔지니어링 가스 계산기' : 'Gas Engineering Calculator'}
              </h3>
              <p className="text-[12px] text-[#c3c6ce]">
                {lang === 'KOR'
                  ? '산업용 가스 체적·중량 환산 및 질소 치환(Purge) 소요량 시뮬레이터'
                  : 'Gas Volume/Mass Conversion & Nitrogen Purge Volume Estimator'}
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

        {/* Tab switch */}
        <div className="p-3 bg-[#F8FAFC] border-b border-[#E2E8F0] flex gap-2">
          <button
            onClick={() => setActiveTab('converter')}
            className={`flex-1 py-2 px-4 rounded-lg text-[13px] font-bold transition-colors cursor-pointer ${
              activeTab === 'converter'
                ? 'bg-[#001428] text-white'
                : 'bg-white border border-[#E2E8F0] text-[#43474d] hover:text-[#001428]'
            }`}
          >
            {lang === 'KOR' ? '가스 단위 환산기 (Nm³ ↔ kg ↔ L)' : 'Unit Converter (Nm³ ↔ kg ↔ L)'}
          </button>
          <button
            onClick={() => setActiveTab('purge')}
            className={`flex-1 py-2 px-4 rounded-lg text-[13px] font-bold transition-colors cursor-pointer ${
              activeTab === 'purge'
                ? 'bg-[#001428] text-white'
                : 'bg-white border border-[#E2E8F0] text-[#43474d] hover:text-[#001428]'
            }`}
          >
            {lang === 'KOR' ? '질소 치환(Purge) 용량 산출' : 'Nitrogen Purge Estimator'}
          </button>
        </div>

        <div className="p-6 sm:p-8 flex-1 space-y-6">
          {activeTab === 'converter' ? (
            <div className="space-y-5">
              {/* Gas selection */}
              <div>
                <label className="block text-[12px] font-bold text-[#001428] mb-1.5">
                  {lang === 'KOR' ? '환산 대상 가스 선택' : 'Select Gas'}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {Object.entries(GAS_PROPERTIES).map(([key, prop]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedGas(key)}
                      className={`p-2 rounded-lg text-[12px] font-semibold border text-center transition-all ${
                        selectedGas === key
                          ? 'bg-[#0f2942] text-white border-[#0f2942]'
                          : 'bg-white border-[#E2E8F0] text-[#43474d] hover:border-[#00658d]'
                      }`}
                    >
                      {lang === 'KOR' ? prop.nameKo : prop.nameEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-bold text-[#001428] mb-1.5">
                    {lang === 'KOR' ? '수량 입력' : 'Input Value'}
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={inputValue}
                    onChange={(e) => setInputValue(parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] text-[14px] font-mono focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#001428] mb-1.5">
                    {lang === 'KOR' ? '기준 단위' : 'Input Unit'}
                  </label>
                  <select
                    value={inputUnit}
                    onChange={(e) => setInputUnit(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] text-[13px] focus:border-[#38BDF8] outline-none bg-white"
                  >
                    <option value="nm3">기체 체적: Nm³ (Normal ㎥)</option>
                    <option value="kg">질량 중량: kg (Kilograms)</option>
                    <option value="liquidLiters">초저온 액화 체적: L (Liquid Liters)</option>
                  </select>
                </div>
              </div>

              {/* Conversion Result Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-[11px] text-[#74777e] font-semibold block uppercase">기체 표준체적</span>
                  <div className="text-[20px] font-bold font-mono text-[#001428] mt-1">
                    {resultNm3.toLocaleString('ko-KR', { maximumFractionDigits: 2 })}
                    <span className="text-[13px] text-[#00658d] ml-1 font-sans font-bold">Nm³</span>
                  </div>
                  <span className="text-[11px] text-[#74777e]">0℃, 1기압 기준</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-[11px] text-[#74777e] font-semibold block uppercase">가스 순중량</span>
                  <div className="text-[20px] font-bold font-mono text-[#001428] mt-1">
                    {resultKg.toLocaleString('ko-KR', { maximumFractionDigits: 2 })}
                    <span className="text-[13px] text-[#00658d] ml-1 font-sans font-bold">kg</span>
                  </div>
                  <span className="text-[11px] text-[#74777e]">
                    ({(resultKg / 1000).toFixed(3)} ton)
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-[11px] text-[#74777e] font-semibold block uppercase">초저온 액화 체적</span>
                  <div className="text-[20px] font-bold font-mono text-[#001428] mt-1">
                    {resultLiters.toLocaleString('ko-KR', { maximumFractionDigits: 1 })}
                    <span className="text-[13px] text-[#00658d] ml-1 font-sans font-bold">L (액)</span>
                  </div>
                  <span className="text-[11px] text-[#74777e]">비등점 액체 기준</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="p-3 bg-[#edf4ff]/60 border border-[#c6e7ff] rounded-xl text-[12px] text-[#43474d] flex items-start gap-2">
                <Info size={16} className="text-[#00658d] mt-0.5 flex-shrink-0" />
                <span>
                  {lang === 'KOR'
                    ? '배관 및 저장탱크의 잔존 가연성/산소 농도를 1% 이하로 안전 치환하기 위한 권장 질소(N₂) 소요량 시뮬레이션입니다.'
                    : 'Calculates recommended nitrogen inerting volume for pipeline and tank turnarounds to suppress oxygen below 1%.'}
                </span>
              </div>

              {/* Selection Mode */}
              <div className="flex gap-2">
                <button
                  onClick={() => setCalcMode('pipe')}
                  className={`flex-1 py-2 px-3 rounded-lg text-[12px] font-semibold border ${
                    calcMode === 'pipe' ? 'bg-[#0f2942] text-white' : 'bg-white text-[#43474d]'
                  }`}
                >
                  배관 라인 (Pipeline)
                </button>
                <button
                  onClick={() => setCalcMode('tank')}
                  className={`flex-1 py-2 px-3 rounded-lg text-[12px] font-semibold border ${
                    calcMode === 'tank' ? 'bg-[#0f2942] text-white' : 'bg-white text-[#43474d]'
                  }`}
                >
                  저장탱크 (Storage Tank)
                </button>
              </div>

              {calcMode === 'pipe' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold text-[#001428] mb-1">
                      배관 구경 (Pipe Diameter)
                    </label>
                    <select
                      value={pipeDiameterInch}
                      onChange={(e) => setPipeDiameterInch(parseFloat(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-[#E2E8F0] text-[13px] bg-white"
                    >
                      <option value="2">2 inch (약 50 mm)</option>
                      <option value="4">4 inch (약 100 mm)</option>
                      <option value="6">6 inch (약 150 mm)</option>
                      <option value="8">8 inch (약 200 mm)</option>
                      <option value="12">12 inch (약 300 mm)</option>
                      <option value="16">16 inch (약 400 mm)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-[#001428] mb-1">
                      배관 전체 길이 (Length in Meters)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={pipeLengthMeter}
                      onChange={(e) => setPipeLengthMeter(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 rounded-lg border border-[#E2E8F0] text-[13px]"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-[12px] font-bold text-[#001428] mb-1">
                    저장탱크 기하학적 용적 (Geometric Tank Volume in ㎥)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={tankVolumeM3}
                    onChange={(e) => setTankVolumeM3(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg border border-[#E2E8F0] text-[13px]"
                  />
                </div>
              )}

              {/* Safety factor */}
              <div>
                <label className="block text-[12px] font-bold text-[#001428] mb-1">
                  치환 계수 (Purge Safety Factor)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPurgeCycles(2.0)}
                    className={`p-2 rounded border text-[12px] ${purgeCycles === 2.0 ? 'bg-[#edf4ff] border-[#00658d] font-bold text-[#00658d]' : 'bg-white'}`}
                  >
                    스위프 치환 (2.0 배수)
                  </button>
                  <button
                    onClick={() => setPurgeCycles(3.5)}
                    className={`p-2 rounded border text-[12px] ${purgeCycles === 3.5 ? 'bg-[#edf4ff] border-[#00658d] font-bold text-[#00658d]' : 'bg-white'}`}
                  >
                    압력 사이클링 치환 (3.5 배수)
                  </button>
                </div>
              </div>

              {/* Simulation Result */}
              <div className="bg-[#001428] text-white p-5 rounded-xl space-y-3">
                <div className="flex justify-between items-baseline border-b border-[#1E3A56] pb-2">
                  <span className="text-[12px] text-[#c3c6ce]">대상 설비 내부 기하체적</span>
                  <span className="font-mono text-[16px] font-bold">{internalVolumeM3.toFixed(2)} m³</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-[#1E3A56] pb-2">
                  <span className="text-[12px] text-[#38BDF8] font-bold">권장 필요 질소 가스 총량</span>
                  <span className="font-mono text-[22px] font-bold text-[#38BDF8]">
                    {requiredNitrogenNm3.toFixed(1)} Nm³ ({requiredNitrogenKg.toFixed(1)} kg)
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1 text-[12px]">
                  <div className="bg-[#0f2942] p-2.5 rounded">
                    <span className="text-[#c3c6ce] block">47L 실린더 기준</span>
                    <span className="text-[15px] font-bold text-white">약 {cylindersNeeded} 병</span>
                  </div>
                  <div className="bg-[#0f2942] p-2.5 rounded">
                    <span className="text-[#c3c6ce] block">175L LGC 초저온용기 기준</span>
                    <span className="text-[15px] font-bold text-white">약 {lgcsNeeded} 기</span>
                  </div>
                </div>
              </div>
            </div>
          )}
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
