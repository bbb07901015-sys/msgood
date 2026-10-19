export interface GasProduct {
  id: string;
  category: 'industrial' | 'fuel' | 'specialty' | 'medical' | 'standard' | 'equipment';
  categoryLabel: string;
  categoryTag: string;
  title: string;
  titleEn: string;
  badge: string;
  badgeType?: 'primary' | 'cyan' | 'secondary';
  description: string;
  descriptionEn: string;
  tags: string[];
  footerActionText: string;
  footerNote: string;
  imageUrl: string;
  imageAlt: string;
  specs: {
    formula?: string;
    purity: string;
    unNumber?: string;
    casNumber?: string;
    supplyMethods: string[];
    majorApplications: string[];
    safetyClassification: string;
    storageConditions: string;
  };
  msdsSummary: {
    hazardClass: string;
    precautionaryStatements: string[];
    emergencyContact: string;
  };
}

export const GAS_PRODUCTS: GasProduct[] = [
  {
    id: 'industrial-gas',
    category: 'industrial',
    categoryLabel: '산업용',
    categoryTag: 'INDUSTRIAL GAS',
    title: '산업용 가스',
    titleEn: 'Industrial Bulk & Cylinder Gases',
    badge: '초고순도 99.999%',
    badgeType: 'secondary',
    description: '제조공정, 철강, 조선, 용접 등 제조 전반에 필수적인 산소(O₂), 질소(N₂), 아르곤(Ar), 탄산(CO₂) 등 고품질 대용량 벌크 및 실린더 공급.',
    descriptionEn: 'Essential for manufacturing, steel, shipbuilding, and precision welding: high-purity liquid oxygen (O₂), nitrogen (N₂), argon (Ar), and carbon dioxide (CO₂) available via bulk cryogenic trailers and high-pressure cylinders.',
    tags: ['액화산소(L-O₂)', '액화질소(L-N₂)', '아르곤(Ar)', '액화탄산(L-CO₂)'],
    footerActionText: '상세 규격 및 MSDS',
    footerNote: '배관 / 초저온용기 대응',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM-2pKHwTknCJVCcBmYyuek4lhWgZ3GtVXvk0vGbpUl5VU0dweXNWJIMCR0CB587vvtgJhd9GHzFAxsV1VEbpCBuQew8_RkxZtk6qNOSkH-NJ2lV3hRdicknHLe_PBvk1f1a825KUlUqCzn_pqr5zS39-jvNlNPCWEl1VckO-UeNVPsPE37s3cYsquTj4A5gndF7kq0F5jV5ysAcxIXyM-0vWSVthKpAkqSerKCO3NOiXA3UTRpzgS',
    imageAlt: 'Modern high-pressure manifold gas cylinders and large nitrogen oxygen argon industrial cryogenic bulk storage tanks',
    specs: {
      formula: 'O₂, N₂, Ar, CO₂',
      purity: '99.999% 이상 (High Purity 5N 등급)',
      unNumber: 'UN 1072 (O₂), UN 1066 (N₂), UN 1006 (Ar), UN 1013 (CO₂)',
      casNumber: '7782-44-7 (O₂), 7727-37-9 (N₂), 7440-37-1 (Ar)',
      supplyMethods: ['초저온 탱크로리 직송 (10~25톤)', 'LGC 초저온 액화용기 (175L)', '고압 가스 실린더 번들 (16/30병)', '단품 실린더 (47L/40L)'],
      majorApplications: ['철강 제련 및 절단·용접', '석유화학 플랜트 질소 치환/퍼지', '식음료 충전 및 급속 냉동', '수처리 및 환경 정화'],
      safetyClassification: '고압가스안전관리법 제2조 (압축/액화가스, 조연성 및 불연성 가스)',
      storageConditions: '환기가 양호한 직사광선 차단 구역 (40℃ 이하 보관)'
    },
    msdsSummary: {
      hazardClass: 'Class 2.2 비인화성 무독성 고압가스 (산소: Class 2.2 + 5.1 산화성)',
      precautionaryStatements: [
        '산소 취급 시 유류 및 가연물과의 접촉을 엄금하십시오.',
        '밀폐 공간에서 질소/아르곤 누출 시 급격한 산소 결핍(질식) 위험에 유의하십시오.',
        '용기 전도 방지 체인 및 안전캡 체결 상태를 항상 유지하십시오.'
      ],
      emergencyContact: '051-312-3000 (24시간 가스안전관제센터)'
    }
  },
  {
    id: 'fuel-gas',
    category: 'fuel',
    categoryLabel: '산업용',
    categoryTag: 'FUEL GAS',
    title: '연료용 가스',
    titleEn: 'Industrial High-Calorie Fuel Gases',
    badge: '고발열량 친환경',
    badgeType: 'secondary',
    description: '산업체 열원 공급 및 청정 에너지 연료. 프로판, 프라멕스, 에탄, 부탄, 이소부탄 등 균일한 연소성과 고효율 발열량을 보장합니다.',
    descriptionEn: 'High thermal efficiency clean fuels for industrial boilers, kilns, and metal cutting. Providing uniform combustion and high calorie output with lower carbon emissions.',
    tags: ['프로판(Propane)', '프라멕스(Flammex)', '부탄(Butane)', '이소부탄(i-C₄H₁₀)'],
    footerActionText: '상세 규격 및 MSDS',
    footerNote: '탱크로리 직송 가능',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChPCFRKmhCbEI9buHIt2mGP6KX9R1oH4eD1KRsFsdYFg4qDnu8E9XI9HXoCFKZWEl0giZxFm_q7qtMSchvTaC_Yc2P18_fYKgfr0ZjaGr6xIHbvwJxXnPzbyY4tF4EuRFMwklFRBlGIR0zKf5AgC-J29VTNt86QgBlEM1C_2ByaEfK7EBzgZ91kAgGlbGZTLjrg0qnVKkuWD3-_eiM5uZPOrzAm0E3VMWRYsV9F-PPEIA-PXTfj8oC',
    imageAlt: 'Dynamic industrial blue gas burner combustion nozzles firing clean precision flame rings in a high-tech facility',
    specs: {
      formula: 'C₃H₈, C₄H₁₀, Flammex Blend',
      purity: 'HD-5 프로판 95% 이상 / 고순도 99.5%',
      unNumber: 'UN 1978 (프로판), UN 1011 (부탄)',
      casNumber: '74-98-6 (프로판), 106-97-8 (부탄)',
      supplyMethods: ['벌크로리 공급 (10톤/20톤)', '산업용 50kg 실린더', '소형 저장탱크 (0.5t ~ 2.9t) 임대 및 설치'],
      majorApplications: ['선박 건조 및 후판 정밀 절단(Flammex)', '산업용 건조로 및 열처리로 열원', '금속 열가공 및 납땜용 화염', '청정 비상발전 및 농축산 온실'],
      safetyClassification: '액화석유가스(LPG) 안전관리법 및 고압가스안전관리법 가연성 가스',
      storageConditions: '통풍이 원활한 옥외 전용 저장소, 화기 엄금 구역 (화기와의 거리 8m 이상)'
    },
    msdsSummary: {
      hazardClass: 'Class 2.1 인화성 가스 (Flammable Gas Category 1)',
      precautionaryStatements: [
        '점화원, 정전기 방전, 스파크, 개방 화염으로부터 멀리하십시오.',
        '누출 시 즉시 메인밸브를 차단하고 방폭 환기설비를 가동하십시오.',
        '가스누출감지기 및 역화방지기(Flashback Arrestor) 장착 필수.'
      ],
      emergencyContact: '051-312-3000 (24시간 비상대응반)'
    }
  },
  {
    id: 'specialty-gas',
    category: 'specialty',
    categoryLabel: '특수·반도체용',
    categoryTag: 'SPECIALTY GAS',
    title: '특수 가스',
    titleEn: 'Semiconductor & Ultra-Pure Specialty Gases',
    badge: '6N Ultra Pure',
    badgeType: 'cyan',
    description: '반도체, 디스플레이, 광통신, 이차전지 등 첨단 공정에 사용되는 초고순도 특수가스 및 특수 불활성 가스 혼합체.',
    descriptionEn: 'Ultra-high purity (6N: 99.9999%) specialty gases engineered for semiconductor wafer fabrication, optical fibers, microelectronics, and advanced battery cells.',
    tags: ['초순수 헬륨(He)', '고순도 수소(H₂)', '레이저 믹스 가스', '육불화황(SF₆)'],
    footerActionText: '상세 규격 및 MSDS',
    footerNote: '정밀 실린더 패키지',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3hvjtnUuGGXxJKp9sx58xUETZbEpwNi6cYIGFYb-WtG1vM8lAptpfqKRemDI4PHXaY5qrOKF8L5dW5hGaHXfVCjd9hzTzozGYKjl0bgtpgO2CSU7I2XBJjKse-JAYEr6AQlvMsJ7mcjN_oolZDeKJr9s6oZfHMNhJatsUo8mUlOfdVtEjWXlHS-tSZjpPXluQ_aLr5AJHu6yPgEwOCFIIfyWG-9fqt4qHoq5I-QNCHfl3yJWb0rIq',
    imageAlt: 'Advanced semiconductor wafer fab robotic arm operating inside an ultra-cleanroom illuminated by clean lighting',
    specs: {
      formula: 'He, H₂, SF₆, Kr, Xe, Laser Mix',
      purity: '99.9999% (6N) ~ 99.99999% (7N) 전자급',
      unNumber: 'UN 1046 (He), UN 1049 (H₂), UN 1080 (SF₆)',
      casNumber: '7440-59-7 (He), 1333-74-0 (H₂), 2551-62-4 (SF₆)',
      supplyMethods: ['정밀 내면연마 특수 알루미늄/크롬몰리 실린더', 'ISO 튜브 트레일러', 'Y-Cylinder 고압 패키지'],
      majorApplications: ['반도체 에칭 및 화학기상증착(CVD)', '차세대 디스플레이(OLED) 열처리 공정', '초정밀 엑시머 레이저 발진기 가스', '초전도체 및 MRI 냉각용 액화헬륨'],
      safetyClassification: '독성가스/불활성가스/가연성가스 규격별 엄격 관리',
      storageConditions: '클린룸 연계 방폭/내화 가스 캐비닛 내 보관 (Scrubber 연계)'
    },
    msdsSummary: {
      hazardClass: 'Class 2.2 (He, SF₆) / Class 2.1 (H₂ 극인화성)',
      precautionaryStatements: [
        'DCS/수소 설비는 초정밀 누출센서 및 자동 질소퍼지 라인과 상시 연동하십시오.',
        '내면 특수 코팅 용기는 전용 가스 레귤레이터를 사용하여야 오염이 방지됩니다.',
        '불활성 가스 취급 구역에는 산소 농도 측정기를 의무 설치하십시오.'
      ],
      emergencyContact: '051-312-3000 (특수가스 기술팀)'
    }
  },
  {
    id: 'medical-gas',
    category: 'medical',
    categoryLabel: '의료·표준',
    categoryTag: 'MEDICAL GAS',
    title: '의료용 가스',
    titleEn: 'KGMP Certified Pharmaceutical Medical Gases',
    badge: '식약처 KGMP 승인',
    badgeType: 'secondary',
    description: '전국 종합병원, 병의원 및 연구소 공급용 의료용 산소, 아산화질소, 멸균가스. 완벽한 약전 규격 및 생명 안전 품질 관리.',
    descriptionEn: 'Certified medical grade oxygen, nitrous oxide, and sterile gas mixtures approved by MFDS (Korea GMP). Delivered under strict pharmaceutical quality and life safety audits.',
    tags: ['의료용 산소(O₂)', '아산화질소(N₂O)', '의료용 탄산', '의료용 공기(Air)'],
    footerActionText: '상세 규격 및 MSDS',
    footerNote: '의약품 제조 기준 준수',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLmgLPW5-VjV0iWV27k2uou_rZr49AxuCyGEnMrCEL6orGC3TXntYFXtDFUj8KQpRDezTh1Ttj-NKN3CAtuiVGbs-gKlQhsrPOjOqJjapzz4eK9xiWVAMk_jvcTLO7g9YSl9WAUMeqHj5QxGg1QZqBBa4vHUJF29vUpueSDN-6VB176GmnWsMthuLHZqJcj1PZwTHRz2FoY2w7pX2VqHritrKLR0c1r1Q1kr4-coiFA2F8Zx_14CXK',
    imageAlt: 'Surgical operating theatre equipment in modern hospital with medical gas supply panels on the wall',
    specs: {
      formula: 'Medical O₂, N₂O, CO₂, Air',
      purity: '대한민국약전(KP) 기준 적합 99.5% 이상',
      unNumber: 'UN 1072 (의료용 산소), UN 1070 (아산화질소)',
      casNumber: '7782-44-7 (산소), 10024-97-2 (아산화질소)',
      supplyMethods: ['병원 전용 액화산소 초저온 저장탱크', '의료용 전용 LGC 용기', '식약처 인증 각인 의료용 실린더 (10L/40L/47L)'],
      majorApplications: ['수술실 및 중환자실 인공호흡기 호흡 지원', '흡입 마취 유도 및 진통 관리 (N₂O)', '복강경 수술 시 기복 형성 (Medical CO₂)', '신생아 호흡 치료 및 구급차량 응급 키트'],
      safetyClassification: '의약품(전문의약품) 및 고압가스안전관리법 동시 규제',
      storageConditions: '의약품 전용 온도관리 저장소, 일반 산업용 가스와 완전 분리 보관'
    },
    msdsSummary: {
      hazardClass: '의약품 허가 번호 취득 품목 (조연성 및 산화성 고압가스)',
      precautionaryStatements: [
        '환자 호흡용 배관 연결 전 전용 식별 핀인덱스(Pin-Index) 규격을 반드시 확인하십시오.',
        '고농도 산소실 내 화기, 전자레인지, 정전기 발생 물품 반입을 금지합니다.',
        '정기적인 약전 미생물 및 수분 검사 성적서를 구비하십시오.'
      ],
      emergencyContact: '051-312-3000 (의료가스 전담 긴급지원팀)'
    }
  },
  {
    id: 'standard-gas',
    category: 'standard',
    categoryLabel: '의료·표준',
    categoryTag: 'STANDARD GAS',
    title: '표준 가스',
    titleEn: 'KOLAS Traceable Calibration & Standard Gases',
    badge: 'KOLAS 성적서 제공',
    badgeType: 'secondary',
    description: '환경 대기 측정, 계측기 교정, 연구소 분석용 고정밀 혼합 표준가스. ppm 및 ppb 단위의 균질성과 신뢰성 있는 소급성 보장.',
    descriptionEn: 'High-precision calibration gases for continuous emissions monitoring (CEMS), environmental analysis, and R&D instrumentation with certified national measurement traceability.',
    tags: ['대기측정용 표준가스', '다성분 정밀혼합가스', '교정용 가스', 'Zero Air / N₂'],
    footerActionText: '상세 규격 및 MSDS',
    footerNote: '국가공인 성적서 발급',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXud3hBfeXtWB_j3NHDxNszsfL9G6caFgdHH8e1xiyKTeJkhlyLhDcG_nDX94P5dhH-0_l2C7-IDP53zmqpULxFSxx_p-BhmW-Rj_29DsIrS2iUzZ2oQ53sPyjNphFGI-_QMQ-D7hnb9zl2eXnZCH7gDP9jPUc4wsqi12ZcV_1dNzSCyrLww8i3yNTtseElTOlNsggFNxk3DuG5kjnGJ6851c6BXErxl5Sseaizcd7ts93r3WVTOA4',
    imageAlt: 'Chromatography analytical instrumentation and high-precision calibration gas cylinders in a gas metrology laboratory',
    specs: {
      formula: 'Multi-component standard mixtures (ppm / ppb level)',
      purity: '상대 확장 불확도 ±1.0% 이내 (KRISS 소급 체계)',
      unNumber: 'UN 1956 (압축가스 혼합물 N.O.S)',
      casNumber: '혼합가스 성분에 따름',
      supplyMethods: ['내면 특수 패시베이션 알루미늄 실린더 (10L/47L)', '연구용 미니 실린더', '온사이트 교정 카트리지'],
      majorApplications: ['굴뚝 TMS(원격감시체계) 연속 배출가스 교정', '자동차 배출가스 검사 장비 교정', '대학 및 기업 R&D 연구소 정밀 분석', '방사능/악취/VOCs 미량 검출 기준가스'],
      safetyClassification: '혼합 성분 및 농도에 따른 개별 GHS 및 안전분류 적용',
      storageConditions: '온도 15~25℃ 항온 항습 구역 보관 (성분 층화 방지)'
    },
    msdsSummary: {
      hazardClass: '혼합 조성에 따른 개별 MSDS 발행 (불연성/독성/가연성 배합별 분류)',
      precautionaryStatements: [
        '성적서에 기재된 유효기간(Shelf Life) 내에 사용하여야 소급성이 보장됩니다.',
        '미량 성분 흡착 방지를 위해 전용 스테인리스 스틸 이중 레귤레이터를 권장합니다.',
        '직사광선 노출을 피하고 실린더를 눕히지 마십시오.'
      ],
      emergencyContact: '051-312-3000 (표준가스 분석연구소)'
    }
  },
  {
    id: 'equipment-systems',
    category: 'equipment',
    categoryLabel: '산업용',
    categoryTag: 'EQUIPMENT & SYSTEMS',
    title: '기타 가스 장비 및 설비',
    titleEn: 'Cryogenic Equipment & Engineering Skids',
    badge: '설계·시공 턴키',
    badgeType: 'secondary',
    description: '가스 기화기, 초저온 저장탱크, 고압 매니폴드, 배관 엔지니어링 및 안전 자동차단 장치 등 설비 설계부터 시공까지 일괄 지원.',
    descriptionEn: 'Full turnkey solutions covering cryogenic vacuum-insulated tanks, ambient air vaporizers, auto-changeover manifolds, gas piping skids, and KGS safety compliance inspections.',
    tags: ['초저온 저장탱크', '자동 절체기(Manifold)', '대용량 기화기', '가스감지 경보제어반'],
    footerActionText: '상세 규격 및 MSDS',
    footerNote: '정기 안전점검 연계',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_U_XgZB2LrV5--ToCP6L-cjhRQ_WeY0p4evbGtif6QGNJWNxaYcwMppvo2dgD4WoBH263jfCzJYN8rGadHz6ujt1zZXNMhIetIYHVeZI5ZQurnBIQhUR7Oq3GuuDgaNoRL5kfVL1plAZxowZhvCN2OoyGtinNAVxNv76_Hc8fF59oFhdArdZxdhfKzWH_Cuulj5qtQLysIPfVPl7xARg1qQ7m8XbzoWO5AtLsbSatB7ULngefZE89',
    imageAlt: 'Industrial cryogenic liquefied gas vaporizers, high-pressure regulator skids, and automated PLC control panels',
    specs: {
      formula: 'Cryogenic Hardware Systems & Skids',
      purity: '설계 압력 최대 300bar / 초저온 -196℃ 대응',
      unNumber: '해당 없음 (기자재 및 플랜트 설비)',
      casNumber: '해당 없음',
      supplyMethods: ['현장 엔지니어링 직시공 및 턴키 인도', '한국가스안전공사(KGS) 완성검사 필증 수검 대행'],
      majorApplications: ['공장 신축 가스 공급 메인 배관망 설계 시공', '기화기 동결 방지 가열 시스템 설치', '2원화 자동 절체 매니폴드로 가스 무중단 공급', '가스누출 자동 비상차단밸브(ESV) 구축'],
      safetyClassification: '고압가스안전관리법 특정설비 제조 및 시공 기준 준수',
      storageConditions: '진공 단열 성능 정기 검사 및 연 1회 안전진단 필수'
    },
    msdsSummary: {
      hazardClass: '산업안전보건법 및 고압가스안전관리법 특정설비 안전 기준',
      precautionaryStatements: [
        '초저온 배관 작업 시 안전변(Safety Valve) 및 벤트라인 개방 여부를 사전 점검하십시오.',
        '비상 정지 버튼(EMO) 위치를 현장 작업자 모두에게 숙지시키십시오.',
        '정기 기밀시험 및 비파괴검사(NDT) 기록을 보존하십시오.'
      ],
      emergencyContact: '051-312-3000 (엔지니어링 기술지원부)'
    }
  }
];
