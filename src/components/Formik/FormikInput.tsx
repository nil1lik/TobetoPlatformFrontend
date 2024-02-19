import { ErrorMessage, Field } from "formik";
import React from "react";

type Props = {
  label?: string;
  name: string;
  type?: string;
  placeHolder?: string;
  value?: string;
  maxLength?: number;
  className?: string;
  disabled?:boolean
};

const FormikInput = (props: Props) => {
  return (
    <div className="mb-3">
      {
       props.label && <label className="input-label-text">{props.label}</label>
      } 
      <Field
        name={props.name}
        type={props.type || "text"}
        className="form-control my-custom-input"
        placeholder={props.placeHolder}
        value={props.value}
        maxLength={props.maxLength}
        disabled={props.disabled}
      />
      <ErrorMessage name={props.name}>
        {(message) => <span className="text-danger">{message}</span>}
      </ErrorMessage>
    </div>
  );
};

export default FormikInput;
