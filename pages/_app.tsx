import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import DefaultSeoPropsFile from "../next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DefaultSeoPropsFile} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
