'use client';

import { useState } from 'react';

const PoliticianQuotes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setQuotes(null);
    setError(null);
    setLoading(true);
    
    try {
      const response = await fetch(`/api/politician-quotes?name=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) throw new Error('검색에 실패했습니다');
      
      const data = await response.json();
      setQuotes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          정치인 발언 검색
        </h2>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-4 justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="정치인 이름을 입력하세요 (예: 한동훈)"
              className="px-4 py-2 rounded-lg bg-zinc-800 text-white w-full max-w-md border border-zinc-700 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              {loading ? '검색 중...' : '검색'}
            </button>
          </div>
        </form>

        {error && (
          <div className="text-red-500 text-center mb-4 bg-red-900/20 p-3 rounded-lg">
            {error}
          </div>
        )}

        {quotes && quotes.quotes.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {quotes.name}의 최근 발언
            </h3>
            <div className="grid gap-4">
              {quotes.quotes.map((quote, index) => (
                <div key={index} className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400 text-sm">{quote.date}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-blue-400 text-sm">{quote.source}</span>
                  </div>
                  <p className="text-white mb-3 text-lg">{quote.quote}</p>
                  <div className="flex justify-end">
                    <a
                      href={quote.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 text-sm hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      자세히 보기 
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {quotes && quotes.quotes.length === 0 && (
          <div className="text-gray-400 text-center bg-zinc-900/50 p-6 rounded-lg">
            발언을 찾을 수 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default PoliticianQuotes; 