'use client';

import React, { useState } from 'react';

export default function CopyrightGuide() {
  const [selectedSituation, setSelectedSituation] = useState(null);

  const situations = [
    {
      id: 1,
      title: "불법 복제물 발견",
      description: "내 웹툰이 허가 없이 다른 곳에 게시되었어요",
      steps: [
        {
          title: "증거 수집",
          content: "화면 캡처, URL 저장, 날짜 기록",
          tips: ["가능한 많은 증거를 수집하세요", "시간과 날짜가 표시되도록 캡처하세요"]
        },
        {
          title: "저작권 증명 준비",
          content: "저작권 등록증, 연재 계약서 등",
          tips: ["원본 파일 준비", "최초 게시일 증명"]
        },
        {
          title: "신고서 작성",
          content: "한국저작권보호원 신고",
          tips: ["구체적인 침해 내용 작성", "수집한 증거 첨부"]
        }
      ]
    },
    {
      id: 2,
      title: "계약 관련 분쟁",
      description: "계약 조건이 제대로 지켜지지 않고 있어요",
      steps: [
        {
          title: "계약서 검토",
          content: "계약 내용 확인 및 위반 사항 체크",
          tips: ["계약서 사본 준비", "위반 사항 정리"]
        },
        {
          title: "증거 정리",
          content: "위반 사항에 대한 증거 수집",
          tips: ["서면 기록 보관", "대화 내역 정리"]
        },
        {
          title: "법률 상담",
          content: "한국저작권위원회 상담",
          tips: ["무료 법률 상담 활용", "구체적인 질문 준비"]
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">저작권 보호 가이드</h1>
      
      {/* 상황별 카드 섹션 */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {situations.map(situation => (
          <div 
            key={situation.id}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setSelectedSituation(situation)}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{situation.title}</h3>
            <p className="text-gray-600 mb-4">{situation.description}</p>
            <button className="text-blue-600 hover:text-blue-800">
              자세히 보기 →
            </button>
          </div>
        ))}
      </div>

      {/* 선택된 상황의 단계별 프로세스 */}
      {selectedSituation && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedSituation.title} 대응 프로세스
          </h2>
          
          <div className="relative">
            {selectedSituation.steps.map((step, index) => (
              <div key={index} className="mb-8 relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 bg-blue-600 rounded-full text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.content}</p>
                <div className="bg-blue-50 p-4 rounded-md">
                  <p className="font-medium text-blue-800 mb-2">💡 Tip</p>
                  <ul className="list-disc list-inside text-sm text-blue-700">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}