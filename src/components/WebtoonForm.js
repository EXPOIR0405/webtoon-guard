'use client';

import { useState } from 'react';
import Link from 'next/link';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export default function WebtoonForm() {
  const [victimName, setVictimName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [webtoonTitle, setWebtoonTitle] = useState('');
  const [siteName, setSiteName] = useState('');
  const [totalViews, setTotalViews] = useState('');
  const [totalRecommendations, setTotalRecommendations] = useState('');
  const [calculatedViews, setCalculatedViews] = useState(null);
  const [episodePrice, setEpisodePrice] = useState('');
  const [damageAmount, setDamageAmount] = useState(null);
  const [purpose, setPurpose] = useState('');

  // 용도 선택 옵션
  const purposeOptions = [
    { value: '저작권침해_신고용', label: '저작권 침해 신고용' },
    { value: '법률자문_상담용', label: '법률 자문/상담용' },
    { value: '수사기관_제출용', label: '수사기관 제출용' },
    { value: '피해사실_증빙용', label: '피해사실 증빙용' },
    { value: '기타', label: '기타' }
  ];

  // 추천수로 조회수 계산
  const handleCalculateViews = () => {
    if (totalRecommendations) {
      const estimatedViews = totalRecommendations * 5; // 추정치 사용
      setCalculatedViews(estimatedViews);
    }
  };

  // 피해액 계산
  const calculateDamageAmount = () => {
    const views = totalViews || calculatedViews;
    if (views && episodePrice) {
      const damage = views * parseInt(episodePrice);
      setDamageAmount(damage);
    }
  };

  // PDF 생성
  const generatePDF = async () => {
    // 피해 내용 문구를 조건에 따라 다르게 생성
    const getDamageContent = () => {
      if (totalViews) {
        return `
          불법사이트 ${siteName}에서 피해자의 웹툰 '${webtoonTitle}'이(가) 무단으로 복제 및 게시되어
          총 ${parseInt(totalViews).toLocaleString()}회의 불법 열람이 확인되었으며,
          이에 따른 정상 구매 기준 피해액은 ${damageAmount?.toLocaleString()}원으로 산정됩니다.
        `;
      } else {
        return `
          불법사이트 ${siteName}에서 피해자의 웹툰 '${webtoonTitle}'이(가) 무단으로 복제 및 게시되어
          해당 사이트 내 추천수 ${parseInt(totalRecommendations).toLocaleString()}회가 확인되었으며,
          이는 추정 조회수 ${calculatedViews?.toLocaleString()}회에 해당하는 상당한 규모의 불법 열람이 발생했음을 시사합니다.
          이에 따른 정상 구매 기준 예상 피해액은 최소 ${damageAmount?.toLocaleString()}원으로 추산됩니다.
        `;
      }
    };

    const reportElement = document.createElement('div');
    reportElement.innerHTML = `
      <style>
        @import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css');
      </style>
      <div style="padding: 40px; font-family: 'NanumSquare', sans-serif; color: #000000;">
        <h1 style="text-align: center; font-size: 28px; margin-bottom: 60px; font-weight: 800;">웹툰 피해사실 정리서</h1>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 60px;">
          <tr>
            <td style="width: 20%; background: #f8f9fa; padding: 15px 20px; border: 1px solid #000; font-weight: 700;">성 명</td>
            <td style="width: 80%; padding: 15px 20px; border: 1px solid #000;">${victimName}</td>
          </tr>
          <tr>
            <td style="background: #f8f9fa; padding: 15px 20px; border: 1px solid #000; font-weight: 700;">생년월일</td>
            <td style="padding: 15px 20px; border: 1px solid #000;">${birthDate}</td>
          </tr>
          <tr>
            <td style="background: #f8f9fa; padding: 15px 20px; border: 1px solid #000; font-weight: 700;">주 소</td>
            <td style="padding: 15px 20px; border: 1px solid #000;">${address}</td>
          </tr>
          <tr>
            <td style="background: #f8f9fa; padding: 15px 20px; border: 1px solid #000; font-weight: 700;">전화번호</td>
            <td style="padding: 15px 20px; border: 1px solid #000;">${phoneNumber}</td>
          </tr>
          <tr>
            <td style="background: #f8f9fa; padding: 15px 20px; border: 1px solid #000; font-weight: 700;">피해작품</td>
            <td style="padding: 15px 20px; border: 1px solid #000;">${webtoonTitle}</td>
          </tr>
          <tr>
            <td style="background: #f8f9fa; padding: 15px 20px; border: 1px solid #000; font-weight: 700;">피해내용</td>
            <td style="padding: 15px 20px; border: 1px solid #000; line-height: 1.6;">
              ${getDamageContent()}
            </td>
          </tr>
          <tr>
            <td style="background: #f8f9fa; padding: 15px 20px; border: 1px solid #000; font-weight: 700;">용 도</td>
            <td style="padding: 15px 20px; border: 1px solid #000;">
              ${purposeOptions.find(opt => opt.value === purpose)?.label || purpose}
            </td>
          </tr>
        </table>

        <p style="text-align: center; margin: 40px 0; font-size: 16px; line-height: 1.8;">
          본 문서는 피해 사실 신고 및 법적 대응 시 참고 자료로 활용될 수 있으며,<br>
          실제 법적 조치를 위해서는 관련 기관이나 법률 전문가와의 상담이 필요할 수 있습니다.
        </p>
        
        <p style="text-align: center; margin: 60px 0; font-size: 16px;">
          ${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일
        </p>
      </div>
    `;

    document.body.appendChild(reportElement);

    try {
      const canvas = await html2canvas(reportElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('웹툰_피해사실_정리서.pdf');
    } finally {
      document.body.removeChild(reportElement);
    }
  };

  return (
    <form className="space-y-4">
      <h2 className="text-xl font-bold text-center text-black">웹툰 피해사실 정리서</h2>
      <p className="text-center text-gray-700 mb-4">
        웹툰 불법 복제로 인한 피해 현황을 정리하여 저작권 침해 신고 및 법적 대응 시 참고 자료로 활용하실 수 있습니다.
      </p>

      <div>
        <label className="block text-sm font-medium text-black">피해자 이름</label>
        <input
          type="text"
          value={victimName}
          onChange={(e) => setVictimName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          placeholder="예: 홍길동"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black">생년월일</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black">주소</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          placeholder="주소를 입력해주세요"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black">전화번호</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          placeholder="예: 010-1234-5678"
          pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black">웹툰 제목</label>
        <input
          type="text"
          value={webtoonTitle}
          onChange={(e) => setWebtoonTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          placeholder="피해 입은 웹툰의 제목을 입력해주세요"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black">불법 사이트 명</label>
        <input
          type="text"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          placeholder="예: 뉴토끼"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black">총 조회수</label>
        <input
          type="number"
          value={totalViews}
          onChange={(e) => setTotalViews(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          placeholder="실제 조회수를 알고 있는 경우 입력해주세요"
        />
      </div>

      {!totalViews && (
        <div>
          <label className="block text-sm font-medium text-black">총 추천수</label>
          <input
            type="number"
            value={totalRecommendations}
            onChange={(e) => setTotalRecommendations(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            placeholder="정확한 조회수를 모를경우 총 추천수를 입력해주세요"
          />
          <p className="text-sm text-gray-500 mt-1">
            * 추천수는 최소 조회수를 추정하기 위한 참고 지표로 활용됩니다
          </p>
          <button
            type="button"
            onClick={handleCalculateViews}
            className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            추정 조회수 계산
          </button>
          {calculatedViews && (
            <p className="mt-2 text-sm text-blue-600">
              추정 조회수: {calculatedViews.toLocaleString()}회
            </p>
          )}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-black">한 화당 가격 (원)</label>
        <input
          type="number"
          value={episodePrice}
          onChange={(e) => setEpisodePrice(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          placeholder="예: 300"
          required
        />
        <p className="text-sm text-blue-600 underline mt-2">
          <Link href="/calculate-price">한 화당 가격을 모른다면?</Link>
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-black">용도</label>
        <select
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          required
        >
          <option value="">용도를 선택해주세요</option>
          {purposeOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={calculateDamageAmount}
        className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        피해 금액 계산
      </button>

      <p className="mt-2 text-lg text-black font-semibold">
        피해 금액: {damageAmount !== null ? `${damageAmount.toLocaleString()} 원` : "계산 미완료"}
      </p>

      <button
        type="button"
        onClick={generatePDF}
        className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200"
        disabled={!damageAmount || !victimName || !siteName}
      >
        PDF 다운로드
      </button>
    </form>
  );
}