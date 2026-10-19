export interface BranchLocation {
  id: string;
  region: '영남권(본사)' | '수도권·중부' | '호남·충청';
  name: string;
  nameEn: string;
  type: '본사 및 공장' | '생산거점' | '물류기지' | '영업소';
  address: string;
  addressEn: string;
  tel: string;
  fax: string;
  keyFacilities: string[];
}

export const BRANCH_LOCATIONS: BranchLocation[] = [
  {
    id: 'busan-hq',
    region: '영남권(본사)',
    name: '(주)MS가스 본사 및 부산공장',
    nameEn: 'Busan Headquarters & Main Production Center',
    type: '본사 및 공장',
    address: '부산광역시 사상구 학감대로 123번길 45',
    addressEn: '45, Hakgam-daero 123beon-gil, Sasang-gu, Busan, Republic of Korea',
    tel: '051-312-3000',
    fax: '051-312-3005',
    keyFacilities: ['초저온 산소/질소/아르곤 저장탱크 450톤', 'KOLAS 인정 가스분석실', 'KGMP 의료용 가스 충전동', '24/7 종합안전관제실']
  },
  {
    id: 'pohang-plant',
    region: '영남권(본사)',
    name: '포항 특수가스 정밀 공장',
    nameEn: 'Pohang Specialty & Laser Gas Plant',
    type: '생산거점',
    address: '경상북도 포항시 남구 철강산단로 88',
    addressEn: '88, Cheolgangsandan-ro, Nam-gu, Pohang-si, Gyeongsangbuk-do',
    tel: '054-281-5500',
    fax: '054-281-5509',
    keyFacilities: ['초순수 헬륨/수소 초고압 충전설비', '엑시머 레이저 믹스가스 제조 라인', '초저온 진공배관 정밀 테스트베드']
  },
  {
    id: 'ulsan-onsan',
    region: '영남권(본사)',
    name: '울산 온산 국가산업단지 기지 (특구 R&D 거점)',
    nameEn: 'Ulsan Onsan Eco-Clean Gas & Ammonia Bunkering Terminal',
    type: '물류기지',
    address: '울산광역시 울주군 온산읍 공단로 210',
    addressEn: '210, Gongdan-ro, Onsan-eup, Ulju-gun, Ulsan',
    tel: '052-238-7711',
    fax: '052-238-7715',
    keyFacilities: ['암모니아 실증 TTS 벙커링 전용 터미널', '초저온 질소 대용량 퍼지 탱크로리 선단', '해상 벙커링 안전관제 스키드']
  },
  {
    id: 'dangjin-plant',
    region: '수도권·중부',
    name: '당진 중부 생산본부 및 물류기지',
    nameEn: 'Dangjin Central Production & Tanker Logistics Base',
    type: '생산거점',
    address: '충청남도 당진시 송악읍 부곡공단로 156',
    addressEn: '156, Bugokgongdan-ro, Songak-eup, Dangjin-si, Chungcheongnam-do',
    tel: '041-356-9100',
    fax: '041-356-9105',
    keyFacilities: ['철강산업용 산소 대용량 기화공급설비', '초저온 탱크로리 20대 동시 출하 스탠드', '탄소저감형 폐열회수 기화기']
  },
  {
    id: 'hwaseong-office',
    region: '수도권·중부',
    name: '화성·평택 반도체 특수가스 지원센터',
    nameEn: 'Hwaseong & Pyeongtaek Semiconductor Gas Technical Center',
    type: '영업소',
    address: '경기도 화성시 동탄기흥로 602 벤처타운',
    addressEn: '602, Dongtangiheung-ro, Hwaseong-si, Gyeonggi-do',
    tel: '031-8015-4420',
    fax: '031-8015-4425',
    keyFacilities: ['반도체 6N급 특수가스 긴급 납품 창고', '고순도 가스 레귤레이터 및 피팅 부품 창고', '온사이트 엔지니어링 팀 상주']
  },
  {
    id: 'gwangyang-base',
    region: '호남·충청',
    name: '광양·여수 화학단지 공급 기지',
    nameEn: 'Gwangyang & Yeosu Petrochemical Supply Logistics Base',
    type: '물류기지',
    address: '전라남도 광양시 태인동 국가산단로 77',
    addressEn: '77, Gukgasandan-ro, Taein-dong, Gwangyang-si, Jeollanam-do',
    tel: '061-792-3300',
    fax: '061-792-3305',
    keyFacilities: ['대규모 플랜트 TA 질소 치환 전용 펌프 차량', '고압 탄산 및 아르곤 실린더 번들 자동화 적재장']
  }
];
