"use client";
import { useState, useEffect } from "react";
import ChatBot from '@/components/ChatBot';
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Script from 'next/script'
import Image from 'next/image';

// const MainPopup = ({ onClose, onHideForDay }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
//       <div className="bg-zinc-900 rounded-xl p-4 relative border border-red-600 max-w-md w-full">
//         <button 
//           onClick={onClose}
//           className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full text-white flex items-center justify-center hover:bg-red-700 transition-colors z-10"
//         >
//           <span className="text-xl">×</span>
//         </button>
        
//         <a 
//           href="/impeachment" 
//           className="block cursor-pointer"
//           onClick={() => {
//             localStorage.setItem('hasSeenPopup', 'true');
//             onClose();
//           }}
//         >
//           <Image 
//             src="/politicians/notice.png" 
//             alt="긴급 공지사항" 
//             className="w-full h-auto rounded-lg object-contain"
//             style={{ maxHeight: '70vh' }}
//             width={500}
//             height={300}
//           />
//         </a>

//         <div className="mt-4 flex justify-end">
//           <button 
//             onClick={onHideForDay}
//             className="text-gray-400 hover:text-white transition-colors text-sm"
//           >
//             오늘 하루 보지 않기
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function RootLayout({ children }) {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const hasSeenPopup = localStorage.getItem('hasSeenPopup');
//     const hideUntil = localStorage.getItem('hidePopupUntil');
//     const now = new Date().getTime();

//     if (!hasSeenPopup && (!hideUntil || now > parseInt(hideUntil))) {
//       setShowPopup(true);
//     }
//   }, []);

//   const handleClosePopup = () => {
//     localStorage.setItem('hasSeenPopup', 'true');
//     setShowPopup(false);
//   };

//   const handleHideForDay = () => {
//     const tomorrow = new Date();
//     tomorrow.setHours(24, 0, 0, 0);
//     localStorage.setItem('hidePopupUntil', tomorrow.getTime().toString());
//     setShowPopup(false);
//   };

  return (
    <html lang="ko">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-7TZQL660PN`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7TZQL660PN');
          `}
        </Script>
      </head>
      <body className="bg-white">
        {/* {showPopup && (
          <MainPopup 
            onClose={handleClosePopup} 
            onHideForDay={handleHideForDay}
          />
        )} */}
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* 챗봇 버튼 */}
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setIsChatOpen(prev => !prev)}
            className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
            aria-label="채팅 상담 열기"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
              />
            </svg>
          </button>
        </div>

        {/* 챗봇 창 */}
        {isChatOpen && (
          <div className="fixed bottom-20 right-4 z-50">
            <ChatBot onClose={() => setIsChatOpen(false)} />
          </div>
        )}
      </body>
    </html>
  );
}
