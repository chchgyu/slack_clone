const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  xs: calcRem(12),
  sm: calcRem(14),
  md: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
} as const;

const titleSizes = {
  xs: calcRem(20),
  sm: calcRem(24),
  md: calcRem(32),
  lg: calcRem(36),
  xl: calcRem(40),
} as const;

const gray = {
  100: '#eeeeee',
  200: '#dddddd',
  300: '#d2d2d2',
  400: '#acacac',
  500: '#93999e',
  600: '#7e8497',
  700: '#64686c',
  800: '#4b4b4b',
  900: '#2c3137',
} as const;

export const colors = {
  primary: '#4A154B',
  secondary: '#3D1D1C',
  white: '#FFFFFF',
  red: '#E75858',
  blue: '#1264A3',
  gray,
} as const;

const theme = {
  fontSizes,
  titleSizes,
  colors,
};

export default theme;
