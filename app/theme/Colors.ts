// Define a type for the color keys used in the Colors object.

type ColorType =
    | 'black'
    | 'white'
    | 'primary'
    | 'primary20'
    | 'darkBlue'
    | 'white60';

// This object provides a centralized way to manage and reference color values throughout the application, ensuring consistency in color usage.
// Color code should be Hex values.

export const Colors: Record<ColorType, string> = {
    black: '#000000',
    white: '#ffffff',
    primary: '#007BFF',
    primary20: '#7D8FC6',
    darkBlue: '#172B50',
    white60: '#D9D9D9'
};
