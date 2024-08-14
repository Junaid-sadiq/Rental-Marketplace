'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Debug: Log the current theme
  console.log('Current Theme:', currentTheme);

  const logoSrc = currentTheme === 'dark' ? '/images/dark.png' : '/images/light.png';

  return (
    <Link href='/'>
      <Image
        alt='Logo'
        className='hidden md:block cursor-pointer'
        height={100}
        width={100}
        src={"/images/dark.png"}
        priority={true}
      />
    </Link>
  );
}

export default Logo;
