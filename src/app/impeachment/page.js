'use client';

import React, { useState, useEffect } from 'react';
import Timeline from '@/components/Timeline';
import ReasonsSection from '@/components/ReasonsSection';
import ActionGuide from '@/components/ActionGuide';
import QuotesCarousel from '@/components/QuotesCarousel';
import NewsSection from '@/components/NewsSection';
import ActionSection from '@/components/ActionSection';


const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      try {
        const targetDate = new Date('2024-12-07T19:00:00+09:00');
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference <= 0) {
          return {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
          };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return {
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        };
      } catch (error) {
        console.error('Date calculation error:', error);
        return timeLeft;
      }
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black pt-20">
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-white">
          탄핵 투표까지 <br />남은 시간
        </h2>
        
        <div className="bg-zinc-900 p-8 rounded-xl shadow-2xl">
          <div className="grid grid-cols-7 gap-2 md:gap-4 items-center justify-center">
            {/* Days */}
            <div className="col-span-1">
              <div className="flex justify-center">
                <div className="text-4xl md:text-7xl text-red-600 font-mono tracking-wider led-effect">
                  {timeLeft.days}
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="col-span-1 text-4xl md:text-7xl text-red-600 text-center font-mono led-effect">:</div>

            {/* Hours */}
            <div className="col-span-1">
              <div className="flex justify-center">
                <div className="text-4xl md:text-7xl text-red-600 font-mono tracking-wider led-effect">
                  {timeLeft.hours}
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="col-span-1 text-4xl md:text-7xl text-red-600 text-center font-mono led-effect">:</div>

            {/* Minutes */}
            <div className="col-span-1">
              <div className="flex justify-center">
                <div className="text-4xl md:text-7xl text-red-600 font-mono tracking-wider led-effect">
                  {timeLeft.minutes}
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="col-span-1 text-4xl md:text-7xl text-red-600 text-center font-mono led-effect">:</div>

            {/* Seconds */}
            <div className="col-span-1">
              <div className="flex justify-center">
                <div className="text-4xl md:text-7xl text-red-600 font-mono tracking-wider led-effect">
                  {timeLeft.seconds}
                </div>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="grid grid-cols-7 gap-2 md:gap-4 text-center mt-2">
            <div className="col-span-1 text-white font-bold text-sm md:text-base">일</div>
            <div className="col-span-1"></div>
            <div className="col-span-1 text-white font-bold text-sm md:text-base">시</div>
            <div className="col-span-1"></div>
            <div className="col-span-1 text-white font-bold text-sm md:text-base">분</div>
            <div className="col-span-1"></div>
            <div className="col-span-1 text-white font-bold text-sm md:text-base">초</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .led-effect {
          text-shadow: 0 0 5px rgba(239, 68, 68, 0.7),
                       0 0 10px rgba(239, 68, 68, 0.5),
                       0 0 20px rgba(239, 68, 68, 0.3);
        }
      `}</style>
    </div>
  );
};

export default function ImpeachmentPage() {
  return (
    <div className="min-h-screen bg-black">
      <CountdownTimer />
      <Timeline />
      <ReasonsSection />
      <ActionGuide />
      <QuotesCarousel />
      <div id="protests">
        <NewsSection />
      </div>
      <ActionSection />
    </div>
  );
}