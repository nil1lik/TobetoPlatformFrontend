import { ErrorMessage, Field } from "formik";
import React from "react";

type Props = {
  label?: string;
  name: string;
  type?: string;
  placeHolder?: string;
  maxLength?: number;
  className?: string;
  disabled?: boolean;
  login?: boolean;
};

const FormikInput = (props: Props) => {
  const loginClass = props.login ? "mb-4" : "mb-3"; 
  return (
    <div className={loginClass}>
      {props.label && <label className="input-label-text">{props.label}</label>}
      <Field
        name={props.name}
        type={props.type || "text"}
        className="form-control my-custom-input"
        placeholder={props.placeHolder}
        maxLength={props.maxLength}
        disabled={props.disabled || false}
      />
      <ErrorMessage name={props.name}>
        {(message) => <span className="text-danger">{message}</span>}
      </ErrorMessage>
    </div>
  );
};

export default FormikInput;
