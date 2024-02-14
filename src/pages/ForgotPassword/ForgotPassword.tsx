import React from "react";
import { object } from "yup";
import Password from "../../components/ForgotPassword/Password";
import { UserInformationValidationMessageRule } from "../../utilities/Validations/validationMessageRules";

const validationSchema = object({});

const ForgotPassword = () => {

  const validationSchema = object ( {
    email: UserInformationValidationMessageRule.email
  })
  const initialValues = {};

  return (
    <>
    <Password placeHolder1="E-posta" name1={"email"}></Password>
    </>
  );
};

export default ForgotPassword;
