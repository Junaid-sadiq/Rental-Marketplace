'use client';
import Select from 'react-select';

import useCountries from '@/app/hooks/useCountries';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}
const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = currentTheme === 'dark';

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: isDarkMode ? 'black' : 'white',
      borderColor: state.isSelected || state.isFocused ? (isDarkMode ? 'white' : '#c5c5c5') : provided.borderColor,
      outline: 'none', // Remove outline on focus
      boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Remove box shadow on focus
    }),
    input: (provided: any) => ({
      ...provided,
      color: isDarkMode ? 'white' : 'black',
      fontSize: '1.125rem', // adjust as needed
    }),
    option: (provided: any) => ({
      ...provided,
      color: isDarkMode ? 'white' : 'black',
      fontSize: '1.125rem', // adjust as needed
      backgroundColor: isDarkMode ? 'black': 'white',
    }),
  };
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: CountrySelectValue) => (
          <div
            className="
          flex flex-row items-center gap-3"
          >
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
            control: () => 'p-3 border-2',
            input: () => 'text-lg',
            option: () => 'text-lg',

        }}
        styles={customStyles}
      /*   theme={(theme) => ({
            ...theme,
            borderRadius: 6,
            colors: {
                ...theme.colors,
                primary: 'black',
                primary25: '#c5c5c5'
            }
        })} */
      />
    </div>
  );
};

export default CountrySelect;
