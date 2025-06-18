// Custom i18n hook for AKINGZ landing page
// Provides lightweight internationalization with auto-detection and fallback

import { useState, useEffect, createContext, useContext } from 'react';

type Language = 'en' | 'es';
type TranslationKey = string;

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

let translations: Record<Language, any> = {
  en: {},
  es: {}
};

// Load translations dynamically
const loadTranslations = async () => {
  try {
    const [enModule, esModule] = await Promise.all([
      import('../locales/en.json'),
      import('../locales/es.json')
    ]);
    translations.en = enModule.default;
    translations.es = esModule.default;
  } catch (error) {
    console.warn('Failed to load translations:', error);
  }
};

// Auto-detect language from navigator
const detectLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('es')) {
    return 'es';
  }
  return 'en'; // Fallback to English
};

// Get nested object value by dot notation
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : null;
  }, obj);
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initializeTranslations = async () => {
      await loadTranslations();
      const detectedLang = detectLanguage();
      setLanguage(detectedLang);
      setIsLoaded(true);
    };
    initializeTranslations();
  }, []);

  const t = (key: TranslationKey): string => {
    if (!isLoaded) return key;
    const value = getNestedValue(translations[language], key);
    if (value) {
      return value;
    }
    // Fallback to English if key not found in current language
    const fallbackValue = getNestedValue(translations.en, key);
    if (fallbackValue) {
      return fallbackValue;
    }
    // Return key if no translation found
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}; 