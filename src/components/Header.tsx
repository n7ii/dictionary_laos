import React from 'react';
import { BookOpen, Heart, History } from 'lucide-react';

interface HeaderProps {
  activeTab: 'search' | 'favorites' | 'history';
  onTabChange: (tab: 'search' | 'favorites' | 'history') => void;
  favoritesCount: number;
  historyCount: number;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeTab, 
  onTabChange, 
  favoritesCount, 
  historyCount 
}) => {
  return (
    <header className="bg-white shadow-lg border-b border-slate-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 
                          rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">ວັດຈະນານຸກົມລາວ</h1>
              <p className="text-xs text-slate-500 hidden sm:block">ເພື່ອນຮ່ວມທາງວັດຈະນານຸກົມອັດສະລິຍະຂອງທ່ານ</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            <button
              onClick={() => onTabChange('search')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium 
                        transition-all duration-200 ${
                activeTab === 'search'
                  ? 'bg-blue-100 text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <BookOpen size={18} />
              <span className="hidden sm:inline">ຄົ້ນຫາ</span>
            </button>

            <button
              onClick={() => onTabChange('favorites')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium 
                        transition-all duration-200 relative ${
                activeTab === 'favorites'
                  ? 'bg-red-100 text-red-700 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Heart size={18} />
              <span className="hidden sm:inline">ລາຍການທີ່ມັກ</span>
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs 
                               rounded-full h-5 w-5 flex items-center justify-center">
                  {favoritesCount > 99 ? '99+' : favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onTabChange('history')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium 
                        transition-all duration-200 relative ${
                activeTab === 'history'
                  ? 'bg-emerald-100 text-emerald-700 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <History size={18} />
              <span className="hidden sm:inline">ປະຫວັດ</span>
              {historyCount > 0 && (
                <span className="absolute -top-2 -right-1 bg-emerald-500 text-white text-xs 
                               rounded-full h-5 w-5 flex items-center justify-center">
                  {historyCount > 99 ? '99+' : historyCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};