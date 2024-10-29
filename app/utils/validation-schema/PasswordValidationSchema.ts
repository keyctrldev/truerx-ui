import * as Yup from 'yup';
import { passwordValidationError, passwordValidationRegx } from '../../constants';

export const PasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required(passwordValidationError.passwordRequired)
    .min(8, passwordValidationError.min8Character)
    .max(20, passwordValidationError.max20Character)
    .matches(passwordValidationRegx.upperCase, passwordValidationError.oneUpperCase)
    .matches(passwordValidationRegx.lowerCase, passwordValidationError.oneLowerCase)
    .matches(passwordValidationRegx.digit, passwordValidationError.oneDigits)
    .matches(passwordValidationRegx.specialCharacter, passwordValidationError.oneSpecialCharacter),
});
