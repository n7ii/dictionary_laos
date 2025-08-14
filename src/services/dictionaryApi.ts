import { WordDefinition } from '../types/dictionary';
import { searchLaoWord } from '../data/laoMockData';

export const searchWord = async (word: string): Promise<WordDefinition[]> => {
  if (!word.trim()) {
    throw new Error('ກະລຸນາປ້ອນຄຳທີ່ຕ້ອງການຄົ້ນຫາ');
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const result = searchLaoWord(word);
  
  if (!result) {
    throw new Error(`ບໍ່ພົບຄຳນິຍາມສຳລັບ "${word}"`);
  }

  return [result];
};