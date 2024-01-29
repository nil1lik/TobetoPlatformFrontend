import { identityNumberLength, identityNumberLengthMessage, textAreaLength, textAreaLengthMessage, userLastnameMinLength, userLastnameMinLengthMessage} from './../../constants/ValidationMessages/validationMessages';
import { string } from "yup";
import { emailMustBeValid, inputRequired, emailValidRegex, passwordMaxLength, passwordMaxLengthMessage, passwordMinLength, passwordMinLengthMessage, phoneMustBeValid, phoneRegExp, userFirstnameMaxLength, userFirstnameMinLength, userFirstnameMinLengthMessage, userLastnameMaxLength, userLastnameMaxLengthMessage, } from "../../constants/ValidationMessages/validationMessages";

export const FirstNameValidationMessageRule = { firstName: string().required(inputRequired).min(userFirstnameMinLength, userFirstnameMinLengthMessage).max(userFirstnameMaxLength)}

export const LastNameValidationMessageRule = { lastName: string().required(inputRequired).min(userLastnameMinLength, userLastnameMinLengthMessage).max(userLastnameMaxLength, userLastnameMaxLengthMessage)}

export const EmailValidationMessageRule = { email: string()
    .required(inputRequired)
    .email(emailMustBeValid)
    .matches(emailValidRegex, emailMustBeValid),}

export const PasswordValidationMessageRule = { password: string().required().min(passwordMinLength, passwordMinLengthMessage).max(passwordMaxLength, passwordMaxLengthMessage)}

export const OldPasswordValidationMessageRule = {oldPass: string().required(inputRequired).min(passwordMinLength, passwordMinLengthMessage).max(passwordMaxLength, passwordMaxLengthMessage)}

export const NewPasswordValidationMessageRule = { newPass: string().required(inputRequired).min(passwordMinLength, passwordMinLengthMessage).max(passwordMaxLength, passwordMaxLengthMessage)}

export const RepeatNewPasswordValidationMessageRule = { repeatNewPass: string().required(inputRequired).min(passwordMinLength, passwordMinLengthMessage).max(passwordMaxLength, passwordMaxLengthMessage)}

export const PhoneValidationMessageRule = { phone: string().required(inputRequired)
.matches(phoneRegExp, phoneMustBeValid)}

export const IdentityNumberValidationMessageRule = { identityNumber: string().required(inputRequired).max(identityNumberLength, identityNumberLengthMessage).min(identityNumberLength, identityNumberLengthMessage),}

export const BirthdateValidationMessageRule = { birthdate: string().required(inputRequired) }

export const TextAreaValidationMessageRule = { 
    street: string().required(inputRequired).max(textAreaLength, textAreaLengthMessage),
    aboutMe: string().required(inputRequired).max(textAreaLength, textAreaLengthMessage),
 }