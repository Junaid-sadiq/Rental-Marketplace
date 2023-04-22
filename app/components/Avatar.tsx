'use client' ;
import Image from 'next/image';
import avatar from 'public/avatar.png';
import {RxAvatar} from 'react-icons/rx'
function Avatar() {
  return (
    <RxAvatar className='h-7 w-7'/>
   /*  <Image
    className='rounded-full'
    height='30'
    width='30'
    alt='Avatar'
    src={avatar}
    /> */
  )
}

export default Avatar