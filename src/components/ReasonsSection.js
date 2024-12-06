//탄핵 찬성 현황 섹션

'use client';

import React, { useState } from 'react';

const ReasonsSection = () => {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className="w-full bg-zinc-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          현재 탄핵 찬성 의원 현황
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 찬성 의원 수 카운터 */}
          <div className="bg-black p-8 rounded-xl">
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow-600 mb-4">192</div>
              <div className="text-gray-400">현재 찬성 의원</div>
            </div>
          </div>
          
          {/* 목표 달성률 */}
          <div className="bg-black p-8 rounded-xl">
            <div className="text-center">
              <div className="text-6xl font-bold text-red-600 mb-4">200</div>
              <div className="text-gray-400">탄핵 가결 필요 의원 수</div>
            </div>
          </div>
        </div>

        {/* 진행 바 */}
        <div className="mt-12 bg-gray-800 rounded-full h-6 overflow-hidden">
          <div 
            className="bg-red-600 h-full rounded-full transition-all duration-1000"
            style={{ width: '96.5%' }}
          ></div>
        </div>
        <div className="text-center text-white mt-4">
          목표 달성률 96.5%
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => setShowSupport(!showSupport)}
            className="text-2xl md:text-3xl font-bold text-white text-center mx-auto block"
          >
            <span className="border-b-4 border-red-600 pb-2 hover:border-red-400 transition-colors">
              누가 지지하고 있나요?
            </span>
          </button>

          {showSupport && (
            <div className="mt-8 bg-zinc-900 p-8 rounded-xl overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 text-white">정당</th>
                    <th className="py-4 text-white">찬성 의원 수</th>
                    <th className="py-4 text-white">전체 의원 수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 text-blue-400">더불어민주당</td>
                    <td className="py-4 text-white">170</td>
                    <td className="py-4 text-gray-400">170</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 text-red-400">국민의힘</td>
                    <td className="py-4 text-white">1</td>
                    <td className="py-4 text-gray-400">108</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 text-gray-400">조국혁신당</td>
                    <td className="py-4 text-white">12</td>
                    <td className="py-4 text-gray-400">12</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 text-gray-400">개혁신당</td>
                    <td className="py-4 text-white">3</td>
                    <td className="py-4 text-gray-400">3</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 text-gray-400">진보당</td>
                    <td className="py-4 text-white">3</td>
                    <td className="py-4 text-gray-400">3</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 text-gray-400">기본소득당</td>
                    <td className="py-4 text-white">1</td>
                    <td className="py-4 text-gray-400">1</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 text-gray-400">사회민주당</td>
                    <td className="py-4 text-white">1</td>
                    <td className="py-4 text-gray-400">1</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 text-gray-400">무소속</td>
                    <td className="py-4 text-white">2</td>
                    <td className="py-4 text-gray-400">2</td>
                  </tr>
                  <tr className="border-t-2 border-gray-600 font-bold">
                    <td className="py-4 text-white">총계</td>
                    <td className="py-4 text-white">192</td>
                    <td className="py-4 text-white">300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReasonsSection;