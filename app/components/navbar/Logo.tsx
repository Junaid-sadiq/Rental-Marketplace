'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import darkLogo from 'public/Realtor.png';
import lightLogo from 'public/logo-light.png';

const Logo = () => {
    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === 'dark' ? systemTheme : theme;
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
