// https://docs.expo.dev/guides/using-eslint/
/**
 * integrate Prettier with ESlint,
 */
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'react', 'react-native'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        bracketSpacing: true,
      },
      { usePrettierrc: true },
    ],
    'no-console': 'error',
    'no-alert': 'error',
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
};
