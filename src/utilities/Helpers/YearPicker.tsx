import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'moment/locale/tr';

type DatePickerComponentProps = {
  label: string;
  name: string;
  selected: Date | null;
  onYearChange: (date: Date | null) => void;
  isDisabled?: boolean;
  placeHolder: string;
};

const YearPicker: React.FC<DatePickerComponentProps> = (props: DatePickerComponentProps) => {
  const [selectedDate, setStartDate] = useState<Date | null>(props.selected);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    props.onYearChange(date);
  };

  return (
    <div>
      <label className="input-label-text">{props.label}</label>
      <br />
      <DatePicker
        className="my-custom-date"
        name={props.name}
        placeholderText={props.placeHolder}
        selected={selectedDate}
        onChange={handleDateChange}
        showYearPicker
        dateFormat="yyyy"
        disabled={props.isDisabled}
        isClearable 
      />
    </div>
  );
};

export default YearPicker;
