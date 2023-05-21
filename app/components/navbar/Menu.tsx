'use client';

import { useCallback, useState } from 'react';
import { User } from '@prisma/client';
import { CiMenuFries } from 'react-icons/ci';
import {signOut} from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { RxAvatar } from 'react-icons/rx';

import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRentModal from '@/app/hooks/useRentModal';
import { SafeUser } from '@/app/types';

interface MenuProps {
  currentUser?: SafeUser | null;
}

const Menu: React.FC<MenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onClickMenuItem = () => {
    console.log('onClickMenuItem clicked');
  };

  const onPressRent = useCallback(() => {
    if (!currentUser) {
      loginModal.onOpen();
    } 
    rentModal.onOpen()
  },[currentUser, loginModal, rentModal])

  const logOut = () => {
    signOut();
    toast.success('Succcessful logged out');
  }

  return (
    <div className="relative">
    <div className="flex flex-row items-center gap-3">
      <div 
        onClick={onPressRent }
        className="
          hidden
          md:block
          text-sm 
          font-semibold 
          py-3 
          px-4 
          rounded-full 
          hover:bg-neutral-100 
          transition 
          cursor-pointer
        "
      >
        Rent your house
      </div>
      <div 
      onClick={toggleOpen}
      className="
        p-4
        md:py-1
        md:px-2
        border-[1px] 
        border-neutral-200 
        flex 
        flex-row 
        items-center 
        gap-3 
        rounded-full 
        cursor-pointer 
        hover:shadow-md 
        transition
        "
      >
        <CiMenuFries className='w-5 h-5' />
        <div className="hidden md:block">
            {currentUser ?  
            <Avatar src={currentUser?.image} /> 
            : 
            <RxAvatar className='w-6 h-6' />
         }
        </div>
      </div>
    </div>
    {isOpen && (
      <div 
        className="
          absolute 
          rounded-xl 
          shadow-md
          w-[40vw]
          md:w-3/4 
          bg-white 
          overflow-hidden 
          right-0 
          top-12 
          text-sm
        "
      >
        <div className="flex flex-col cursor-pointer">
          {currentUser ? (
            <>
              <MenuItem 
                label="My trips" 
                onClick={onClickMenuItem}
              />
              <MenuItem 
                label="My favorites" 
                onClick={onClickMenuItem}
              />
              <MenuItem 
                label="My reservations" 
                onClick={onClickMenuItem}
              />
              <MenuItem 
                label="My properties" 
                onClick={onClickMenuItem}
              />
              <MenuItem 
                label="Rent your home" 
                onClick={() => rentModal.onOpen()}
              />
              <hr />
              <MenuItem 
                label="Log out" 
                onClick={logOut}
              />
            </>
          ) : (
            <>
              <MenuItem 
                label="Login" 
                onClick={loginModal.onOpen}
              />
              <MenuItem 
                label="Sign up" 
                onClick={registerModal.onOpen}
              />
            </>
          )}
        </div>
      </div>
    )}
    </div>
    );
    }
export default Menu;
