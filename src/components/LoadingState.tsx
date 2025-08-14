import React from 'react';
import { BookOpen } from 'lucide-react';

export const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6">
      <div className="relative">
        <BookOpen size={48} className="text-blue-500 animate-pulse" />
        <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-20"></div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-slate-700">
          ກຳລັງຄົ້ນຫາ...
        </h3>
        <p className="text-slate-500">
          ກຳລັງຊອກຫາຄຳນິຍາມໃຫ້ທ່ານ
        </p>
      </div>

      {/* Animated dots */}
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};