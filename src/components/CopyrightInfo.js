import React from 'react';

export default function CopyrightInfo() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">웹툰 저작권 보호 지원 기관</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">기관명</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">홈페이지</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">연락처</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">주요 지원 내용</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">비용</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-4 text-sm font-medium text-gray-900">
                한국저작권보호원
              </td>
              <td className="px-4 py-4 text-sm text-blue-600 hover:underline">
                <a href="https://www.kcopa.or.kr" target="_blank" rel="noopener noreferrer">
                  www.kcopa.or.kr
                </a>
              </td>
              <td className="px-4 py-4 text-sm text-gray-600">1588-0190</td>
              <td className="px-4 py-4 text-sm text-gray-600">
                <ul className="list-disc list-inside">
                  <li>저작권 침해 신고 접수</li>
                  <li>불법복제물 모니터링</li>
                  <li>침해 대응 지원</li>
                </ul>
              </td>
              <td className="px-4 py-4 text-sm text-green-600 font-medium">무료</td>
            </tr>
            
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-4 text-sm font-medium text-gray-900">
                한국저작권위원회
              </td>
              <td className="px-4 py-4 text-sm text-blue-600 hover:underline">
                <a href="https://www.copyright.or.kr" target="_blank" rel="noopener noreferrer">
                  www.copyright.or.kr
                </a>
              </td>
              <td className="px-4 py-4 text-sm text-gray-600">1800-5455</td>
              <td className="px-4 py-4 text-sm text-gray-600">
                <ul className="list-disc list-inside">
                  <li>저작권 등록</li>
                  <li>분쟁 조정</li>
                  <li>법률 상담</li>
                </ul>
              </td>
              <td className="px-4 py-4 text-sm text-gray-600">등록비용 발생</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="px-4 py-4 text-sm font-medium text-gray-900">
                서울시 문화예술<br/>프리랜서<br/>공정거래지원센터
              </td>
              <td className="px-4 py-4 text-sm text-blue-600 hover:underline">
                <a href="https://fairstart.seoul.go.kr" target="_blank" rel="noopener noreferrer">
                  fairstart.seoul.go.kr
                </a>
              </td>
              <td className="px-4 py-4 text-sm text-gray-600">02-2133-5349</td>
              <td className="px-4 py-4 text-sm text-gray-600">
                <ul className="list-disc list-inside">
                  <li>계약서 작성 지원</li>
                  <li>법률 상담</li>
                  <li>분쟁 해결 지원</li>
                </ul>
              </td>
              <td className="px-4 py-4 text-sm text-green-600 font-medium">무료</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <p className="text-blue-800 font-medium mb-2">💡 신고 전 준비사항</p>
        <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
          <li>본인의 저작권 증명 자료 (계약서, 등록증 등)</li>
          <li>침해 증거 자료 (캡처본, URL 등)</li>
          <li>구체적인 피해 내용 정리</li>
        </ul>
      </div>
    </div>
  );
}