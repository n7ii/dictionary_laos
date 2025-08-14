import React from 'react';
import { Heart, Trash2, Calendar, Volume2 } from 'lucide-react';
import { FavoriteWord } from '../types/dictionary';

interface FavoritesProps {
  favorites: FavoriteWord[];
  onRemoveFavorite: (word: string) => void;
  onSearchWord: (word: string) => void;
}

export const Favorites: React.FC<FavoritesProps> = ({ 
  favorites, 
  onRemoveFavorite, 
  onSearchWord 
}) => {
  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-6">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <Heart size={32} className="text-red-500" />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-slate-700">
            ຍັງບໍ່ມີລາຍການທີ່ມັກ
          </h3>
          <p className="text-slate-500 max-w-md">
            ຄຳສັບທີ່ທ່ານໝາຍເປັນລາຍການທີ່ມັກຈະປາກົດຢູ່ທີ່ນີ້. ເລີ່ມຕົ້ນຄົ້ນຫາແລະ
            ບັນທຶກຄຳສັບທີ່ທ່ານສົນໃຈ!
          </p>
        </div>
      </div>
    );
  }

  const sortedFavorites = [...favorites].sort((a, b) => b.addedAt - a.addedAt);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
          <Heart size={24} className="text-red-500 mr-3" />
          ຄຳສັບທີ່ມັກ
        </h2>
        <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          {favorites.length} ຄຳ
        </span>
      </div>

      <div className="grid gap-4">
        {sortedFavorites.map((favorite) => {
          const firstMeaning = favorite.definition.meanings[0];
          const firstDefinition = firstMeaning?.definitions[0];
          
          return (
            <div key={favorite.word} 
                 className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 
                          hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <button
                      onClick={() => onSearchWord(favorite.word)}
                      className="text-2xl font-bold text-slate-800 hover:text-blue-600 
                               transition-colors duration-200 cursor-pointer"
                    >
                      {favorite.word}
                    </button>
                    
                    {favorite.definition.phonetic && (
                      <span className="text-slate-500 font-mono text-sm bg-slate-100 
                                     px-2 py-1 rounded-full">
                        {favorite.definition.phonetic}
                      </span>
                    )}
                  </div>

                  {firstMeaning && (
                    <div className="space-y-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs 
                                     font-medium px-2 py-1 rounded-full">
                        {firstMeaning.partOfSpeech}
                      </span>
                      
                      {firstDefinition && (
                        <p className="text-slate-700 leading-relaxed">
                          {firstDefinition.definition}
                        </p>
                      )}
                      
                      {firstDefinition?.example && (
                        <blockquote className="text-slate-600 italic text-sm 
                                             border-l-3 border-blue-300 pl-3 mt-2">
                          "{firstDefinition.example}"
                        </blockquote>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-4 pt-4 
                                border-t border-slate-100">
                    <div className="flex items-center text-xs text-slate-400">
                      <Calendar size={14} className="mr-1" />
                      ເພີ່ມເມື່ອ {new Date(favorite.addedAt).toLocaleDateString('lo-LA')}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => onRemoveFavorite(favorite.word)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 
                             rounded-full transition-all duration-200 opacity-0 
                             group-hover:opacity-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};