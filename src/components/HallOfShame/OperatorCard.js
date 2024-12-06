import Image from 'next/image';

export default function OperatorCard({ operator }) {
  return (
    <div className="border-2 border-red-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-all">
      {/* 기본 정보 섹션 */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🏆</span>
          <h3 className="text-xl font-bold text-black">
            {operator.name}
          </h3>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
            {operator.status}
          </span>
        </div>
      </div>

      {/* 검거 현장 사진 (있을 경우) */}
      {operator.image && (
        <div className="my-6">
          <div className="relative rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={operator.image}
              alt="검거 현장"
              className="w-full object-cover"
              width={200}
              height={200}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
              📸 검거 현장 포착! 법정에서 반성하는 척 하더니...
            </div>
          </div>
        </div>
      )}

      {/* 운영 사이트 */}
      <div className="mt-4">
        <h4 className="font-bold text-black mb-2">운영 사이트:</h4>
        <div className="flex flex-wrap gap-2">
          {operator.sites.map((site, index) => (
            <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-black">
              {site}
            </span>
          ))}
        </div>
      </div>

      {/* 피해액 */}
      <div className="mt-4">
        <h4 className="font-bold text-black mb-2">추정 피해액</h4>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-black font-bold">
            한국: <span className="text-red-600">{operator.damages.korea}</span>
          </p>
          <p className="text-black font-bold">
            일본: <span className="text-red-600">{operator.damages.japan}</span>
          </p>
        </div>
      </div>

      {/* 죄목 */}
      <div className="mt-4">
        <h4 className="font-bold text-black mb-2">주요 죄목:</h4>
        <ul className="space-y-2">
          {operator.details.map((detail, index) => (
            <li key={index} className="flex items-center space-x-2 text-black">
              <span className="text-red-500">⚠️</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 마지막 업데이트 */}
      <div className="mt-6 text-sm border-t pt-4">
        <span className="text-black">마지막 목격일: </span>
        <span className="font-mono">{operator.lastUpdated}</span>
      </div>
    </div>
  );
}