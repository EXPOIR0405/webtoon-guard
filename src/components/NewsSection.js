'use client';

import { useState } from 'react';

const NewsSection = () => {
  const news = [
    {
      date: "2024.12.06",
      title: "[속보] 한동훈 “윤 대통령 조속한 직무집행 정지 필요”",
      content: "한동훈 국민의힘 대표가 6일 국회 본회의에서 윤석열 대통령에 대한 직무집행 정지 필요를 강력히 주장했다.",
      source: "한겨레",
      url: "https://www.hani.co.kr/arti/politics/assembly/1171292.html"
    },
    {
      date: "2024.12.06",
      title: "포고령 내용조차 몰랐던 계엄사령관… 그날 軍은 '엉망진창'",
      content: " 軍수뇌부 계엄준비 인지 못한 정황 특전사령관, 테이저건 사용도 건의 尹, 계엄상황때 합참 통제실 방문",
      source: "국민일보",
      url: "https://www.kmib.co.kr/article/view.asp?arcid=1733391480"
    }
  ];

  const handleNewsClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const events = [
    {
      date: "2024.12.06 (금) 18:00",
      title: "헌정유린, 내란수괴 윤석열 퇴진 인천시민긴급행동",
      location: "서울 광화문 동화면세점 앞",
      description: "사회대전환 윤석열정권퇴진 인천운동본부(준)"
    },
  ];

  return (
    <div className="w-full bg-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* 뉴스 섹션 */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
              탄핵 관련 주요 소식
            </h2>
            
            <div className="space-y-6">
              {news.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer"
                  onClick={() => handleNewsClick(item.url)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-red-600 text-sm">{item.date}</div>
                    <div className="text-gray-500 text-sm">{item.source}</div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 line-clamp-2">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 시위 일정 섹션 */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
              시민 행동 일정
            </h2>
            
            <div className="space-y-6">
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className="bg-zinc-900 p-6 rounded-xl border-l-4 border-red-600"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                    <div className="text-red-600 font-bold">{event.date}</div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{event.title}</h3>
                  <div className="text-blue-400 text-sm mb-2">
                    <span className="inline-block mr-2">📍</span>
                    {event.location}
                  </div>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 주의사항 */}
        <div className="mt-12 p-6 bg-zinc-900 rounded-xl border border-yellow-600">
          <h3 className="text-yellow-500 font-bold mb-2 flex items-center gap-2">
            <span>⚠️</span>
            집회/ 시위시 필수 준비물
          </h3>
          <ul className="text-gray-400 list-disc list-inside space-y-2">
            <li>방한용품 (핫팩, 장갑, 목도리)</li>
            <li>일회용 방석</li>
            <li>물과 비상식량(간식)</li>
            <li>(물)티슈</li>
            <li>깔끔한 뒷정리</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;