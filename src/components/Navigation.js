'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b z-[100] fixed w-full top-0">
      <div className="container mx-auto pl-2 pr-6">
        <div className="flex justify-between items-center h-16">
          {/* 로고 영역 */}
          <div className="flex-shrink-0 flex items-center ml-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-blue-600">그림지기</span>
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-black hover:text-blue-600 py-2">
                <span>서비스 안내</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div 
                className={`absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg py-2 z-[101] ${
                  isDropdownOpen ? 'block' : 'hidden'
                }`}
              >
                <Link href="/about" className="block px-4 py-2 text-sm text-black hover:bg-blue-50 hover:text-blue-600">
                  그림지기 소개
                </Link>
                <Link href="/LegalSupport" className="block px-4 py-2 text-sm text-black hover:bg-blue-50 hover:text-blue-600">
                  법률 상담
                </Link>
                {/* <Link href="/hall-of-shame" className="block px-4 py-2 text-sm text-black hover:bg-blue-50 hover:text-blue-600">
                  불법 사이트 운영자 명예의 전당
                </Link> */}
              </div>
            </div>

            {/* <Link href="#guide" className="text-black hover:text-blue-600">
              이용가이드
            </Link> */}
            <Link href="/legal" className="text-black hover:text-blue-600">
              자주 묻는 질문
            </Link>
            <Link href="/inquiry" className="text-black hover:text-blue-600">
              문의하기
            </Link>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="space-y-1">
              <Link href="/hall-of-shame" className="block px-3 py-2 text-black hover:bg-blue-50 hover:text-blue-600 rounded-md">
                명예의 전당
              </Link>
              <Link href="/LegalSupport" className="block px-3 py-2 text-black hover:bg-blue-50 hover:text-blue-600 rounded-md">
                법률 상담
              </Link>
            </div>
            <Link href="/legal" className="block px-3 py-2 text-black hover:bg-blue-50 hover:text-blue-600 rounded-md">
              자주 묻는 질문
            </Link>
            <Link href="/inquiry" className="block px-3 py-2 text-black hover:bg-blue-50 hover:text-blue-600 rounded-md">
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}