import Link from 'next/link';

export default function Result({ query }) {
  const damageAmount = 90000; // 예시용 피해 금액

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center text-black">피해 분석 결과</h2>
        <p className="text-center text-gray-700 mb-6">
          입력하신 정보를 기반으로 계산된 피해 금액은 다음과 같습니다.
        </p>
        <div className="text-2xl font-semibold text-center text-red-600">
          {damageAmount.toLocaleString()} 원
        </div>
        <div className="mt-4 text-center">
          <Link href="/">
            <span className="text-blue-600 underline cursor-pointer">메인 페이지로 돌아가기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}