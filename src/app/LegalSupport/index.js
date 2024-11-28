'use client';

import styles from './styles.module.css';
import React from 'react';
const legalOrganizations = {
  copyright: {
    title: "저작권 관련 기관",
    icon: "©️",
    organizations: [
      {
        id: 1,
        name: "한국콘텐츠진흥원 콘텐츠분쟁조정위원회",
        description: "전문가로 구성된 콘텐츠분쟁조정위원회가 분쟁 조정을 담당합니다. 조정 성립시 법원의 확정 판결과 같은 효력을 가집니다.",
        services: {
          phone: {
            available: true,
            number: "1588 - 2594",
            hours: "평일 9:00 - 18:00"
          },
          visit: {
            available: false,
            location: "[06131] 서울특별시 강남구 논현로 525 한국콘텐츠진흥원 콘텐츠분쟁조정위원회 사무국",
            reservation: false
          },
          online: {
            available: true,
            platform: "온라인 상담",
            url: "https://www.kcdrc.kr/login.do?retUrl=%2Fcnsl%2Fmem%2Fwrite.do"
          }
        },
        supportTypes: [
          "콘텐츠 거래 분쟁 조정",
          "계약 문구 다툼 조정", 
          "온라인 상담"
        ],
        website: "https://www.kcdrc.kr/"
      },
      {
        id: 2,
        name: "예술인복지재단 (예술인 신문고)",
        description: "예술 활동 관련 불공정 행위 피해구제 및 분쟁 조정, 법률 상담 등을 지원합니다.",
        services: {
          phone: {
            available: true,
            number: "02-3668-0200",
            hours: "평일 09:00 - 18:00 (점심시간: 12:00 - 13:00)"
          },
          visit: {
            available: true,
            location: "(04637) 서울특별시 중구 한강대로 416 서울스퀘어 3층",
            reservation: true
          },
          online: {
            available: true,
            platform: "상담신청 게시판",
            url: "https://www.kawfartist.kr/hkor/no/no02/consultUser/list.do"
          }
        },
        supportTypes: [
          "임금 미지급",
          "저작권 분쟁",
          "계약 및 저작권 법률상담"
        ],
        website: "http://www.kawf.kr/"
      },
      {
        id: 3,
        name: "한국저작권위원회",
        description: "국내 저작권 분쟁 조정, 법률 상담 등을 지원합니다.",
        services: {
          phone: {
            available: true,
            number: "1800-5455", 
            hours: "평일 9:00 - 18:00"
          },
          visit: {
            available: true,
            location: "(서울) 서울특별시 용산구 후암로 107, 5/16층 (진주) 경상남도 진주시 소호로 117, 1층 민원상담실",
            reservation: true
          },
          online: {
            available: true,
            platform: "저작권 법률문의 게시판",
            url: "https://www.copyright.or.kr/business/counsel/law/write.do"
          }
        },
        supportTypes: [
          "저작권 분쟁 조정",
          "저작권 법률상담",
          "저작권 교육"
        ],
        website: "https://www.copyright.or.kr"
      }
    ]
  },
  contract: {
    title: "계약/노동 관련 기관",
    icon: "📝",
    organizations: [
      {
        id: 4,
        name: "서울시 공정거래 종합상담센터",
        description: "예술인의 직업적 지위와 권리 보호를 위한 지원 기관",
        services: {
          phone: {
            available: true,
            number: "1600-0700 (단축번호 3번)",
            hours: "평일 9:00 - 18:00"
          },
          visit: {
            available: true,
            location: "서울시 중구 서소문로 124, 7층",
            reservation: true
          },
          online: {
            available: true,
            platform: "온라인 상담신청",
            url: "https://sftc.seoul.go.kr/fe/ca/cnslt/NR_list.do"
          }
        },
        supportTypes: [
          "계약서 검토",
          "저작권 침해, 불공정계약 강요, 대금체불 등 불공정피해 상담",
          "내용증명, 신고서, 소장 등 작성 지원"
        ],
        website: "https://sftc.seoul.go.kr"
      },
      {
        id: 5,
        name: "만화인 헬프테스크",
        description: "만화분야 창작자 및 기업의 애로사항을 해소하기 위한 1:1 무료 상담 서비스",
        services: {
          phone: {
            available: true,
            number: "032-655-1120/ 032-310-3084",
            hours: "평일 10:00 - 12:00, 13:00 - 16:00"
          },
          visit: {
            available: true,
            location: "경기도 부천시 원미구 길주로",
            reservation: true
          },
          online: {
            available: true,
            platform: "온라인 상담신청",
            url: "https://www.komacon.kr/komacon/news/helpdesk_write.asp"
          }
        },
        supportTypes: [
          "계약 관련 상담",
          "노동 관련 상담"
        ],
        website: "https://www.komacon.kr"
      }
    ]
  },
  harassment: {
    title: "성희롱/성폭력 관련 기관",
    icon: "🚨",
    organizations: [
      {
        id: 6,
        name: "여성긴급전화 1366",
        description: "24시간 성폭력 피해 상담 및 지원센터",
        services: {
          phone: {
            available: true,
            number: "1366",
            hours: "24시간 연중무휴"
          },
          visit: {
            available: true,
            location: "전국 시/도 센터",
            reservation: false
          },
          online: {
            available: true,
            platform: "온라인 상담",
            url: "https://www.women1366.kr/stopds/"
          }
        },
        supportTypes: [
          "긴급상담",
          "의료지원",
          "법률지원",
          "보호시설 연계"
        ],
        website: "https://www.women1366.kr"
      },
      {
        id: 7,
        name: "예술인복지재단 (예술인 신문고)",
        description: "예술인 권익 보호 및 분쟁 조정 지원",
        services: {
          phone: {
            available: true,
            number: "02-3668-0266",
            hours: "평일 10:00 - 17:00 (점심시간 12:00 - 13:00)"
          },
          visit: {
            available: true,
            location: "(04637) 서울특별시 중구 한강대로 416 서울스퀘어 3층",
            reservation: true
          },
          online: {
            available: true,
            platform: "이메일",
            url: "withu@kawf.kr"  
          }
        },
        supportTypes: [
          "법률지원",
          "심리상담 지원",
          "의료 지원",
          "관련 전문기관 연계"
        ],
        website: "https://www.kawf.kr"
      }
    ]
  },
  others: {
    title: "기타 지원 기관",
    icon: "🔍",
    organizations: [
      {
        id: 9,
        name: "(사)한국만화가협회",
        description: "창작자의 권익 보호 및 작품 활동 지원하는 협회",
        services: {
          phone: {
            available: false,
            number: "02-757-8485~7",
            hours: "평일 09:00 - 12:00, 13:00 - 18:00"
          },
          visit: {
            available: true,
            location: "서울 마포구 월드컵북로 4길(선착순 한시 운영)",
            platform: "1Day 저작권 법률 상담소",
            url: "https://www.cartoon.or.kr/board/?pIdx=board&B_Name=center&b_dir=bbs&category=notice&search=&searchstring=&b_url=contents&list_no=2821&page=1",
            reservation: true
          },
          online: {
            available: true,
            email: "coreamanhwa@cartoon.or.kr"  
          }
        },
        supportTypes: [
          "계약서 검토",
          "불공정행위 신고",
          "변호사 이메일 상담"
        ],
        website: "https://www.cartoon.or.kr/"
      },
      {
        id: 10,
        name: "대한법률구조공단",
        description: "경제적으로 어렵거나 법률지식이 부족해 법의 보호를 충분히 받지 못하는 국민의 기본적 인권 옹호를 위해 법률상담, 소송대리 및 형사변호 등의 법률서비스를 지원하는 사회복지 제공 시설",
        services: {
          phone: {
            available: true,
            number: "132",
            hours: "평일 09:00 - 18:00"
          },
          visit: {
            available: true,
            location: "각 시도별 예약 및 대면상담 가능",
            reservation: true,
          },
          online: {
            available: true,
            platform: "온라인 상담",
            url: "https://www.klac.or.kr/legalstruct/cyberConsultation.do"
          }
        },
        supportTypes: [
          "소송 지원",
          "소장 대리",
          "무료 법률서비스",
        ],
        website: "https://www.klac.or.kr/"
      },
    ]
  }
};

