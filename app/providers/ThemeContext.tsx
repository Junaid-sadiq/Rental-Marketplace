'use client'
import { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext({});

interface ThemeProviderProps {
    children: React.ReactNode;
}
export const ThemeProvider:React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    try {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode) {
        setDarkMode(JSON.parse(savedMode));
      }
    } catch (error) {
      console.error('Error parsing localStorage value:', error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};