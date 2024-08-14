'use client'

import { DateRange, Range, RangeKeyDict } from "react-date-range";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css';

interface CalnderProps {
    value: Range;
    onChange: (value: RangeKeyDict) => void;
    disabledDates?: Date[];
    theme: 'light' | 'dark';
}
const Calender: React.FC<CalnderProps> = ({
    value,
    onChange,
    disabledDates,
    theme
}) => {
    const rangeColor = theme === 'dark' ? '#262626' : '#fff';
    return (
        <DateRange
            rangeColors={['#262626']}
            ranges={[value]}
            date={new Date()}
            onChange={onChange}
            direction="vertical"
            showDateDisplay={false}
            minDate={new Date()}
            disabledDates={disabledDates}
            />
    )
}

export default Calender;