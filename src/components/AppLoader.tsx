import React from 'react';
import { BookOpen } from 'lucide-react';

export const AppLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 
                      rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6 animate-pulse">
          <BookOpen size={40} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">ວັດຈະນານຸກົມລາວ</h1>
        <p className="text-slate-600">ກຳລັງໂຫຼດ...</p>
        <div className="mt-4 flex justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce mx-1"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce mx-1" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce mx-1" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};
