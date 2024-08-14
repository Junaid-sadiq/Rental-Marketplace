'use client';

import React, { useCallback, useState } from 'react';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import { useRouter } from 'next/navigation';

import Button from './Button';
import useRentModal from '../hooks/useRentModal';
import { getCurrentUser } from '../actions/getCurrentUser';
import { SafeUser } from '../types';
import useRegisterModal from '../hooks/useRegisterModal';
import useLoginModal from '../hooks/useLoginModal';
import CategoryBox from './navbar/CategoryBox';
import { useSearchParams } from 'next/navigation';
import { categories } from './navbar/Categories';

interface FooterProps {
  currentUser?: SafeUser | null;
}
const Footer: React.FC<FooterProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useSearchParams();
  const categroy = params?.get('category');
  const rentModal = useRentModal();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();

  const onPressGetStarted = useCallback(() => {
    if (!currentUser) {
      loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    /*   <div className="bg-blue-800 dark:bg-blue-700 px-4 py-8 mt-[20%]">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white pb-2">
            Let’s get started on something great
          </h1>
          <div className="w-36 mx-auto">
            <Button onClick={onPressGetStarted} label="Get Started" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <div className="">
            <h2 className="text-lg font-medium text-gray-100 dark:text-gray-50">Navigation</h2>
          <div className="flex flex-col items-start mt-4 space-y-4">
            <div className="pt-4 flex flex-col items-center justify-center overflow-x-auto">
              <span
                onClick={() => router.push('/')}
                className="text-white transition-colors duration-200 cursor-pointer hover:underline"
              >
                Home
              </span>
              <span
                onClick={() => router.push('/listings')}
                className="text-white transition-colors duration-200 cursor-pointer hover:underline"
              >
                Listings
              </span>
              <span
                onClick={() => router.push('/about')}
                className="text-white transition-colors duration-200 cursor-pointer hover:underline"
              >
                About
              </span>
              <span
                onClick={() => router.push('/contact')}
                className="text-white transition-colors duration-200 cursor-pointer hover:underline"
              >
                Contact
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-2">
            <h2 className="text-lg font-medium text-gray-100 dark:text-gray-50">Categories</h2>
            <div className="flex flex-col items-start mt-4 space-y-4">
              {categories.map((item) => (
                <span key={item.label} className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="">
            <h2 className="text-lg font-medium text-gray-100 dark:text-gray-50">Navigation</h2>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <span
                onClick={() => router.push('/')}
                className="text-white cursor-pointer"
              >
                Home
              </span>
              <span
                onClick={() => router.push('/listings')}
                className="text-white cursor-pointer"
              >
                Listings
              </span>
              <span
                onClick={() => router.push('/about')}
                className="text-white cursor-pointer"
              >
                About
              </span>
              <span
                onClick={() => router.push('/contact')}
                className="text-white cursor-pointer"
              >
                Contact
              </span>
            </div>
          </div>
        </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineFacebook className="h-6 w-6 text-blue-800" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram className="h-6 w-6 text-blue-800" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiTwitter className="h-6 w-6 text-blue-800" />
          </a>
        </div>

        <p className="text-blue-800 text-center mt-4">
          © 2023 Rentals, Inc. All rights reserved
        </p>
      </div>
    </div> */
    <footer className="bg-gray-100">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Column 1</h3>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Column 2</h3>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Column 3</h3>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
