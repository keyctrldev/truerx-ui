// Define a type for the color keys used in the Colors object.

type ColorType =
    | 'black'
    | 'white'
    | 'skyBlue'

// This object provides a centralized way to manage and reference color values throughout the application, ensuring consistency in color usage.
// Color code should be Hex values.

export const Colors: Record<ColorType, string> = {
    black: '#000000',
    white: '#ffffff',
    skyBlue: '#3B76A1',
};
