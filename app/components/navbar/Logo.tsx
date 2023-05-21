'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import logo from 'public/Realtor.png';

const Logo = () => {
    const router = useRouter();
    return (
        <Link href='/'>
        <Image
           alt='Logo'
           className='hidden md:block cursor-pointer w-auto h-auto'
           height='100'
           width='100'
           src={logo}
           priority={true}
        />
        </Link>
    )
}

export default Logo;
