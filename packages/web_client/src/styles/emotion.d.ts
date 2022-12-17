import '@emotion/react';
import theme from './theme';

const { colors, fontSizes, titleSizes } = theme;

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    fontSizes: typeof fontSizes;
    titleSizes: typeof titleSizes;
  }
}
