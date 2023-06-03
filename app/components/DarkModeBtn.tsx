'use client'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsMoonStarsFill, BsFillSunFill, BsLightbulb, BsFillLightbulbFill, BsLightbulbOff } from 'react-icons/bs';

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = currentTheme === 'dark';

  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <div
      className={`relative flex items-center justify-between p-2 rounded-full cursor-pointer ${
        isDarkMode ? 'bg-blue-300 text-blue-900' : 'bg-yellow-100 text-yellow-900'
      }`}
      onClick={handleThemeToggle}
    >
      <div className="z-10">
        {isDarkMode ? (
          <BsMoonStarsFill size={18} />
        ) : (
          <BsFillSunFill size={22} />
        )}
      </div>
    </div>
  );
};

export default DarkModeBtn;
