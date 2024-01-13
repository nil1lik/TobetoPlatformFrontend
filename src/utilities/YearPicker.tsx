// YearPicker.tsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Field } from "formik";

type YearPickerProps = {
  label?: string;
  name: string;
  placeholder?: string;
  selectedDate: Date | null;
  onYearChange: (date: Date | null) => void;
};

const YearPicker: React.FC<YearPickerProps> = ({
  label,
  name,
  placeholder,
  selectedDate,
  onYearChange,
}) => {
  return (
    <div className="mb-3">
      <label className="input-label-text">{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          onYearChange(date);
        }}
        dateFormat="yyyy"
        showYearPicker
        placeholderText={placeholder}
        customInput={<YearPickerInput value={selectedDate} onClick={onYearChange} />}
      />
      <Field type="hidden" name={name} value={null} />
      <ErrorMessage name={name}>
        {(message) => <span className="text-danger">{message}</span>}
      </ErrorMessage>
    </div>
  );
};

type YearPickerInputProps = {
  value: Date | null;
  onClick: (date: Date | null) => void;
};

const YearPickerInput: React.FC<YearPickerInputProps> = ({ value, onClick }) => (
    <button
    className="my-custom-datepicker-input"
    onClick={() => onClick(value instanceof Date ? value : null)}
  >
    {value instanceof Date ? value.getFullYear() : "Yılı Seçiniz"}
  </button>  
);

export default YearPicker;
