/**
  File for storing localized strings and text constants used in the application.
  Using `Object.freeze` to ensure that the object cannot be modified at runtime
 */
export const loginScreenStrings = Object.freeze({
  demoHeading: 'Demo App',
  loginToDemo: 'Login to Demo App',
  loginBtn: 'Login',
  rememberUserName: 'Remember Username',
  enableFingerprint: 'Enable Fingerprint/Face ID',
});

export const logInSchemaError = Object.freeze({
  email: {
    regExError: 'Email is not Valid.',
    requiredError: 'Email is Required.',
  },
  password: {
    regExError: 'Password must contain minimum 8 character, one upper,one lower and one special character.',
    requiredError: 'Password is required.',
    minimumCharacterError: 'Password must contain minimum 8 characters',
    maximumCharacterError: 'Password must not contain more than 12 characters',
  },
});

export const schemaRegEx = Object.freeze({
  emailRegEx:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  passwordRegEx: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  characterOnlyRegEx: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
  // digitsOnlyRegEx: /^[0-9]+$/,
});

export const claimsScreenStrings = Object.freeze({
  claimsDemoHeading: 'Demo',
  historyHeading: 'Claims History',
  claimSection: 'Claims',
  statusSection: 'Status',
});

export const stepperComponentStrings = Object.freeze({
  nextButton: 'Next',
  resetButton: 'Reset',
});
