'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Logo = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until the theme is resolved

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const logoSrc = currentTheme === 'dark' ? '/images/dark.png' : '/images/light.png';

  return (
    <Link href='/'>
      <Image
        alt='Logo'
        className='hidden md:block cursor-pointer w-auto h-auto'
        height={100}
        width={100}
        src={logoSrc}
        priority={true}
      />
    </Link>
  );
}

export default Logo;
