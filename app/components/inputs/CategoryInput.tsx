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
                dark:border-neutral-400
                dark:hover:border-neutral-100
                transition
                cursor-pointer
                ${
                  selected
                    ? 'border-black dark:border-neutral-100'
                    : 'border-neutral-500'
                }
            `}
    >
      <div
        className={`dark:text-neutral-400
             dark:hover:text-neutral-100
               hover:text-neutral-800
             ${selected ? 'text-black dark:text-neutral-100' : 'text-neutral-500'}
               `}
      >
        <Icon size={30} />
        <div className=" font-semibold">{label}</div>
      </div>
    </div>
  );
};

export default CategoryInput;
