import { useCallback, useEffect, useRef, useState } from 'react';
import { t as tImpl, loadLocale } from './i18n';
import { useLanguage } from './LanguageContext';

let localeVersion = 0;
const listeners = new Set<() => void>();

export function notifyLocaleLoaded() {
  localeVersion++;
  listeners.forEach(fn => fn());
}

// Track whether we've loaded English on first mount
let enLoaded = false;

export function useT() {
  const { language } = useLanguage();
  const [, setVersion] = useState(localeVersion);
  const mountedRef = useRef(false);

  useEffect(() => {
    // On first mount, load English first so the page renders immediately
    if (!enLoaded) {
      loadLocale('en').then(() => {
        enLoaded = true;
        notifyLocaleLoaded();
      });
    }

    // Then load the target language
    loadLocale(language).then(() => {
      notifyLocaleLoaded();
    });

    const listener = () => setVersion(localeVersion);
    listeners.add(listener);
    mountedRef.current = true;
    return () => { listeners.delete(listener); };
  }, [language]);

  return useCallback(
    (key: string) => tImpl(language, key),
    [language]
  );
}
