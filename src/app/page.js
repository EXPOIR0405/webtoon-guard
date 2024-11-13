// src/app/page.js
import WebtoonForm from '../components/WebtoonForm';
import ChatBot from '@/components/ChatBot';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 메인 폼 */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <WebtoonForm />
            </div>
          </div>

          {/* 사용 안내 */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                사용 안내
              </h3>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>모든 정보는 따로 저장되지 않으며, PDF 생성 후 즉시 폐기됩니다.</p>
                </div>

                <div className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>
                    <span className="font-semibold">필수 입력 정보</span><br />
                    - 이름<br />
                    - 조회수 (또는 추천수)<br />
                    - 한 화당 가격<br />
                    - 불법 사이트 명<br />
                    - 용도
                  </p>
                </div>

                <div className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>조회수를 모를 경우, 추천수를 기준으로 예상 조회수를 계산할 수 있습니다.</p>
                </div>

                <div className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p>한 화당 가격은 마일리지 적립 혜택이 제외된 정가를 기준으로 합니다.</p>
                </div>

                <div className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p>
                    <span className="font-semibold">추천수 환산 기준</span><br />
                    추천수 1회 = 예상 조회수 5회로 계산됩니다.<br />
                    (실제 수치와 차이가 있을 수 있습니다)
                  </p>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-md space-y-4">
                  <div>
                    <p className="text-blue-800 font-medium">📊 추가 정보</p>
                    <ul className="mt-2 text-blue-600 list-disc list-inside space-y-1">
                      <li>정확한 피해액 산정을 위해 가능한 실제 조회수를 입력해주세요</li>
                      <li>추천수 기반 계산은 참고용으로만 활용해주세요</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-blue-800 font-medium">💬 문의하기</p>
                    <p className="mt-1 text-blue-600">
                      기타 문의사항: <a href="mailto:rkdalswjd0405@gmail.com" className="underline hover:text-blue-800">rkdalswjd0405@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}