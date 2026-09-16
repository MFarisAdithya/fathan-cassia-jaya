import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Language state: 'in' (Indonesian) or 'en' (English)
  const [lang, setLangState] = useState(() => {
    try {
      const savedLang = localStorage.getItem('sayang_lang');
      return savedLang === 'en' ? 'en' : 'in';
    } catch {
      return 'in';
    }
  });

  // Theme state: 'light' or 'night'
  const [theme, setThemeState] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('sayang_theme');
      if (savedTheme === 'night' || savedTheme === 'dark') return 'night';
      if (savedTheme === 'light') return 'light';
      return 'light';
    } catch {
      return 'light';
    }
  });

  // Apply theme class to <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'night') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    try {
      localStorage.setItem('sayang_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Apply lang to <html> lang attribute
  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'id';
    try {
      localStorage.setItem('sayang_lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = (newLang) => {
    if (newLang === 'en' || newLang === 'in') {
      setLangState(newLang);
    }
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === 'in' ? 'en' : 'in'));
  };

  const setTheme = (newTheme) => {
    if (newTheme === 'light' || newTheme === 'night') {
      setThemeState(newTheme);
    }
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'night' : 'light'));
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        setTheme,
        toggleTheme,
        isNight: theme === 'night',
        isEn: lang === 'en',
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
