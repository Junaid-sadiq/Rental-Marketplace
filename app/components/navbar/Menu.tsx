'use client';
import { useCallback, useState } from 'react';

import { CiMenuFries } from 'react-icons/ci';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import RegisterModal from '../modals/RegisterModal';
function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const registerModal = useRegisterModal();

  const onClickMenuItem = () => {
    console.log('onClickMenuItem clicked')
  };

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const onPressRent = () => {};
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onPressRent}
          className="hidden md:block tex-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Rent your house
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md translate-x-0"
        >
          <CiMenuFries className="w-4 h-4" />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-xl w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <div>
        <>
                <MenuItem 
                  label="My trips" 
                 /*  onClick={() => router.push('/trips')} */
                 onClick={onClickMenuItem}
                />
                <MenuItem 
                  label="My favorites" 
                 /*  onClick={() => router.push('/favorites')} */
                 onClick={onClickMenuItem}
                />
                <MenuItem 
                  label="My reservations" 
                 onClick={onClickMenuItem}
                 /*  onClick={() => router.push('/reservations')} */
                />
                <MenuItem 
                  label="My properties" 
                 onClick={onClickMenuItem}

                 /*  onClick={() => router.push('/properties')} */
                />
                <MenuItem 
                  label="Rent
                   your home" 
                 onClick={onClickMenuItem}
              /*     onClick={rentModal.onOpen} */
                />
                <hr />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
            </>
            </div>
            </div>
            </div>
)}
            </div>
  );
}

export default Menu;
