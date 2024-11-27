"use client";
import { useState } from "react";
import ChatBot from '@/components/ChatBot';
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Script from 'next/script'


export default function RootLayout({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

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
