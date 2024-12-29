import { en } from './en';
import { it } from './it';
import { de } from './de';
import { fr } from './fr';
import { ar } from './ar';
import { ru } from './ru';
import { zh } from './zh';

export const languages = {
  en: 'English',
  it: 'Italiano',
  de: 'Deutsch',
  fr: 'Français',
  ar: 'العربية',
  ru: 'Русский',
  zh: '中文'
} as const;

export type LanguageCode = keyof typeof languages;

export const translations = {
  en,
  it,
  de,
  fr,
  ar,
  ru,
  zh
};