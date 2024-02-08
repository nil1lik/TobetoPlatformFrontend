import React from "react";
import { object } from "yup";
import Password from "../../components/ForgotPassword/Password";

const validationSchema = object({});

const ResetPassword = () => {
  const initialValues = {};

  return (
    <>
    <Password placeHolder1="Şifre" placeHolder2=" Şifre Tekrar" name1={"şifre"} name2={"şifre-tekrar"}></Password>
    </>
  );
};

export default ResetPassword;
