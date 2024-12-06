//주요 뉴스 섹션

'use client';

import { useState, useEffect } from 'react';

const NewsSection = () => {
  const [news, setNews] = useState({ impeachment: [], president: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState({
    impeachment: false,
    president: false
  });
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) throw new Error('뉴스를 불러오는데 실패했습니다');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const toggleShowMore = (section) => {
    setShowMore(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const NewsPreview = ({ items, title, section }) => {
    const displayItems = showMore[section] ? items : items.slice(0, 5);
    
    return (
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <div className="space-y-4">
          {displayItems.map((item, index) => (
            <div key={index} className="bg-zinc-900 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400 text-sm">{item.date}</span>
                <span className="text-gray-300 text-sm">|</span>
                <span className="text-blue-400 text-sm">{item.source}</span>
              </div>
              <h4 className="text-white font-medium mb-2">{item.title}</h4>
              <div className="flex justify-end">
                <button
                  onClick={() => window.open(item.url, '_blank')}
                  className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                >
                  자세히 보기 →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {items.length > 5 && (
          <div className="text-center mt-4">
            <button
              onClick={() => toggleShowMore(section)}
              className="bg-zinc-800 text-white px-6 py-2 rounded-full hover:bg-zinc-700 transition-colors"
            >
              {title} {showMore[section] ? '접기' : '더보기'} 
              <span className="ml-2">{showMore[section] ? '↑' : '↓'}</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  if (loading) return <div className="text-white text-center">로딩 중...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="w-full bg-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
          주요 뉴스
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <NewsPreview 
            items={news.impeachment} 
            title="탄핵 관련 소식" 
            section="impeachment"
          />
          <NewsPreview 
            items={news.president} 
            title="윤석열 대통령 관련 소식" 
            section="president"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;