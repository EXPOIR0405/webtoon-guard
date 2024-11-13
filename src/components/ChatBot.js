"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// 타이핑 효과를 위한 커스텀 훅
function useTypingEffect(text, speed = 30) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    setIsTyping(true);
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isTyping };
}

// 메시지 컴포넌트
function Message({ message, isLatest }) {
  const { displayedText, isTyping } = useTypingEffect(
    message.text,
    message.sender === 'bot' && isLatest ? 30 : 0
  );

  return (
    <div
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          message.sender === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-800 shadow-sm border'
        }`}
      >
        <p className="whitespace-pre-wrap">
          {message.sender === 'bot' && isLatest ? displayedText : message.text}
          {message.sender === 'bot' && isLatest && isTyping && '▋'}
        </p>
      </div>
    </div>
  );
}

// 로딩 애니메이션 컴포넌트
function LoadingDots() {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-200 rounded-lg p-3 max-w-[80%]">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

export default function ChatBot({ onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '안녕하세요! 웹툰 저작권 관련 문의를 도와드립니다.'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showFAQ, setShowFAQ] = useState(true);
  const messagesEndRef = useRef(null);

  const FAQ_ITEMS = [
    "저작권 등록은 어떻게 하나요?",
    "불법 복제 발견시 대응 방법은?",
    "해외 서비스 침해 대응 방법은?",
    "팬아트 가이드라인은 어떻게 되나요?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFAQClick = (question) => {
    setInputMessage(question);
    handleSubmit(null, question);
  };

  const handleSubmit = async (e, faqQuestion = null) => {
    if (e) e.preventDefault();
    const messageToSend = faqQuestion || inputMessage.trim();
    if (!messageToSend || isLoading) return;

    try {
      setIsLoading(true);
      const userMessage = { sender: 'user', text: messageToSend };
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { sender: 'bot', text: data.message }]);

    } catch (error) {
      console.error('API 오류:', error.message);
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: '죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-[350px] md:w-[450px] bg-white rounded-lg shadow-xl border overflow-hidden">
      {/* 헤더 */}
      <div className="flex justify-between items-center px-4 py-3 bg-white border-b">
        <h2 className="text-lg font-semibold text-gray-800">웹툰 법률 상담</h2>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="채팅창 닫기"
        >
          <svg 
            className="w-6 h-6 text-gray-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <Message 
            key={index} 
            message={message} 
            isLatest={index === messages.length - 1 && message.sender === 'bot'}
          />
        ))}
        {isLoading && <LoadingDots />}
        <div ref={messagesEndRef} />
      </div>

      {/* FAQ 섹션 */}
      <div className="border-t bg-white">
        <button
          onClick={() => setShowFAQ(!showFAQ)}
          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex justify-between items-center"
        >
          <span>자주 묻는 질문</span>
          <svg
            className={`w-4 h-4 transform transition-transform ${showFAQ ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showFAQ && (
          <div className="p-2 space-y-1 bg-gray-50">
            {FAQ_ITEMS.map((question, index) => (
              <button
                key={index}
                onClick={() => handleFAQClick(question)}
                className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 입력 영역 */}
      <form onSubmit={handleSubmit} className="border-t p-3 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="법률 질문을 입력하세요..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-colors"
          >
            전송
          </button>
        </div>
      </form>
    </div>
  );
}