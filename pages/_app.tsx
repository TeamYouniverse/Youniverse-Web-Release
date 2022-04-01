import '@styles/globals.css';
import { wrapper } from '@store';
import { ThemeProvider } from '@emotion/react';
import theme from '@style/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default wrapper.withRedux(MyApp);
