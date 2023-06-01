'use client';
import { BiSearch } from 'react-icons/bi';
function Search() {
  return (
    <div className="border-[1px] dark:border-gray-600 w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text:sm font-semibold px-6 border-x-[1px] dark:border-gray-400 flex-1 text-center">
          Any Week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden dark:text-gray-100 sm:block">Add Guests</div>
          <div className="p-2 bg-blue-600 rounded-full text-white">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
