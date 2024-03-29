import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { IconType } from 'react-icons/lib';
import qs from 'query-string';
import { useTheme } from 'next-themes';

interface CategoryBoxProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  selected,
  icon: Icon,
  label,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const { systemTheme, theme, setTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };
    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true },
    );
    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      ref={containerRef}
      className={`
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-2
      p-3
      border-b-2
      hover:text-neutral-800
      dark:hover:text-grey-900
      transition
      cursor-pointer
      scroll-smooth 
      hover:scroll-auto
      ${selected ? 'border-b-neutral-400' : 'border-transparent'}
      ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
    >
      <Icon className="dark:text-neutral-300" size={26} />
      <div className={`dark:text-neutral-300 font-medium tex-sm`}>{label}</div>
    </div>
  );
};

export default CategoryBox;
