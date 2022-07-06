import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { FllsContextProvider } from "context/Context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FllsContextProvider>
      <Component {...pageProps} />
    </FllsContextProvider>
  );
}

export default MyApp;
