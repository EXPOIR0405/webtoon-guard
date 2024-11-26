'use client';
import { useState } from 'react';
import Link from 'next/link';
import './OneStopService.css';
import CareerStageService from '../CareerStageService';
import LegalSupport from '../../app/LegalSupport';

const OneStopService = () => {
  const [activeTab, setActiveTab] = useState('onestop');

  const onestopServices = [
    {
      id: 1,
      title: "저작권 침해 신고",
      description: "불법 복제, 무단 전재 등으로 피해를 입으셨나요? 저작권 침해가 되었다는 사실을 이곳에서 신고할 수 있습니다.",
      link: "https://copy112.kcopa.or.kr/unlaw/unlawOnline.do#"
    },
    {
      id: 2,
      title: "계약서 작성 검토", 
      description: "계약서 검토를 및 자문을 받고 싶으신가요? 저작권 침해, 불공정 거래, 대금 체불 등 법적 문제에 대해 상담해드립니다.",
      link: "https://sftc.seoul.go.kr/fe/ca/cnslt/NR_list.do"
    },
    {
      id: 3,
      title: "저작권 관련 질문",
      description: "다양한 저작물 이용 상황에서 저작권 문제로 어려움을 겪고 계신가요? 다방면의 저작권 관련 질문을 챗봇으로 물어보세요.",
      link: "https://chatbot.gov.kt-aicc.com/client/GCL-01-C-00000221-0001/chat.html"
    },
    {
      id: 4,
      title: "저작권 관련 직접 상담",
      description: "챗봇 서비스 이외에 온라인, 비대면 상담 서비스를 제공하고 있습니다. 아래 창을 눌러주세요!", 
      link: "https://www.copyright.or.kr/business/counsel/law/write.do#none"
    },
    {
      id: 5,
      title: "권리침해 상담",
      description: "예술 활동 중 권리침해를 당하였나요? 권리침해 신고 전 법률 상담을 받아보실 수 있습니다. (최대 답변 14일 소요)",
      link: "https://sinmungo.kawf.kr/user/intro/lawsInfri/list.do"
    },
    {
      id: 6,
      title: "권리침해 신고",
      description: "권리침해 관련해 신고를 하고 싶으시다면? 이곳에서 신고할 수 있습니다.(로그인 필수)",
      link: "https://sinmungo.kawf.kr/user/intro/artInfri/list.do"
    },
    {
      id: 7,
      title: "성폭력ㆍ성희롱 신고",
      description: "예술활동 중 성희롱, 성폭력을 겪으셨나요? 이곳에서 신고절차를 확인하고 신고할 수 있습니다. 더불어 여러 지원 서비스를 신청할 수 있습니다.",
      link: "https://sinmungo.kawf.kr/user/intro/artDamageReport/list.do"
    },
    {
      id: 8,
      title: "서면계약 위반 신고",
      description: "계약은 반드시 서면으로 체결해야한다는 것 알고 계셨나요? 이를 위반하는 경우 이곳에서 신고할 수 있습니다.",
      link: "https://sinmungo.kawf.kr/user/intro/writeContractViolate/list.do"
    },
    {
      id: 9,
      title: "저작권 분쟁 조정",
      description: "저작권 분쟁을 겪고 계신가요? 소송에 들어가기 전, 조정을 받을 수 있습니다. 이곳에서 확인해보세요.(로그인 필수)",
      link: "https://adr.copyright.or.kr/web/main/mainPage.do"
    },
    {
      id: 10,
      title: "표준계약서(보조작가용)",
      description: "한 편의 웹툰을 만들기까지 선화, 채색, 후보정 각종 도움을 주시는 보조작가분들을 위한 표준계약서입니다.",
      fileDownload: {
        name: "보조작가 표준계약서(6종).zip",
        path: "/contracts/보조작가 표준계약서(6종).zip"
      }
    },
    {
      id: 11,
      title: "표준계약서(작가용)",
      description: "웹툰 작가분들을 위한 표준계약서입니다.",
      fileDownload: {
        name: "만화 분야 표준계약서(8종) 전문.zip",
        path: "/contracts/만화 분야 표준계약서(8종) 전문.zip"
      }
    }
  ];

  return (
    <div className="onestop-container">
      <h1 className="onestop-title">원스톱 서비스</h1>
      
      <div className="tab-menu">
        <button 
          className={activeTab === 'onestop' ? 'active' : ''} 
          onClick={() => setActiveTab('onestop')}
        >
          종합정보
        </button>
        <button 
          className={activeTab === 'career' ? 'active' : ''} 
          onClick={() => setActiveTab('career')}
        >
          상황별 지원 정보
        </button>
        <button 
          className={activeTab === 'etc' ? 'active' : ''} 
          onClick={() => setActiveTab('etc')}
        >
          기관별 상담 지원
        </button>
      </div>

      {activeTab === 'onestop' && (
        <div className="service-grid">
          {onestopServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      )}

      {activeTab === 'career' && (
        <CareerStageService />
      )}

      {activeTab === 'etc' && (
        <LegalSupport />
      )}
    </div>
  );
};

const ServiceCard = ({ title, description, requirements, link, fileDownload }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {requirements && (
        <div className="requirements">
          <p className="requirements-title">준비물</p>
          <ul>
            {requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="apply-button"
        >
          신청하기
        </a>
      ) : fileDownload && (
        <a 
          href={fileDownload.path}
          download={fileDownload.name}
          className="download-button"
        >
          계약서 다운로드
        </a>
      )}
    </div>
  );
};

export default OneStopService;