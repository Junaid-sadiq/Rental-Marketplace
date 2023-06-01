'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';

import { SafeUser } from '@/app/types';
import Container from '../Container';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import ToggleSwitch from '../ToggleSwitch';
import Categories from './Categories';
import DarkModeBtn from '../DarkModeBtn';
interface NavbarProps {
  currentUser?: SafeUser | null;
}
const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="fixed w-full z-10 shadow-sm dark:bg-zinc-900">
      <div className="py-4 border-b-[1px] dark:border-zinc-700 dark:bg-zinc-900">
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          bg-white
          dark:bg-zinc-900
            
          "
          >
            <Logo />
            <Search />
         {/*    <DarkModeBtn /> */}
            <Menu currentUser={currentUser} />
            
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
