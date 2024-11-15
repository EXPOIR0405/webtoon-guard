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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showManualInput, setShowManualInput] = useState(false);
  const [evidences, setEvidences] = useState([]);
  const [evidenceDescriptions, setEvidenceDescriptions] = useState([]);

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

  // 증거자료 추가 함수
  const handleAddEvidence = (e) => {
    const files = Array.from(e.target.files);
    const newEvidences = [...evidences, ...files];
    const newDescriptions = [...evidenceDescriptions, ...files.map(() => '')];
    
    setEvidences(newEvidences);
    setEvidenceDescriptions(newDescriptions);
  };

  // 증거자료 설명 업데이트
  const handleDescriptionChange = (index, description) => {
    const newDescriptions = [...evidenceDescriptions];
    newDescriptions[index] = description;
    setEvidenceDescriptions(newDescriptions);
  };

  // 증거자료 삭제
  const handleRemoveEvidence = (index) => {
    const newEvidences = evidences.filter((_, i) => i !== index);
    const newDescriptions = evidenceDescriptions.filter((_, i) => i !== index);
    setEvidences(newEvidences);
    setEvidenceDescriptions(newDescriptions);
  };

  // 피해 내용 생성 함수 수정
  const getDamageContent = () => {
    const views = totalViews || calculatedViews || 0;
    const damage = damageAmount || 0;
    
    // 추천수 기반일 경우
    if (calculatedViews) {
      return `불법사이트 ${siteName}에서 피해자의 웹툰 ${webtoonTitle}이 무단으로 복제 및 게시되어 해당 사이트 내 추천수 ${totalRecommendations.toLocaleString()}회가 확인되어있으며, 이는 추정 조회수 ${calculatedViews.toLocaleString()}회에 해당하는 상당한 규모의 불법 열람이 발생했음을 시사합니다. 이에 따른 정상 구매 기준 예상 피해액은 최소 ${damage.toLocaleString()}원으로 추산됩니다.`;
    }
    
    // 조회수 직접 입력 시
    return `불법사이트 ${siteName}에서 피해자의 웹툰 ${webtoonTitle}이 무단으로 복제 및 게시되어 총 ${views.toLocaleString()}회의 불법 열람이 직접 확인되었으며, 이는 정상 구매 기준 ${damage.toLocaleString()}원의 명백한 피해액이 발생하였음을 의미합니다.`;
  };

  // PDF 생성시 사용할 용도 텍스트 가져오기
  const getPurposeText = () => {
    const selectedPurpose = purposeOptions.find(opt => opt.value === purpose);
    return selectedPurpose ? selectedPurpose.label : purpose;
  };

  // PDF 생성
  const generatePDF = async () => {
    // 임시 컨테이너 생성
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '0px';
    document.body.appendChild(container);

    // 기본 정보 요소 생성
    const reportElement = document.createElement('div');
    reportElement.innerHTML = `
      <style>
        @import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css');
        
        * {
          color: #000000;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 0 auto;
          max-width: 800px;
        }
        
        td {
          border: 1px solid #000;
          padding: 15px;
          height: 50px;
          color: #000000;
        }
        
        .label-cell {
          width: 120px;
          background-color: #f8f9fa;
          font-weight: bold;
          text-align: center;
        }
        
        .content-cell {
          padding-left: 20px;
          line-height: 1.6;
        }
        
        .damage-cell {
          height: 200px;
          vertical-align: top;
          white-space: pre-line;
        }
      </style>
      
      <div style="padding: 40px; font-family: 'NanumSquare', sans-serif; max-width: 800px; margin: 0 auto;">
        <h1 style="text-align: center; font-size: 28px; margin-bottom: 40px; font-weight: 800;">웹툰 피해사실 정리서</h1>
        
        <table>
          <tr>
            <td class="label-cell">성 명</td>
            <td class="content-cell">${victimName}</td>
          </tr>
          <tr>
            <td class="label-cell">생년월일</td>
            <td class="content-cell">${birthDate}</td>
          </tr>
          <tr>
            <td class="label-cell">주 소</td>
            <td class="content-cell">${address}</td>
          </tr>
          <tr>
            <td class="label-cell">전화번호</td>
            <td class="content-cell">${phoneNumber}</td>
          </tr>
          <tr>
            <td class="label-cell">피해작품</td>
            <td class="content-cell">${webtoonTitle}</td>
          </tr>
          <tr>
            <td class="label-cell">피해내용</td>
            <td class="content-cell damage-cell">
              ${getDamageContent()}
            </td>
          </tr>
          <tr>
            <td class="label-cell">용 도</td>
            <td class="content-cell">${getPurposeText()}</td>
          </tr>
        </table>
        
        <p style="text-align: center; margin-top: 60px; font-size: 16px;">
          ${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일
        </p>
      </div>
    `;
    container.appendChild(reportElement);

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // 기본 정보 페이지 생성
      const basicInfoCanvas = await html2canvas(reportElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1024,
        windowHeight: 1448
      });
      
      const imgData = basicInfoCanvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), (basicInfoCanvas.height * pdf.internal.pageSize.getWidth()) / basicInfoCanvas.width);

      // 증거자료가 있는 경우 처리
      if (evidences.length > 0) {
        for (let i = 0; i < evidences.length; i++) {
          // 새 페이지 추가
          pdf.addPage();

          // 증거자료 요소 생성
          const evidenceElement = document.createElement('div');
          evidenceElement.innerHTML = `
            <div style="padding: 40px; font-family: 'NanumSquare', sans-serif;">
              <h2 style="font-size: 32px; margin-bottom: 30px; color: #000000; font-weight: bold; text-align: center;">증 ${i + 1}</h2>
              <div style="max-height: 500px; overflow: hidden; margin-bottom: 30px; text-align: center;">
                <img 
                  src="${URL.createObjectURL(evidences[i])}" 
                  style="max-width: 100%; max-height: 500px; object-fit: contain;"
                >
              </div>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 4px;">
                <p style="font-weight: bold; margin-bottom: 15px; color: #000000; font-size: 24px;">상세 설명</p>
                <p style="line-height: 1.8; color: #000000; font-size: 18px;">${evidenceDescriptions[i] || '설명 없음'}</p>
              </div>
            </div>
          `;
          container.appendChild(evidenceElement);

          // 이미지가 로드될 때까지 대기
          await new Promise(resolve => setTimeout(resolve, 1000));

          const canvas = await html2canvas(evidenceElement, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            windowWidth: 1024,
            windowHeight: 1448,
            height: 1000,
            onclone: function(clonedDoc) {
              const img = clonedDoc.querySelector('img');
              if (img) {
                img.style.maxHeight = '500px';
                img.style.objectFit = 'contain';
              }
            }
          });

          const evidenceImgData = canvas.toDataURL('image/png');
          pdf.addImage(evidenceImgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), (canvas.height * pdf.internal.pageSize.getWidth()) / canvas.width);
          
          container.removeChild(evidenceElement);
        }
      }

      pdf.save('웹툰_피해사실_정리서.pdf');
    } finally {
      // 임시 컨테이너 제거
      document.body.removeChild(container);
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
          onChange={(e) => {
            setTotalViews(e.target.value);
            // 조회수가 입력되면 추천수와 계산된 조회수를 초기화
            if (e.target.value) {
              setTotalRecommendations('');
              setCalculatedViews(null);
            }
          }}
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
            onChange={(e) => {
              setTotalRecommendations(e.target.value);
              setCalculatedViews(null); // 추천수가 변경되면 계산된 조회수 초기화
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            placeholder="정확한 조회수를 모를 경우 총 추천수를 입력해주세요"
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

      {/* 증거자료 섹션 */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-black">증거자료 첨부</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleAddEvidence}
          className="mt-1 block w-full text-black
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        <p className="text-sm text-black mt-1">
          * 스크린샷, 캡처 이미지 등의 증거자료를 첨부해주세요
        </p>
      </div>

      {/* 첨부된 증거자료 목록 */}
      {evidences.map((file, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-bold text-black text-left">증 {index + 1}</h5>
            <button
              type="button"
              onClick={() => handleRemoveEvidence(index)}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              삭제
            </button>
          </div>
          
          <div className="space-y-2">
            <p className="text-black font-medium">{file.name}</p>
            {file.type.startsWith('image/') && (
              <img
                src={URL.createObjectURL(file)}
                alt={`증거자료 ${index + 1}`}
                className="max-w-full h-auto rounded-md"
              />
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <label className="block text-sm font-medium text-black mb-2">
              상세 설명
            </label>
            <textarea
              placeholder="증거자료에 대한 상세 설명을 입력해주세요"
              value={evidenceDescriptions[index]}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black min-h-[100px] text-[12px]"
            />
          </div>
        </div>
      ))}
    </form>
  );
}
