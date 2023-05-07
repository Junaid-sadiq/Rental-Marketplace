'use client' ;
import Image from 'next/image';
import avatar from 'public/avatar.png';
import {RxAvatar} from 'react-icons/rx';
interface AvatarProps {
    src: string | null | undefined;
}
const Avatar:React.FC<AvatarProps> = ({src}) => {
  return (
    <Image
    className='rounded-full'
    height='30'
    width='30'
    alt='Avatar'
    src={src || avatar}
    />
  )
}

export default Avatar