/* 'use client'
import { useEffect, useState } from 'react';

const useTheme = () => {
  const [systemTheme, setSystemTheme] = useState('light');
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const handleChange = (event) => {
      const newTheme = event.matches ? 'dark' : 'light';
      setSystemTheme(newTheme);
      if (theme === 'system') {
        setTheme(newTheme);
      }
    };

    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addListener(handleChange);
      handleChange(mediaQuery);

      return () => {
        mediaQuery.removeListener(handleChange);
      };
    }
  }, [theme]);

  return { systemTheme, theme, setTheme };
};

export default useTheme;
 */