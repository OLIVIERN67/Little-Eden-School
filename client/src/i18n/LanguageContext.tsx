import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { LanguageCode } from './languages';
import { LANGUAGES } from './languages';


type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (l: LanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'littleeden:language';
const SUPPORTED_CODES: LanguageCode[] = ['en', 'rw', 'fr'];

/**
 * Detect the browser's preferred language and match it to the closest supported language.
 */
function detectBrowserLanguage(): LanguageCode {
  if (typeof navigator === 'undefined') return 'en';

  const navLangs = navigator.languages ?? [navigator.language];
  for (const lang of navLangs) {
    const code = lang.toLowerCase();
    // Exact match (e.g., 'en', 'fr', 'rw')
    if (SUPPORTED_CODES.includes(code as LanguageCode)) return code as LanguageCode;
    // Match by language prefix (e.g., 'en-US' -> 'en', 'fr-FR' -> 'fr', 'rw-RW' -> 'rw')
    const prefix = code.split('-')[0];
    if (SUPPORTED_CODES.includes(prefix as LanguageCode)) return prefix as LanguageCode;
  }

  // Check navigator.language as a single string
  const single = (navigator.language || 'en').toLowerCase();
  if (SUPPORTED_CODES.includes(single as LanguageCode)) return single as LanguageCode;
  const singlePrefix = single.split('-')[0];
  if (SUPPORTED_CODES.includes(singlePrefix as LanguageCode)) return singlePrefix as LanguageCode;

  return 'en';
}

function getInitialLanguage(): LanguageCode {
  // 1. Check localStorage for a previously saved preference
  const raw = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
  if (raw && SUPPORTED_CODES.includes(raw as LanguageCode)) return raw as LanguageCode;

  // 2. Detect browser language
  return detectBrowserLanguage();
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(getInitialLanguage);

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    // Set the lang attribute on the html element for accessibility
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const setLanguage = useCallback((l: LanguageCode) => {
    if (l === language) return;
    setLanguageState(l);
  }, [language]);



  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}

export function languageLabel(code: LanguageCode) {
  return LANGUAGES.find((l) => l.code === code)?.label ?? code;
}
