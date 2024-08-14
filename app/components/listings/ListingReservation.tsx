'use client';
import { Range } from 'react-date-range';
import Calender from '../inputs/Calender';
import Button from '../Button';

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
     dark:bg-neutral-900
      rounded-xl 
      border-[1px]
      border-neutral-400
      dark:border-neutral-700
      max-w-sm md:max-w-md lg:max-w-xl
      overflow-hidden
     "
    >
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${price}</div>
        <div className="font-light text-neutral-600 dark:text-neutral-200">
          night
        </div>
      </div>
      <div className="border-b-[1px] dark:border-neutral-600 border-neutral-400 "></div>
      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)} theme={'light'}      />
      <div className="border-b-[1px] dark:border-neutral-600 border-neutral-400 "></div>
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
        <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
          <div>Total</div>
          <div>$ {totalPrice}</div>
        </div>
      </div>
    </div>
  );
};
export default ListingReservation;
