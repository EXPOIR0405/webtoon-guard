'use client';

import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

const ActionSection = () => {
  const shareText = "대한민국의 민주주의를 지키기 위해, 우리는 탄핵에 찬성합니다. 당신의 목소리도 함께해주세요. #탄핵찬성 #민주주의수호";
  const shareUrl = "https://www.grimkeeper.co.kr/impeachment";

  const handleShare = (platform) => {
    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
          '_blank'
        );
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'instagram':
        // Instagram은 직접적인 공유 URL이 없어서 스토리 공유로 대체
        alert('Instagram 스토리에 공유하려면 웹사이트 주소를 복사해서 붙여넣기 해주세요.');
        navigator.clipboard.writeText(shareUrl);
        return;
      case 'threads':
        // Threads도 직접적인 공유 URL이 없음
        alert('Threads에 공유하려면 웹사이트 주소를 복사해서 붙여넣기 해주세요.');
        navigator.clipboard.writeText(shareUrl);
        return;
    }
  };

  return (
    <div className="w-full bg-zinc-900 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          공유로 함께해주세요
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {/* Twitter */}
          <button 
            onClick={() => handleShare('twitter')}
            className="flex items-center gap-2 bg-[#1DA1F2] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <FaTwitter className="text-2xl" />
            <span>트위터</span>
          </button>

          {/* Facebook */}
          <button 
            onClick={() => handleShare('facebook')}
            className="flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <FaFacebook className="text-2xl" />
            <span>페이스북</span>
          </button>

          {/* Instagram */}
          <button 
            onClick={() => handleShare('instagram')}
            className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <FaInstagram className="text-2xl" />
            <span>인스타그램</span>
          </button>

          {/* Threads */}
          <button 
            onClick={() => handleShare('threads')}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity border border-white"
          >
            <SiThreads className="text-2xl" />
            <span>스레드</span>
          </button>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto">
          SNS에 공유하여 더 많은 시민들이 함께할 수 있도록 해주세요. <br />
          당신의 작은 행동이 내일의 걱정없는 한국의 밤을 불러올 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default ActionSection;