'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import lightLogo from 'public/dark.png';
import darkLogo from 'public/light.png';

const Logo = () => {
    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const logoSrc = currentTheme === 'dark' ? darkLogo : lightLogo;
    const router = useRouter();
    return (
        <Link href='/'>
        <Image
           alt='Logo'
           className='hidden md:block cursor-pointer w-auto h-auto'
           height='100'
           width='100'
           src={logoSrc}
           priority={true}
        />
        </Link>
    )
}

export default Logo;
