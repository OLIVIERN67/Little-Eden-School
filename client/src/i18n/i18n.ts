import type { LanguageCode } from './languages';

// Locale caches — English will be loaded on first access
const localeCache: Partial<Record<LanguageCode, Record<string, string>>> = {};

/**
 * Translate a key for the given language.
 * Falls back to English if the key is missing in the target locale.
 */
export function t(language: LanguageCode, key: string): string {
  const dict = localeCache[language];
  if (!dict) {
    // If the requested locale hasn't been loaded yet, try English fallback
    const enDict = localeCache['en'];
    return enDict?.[key] ?? key;
  }
  const value = dict[key];
  if (value !== undefined && value !== '') return value;
  // Fallback to English if translation is missing
  if (language !== 'en') {
    const fallback = localeCache['en']?.[key];
    if (fallback) return fallback;
  }
  return key;
}

/**
 * Load a locale dynamically (lazy loading).
 * Returns a promise that resolves when the locale is loaded.
 */
export async function loadLocale(language: LanguageCode): Promise<void> {
  if (localeCache[language]) return; // Already loaded

  try {
    const module = await import(`./locales/${language}.json`);
    localeCache[language] = module.default as Record<string, string>;
  } catch (err) {
    console.warn(`Failed to load locale for "${language}":`, err);
  }
}
