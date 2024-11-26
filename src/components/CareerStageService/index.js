'use client';
import { useState } from 'react';
import Image from 'next/image';
import './CareerStageService.css';
const CareerStageService = () => {
  const [selectedStage, setSelectedStage] = useState(null);

  const careerStages = [
    {
      id: 'aspirant',
      title: '웹툰 작가 지망생',
      image: '/aspirant.png',
      supports: [
        // {
        //   title: '예방접종증명 신청',
        //   description: '감염병에 걸리지 않도록 규정된 4가지 예방접종 증명서를 온라인으로 신청할 수 있는 서비스입니다.',
        // },
        // ... 다른 지원 정보들
      ]
    },
    {
      id: 'webtoonist',
      title: '웹툰 작가',
      image: '/aspirant.png',
      supports: [
        // 지원 정보들
      ]
    },
    {
      id: 'freelancer',
      title: '프리랜서',
      image: '/aspirant.png',
      supports: [
        // 지원 정보들
      ]
    },
    {
      id: 'business',
      title: '사업자',
      image: '/aspirant.png',
      supports: [
        // 지원 정보들
      ]
    }
  ];

  return (
    <div className="career-stage-container">
      <div className="career-icons">
        {careerStages.map((stage) => (
          <div 
            key={stage.id} 
            className={`career-icon ${selectedStage === stage.id ? 'active' : ''}`}
            onClick={() => setSelectedStage(stage.id)}
          >
            <Image
              src={stage.image}
              alt={stage.title}
              width={120}
              height={120}
              className="career-image"
            />
            <p>{stage.title}</p>
          </div>
        ))}
      </div>

      {selectedStage && (
        <div className="support-info">
          <h3>{careerStages.find(stage => stage.id === selectedStage).title} 지원 정보</h3>
          <div className="support-grid">
            {careerStages
              .find(stage => stage.id === selectedStage)
              .supports.map((support, index) => (
                <div key={index} className="support-card">
                  <h4>{support.title}</h4>
                  <p>{support.description}</p>
                  <button 
                    className="apply-button"
                    onClick={() => window.location.href = support.link}
                  >
                    신청하기
                  </button>
                </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerStageService;