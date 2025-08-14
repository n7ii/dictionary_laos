import React from 'react';
import { BookOpen, Search, Heart, History } from 'lucide-react';

export const FallbackApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Simple Header */}
      <header className="bg-white shadow-lg border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">ວັດຈະນານຸກົມລາວ</h1>
                <p className="text-xs text-slate-500 hidden sm:block">ເພື່ອນຮ່ວມທາງວັດຈະນານຸກົມອັດສະລິຍະຂອງທ່ານ</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Simple Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6">
            <BookOpen size={48} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">ວັດຈະນານຸກົມລາວ</h2>
          <p className="text-slate-600 mb-8">ຄົ້ນຫາຄຳສັບລາວໄດ້ຢູ່ທີ່ນີ້</p>
          
          {/* Simple Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="ຄົ້ນຫາຄຳສັບ..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 bg-white shadow-lg"
                disabled
              />
            </div>
            <p className="text-sm text-slate-500 mt-2">ກະລຸນາລອງໂຫຼດໜ້າຈໍຄືນ</p>
          </div>

          {/* Simple Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium bg-blue-100 text-blue-700">
              <BookOpen size={18} />
              <span>ຄົ້ນຫາ</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-100">
              <Heart size={18} />
              <span>ລາຍການທີ່ມັກ</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-100">
              <History size={18} />
              <span>ປະຫວັດ</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
