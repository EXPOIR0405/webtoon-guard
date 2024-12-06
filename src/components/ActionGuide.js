'use client';

import { useState } from 'react';

const ActionGuide = () => {
    const [showDownloadPopup, setShowDownloadPopup] = useState(false);

    // PDF 다운로드 및 팝업 표시 함수
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/politicians/number.pdf';
      link.download = '국회의원_연락처.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setShowDownloadPopup(true);
      setTimeout(() => {
        setShowDownloadPopup(false);
      }, 10000);
    };

    // 시민행동 일정 섹션으로 스크롤하는 함수
    const scrollToProtests = () => {
      const protestsSection = document.getElementById('protests');
      if (protestsSection) {
        protestsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <>
        {/* 다운로드 완료 팝업 */}
        {showDownloadPopup && (
          <div className="fixed top-4 right-4 bg-zinc-900 p-4 rounded-xl border border-red-600 shadow-lg z-[9999] animate-fade-in">
            <p className="text-white">
              파일이 다운로드 되었습니다!<br />
              <span className="text-gray-300 text-sm">
                ※ 소속 지역구 별로 분류되어 있으니 확인해주세요. 
              </span>
            </p>
          </div>
        )}

        <div className="w-full bg-black py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
              <span className="border-b-4 border-red-600 pb-2 text-white hover:border-red-400 transition-colors">
                시민은 무엇을 할 수 있을까요?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 1. 국회의원 연락하기 */}
              <div className="bg-zinc-900 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  1. 국회의원에게 연락하기
                </h3>
                <p className="text-gray-300 mb-4">
                  여러분의 지역구 국회의원에게 연락하여 의견을 전달하세요:
                  <br /><br />
                  • 이메일, 전화, 팩스 등 다양한 방법으로 연락
                  <br />
                  • 특히 국민의힘 소속 의원들에게 탄핵 찬성 요구
                  <br />
                  • 예시 문구: &ldquo;헌법을 수호하지 못한 대통령은 탄핵되어야 합니다. 탄핵에 찬성해주세요.&rdquo;
                </p>
                <button 
                  onClick={handleDownload}
                  className="text-red-500 hover:text-red-400 flex items-center"
                >
                  국회의원 연락처 확인하기 →
                </button>
              </div>

              {/* 2. SNS 공유하기 */}
              <div className="bg-zinc-900 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  2. SNS에서 목소리 내기
                </h3>
                <p className="text-gray-300 mb-4">
                  SNS에서 여러분의 의견을 공유하세요:
                  <br /><br />
                  • 해시태그: #탄핵찬성 #계엄령반대 #민주주의수호
                  <br />
                  • 공유할 내용: 계엄령 선포의 위험성, 탄핵의 필요성
                  <br />
                  • 관련 뉴스나 전문가 의견 공유하기
                  <br />
                  • 평화적인 방식으로 의견 표현하기
                </p>
              </div>

              {/* 3. 평화로운 시민행동 */}
              <div className="bg-zinc-900 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  3. 평화로운 시민행동 참여
                </h3>
                <p className="text-gray-300 mb-4">
                  평화로운 방식으로 의사를 표현하세요:
                  <br /><br />
                  • 촛불집회 참여하기
                  <br />
                  • 1인 시위 동참하기
                  <br />
                  • 서명운동 참여하기
                  <br />
                  • 주변인들과 상황의 심각성 공유하기
                </p>
                <div className="space-y-2">
                  <button 
                    onClick={scrollToProtests}
                    className="text-red-500 hover:text-red-400 block"
                  >
                    집회 일정 확인하기 →
                  </button>
                  {/* 온라인 서명 기능 추후 구현 예정 */}
                  {/* <a 
                    href="/petition" 
                    className="text-red-500 hover:text-red-400 block"
                  >
                    온라인 서명 참여하기 →
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

// 애니메이션 스타일을 전역 CSS에 추가
const styles = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
  }
`;

// 클라이언트 사이드에서만 스타일 추가
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default ActionGuide;