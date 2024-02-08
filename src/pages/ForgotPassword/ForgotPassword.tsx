import React from "react";
import { object } from "yup";
import Password from "../../components/ForgotPassword/Password";

const validationSchema = object({});

const ForgotPassword = () => {
  const initialValues = {};

  return (
    <>
    <Password placeHolder1="E-posta" name1={"email"}></Password>
    </>
  );
};

export default ForgotPassword;
