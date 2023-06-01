'use client';

import { IconType } from 'react-icons/lib';

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
                rounded-xl
                border-2
                p-2
                flex
                flex-col
                gap-3
                hover:border-black
                dark:border-gray-400
                dark:hover:border-gray-100
                transition
                cursor-pointer
                ${
                  selected
                    ? 'border-black dark:border-white'
                    : 'border-neutral-200'
                }
            `}
    >
      <div
        className={`dark:text-gray-400
             dark:hover:text-gray-100
             ${selected ? 'text-black dark:text-white' : 'text-neutral-200'}
               `}
      >
        <Icon size={30} />
        <div className=" font-semibold">{label}</div>
      </div>
    </div>
  );
};

export default CategoryInput;
