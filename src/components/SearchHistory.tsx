import React from 'react';
import { Clock, Trash2, X } from 'lucide-react';
import { SearchHistory as SearchHistoryType } from '../types/dictionary';

interface SearchHistoryProps {
  history: SearchHistoryType[];
  onSearchWord: (word: string) => void;
  onClearHistory: () => void;
  onRemoveItem: (word: string) => void;
}

export const SearchHistory: React.FC<SearchHistoryProps> = ({
  history,
  onSearchWord,
  onClearHistory,
  onRemoveItem,
}) => {
  if (history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-6">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
          <Clock size={32} className="text-emerald-500" />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-slate-700">
            ຍັງບໍ່ມີປະຫວັດການຄົ້ນຫາ
          </h3>
          <p className="text-slate-500 max-w-md">
            ປະຫວັດການຄົ້ນຫາຂອງທ່ານຈະປາກົດຢູ່ທີ່ນີ້ເມື່ອທ່ານຄົ້ນຫາຄຳສັບ. 
            ນີ້ຈະຊ່ວຍໃຫ້ທ່ານກັບໄປເບິ່ງຄຳສັບທີ່ເຄີຍຄົ້ນຫາໄດ້ຢ່າງໄວ.
          </p>
        </div>
      </div>
    );
  }

  const sortedHistory = [...history].sort((a, b) => b.timestamp - a.timestamp);

  // Group by date
  const groupedHistory = sortedHistory.reduce((groups, item) => {
    const date = new Date(item.timestamp).toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
    return groups;
  }, {} as Record<string, SearchHistoryType[]>);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
          <Clock size={24} className="text-emerald-500 mr-3" />
          ປະຫວັດການຄົ້ນຫາ
        </h2>
        <button
          onClick={onClearHistory}
          className="flex items-center space-x-2 text-red-600 hover:text-red-700 
                   bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg font-medium 
                   transition-all duration-200"
        >
          <Trash2 size={18} />
          <span>ລຶບທັງໝົດ</span>
        </button>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedHistory).map(([date, items]) => (
          <div key={date} className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-700 border-b 
                         border-slate-200 pb-2">
              {new Date(date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </h3>
            
            <div className="grid gap-3">
              {items.map((item, index) => (
                <div
                  key={`${item.word}-${item.timestamp}`}
                  className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 
                           hover:shadow-md transition-all duration-200 group flex 
                           items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-slate-400 text-sm font-mono bg-slate-50 
                                   px-2 py-1 rounded">
                      {new Date(item.timestamp).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    <button
                      onClick={() => onSearchWord(item.word)}
                      className="text-slate-700 font-medium capitalize hover:text-blue-600 
                               transition-colors duration-200"
                    >
                      {item.word}
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.word)}
                    className="p-1 text-slate-300 hover:text-red-500 hover:bg-red-50 
                             rounded-full transition-all duration-200 opacity-0 
                             group-hover:opacity-100"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};