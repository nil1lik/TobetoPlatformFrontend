import {
  identityNumberLength,
  identityNumberLengthMessage,
  textAreaLength,
  textAreaLengthMessage,
  userLastnameMinLength,
  userLastnameMinLengthMessage,
} from "./../../constants/ValidationMessages/validationMessages";
import { number, string } from "yup";
import {
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
} from "../../constants/ValidationMessages/validationMessages";

export const UserInformationValidationMessageRule = {
  firstName: string()
    .required(inputRequired)
    .min(userFirstnameMinLength, userFirstnameMinLengthMessage)
    .max(userFirstnameMaxLength),
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
  identityNumber: number()
    .required(inputRequired)
    .max(identityNumberLength, identityNumberLengthMessage)
    .min(identityNumberLength, identityNumberLengthMessage),
  birthdate: string().required(inputRequired),
  street: string()
    .required(inputRequired)
    .max(textAreaLength, textAreaLengthMessage),
  aboutMe: string()
    .required(inputRequired)
    .max(textAreaLength, textAreaLengthMessage),
};
