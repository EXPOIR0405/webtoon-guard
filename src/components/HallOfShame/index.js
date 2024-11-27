import { operators } from '@/data/operators';
import OperatorCard from './OperatorCard';

export default function HallOfShame() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl mt-12 font-bold text-center mb-12 text-black">
          불법 웹툰 운영자 명예의 전당
        </h1>
        
        <div className="space-y-8">
          {operators.map((operator, index) => (
            <OperatorCard key={index} operator={operator} />
          ))}
        </div>
      </div>
    </div>
  );
}