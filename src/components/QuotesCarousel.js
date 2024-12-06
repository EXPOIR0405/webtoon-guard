'use client';
import { useState } from 'react';
import Image from 'next/image';

const QuotesCarousel = () => {
  const [proIndex, setProIndex] = useState(0);
  const [neutralIndex, setNeutralIndex] = useState(0);
  const [conIndex, setConIndex] = useState(0);

  const proQuotes = [
    {
      quote: "尹, 계속 직 수행할 경우 국민 위험 빠뜨릴 우려 커",
      name: "한동훈",
      position: "국민의힘 대표",
      image: "/politicians/handonghun.jpg"
    },
    {
      quote: "비상계엄을 선포했던 그 행위 자체가 위헌적이고 불법적...대통령의 직무 정지를 빨리 해야 한다.",
      name: "조경태",
      position: "국민의힘 의원",
      image: "/politicians/joekyungtae.jpeg"
    },
    // ... 더 많은 찬성 발언들
  ];

  const neutralQuotes = [
    {
      quote: "尹 자진 하야가 최선…지금 끊임없이 고민 중이다",
      name: "안철수",
      position: "국민의힘 의원",
      image: "/politicians/AnChulSu.jpeg"
    },
    // ... 더 많은 보류 발언들
  ];

  const conQuotes = [
    {
        quote: "대통령 탄핵은 또 한 번 역사적 비극을 반복하는 일이 될 것",
        name: "추경호 원내대표",
        position: "국민의힘 의원",
        image: "/politicians/choekyungho.jpg"
      },
    {
      quote: "민주당 의회폭거 알리자,감사원과 중앙지검장에 대한 보복성 탄핵 시도는 헌법상 보장된 감사원의 독립성과 검찰의 중립성을 심각하게 훼손하는 것",
      name: "나경원",
      position: "국민의힘 의원",
      image: "/politicians/naekyungwon.jpg"
    },
    {
      quote: "지나고 보니 내가 탄핵에 신중하지 못했다는 후회를 많이 했다",
      name: "주호영 국회 부의장(6선)",
      position: "국민의힘 의원",
      image: "/politicians/johoyeong.jpg"
    },
    {
      quote: "탄핵이 실제로 닥쳐보면 막연하게 상상했던 것과 현실이 굉장히 다르다. 엄혹하고 정말 견디기 어렵다",
      name: "유영하",
      position: "국민의힘 의원",
      image: "/politicians/yuyongha.jpg"
    },
    {
      quote: "탄핵만이 능사가 아니다...국정 안정을 위해 책임총리제로 전환하고 비상 관리 내각을 꾸려야 한다",
      name: "오세훈",
      position: "서울시장(국민의힘)",
      image: "/politicians/osehun.jpg"
    },
    {
        quote: "대통령 계엄선포에 적극 지지하며 모든 당원은 대통령 지지선언으로 힘을 모아 주십시요",
        name: "박중화",
        position: "국민의힘 서울시의원",
        image: "/politicians/bakjungah.png"
      },
      {
        quote: "친미 대 친북, 친중 간의 대결이 있고 탄핵소추문에는 바로 그들의 반란이 있는 것",
        name: "김민전",
        position: "국민의힘 최고위원",
        image: "/politicians/kimminjeon.png"
      },
      {
        quote: "대통령 탄핵은 또 한 번 역사적 비극을 반복하는 일이 될 것",
        name: "추경호 원내대표",
        position: "국민의힘 의원",
        image: "/politicians/choekyungho.jpg"
      },
      {
        quote: "두 번 다시 박근혜 (정부 때)처럼 헌정이 중단되는 탄핵 사태가 재발돼서는 안 된다",
        name: "홍준표",
        position: "대구시장(국민의힘)",
        image: "/politicians/hongjunpyo.jpg"
      },
    // ... 더 많은 반대 발언들
  ];

  const handlePrevPro = () => setProIndex(prev => (prev === 0 ? proQuotes.length - 1 : prev - 1));
  const handleNextPro = () => setProIndex(prev => (prev === proQuotes.length - 1 ? 0 : prev + 1));
  
  const handlePrevNeutral = () => setNeutralIndex(prev => (prev === 0 ? neutralQuotes.length - 1 : prev - 1));
  const handleNextNeutral = () => setNeutralIndex(prev => (prev === neutralQuotes.length - 1 ? 0 : prev + 1));
  
  const handlePrevCon = () => setConIndex(prev => (prev === 0 ? conQuotes.length - 1 : prev - 1));
  const handleNextCon = () => setConIndex(prev => (prev === conQuotes.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          주요 정치인 발언
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 찬성 측 발언 캐러셀 */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">찬성 측 발언</h3>
            <div className="bg-zinc-900 p-6 rounded-xl min-h-[300px] flex items-center">
              <button onClick={handlePrevPro} className="absolute left-2 text-white hover:text-blue-500 text-4xl">
                &#8249;
              </button>
              
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={proQuotes[proIndex].image}
                    alt={proQuotes[proIndex].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-gray-300 text-base italic mb-4">
                    &ldquo;{proQuotes[proIndex].quote}&rdquo;
                  </blockquote>
                  <div className="text-blue-600 font-bold">{proQuotes[proIndex].name}</div>
                  <div className="text-gray-400 text-sm">{proQuotes[proIndex].position}</div>
                </div>
              </div>

              <button onClick={handleNextPro} className="absolute right-2 text-white hover:text-blue-500 text-4xl">
                &#8250;
              </button>
            </div>
          </div>
          
          {/* 보류 측 발언 캐러셀 */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-yellow-600 mb-6 text-center">보류 입장</h3>
            <div className="bg-zinc-900 p-6 rounded-xl min-h-[300px] flex items-center">
              <button onClick={handlePrevNeutral} className="absolute left-2 text-white hover:text-yellow-500 text-4xl">
                &#8249;
              </button>
              
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={neutralQuotes[neutralIndex].image}
                    alt={neutralQuotes[neutralIndex].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-gray-300 text-base italic mb-4">
                    &ldquo;{neutralQuotes[neutralIndex].quote}&rdquo;
                  </blockquote>
                  <div className="text-yellow-600 font-bold">{neutralQuotes[neutralIndex].name}</div>
                  <div className="text-gray-400 text-sm">{neutralQuotes[neutralIndex].position}</div>
                </div>
              </div>

              <button onClick={handleNextNeutral} className="absolute right-2 text-white hover:text-yellow-500 text-4xl">
                &#8250;
              </button>
            </div>
          </div>
          
          {/* 반대 측 발언 캐러셀 */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">반대 측 발언</h3>
            <div className="bg-zinc-900 p-8 rounded-xl min-h-[300px] flex items-center">
              <button 
                onClick={handlePrevCon}
                className="absolute left-2 text-white hover:text-red-500 text-4xl"
              >
                &#8249;
              </button>
              
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={conQuotes[conIndex].image}
                    alt={conQuotes[conIndex].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-gray-300 text-lg italic mb-4">
                    &ldquo;{conQuotes[conIndex].quote}&rdquo;
                  </blockquote>
                  <div className="text-red-600 font-bold">{conQuotes[conIndex].name}</div>
                  <div className="text-gray-400 text-sm">{conQuotes[conIndex].position}</div>
                </div>
              </div>

              <button 
                onClick={handleNextCon}
                className="absolute right-2 text-white hover:text-red-500 text-4xl"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesCarousel;