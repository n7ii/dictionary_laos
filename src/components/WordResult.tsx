import React, { useState } from 'react';
import { Volume2, Heart, Share2, Copy, BookOpen, ArrowRight } from 'lucide-react';
import { WordDefinition } from '../types/dictionary';

interface WordResultProps {
  result: WordDefinition;
  onAddToFavorites: (word: WordDefinition) => void;
  isFavorite: boolean;
}

export const WordResult: React.FC<WordResultProps> = ({ 
  result, 
  onAddToFavorites, 
  isFavorite 
}) => {
  const [copied, setCopied] = useState(false);

  const playPronunciation = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play().catch(err => console.log('Audio play failed:', err));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result.word);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const audioPhonetic = result.phonetics.find(p => p.audio && p.audio.length > 0);

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 border-b border-slate-100">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-800 mb-2 capitalize">
              {result.word}
            </h1>
            
            {result.phonetic && (
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-slate-600 font-mono text-lg bg-white px-3 py-1 
                               rounded-full border border-slate-200">
                  {result.phonetic}
                </span>
                {audioPhonetic && (
                  <button
                    onClick={() => playPronunciation(audioPhonetic.audio!)}
                    className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 
                             text-white px-4 py-2 rounded-full transition-all duration-200 
                             hover:shadow-lg transform hover:scale-105"
                  >
                    <Volume2 size={18} />
                    <span className="text-sm font-medium">ຟັງ</span>
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="flex space-x-2 ml-4">
            <button
              onClick={() => onAddToFavorites(result)}
              className={`p-3 rounded-full transition-all duration-200 border-2 
                        ${isFavorite 
                          ? 'bg-red-500 border-red-500 text-white hover:bg-red-600' 
                          : 'border-slate-200 text-slate-600 hover:bg-red-50 hover:border-red-200 hover:text-red-500'
                        }`}
            >
              <Heart size={20} fill={isFavorite ? 'white' : 'none'} />
            </button>
            
            <button
              onClick={copyToClipboard}
              className="p-3 rounded-full border-2 border-slate-200 text-slate-600 
                       hover:bg-blue-50 hover:border-blue-200 hover:text-blue-500 
                       transition-all duration-200"
            >
              <Copy size={20} />
            </button>
          </div>
        </div>

        {copied && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full 
                        shadow-lg z-50 animate-pulse">
            ຄັດລອກແລ້ວ!
          </div>
        )}
      </div>

      {/* Meanings */}
      <div className="p-6 space-y-8">
        {result.meanings.map((meaning, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center space-x-3">
              <BookOpen size={20} className="text-blue-500" />
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold 
                             px-3 py-1 rounded-full">
                {meaning.partOfSpeech}
              </span>
            </div>

            <div className="space-y-4">
              {meaning.definitions.map((def, defIndex) => (
                <div key={defIndex} className="pl-8 border-l-2 border-blue-100 space-y-3">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    <span className="inline-flex items-center justify-center w-6 h-6 
                                   bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mr-3">
                      {defIndex + 1}
                    </span>
                    {def.definition}
                  </p>
                  
                  {def.example && (
                    <blockquote className="bg-slate-50 border-l-4 border-emerald-400 p-4 
                                         rounded-r-lg ml-9">
                      <p className="text-slate-600 italic">
                        <span className="text-emerald-600 font-semibold">ຕົວຢ່າງ: </span>
                        "{def.example}"
                      </p>
                    </blockquote>
                  )}

                  {(def.synonyms && def.synonyms.length > 0) && (
                    <div className="ml-9 bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-700 font-medium mb-2">ຄຳພ້ອງ:</p>
                      <div className="flex flex-wrap gap-2">
                        {def.synonyms.slice(0, 5).map((synonym, synIndex) => (
                          <span key={synIndex} 
                                className="bg-blue-100 text-blue-700 text-sm px-2 py-1 
                                         rounded-full cursor-pointer hover:bg-blue-200 
                                         transition-colors duration-200">
                            {synonym}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {(meaning.synonyms && meaning.synonyms.length > 0) && (
              <div className="pl-8 bg-emerald-50 p-4 rounded-lg">
                <p className="text-sm text-emerald-700 font-semibold mb-3 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  ຄຳທີ່ກ່ຽວຂ້ອງ:
                </p>
                <div className="flex flex-wrap gap-2">
                  {meaning.synonyms.slice(0, 8).map((synonym, index) => (
                    <span key={index} 
                          className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 
                                   rounded-full cursor-pointer hover:bg-emerald-200 
                                   transition-colors duration-200 font-medium">
                      {synonym}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Source */}
      {result.sourceUrls && result.sourceUrls.length > 0 && (
        <div className="bg-slate-50 p-4 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            ແຫຼ່ງຂໍ້ມູນ: {' '}
            <a href={result.sourceUrls[0]} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-blue-500 hover:text-blue-700 underline">
              ວັດຈະນານຸກົມລາວ
            </a>
          </p>
        </div>
      )}
    </div>
  );
};