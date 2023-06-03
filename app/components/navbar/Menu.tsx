'use client';

import { useCallback, useState } from 'react';
import { User } from '@prisma/client';
import { CiMenuFries } from 'react-icons/ci';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { RxAvatar } from 'react-icons/rx';

import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRentModal from '@/app/hooks/useRentModal';
import { SafeUser } from '@/app/types';
import DarkModeBtn from '../DarkModeBtn';

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
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  const logOut = () => {
    signOut();
    toast.success('Succcessful logged out');
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onPressRent}
          className="
          hidden
          md:block
          text-sm 
          font-semibold 
          py-3 
          px-4 
          rounded-full 
          hover:bg-neutral-100 
          dark:hover:bg-zinc-800
          dark:text-gray-300
          dark:hover:text-zinc-50
          border-[1px]
          dark:border-zinc-700
          dark:hover:border-none
          transition
          duration-100
          cursor-pointer
        "
        >
          Rent your house
        </div>
        <div
          onClick={toggleOpen}
          className="
        md:py-1
        md:px-2
        border-[1px] 
        border-neutral-200
        dark:border-zinc-700 
        flex 
        flex-row 
        items-center 
        gap-3 
        rounded-full 
        cursor-pointer 
        hover:shadow-md 
        dark:hover:bg-zinc-800
        px-2
        py-1
        transition
        "
        >
          <CiMenuFries className="w-5 h-5 dark:text-gray-200" />
          <div className="hidden md:block">
            {currentUser ? (
              <Avatar src={currentUser?.image} />
            ) : (
              <RxAvatar className="w-6 h-6" />
            )}
          </div>
        </div>
      <DarkModeBtn />
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
          dark:bg-zinc-800
          overflow-hidden  
          right-2 
          top-14 
          text-sm

        "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label="My trips" onClick={onClickMenuItem} />
                <MenuItem label="My favorites" onClick={onClickMenuItem} />
                <MenuItem label="My reservations" onClick={onClickMenuItem} />
                <MenuItem label="My properties" onClick={onClickMenuItem} />
                <MenuItem
                  label="Rent your home"
                  onClick={() => rentModal.onOpen()}
                />
                <div className="mx-4 border-b-2 dark:border-zinc-700"></div>
                {/*    <hr /> */}
                <MenuItem label="Log out" onClick={logOut} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Menu;
