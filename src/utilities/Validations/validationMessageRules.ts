
import { ref, string } from "yup";
import {
  userLastnameMinLength,
  userLastnameMinLengthMessage,
  emailMustBeValid,
  inputRequired,
  emailValidRegex,
  passwordMaxLength,
  passwordMaxLengthMessage,
  passwordMinLength,
  passwordMinLengthMessage,
  phoneMustBeValid,
  phoneRegExp,
  userFirstnameMaxLength,
  userFirstnameMinLength,
  userFirstnameMinLengthMessage,
  userLastnameMaxLength,
  userLastnameMaxLengthMessage,
  experienceInputsMinLength,
  experienceInputMinLengthMessage,
  userFirstnameMaxLengthMessage,
  passwordsDontMatchMessage,
  experienceInputsMaxLength,
  experienceInputMaxLengthMessage,
} from "./validationMessages";


export const UserInformationValidationMessageRule = {
  firstName: string()
    .required(inputRequired)
    .min(userFirstnameMinLength, userFirstnameMinLengthMessage)
    .max(userFirstnameMaxLength, userFirstnameMaxLengthMessage),
  lastName: string()
    .required(inputRequired)
    .min(userLastnameMinLength, userLastnameMinLengthMessage)
    .max(userLastnameMaxLength, userLastnameMaxLengthMessage),
  email: string()
    .required(inputRequired)
    .email(emailMustBeValid)
    .matches(emailValidRegex, emailMustBeValid),
  password: string()
    .required(inputRequired)
    .min(passwordMinLength, passwordMinLengthMessage)
    .max(passwordMaxLength-1, passwordMaxLengthMessage),
  oldPass: string()
    .required(inputRequired)
    .min(passwordMinLength, passwordMinLengthMessage)
    .max(passwordMaxLength-1, passwordMaxLengthMessage),
  newPass: string()
    .required(inputRequired)
    .min(passwordMinLength, passwordMinLengthMessage)
    .max(passwordMaxLength-1, passwordMaxLengthMessage),
  confirmPass: string()
    .required(inputRequired)
    .min(passwordMinLength, passwordMinLengthMessage)
    .max(passwordMaxLength-1, passwordMaxLengthMessage)
    .oneOf([ref('newPass')], passwordsDontMatchMessage)
    .required(inputRequired),
  phone: string()
    .required(inputRequired)
    .matches(phoneRegExp, phoneMustBeValid),
  identityNumber: string()
      .matches(/^\d{11}$/, 'National identity must be exactly 11 digits')
      .required('National identity is required'),
  experienceInputs: string()
    .required(inputRequired)
    .min(experienceInputsMinLength, experienceInputMinLengthMessage)
    .max(experienceInputsMaxLength-1, experienceInputMaxLengthMessage),
  inputsRequired: string().required(inputRequired),
  country: string()
  .required(inputRequired)
};
