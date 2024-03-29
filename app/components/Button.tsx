'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
    disabled={disabled}
    onClick={onClick}
      className={`relative disables:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 dark:hover:bg-blue-600 transition w-full 
      ${outline ? 'bg-white dark:bg-zinc-700' : 'bg-blue-600'}
      ${outline ? 'border-black dark:border-zinc-800' : 'border-blue-600'}
      ${outline ? 'text-black dark:text-white' : 'text-white'}
      ${outline ? 'text-sm' : 'text-md'}
      ${small ? 'py-1' : 'py-3'}
      ${small ? 'font-light' : 'font-semibold'}
      ${small ? 'border-[1px]' : 'border-2'}
 `}
    >
        {Icon && (
            <Icon 
                size={24} 
                className="absolute left-4 top-3"
                />
        )}
      {label}
    </button>
  );
};
export default Button;
