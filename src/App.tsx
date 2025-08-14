import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { WordOfTheDay } from './components/WordOfTheDay';
import { WordResult } from './components/WordResult';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';
import { Favorites } from './components/Favorites';
import { SearchHistory } from './components/SearchHistory';
import { searchWord } from './services/dictionaryApi';
import { useLocalStorage } from './hooks/useLocalStorage';
import { WordDefinition, SearchHistory as SearchHistoryType, FavoriteWord } from './types/dictionary';

function App() {
  console.log('App component rendering...');
  
  const [activeTab, setActiveTab] = useState<'search' | 'favorites' | 'history'>('search');
  const [searchResult, setSearchResult] = useState<WordDefinition | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSearchedWord, setLastSearchedWord] = useState<string>('');

  // Local storage hooks
  const [searchHistory, setSearchHistory] = useLocalStorage<SearchHistoryType[]>('dictionary-search-history', []);
  const [favorites, setFavorites] = useLocalStorage<FavoriteWord[]>('dictionary-favorites', []);

  useEffect(() => {
    console.log('App component mounted successfully');
  }, []);

  const handleSearch = useCallback(async (word: string) => {
    console.log('Searching for:', word);
    if (!word.trim()) return;

    const normalizedWord = word.toLowerCase().trim();
    setLoading(true);
    setError(null);
    setLastSearchedWord(normalizedWord);

    try {
      const results = await searchWord(normalizedWord);
      if (results && results.length > 0) {
        setSearchResult(results[0]);
        
        // Add to search history
        setSearchHistory(prev => {
          const filtered = prev.filter(item => item.word !== normalizedWord);
          return [{ word: normalizedWord, timestamp: Date.now() }, ...filtered].slice(0, 100);
        });
      } else {
        setError(`No definition found for "${word}"`);
        setSearchResult(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while searching');
      setSearchResult(null);
    } finally {
      setLoading(false);
    }
  }, [setSearchHistory]);

  const handleAddToFavorites = useCallback((wordDef: WordDefinition) => {
    setFavorites(prev => {
      const exists = prev.some(fav => fav.word === wordDef.word);
      if (exists) {
        return prev.filter(fav => fav.word !== wordDef.word);
      } else {
        const newFavorite: FavoriteWord = {
          word: wordDef.word,
          definition: wordDef,
          addedAt: Date.now()
        };
        return [newFavorite, ...prev].slice(0, 100);
      }
    });
  }, [setFavorites]);

  const handleRemoveFavorite = useCallback((word: string) => {
    setFavorites(prev => prev.filter(fav => fav.word !== word));
  }, [setFavorites]);

  const handleClearHistory = useCallback(() => {
    setSearchHistory([]);
  }, [setSearchHistory]);

  const handleRemoveHistoryItem = useCallback((word: string) => {
    setSearchHistory(prev => prev.filter(item => item.word !== word));
  }, [setSearchHistory]);

  const handleSearchFromOtherTabs = useCallback((word: string) => {
    setActiveTab('search');
    handleSearch(word);
  }, [handleSearch]);

  const isFavorite = searchResult ? favorites.some(fav => fav.word === searchResult.word) : false;

  console.log('App component rendering with state:', { activeTab, loading, error, searchResult: !!searchResult });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        favoritesCount={favorites.length}
        historyCount={searchHistory.length}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'search' && (
          <div className="space-y-8">
            {/* Search Section */}
            <div className="flex flex-col items-center space-y-8">
              <div className="text-center space-y-4 max-w-2xl">
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-800">
                  ຄົ້ນພົບຄຳສັບ,
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 
                                 bg-clip-text text-transparent"> ຂະຫຍາຍຄວາມຮູ້</span>
                </h2>
                <p className="text-lg text-slate-600">
                  ເພື່ອນຮ່ວມທາງວັດຈະນານຸກົມທີ່ຄົບຖ້ວນສຳລັບການສຳຫຼວດຄຳນິຍາມ, 
                  ການອອກສຽງ, ແລະຕົວຢ່າງການນຳໃຊ້.
                </p>
              </div>

              <SearchBar
                onSearch={handleSearch}
                loading={loading}
                searchHistory={searchHistory}
                onClearHistory={handleClearHistory}
              />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {loading && <LoadingState />}
                
                {error && !loading && (
                  <ErrorState 
                    message={error}
                    onRetry={() => handleSearch(lastSearchedWord)}
                  />
                )}
                
                {searchResult && !loading && !error && (
                  <WordResult
                    result={searchResult}
                    onAddToFavorites={handleAddToFavorites}
                    isFavorite={isFavorite}
                  />
                )}

                {!searchResult && !loading && !error && (
                  <div className="text-center py-16">
                    <div className="space-y-4">
                      <div className="text-6xl">📚</div>
                      <h3 className="text-2xl font-semibold text-slate-700">
                        ພ້ອມທີ່ຈະສຳຫຼວດຄຳສັບແລ້ວບໍ?
                      </h3>
                      <p className="text-slate-500 max-w-md mx-auto">
                        ປ້ອນຄຳສັບໃດໆໃນແຖບຄົ້ນຫາຂ້າງເທິງເພື່ອໄດ້ຮັບຄຳນິຍາມ, 
                        ການອອກສຽງ, ແລະຕົວຢ່າງທີ່ຄົບຖ້ວນ.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <WordOfTheDay onSearch={handleSearch} />
                
                {/* Quick Stats */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">ກິດຈະກຳຂອງທ່ານ</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">ຄຳທີ່ຄົ້ນຫາ</span>
                      <span className="font-semibold text-blue-600">{searchHistory.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">ຄຳທີ່ມັກ</span>
                      <span className="font-semibold text-red-600">{favorites.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <Favorites
            favorites={favorites}
            onRemoveFavorite={handleRemoveFavorite}
            onSearchWord={handleSearchFromOtherTabs}
          />
        )}

        {activeTab === 'history' && (
          <SearchHistory
            history={searchHistory}
            onSearchWord={handleSearchFromOtherTabs}
            onClearHistory={handleClearHistory}
            onRemoveItem={handleRemoveHistoryItem}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 
                            rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-semibold text-slate-700">WordWise Dictionary</span>
              <span className="font-semibold text-slate-700">ວັດຈະນານຸກົມລາວ</span>
            </div>
            <p className="text-slate-500 text-sm">
               ວັດຈະນານຸກົມຟຣີ • ສ້າງດ້ວຍ ♥  ນັກສຶກສາພາກວິທະຍາສາດຄອມພິວເຕີ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;