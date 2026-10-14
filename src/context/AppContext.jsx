import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

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

  // RFQ (Request for Quotation) List state: [{ id, name, grade, qty, price, unit, image, tag }]
  const [rfqList, setRfqList] = useState(() => {
    try {
      const savedRfq = localStorage.getItem('sayang_rfq');
      return savedRfq ? JSON.parse(savedRfq) : [];
    } catch {
      return [];
    }
  });

  // RFQ Drawer open/close state
  const [isRfqDrawerOpen, setIsRfqDrawerOpen] = useState(false);

  // Screen reader accessible announcement string for aria-live
  const [rfqAnnouncement, setRfqAnnouncement] = useState('');

  // Persist theme to <html> and localStorage
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

  // Persist lang to <html> and localStorage
  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'id';
    try {
      localStorage.setItem('sayang_lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  // Persist RFQ list to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sayang_rfq', JSON.stringify(rfqList));
    } catch {
      // ignore
    }
  }, [rfqList]);

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

  // RFQ Helper Methods
  const isInRfq = useCallback((productId) => {
    return rfqList.some((item) => String(item.id) === String(productId));
  }, [rfqList]);

  const addToRfq = useCallback((product, grade = '', qty = '') => {
    setRfqList((prev) => {
      const existing = prev.find((item) => String(item.id) === String(product.id));
      if (existing) {
        return prev;
      }
      const newItem = {
        id: String(product.id),
        name: product.name || `Produk #${product.id}`,
        grade: grade || product.grade || '',
        qty: qty || product.qty || '',
        price: product.price || '',
        unit: product.unit || '/ kg',
        image: product.image || '',
        tag: product.tag || '',
      };
      return [...prev, newItem];
    });

    const msg = lang === 'en'
      ? `${product.name} added to RFQ list. Total items: ${rfqList.length + 1}`
      : `${product.name} ditambahkan ke daftar penawaran. Total item: ${rfqList.length + 1}`;
    setRfqAnnouncement(msg);
  }, [lang, rfqList.length]);

  const removeFromRfq = useCallback((productId) => {
    setRfqList((prev) => {
      const removed = prev.find((item) => String(item.id) === String(productId));
      const filtered = prev.filter((item) => String(item.id) !== String(productId));
      const msg = lang === 'en'
        ? `${removed ? removed.name : 'Item'} removed from RFQ list. Remaining items: ${filtered.length}`
        : `${removed ? removed.name : 'Item'} dihapus dari daftar penawaran. Sisa item: ${filtered.length}`;
      setRfqAnnouncement(msg);
      return filtered;
    });
  }, [lang]);

  const toggleRfq = useCallback((product, grade = '', qty = '') => {
    if (isInRfq(product.id)) {
      removeFromRfq(product.id);
    } else {
      addToRfq(product, grade, qty);
    }
  }, [isInRfq, removeFromRfq, addToRfq]);

  const updateRfqItem = useCallback((productId, fields = {}) => {
    setRfqList((prev) =>
      prev.map((item) => {
        if (String(item.id) === String(productId)) {
          return { ...item, ...fields };
        }
        return item;
      })
    );
  }, []);

  const clearRfq = useCallback(() => {
    setRfqList([]);
    const msg = lang === 'en' ? 'RFQ list cleared.' : 'Daftar penawaran dikosongkan.';
    setRfqAnnouncement(msg);
  }, [lang]);

  const openRfqDrawer = useCallback(() => {
    setIsRfqDrawerOpen(true);
  }, []);

  const closeRfqDrawer = useCallback(() => {
    setIsRfqDrawerOpen(false);
  }, []);

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
        // RFQ
        rfqList,
        rfqCount: rfqList.length,
        isInRfq,
        addToRfq,
        removeFromRfq,
        toggleRfq,
        updateRfqItem,
        clearRfq,
        isRfqDrawerOpen,
        setIsRfqDrawerOpen,
        openRfqDrawer,
        closeRfqDrawer,
        rfqAnnouncement,
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
