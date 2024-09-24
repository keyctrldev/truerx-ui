# truerx-ui

This readme file includes the setup and run instruction for this project.

## Expo Version

This project is built with Expo SDK version: `XX.X.X`

## Prerequisites

- Node.js (v16 or higher)
- Expo CLI (`npm install -g expo-cli`)
- Yarn or npm

Here are the steps to run the project.

## Installation

Go to the project directory

Install dependencies

```bash
  yarn install
```

Start metro server

```bash
  yarn start
```

run project on iOS

```bash
  Press i in metro terminal
```

run project on Android

```bash
  Press a in metro terminal
```

## Branching and Deployment Workflow

- Any code in the `main` branch should be deployable.
- The `staging` branch will be used to prepare builds that are ready to showcase to the client and for testing purposes
- Create new descriptively-named branches for new feature work, such as `feature/add-new-payment-types` and for bugs `fix/fix-typo-issues` from `development`.
- Commit new work to your local branches and regularly push work to the remote.
- To request feedback or help, or when you think your work is ready to merge into the `development` branch, open a pull request.
- After your work or feature has been reviewed and approved, it can be merged into the `development` branch.
- Once features are fully developed and tested in `development`, we will merge the `development` branch into `staging`

## directories

```
app/
├── apis/
│   ├── aipInstance.ts
│   └── LoginApi.ts
├── assets/
│   ├── fonts/
│   ├── images/
│   └── icons/
├── components/
│     ├── app-text/
│           ├── Button.tsx
│           ├── ButtonStyle.ts
│     ├── primary-button/
│           ├── PrimaryButton.tsx
│           ├── PrimaryButtonStyle.ts
├── constants/
│     ├── EndPoint.ts
│     ├── Routes.ts
│     ├── Strings.ts
├── hooks/
│     ├── usePickerOptions.ts
├── modules/
│   ├── LoginScreen/
│   │   ├── LoginScreen.tsx
│   │   ├── LoginScreenStyles.ts
│   │   └── useLoginScreen.ts
│   └── HomeScreen/
│       ├── HomeScreen.tsx
│       │── HomeScreenStyles.ts
│       └── useLoginScreen.ts
├── navigation/
│   ├── AppNavigator.ts
│   ├── AuthNavigator.ts
│   └── MainNavigator.ts
├── redux/
│   ├── user/
│   │    └── UserSlice.ts
│   ├── profile/
│   │     └── ProfileSlice.ts
│   ├── RootReducer.ts
│   └── Store.ts
├── theme/
│   ├── Colors.ts
│   ├── Metrics.ts
├── types/
│   ├── GlobalTypes.ts
├── utils/
│   ├── validation-schema/
│   │    ├── loginSchema.ts
│   ├── GlobalFunctions.ts
└── App.tsx

```

## Code Quality Enforcement with Prettier and ESLint

To maintain high code quality and consistency across our project, we utilize **ESLint** and **Prettier**. This setup enforces strict formatting and style guidelines, ensuring that all code committed to the repository adheres to a uniform standard.

### Checking and Fixing Linting Errors

To check for linting errors in your project, run the following command in your terminal:

```bash
npm run lint
```

### Fixing Linting Errors Automatically

This command will attempt to resolve all fixable issues according to the ESLint configuration. Any remaining issues will need to be addressed manually.

```bash
npm run lint -- --fix
```

### Formatting Code with Prettier

This command will format all files in the project based on the rules specified in `.prettierrc.js`.

```bash
npx prettier --write .
```
