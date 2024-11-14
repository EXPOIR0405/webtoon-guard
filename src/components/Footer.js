import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 및 설명 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-blue-600 mb-4">불법웹툰대응센터</h3>
            <p className="text-gray-600 mb-4">
              웹툰/웹소설 저작권 보호와 불법 유통 근절을 위해 노력하고 있습니다.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">서비스</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/hall-of-shame" className="text-gray-600 hover:text-blue-600">
                  불법 운영자 명단
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-600 hover:text-blue-600">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="#report" className="text-gray-600 hover:text-blue-600">
                  피해 신고
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">문의하기</h4>
            <ul className="space-y-3">
              <li className="text-gray-600">
                이메일: rkdalswjd0405@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 표시 */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © 2024 불법웹툰대응센터. All rights reserved.
          </p>
          <div className="flex flex-col items-center mt-4 space-y-2">
            <p className="text-sm text-gray-500">
              본 사이트는 웹툰/웹소설 저작권 보호를 위한 비영리 프로젝트입니다.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>경기도 갭이어 프로젝트 플러스+의 일환으로 제작되었습니다.</span>
              <span className="text-blue-500">|</span>
              <span className="group relative inline-block">
                <span className="cursor-pointer text-blue-500 hover:text-blue-600">
                  Special Thanks to. 김동연 경기도지사님 🙏
                </span>
                <span className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs text-white bg-gray-800 rounded-lg whitespace-nowrap">
                  덕분에 좋은 프로젝트 만들었습니다! 😊
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}