function LegalSupport() {
  const getServiceStatusIcon = (available) => {
    return available ? 
      <span className={`${styles['status-icon']} ${styles['available']}`}>✓</span> : 
      <span className={`${styles['status-icon']} ${styles['unavailable']}`}>✕</span>;
  };

  return (
    <div className={styles['legal-support']}>
      <p className={styles['legal-description']}>
        법률 상담이 필요하신가요?
        각 분야별 전문 기관의 상담 서비스를 확인해보세요.
      </p>

      {Object.entries(legalOrganizations).map(([key, section]) => (
        <div key={key} className={styles['legal-section']}>
          <h2 className={styles['section-title']}>
            <span className={styles['section-icon']}>{section.icon}</span>
            {section.title}
          </h2>

          <div className={styles['organizations-grid']}>
            {section.organizations.map((org) => (
              <div key={org.id} className={styles['organization-card']}>
                <div className={styles['org-header']}>
                  <h3 className={styles['org-name']}>{org.name}</h3>
                  <p className={styles['org-description']}>{org.description}</p>
                </div>

                <div className={styles['service-status-grid']}>
                  <div className={styles['status-item']}>
                    <h4>전화상담 {getServiceStatusIcon(org.services.phone.available)}</h4>
                    {org.services.phone.available && (
                      <div className={styles['status-details']}>
                        {org.id === 2 ? (
                          <p className={`${styles['phone-info-wrapper']} group`}>
                            📞 {org.services.phone.number}
                            <span className={`${styles['phone-tooltip']} invisible group-hover:visible`}>
                              유선 상담은 면밀한 상담 진행을 위해 재단 담당자와 초기 상담(질의 내용 및 자료 확인 등) 후 컨설턴트 변호사님과 일정 선정하여 진행됩니다.(사전 일정 협의 필수)
                            </span>
                          </p>
                        ) : (
                          <p>📞 {org.services.phone.number}</p>
                        )}
                        <p>⏰ {org.services.phone.hours}</p>
                      </div>
                    )}
                  </div>

                  <div className={styles['status-item']}>
                    <h4>대면상담 {getServiceStatusIcon(org.services.visit.available)}</h4>
                    {org.services.visit.available && (
                      <div className={styles['status-details']}>
                        {org.id === 2 ? (
                          <div className={`${styles['visit-info-wrapper']} group`}>
                            <p>📍 {org.services.visit.location}</p>
                            <p>🔖 {org.services.visit.reservation ? "예약 필요" : "예약 불필요"}</p>
                            <span className={`${styles['visit-tooltip']} invisible group-hover:visible`}>
                              방문 상담의 경우 사전 예약이 필수이며, 유선 상담과 마찬가지로 담당자와 초기 상담(질의 내용 및 자료 확인 등) 후 변호사님과의 일정 선정 후 진행됩니다. (사전 일정 협의 및 예약 필수)
                              <br />문의전화 : 02-3668-0200
                            </span>
                          </div>
                        ) : org.id === 7 ? (
                          <div className={`${styles['visit-info-wrapper']} group`}>
                            <p>📍 {org.services.visit.location}</p>
                            <p>🔖 {org.services.visit.reservation ? "예약 필요" : "예약 불필요"}</p>
                            <span className={`${styles['visit-tooltip']} invisible group-hover:visible`}>
                              재단 내 마련된 상담실에서 면접 상담원과 직접 상담 진행
                              방문상담은 예약제로 진행됩니다.
                            </span>
                          </div>
                        ) : (
                          <>
                            <p>📍 {org.services.visit.location}</p>
                            <p>🔖 {org.services.visit.reservation ? "예약 필요" : "예약 불필요"}</p>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div className={styles['status-item']}>
                    <h4>온라인상담 {getServiceStatusIcon(org.services.online.available)}</h4>
                    {org.services.online.available && (
                      <div className={styles['status-details']}>
                        {org.id === 7 ? (
                          <>
                            <p>💻 이메일: withu@kawf.kr</p>
                            <p className={styles['email-description']}>
                              7일 이내 회신을 통해 필요한 지원 안내 및 연계
                            </p>
                          </>
                        ) : org.services.online.email ? (
                          <p>
                            💻 이메일 상담:{' '}
                            <a
                              href={`mailto:${org.services.online.email}`}
                              className={styles['online-link']}
                            >
                              {org.services.online.email}
                            </a>
                          </p>
                        ) : (
                          <p>
                            💻{' '}
                            <a
                              href={org.services.online.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles['online-link']}
                            >
                              {org.services.online.platform}
                            </a>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles['support-types']}>
                  <h4>지원 내용</h4>
                  <ul>
                    {org.supportTypes?.map((type, index) => (
                      <li key={index} className={`${styles['support-type-item']} group`}>
                        {type}
                        {org.id === 7 && (
                          <span className={`${styles['support-tooltip']} invisible group-hover:visible`}>
                            {type === "법률지원" && 
                              "전문 컨설턴트와의 성희롱·성폭력 피해에 대한 법률상담, 피해 관련 민·형사상 소송비용(심급별 지원)"
                            }
                            {type === "심리상담 지원" && 
                              "성희롱·성폭력 피해 예술인의 심리적 안정을 위한 전문상담 및 심리치료"
                            }
                            {type === "의료 지원" && 
                              "성희롱·성폭력 피해로 인한 신체적, 정신적 치료가 필요한 경우 의료비 지원"
                            }
                            {type === "관련 전문기관 연계" && 
                              "피해자가 희망할 경우 유관기관 안내 연계"
                            }
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['visit-button']}
                >
                  기관 홈페이지 방문
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export { LegalSupport as default, legalOrganizations };