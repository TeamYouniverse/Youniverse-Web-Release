import '@emotion/react'; // it's important to use ThemeProvider

interface colorType {
  black: string;
  middleGray: string;
  lightGray: string;
  white: string;
}

declare module '@emotion/react' {
  export interface Theme {
    color: colorType;
  }
}
