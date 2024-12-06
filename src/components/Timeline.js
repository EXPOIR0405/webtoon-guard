'use client';

import { useState } from 'react';

const Timeline = () => {
  const [isOpen, setIsOpen] = useState(false);

  const timelineEvents = [
    {
      date: "2024년 12월 3일 PM 9:30",
      title: "대통령실, 감사원장 탄핵 관련 입장 표명 예정",
      description: "대통령이 감사원장 탄핵, 예산 감액안 단독 처리 관련 견해 밝힌다는 소문이 돔"
    },
    {
      date: "2024년 12월 3일 PM 10:23",
      title: "대국민 긴급 담화 발표",
      description: "야당의 행태를 비난하며 반국가세력이라 지칭"
    },
    {   
      date: "2024년 12월 3일 PM 10:27",
      title: "윤석열, 비상계엄 선포",
      description: "북한 공산세력의 위협으로부터 종북 반국가세력을 지키기 위해(?) 비상계엄 선포"
    },
    {
      date: "2024년 12월 3일 PM 10:42",
      title: "민주당, 국회의원 긴급 소집",
      description: "민주당, 국회의원들을 국회로 소집 요청"
    },
    {
      date: "2024년 12월 3일 PM 10:43",
      title: "국방장관, 전군 주요지휘관회의 개최",
      description: "김용현 국방부장관이 전군에 비상경계 대비태세 강화를 발표"
    },
    {
      date: "2024년 12월 3일 PM 10:49",
      title: "한동훈 '국민과 함께 막겠다'",
      description: "한동훈 당대표는 본인의 페이스북에 계엄령은 잘못됐다고 밝힘"
    },
    {
      date: "2024년 12월 3일 PM 10:56",
      title: "이재명, '윤석열 불법 비상계엄' 주장",
      description: "이재명 민주당 대표는 윤석열 대통령의 비상계엄 선포를 무효라고 주장"
    },
    {
      date: "2024년 12월 3일 PM 10:57",
      title: "경찰 국회경비대, 국회 출입 통제",
      description: "서울경찰청 국회경비대가 모든 출입구를 통제하고 국회의원들의 출입을 제한"
    },
    {
      date: "2024년 12월 3일 PM 10:59",
      title: "추경호, 국민의힘 비상 의총 소집",
      description: "의총 장소는 국민의힘 중앙당사에 열겠다고 공지하였음"
    },
    {
      date: "2024년 12월 3일 PM 11:25",
      title: "윤석열, 계엄사령관에 박안수 임명",
      description: "박안수 육군참모총창이 계엄사령관으로 임명됨"
    },
    {
      date: "2024년 12월 3일 PM 11:27",
      title: "계엄사령부, 포고령 제1호 발령",
      description: "총 여섯가지 사항으로 국회 활동 중지, 언론 통제, 영장없이 체포, 구금, 압수수색을 할 수 있다 밝힘"
    },
    {
      date: "2024년 12월 3일 PM 11:40",
      title: "국회로 계엄군 진출",
      description: "소총으로 무장한 계엄군이 국회에 도착함"
    },
    {
      date: "2024년 12월 4일 AM 12:45",
      title: "계엄군, 국회 본회의장 강제 진입 시도",
      description: "당시 국회 보좌진과 시민들이 강제로 들어오려던 계엄군을 막음"
    },
    {
      date: "2024년 12월 4일 AM 12:49",
      title: "국회 본회의 개회",
      description: "우역곡절 끝에 국회 본회의가 개회됨"
    },
    {
      date: "2024년 12월 4일 AM 1:01",
      title: "비상계엄 해제 요구 결의안 상정",
      description: "재적의원 190명 전원 찬성으로 결의안이 가결됨"
    },
    {
      date: "2024년 12월 4일 AM 1:15",
      title: "계엄군, 국회 본청에서 퇴각",
      description: "국회에 침입했던 계엄군이 물러가기 시작함"
    },
    {
      date: "2024년 12월 4일 AM 1:59",
      title: "우원식 의장, '윤 대통령, 국방부에 계엄해제 요구 통지'",
      description: "우원식 국회의장이 윤석열 대통령에게 계엄해제를 요구하는 통지를 보냈다고 밝힘"
    },
    {
      date: "2024년 12월 4일 AM 4:27",
      title: "윤석열, 비상계엄 해제 선언",
      description: "계엄 해제 요구에 수용하여 계엄 해제할것이라 밝혔으나 국무회의 인원 정족수 미달로 계엄 해제 못함"
    },
    {
      date: "2024년 12월 4일 AM 4:30",
      title: "계엄군, 비상계엄 공식 해제",
      description: "윤석열 대통령이 국무회의를 열어 비상계엄이 해제됨"
    },
    {
      date: "2024년 12월 6일 AM 11:19",
      title: "제 2차 계엄령 시도?",
      description: "육군 여러 부대에서 8일까지 '비상소집에 대비한 지휘간 휴가 통제'지침을 발표해 2차 계엄 의심정황 포착"
    }
  ];

  return (
    <div className="w-full bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:text-3xl font-bold text-white text-center mx-auto block"
        >
          <span className="border-b-4 border-red-600 pb-2 hover:border-red-400 transition-colors">
            왜 우리가 탄핵을 찬성하냐고요?
          </span>
        </button>

        {isOpen && (
          <div className="mt-12 relative">
            {/* 타임라인 라인 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600"></div>

            {/* 타임라인 이벤트들 */}
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                } justify-start`}
              >
                {/* 이벤트 컨텐츠 - 모바일에서는 항상 오른쪽 정렬 */}
                <div className={`w-full md:w-5/12 pl-8 md:pl-0 md:pr-0 
                  ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-zinc-900 p-4 md:p-6 rounded-xl">
                    <div className="text-red-600 font-bold mb-2 text-sm md:text-base">{event.date}</div>
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{event.description}</p>
                  </div>
                </div>

                {/* 타임라인 점 */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full">
                  <div className="absolute w-8 h-8 bg-red-600 rounded-full opacity-25 animate-ping"></div>
                </div>
              </div>
            ))}

            {/* 최종 강조 메시지 */}
            <div className="relative mt-16 mb-8">
              <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-xl border-2 border-red-600">
                <blockquote className="text-xl md:text-2xl text-white text-center font-bold italic">
                  "헌법을 수호하지 못하고, 국가 질서를 흔든 대통령을 더는 감당할 자신이 없다"
                </blockquote>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .timeline-content {
          overflow-wrap: break-word;
          word-break: keep-all;
        }
      `}</style>
    </div>
  );
};

export default Timeline;