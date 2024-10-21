// Define a type for the color keys used in the Colors object.

type ColorType =
  | 'black'
  | 'white'
  | 'primary'
  | 'lightSlateGray'
  | 'skyBlue'
  | 'red'
  | 'green'
  | 'gray'
  | 'horizonBlue'
  | 'lightBlack'
  | 'lightGreen'
  | 'overlayDark'
  | 'cyan'
  | 'lightGray'
  | 'darkTheme'
  | 'dotColor'
  | 'transparent'
  | 'primaryThemeColor'
  | 'secondaryBackground'
  | 'darkGrey'
  | 'primaryBtnBackground'
  | 'viridianGreen'
  | 'argent';

// This object provides a centralized way to manage and reference color values throughout the application, ensuring consistency in color usage.
// Color code should be Hex values.

export const Colors: Record<ColorType, string> = {
  black: '#000000',
  white: '#ffffff',
  primary: '#00909A',
  lightSlateGray: '#99A8B9',
  skyBlue: '#34639A',
  red: '#FE4130',
  green: '#1A7968',
  gray: '#D9D9D9',
  darkGrey: '#757575',
  horizonBlue: '#3B76A1',
  lightBlack: '#4F4F4F',
  lightGreen: '#34C759',
  overlayDark: 'rgba(0,0,0,0.2)',
  cyan: '#E4FFFF',
  lightGray: '#F2F2F2',
  darkTheme: '00545A',
  primaryThemeColor: '#00909A',
  dotColor: '#00545A',
  transparent: 'transparent',
  secondaryBackground: '#F2F2F7',
  primaryBtnBackground: '#00909A',
  viridianGreen: '#00909A',
  argent: '#939393',
};
