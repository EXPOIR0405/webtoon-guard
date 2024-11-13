'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CalculatePrice() {
  const [totalCoinPrice, setTotalCoinPrice] = useState(''); // 총 코인 가격 (예: 20코인에 6000원)
  const [coinCount, setCoinCount] = useState(''); // 코인 개수 (예: 20코인)
  const [coinPrice, setCoinPrice] = useState(null); // 1코인 가격 계산 결과

  const [coinsPerEpisode, setCoinsPerEpisode] = useState(''); // 회차당 필요한 코인 수
  const [episodePrice, setEpisodePrice] = useState(null); // 회차당 가격 계산 결과

  const router = useRouter(); // useRouter 훅을 사용하여 뒤로가기 기능 구현

  // 1코인 가격 계산 함수
  const calculateCoinPrice = () => {
    if (totalCoinPrice && coinCount) {
      const pricePerCoin = totalCoinPrice / coinCount;
      setCoinPrice(pricePerCoin);
    }
  };

  // 회차당 가격 계산 함수
  const calculateEpisodePrice = () => {
    if (coinPrice && coinsPerEpisode) {
      const pricePerEpisode = coinPrice * coinsPerEpisode;
      setEpisodePrice(pricePerEpisode);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center text-black">회차당 가격 계산기</h2>
        <p className="text-center text-gray-700 mb-4">1코인 가격과 회차당 필요한 코인 수를 계산하세요.</p>

        {/* 1코인 가격 계산 섹션 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black">1코인당 가격 계산</h3>
          <label className="block text-sm font-medium text-black">총 코인 가격 (원)</label>
          <input
            type="number"
            value={totalCoinPrice}
            onChange={(e) => setTotalCoinPrice(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            placeholder="예: 6000"
          />
          <label className="block text-sm font-medium text-black mt-4">코인 개수</label>
          <input
            type="number"
            value={coinCount}
            onChange={(e) => setCoinCount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            placeholder="예: 20"
          />
          <button
            type="button"
            onClick={calculateCoinPrice}
            className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            1코인 가격 계산
          </button>
          {coinPrice !== null && (
            <p className="mt-2 text-lg text-black font-semibold">
              1코인당 가격: {coinPrice.toLocaleString()} 원
            </p>
          )}
        </div>

        {/* 회차당 가격 계산 섹션 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-black">회차당 가격 계산</h3>
          <label className="block text-sm font-medium text-black">1코인당 가격 (원)</label>
          <input
            type="number"
            value={coinPrice || ''}
            onChange={(e) => setCoinPrice(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            placeholder="예: 위에서 계산된 1코인 가격을 입력"
          />
          <label className="block text-sm font-medium text-black mt-4">회차당 필요한 코인 수</label>
          <input
            type="number"
            value={coinsPerEpisode}
            onChange={(e) => setCoinsPerEpisode(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            placeholder="예: 3"
          />
          <button
            type="button"
            onClick={calculateEpisodePrice}
            className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            회차당 가격 계산
          </button>
          {episodePrice !== null && (
            <p className="mt-2 text-lg text-black font-semibold">
              1회차 당 웹툰 가격: {episodePrice.toLocaleString()} 원
            </p>
          )}
        </div>

        {/* 뒤로가기 버튼 */}
        <button
          type="button"
          onClick={() => router.back()}
          className="mt-6 w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}