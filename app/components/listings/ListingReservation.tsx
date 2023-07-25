'use client';

import { Range } from 'react-date-range';
import Calender from '../inputs/Calender';

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div
      className="
    bg-white
     dark:bg-black
      rounded-xl 
      border-[1px]
      border-neutral-200 
      dark:border-neutral-700
     "
    >
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${price}</div>
        <div className="font-light text-neutral-600 dark:text-neutral-200">
          night
        </div>
      </div>
      <div className="border-b-[1px] dark:border-neutral-200 border-neutral-700 "></div>
      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.select)}
      />
    </div>
  );
};
export default ListingReservation;
