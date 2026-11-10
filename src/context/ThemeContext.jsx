import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// SECURITY: Validate theme values against an explicit whitelist to prevent
// attribute injection or invalid values from tampered localStorage entries.
const ALLOWED_THEMES = new Set(['light', 'dark']);

const getSystemTheme = () => {
  try {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  } catch {
    return 'light';
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme && ALLOWED_THEMES.has(savedTheme)) {
        return savedTheme;
      }
    } catch {
      // Handle environments where localStorage is blocked or throws
    }
    return getSystemTheme();
  });

  useEffect(() => {
    const sanitizedTheme = ALLOWED_THEMES.has(theme) ? theme : 'light';
    document.documentElement.setAttribute('data-theme', sanitizedTheme);
    try {
      localStorage.setItem('theme', sanitizedTheme);
    } catch {
      // Ignore quota/security errors in restricted contexts
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
