export interface WordDefinition {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license?: License;
  sourceUrls?: string[];
}

export interface Phonetic {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}

export interface Definition {
  definition: string;
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
}

export interface License {
  name: string;
  url: string;
}

export interface SearchHistory {
  word: string;
  timestamp: number;
}

export interface FavoriteWord {
  word: string;
  definition: WordDefinition;
  addedAt: number;
}

export interface LaoWordDefinition extends WordDefinition {
  romanization?: string;
  tone?: string;
  etymology?: string;
}