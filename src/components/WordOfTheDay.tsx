import React from 'react';
import { Calendar, Volume2, Heart } from 'lucide-react';
import { getRandomLaoWord } from '../data/laoMockData';

interface WordOfTheDayProps {
  onSearch: (word: string) => void;
}

export const WordOfTheDay: React.FC<WordOfTheDayProps> = ({ onSearch }) => {
  const { word, definition } = getRandomLaoWord();
  const firstMeaning = definition.meanings[0];
  const firstDefinition = firstMeaning?.definitions[0];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-6 
                  border border-blue-100 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-blue-600">
          <Calendar size={20} className="mr-2" />
          <span className="font-semibold">ຄຳສັບປະຈຳວັນ</span>
        </div>
        <div className="text-xs text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
          {new Date().toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          })}
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <button
            onClick={() => onSearch(word)}
            className="text-2xl font-bold text-slate-800 hover:text-blue-600 
                     transition-colors duration-200 cursor-pointer"
          >
            {word}
          </button>
          <div className="flex items-center mt-1 space-x-2">
            <span className="text-slate-600 font-mono text-sm">
              {definition.phonetic}
            </span>
            <button className="text-blue-500 hover:text-blue-700 transition-colors duration-200 
                             p-1 rounded-full hover:bg-blue-50">
              <Volume2 size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium 
                         px-2 py-1 rounded-full">
            {firstMeaning?.partOfSpeech}
          </span>
          <p className="text-slate-700 leading-relaxed">
            {firstDefinition?.definition}
          </p>
          {firstDefinition?.example && (
            <blockquote className="italic text-slate-600 border-l-3 border-blue-300 pl-4 mt-2">
              "{firstDefinition.example}"
            </blockquote>
          )}
        </div>

        <button className="flex items-center text-sm text-blue-600 hover:text-blue-700 
                         font-medium transition-colors duration-200">
          <Heart size={16} className="mr-1" />
          ເພີ່ມໃສ່ລາຍການທີ່ມັກ
        </button>
      </div>
    </div>
  );
};