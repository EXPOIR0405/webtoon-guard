'use client'

import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { faqData } from '../data/faqData';

const FAQPage = () => {
  // 상태 관리
  const [activeCategory, setActiveCategory] = useState('저작권 관련 질문');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['저작권 관련 질문', '계약 관련 질문', '기타 사례'];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 카테고리 변경 시 페이지 리셋
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);  // 페이지를 1로 리셋
  };

  // FAQ 필터링 로직
  const filteredFAQs = (faqData[activeCategory] || []).filter(faq =>
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const allFilteredFAQs = Object.values(faqData).flat().filter(faq =>
    faq.q.includes(searchTerm) || faq.a.includes(searchTerm)
  );

  // 페이지네이션 로직
  const getFAQsForCurrentPage = (faqs) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return faqs.slice(startIndex, endIndex);
  };

  const currentFAQs = getFAQsForCurrentPage(searchTerm ? allFilteredFAQs : filteredFAQs);
  const totalPages = Math.ceil((searchTerm ? allFilteredFAQs.length : filteredFAQs.length) / itemsPerPage);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b">
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-black mt-12">자주 묻는 질문</h2>
        
        {/* 검색 입력 필드 */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="궁금한게 있으신가요? 검색해보세요."
            className="w-full py-3 pr-12 pl-4 text-gray-900 border rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex flex-col md:flex-row">
          {/* 카테고리 사이드바 */}
          <aside className="w-full md:w-1/4 pr-0 md:pr-8 mb-6 md:mb-0">
            <ul className="flex flex-wrap md:flex-col">
              {categories.map(category => (
                <li key={category} className="mb-2 w-1/2 md:w-full">
                  <button
                    onClick={() => handleCategoryChange(category)}
                    className={`text-left w-full py-2 px-4 rounded ${
                      activeCategory === category ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* FAQ 목록 */}
          <div className="w-full md:w-3/4">
            {currentFAQs.map((faq, index) => (
              <div key={`${activeCategory}-${index}`} className="mb-6 border-b pb-6">
                <h3 
                  className="text-base md:text-lg font-medium text-gray-900 mb-2 cursor-pointer" 
                  onClick={() => {
                    const answerId = `answer-${activeCategory}-${index}`;
                    const answerElement = document.getElementById(answerId);
                    answerElement.classList.toggle('hidden');
                  }}
                >
                  {faq.q}
                </h3>
                <p 
                  id={`answer-${activeCategory}-${index}`} 
                  className="text-gray-600 hidden"
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                ></p>
              </div>
            ))}
            
            {/* 페이지네이션 */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 text-blue-600"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <span className="text-gray-600">
                  {currentPage} / {totalPages}
                </span>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 text-blue-600"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            해당 내용은 만화인 헬프데스크 2020 자료집을 참고하여 작성되었습니다.<br /> 
            이후 내용은 정기적으로 추가될 예정입니다. 내용은 질문에 대한 법률전문가의 개인적인 의견이므로 참고용으로 사용해주세요.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FAQPage;