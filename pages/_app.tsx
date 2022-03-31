import '@src/styles/globals.css';
import { wrapper } from '../src/store';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
