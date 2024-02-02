import { experienceInputsMaxLength, experienceInputMaxLengthMessage, userFirstnameMaxLengthMessage } from './validationMessages';
import { number, string } from "yup";
import {
  identityNumberLength,
  identityNumberLengthMessage,
  textAreaLength,
  textAreaLengthMessage,
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
} from "./validationMessages";
import { yupToFormErrors } from 'formik';

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
    .max(passwordMaxLength, passwordMaxLengthMessage),
  oldPass: string()
    .required(inputRequired)
    .min(passwordMinLength, passwordMinLengthMessage)
    .max(passwordMaxLength, passwordMaxLengthMessage),
  newPass: string()
    .required(inputRequired)
    .min(passwordMinLength, passwordMinLengthMessage)
    .max(passwordMaxLength, passwordMaxLengthMessage),
  repeatNewPass: string()
    .required(inputRequired)
    .min(passwordMinLength, passwordMinLengthMessage)
    .max(passwordMaxLength, passwordMaxLengthMessage),
  phone: string()
    .required(inputRequired)
    .matches(phoneRegExp, phoneMustBeValid),
  identityNumber: string()
    .required(inputRequired)
    .max(identityNumberLength, identityNumberLengthMessage)
    .min(identityNumberLength, identityNumberLengthMessage),
  birthdate: string().required(inputRequired),
  country: string().required(inputRequired),
  textArea: string()
    .max(textAreaLength, textAreaLengthMessage),
  experienceInputs: string()
  .required(inputRequired)
  .min(experienceInputsMinLength, experienceInputMinLengthMessage)
  .max(experienceInputsMaxLength, experienceInputMaxLengthMessage),
  dates: string()
  .required(inputRequired),
  dropboxes: string()
  .required(inputRequired),
};
