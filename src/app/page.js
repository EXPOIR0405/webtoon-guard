// src/app/page.js
import WebtoonForm from '../components/WebtoonForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        
        <WebtoonForm />
      </div>
    </div>
  );
}