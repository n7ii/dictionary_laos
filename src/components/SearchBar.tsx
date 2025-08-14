import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, Trash2 } from 'lucide-react';
import { SearchHistory } from '../types/dictionary';

interface SearchBarProps {
  onSearch: (word: string) => void;
  loading: boolean;
  searchHistory: SearchHistory[];
  onClearHistory: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  loading,
  searchHistory,
  onClearHistory,
}) => {
  const [query, setQuery] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowHistory(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setShowHistory(false);
    }
  };

  const handleHistoryClick = (word: string) => {
    setQuery(word);
    onSearch(word);
    setShowHistory(false);
  };

  const clearInput = () => {
    setQuery('');
    setShowHistory(false);
  };

  const recentSearches = searchHistory
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 5);

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative group">
          <Search 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" 
            size={20} 
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowHistory(recentSearches.length > 0)}
            placeholder="ຄົ້ນຫາຄຳສັບ..."
            className="w-full pl-12 pr-12 py-4 text-lg border-2 border-slate-200 rounded-2xl 
                     focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none
                     transition-all duration-300 bg-white shadow-lg hover:shadow-xl
                     disabled:bg-slate-50 disabled:text-slate-500"
            disabled={loading}
          />
          {query && (
            <button
              type="button"
              onClick={clearInput}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 
                       hover:text-slate-600 transition-colors duration-200 p-1 rounded-full
                       hover:bg-slate-100"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </form>

      {showHistory && recentSearches.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-slate-200 rounded-2xl 
                      shadow-xl z-50 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <span className="text-sm font-medium text-slate-600 flex items-center">
              <Clock size={16} className="mr-2" />
              ການຄົ້ນຫາຫຼ້າສຸດ
            </span>
            <button
              onClick={onClearHistory}
              className="text-slate-400 hover:text-red-500 transition-colors duration-200 p-1 
                       rounded-full hover:bg-red-50"
            >
              <Trash2 size={16} />
            </button>
          </div>
          <div className="max-h-48 overflow-y-auto">
            {recentSearches.map((item, index) => (
              <button
                key={index}
                onClick={() => handleHistoryClick(item.word)}
                className="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors 
                         duration-200 border-b border-slate-50 last:border-b-0"
              >
                <span className="text-slate-700 capitalize">{item.word}</span>
                <span className="text-xs text-slate-400 ml-2">
                  {new Date(item.timestamp).toLocaleDateString()}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};