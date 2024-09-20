// Define a type for the color keys used in the Colors object.

type ColorType =
    | 'black'
    | 'white'
    | 'primary'
    | 'lightSlateGray'
    | 'skyBlue'
    | 'red';


// This object provides a centralized way to manage and reference color values throughout the application, ensuring consistency in color usage.
// Color code should be Hex values.

export const Colors: Record<ColorType, string> = {
    black: '#000000',
    white: '#ffffff',
    primary: '#007BFF',
    lightSlateGray: '#99A8B9',
    skyBlue: '#34639A',
    red: '#FE4130'
};
