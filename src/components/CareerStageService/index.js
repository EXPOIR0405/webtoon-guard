'use client';
import { useState } from 'react';
import Image from 'next/image';
import './CareerStageService.css';

const CareerStageService = () => {
  const [selectedStage, setSelectedStage] = useState(null);

  const isDeadlinePassed = (dateString) => {
    const endDateStr = dateString.split('~')[1].trim();
    const [year, month, day] = endDateStr
      .replace('년', '')
      .replace('월', '')
      .replace('일', '')
      .split(' ')
      .map(num => parseInt(num));
    const endDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    return today > endDate;
  };

  const careerStages = [
    {
      id: 'aspirant',
      title: '예비 작가',
      image: '/student.png',
      supports: [
        {
          title: '웹툰 제작사 선화작가 취업과정',
          description: '웹툰 제작사 선화작가 교육 프로그램입니다. 교육비는 전액 무료이며, 중식 제공합니다.',
          date: '2024년 10월 17일 ~ 2024년 12월 05일',
          link: 'https://sesac.seoul.kr/course/active/detail.do?courseActiveSeq=2829'
        },
        // ... 다른 지원 정보들
      ]
    },
    {
      id: 'webtoonist',
      title: '웹툰 작가',
      image: '/artist.png',
      supports: [
        // 지원 정보들
      ]
    },
    {
      id: 'freelancer',
      title: '프리랜서',
      image: '/freeman.png',
      supports: [
        // 지원 정보들
      ]
    },
    {
      id: 'business',
      title: '사업자',
      image: '/building.png',
      supports: [
        // 지원 정보들
      ]
    }
  ];

  return (
    <div className="career-stage-container">
      <div className="intro-message">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">맞춤형 지원 정보</h2>
        <p className="text-gray-600 mb-8">
          해당하는 유형을 선택하시면 맞춤형 지원 정보를 공유해드립니다.
        </p>
      </div>

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
              .supports.length > 0 ? (
                careerStages
                  .find(stage => stage.id === selectedStage)
                  .supports.map((support, index) => (
                    <div key={index} className="support-card">
                      <h4>{support.title}</h4>
                      <p className="description">{support.description}</p>
                      <div className="date-container">
                        <span className="date">{support.date}</span>
                        {isDeadlinePassed(support.date) && (
                          <span className="deadline-badge">마감</span>
                        )}
                      </div>
                      <button 
                        className={`apply-button ${isDeadlinePassed(support.date) ? 'disabled' : ''}`}
                        onClick={() => window.location.href = support.link}
                        disabled={isDeadlinePassed(support.date)}
                      >
                        {isDeadlinePassed(support.date) ? '마감됨' : '신청하기'}
                      </button>
                    </div>
                  ))
              ) : (
                <div className="no-data-message">
                  <p>현재 등록된 지원 정보가 없습니다.</p>
                  <p>업데이트 예정입니다. 감사합니다.</p>
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerStageService;