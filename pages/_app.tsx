import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Jadennns Portfolio"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/Profile.jpg",
          },
        ]}
        additionalMetaTags={[
          {
            name: "title",
            content: "Jadennns Portfolio",
          },
          {
            name: "description",
            content: "Helo! This is my portfolio, visit to be cool! 😎",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:url",
            content: "https://jadennns.netlify.app/",
          },
          {
            property: "og:title",
            content: "Jadennns Portfolio",
          },
          {
            property: "og:description",
            content: "Helo! This is my portfolio, visit to be cool! 😎",
          },
          {
            property: "og:image",
            content: "/Logo.png",
          },
          {
            property: "twitter:card",
            content: "summary_large_image",
          },
          {
            property: "twitter:url",
            content: "https://jadennns.netlify.app/",
          },
          {
            property: "twitter:title",
            content: "Jadennns Portfolio",
          },
          {
            property: "twitter:description",
            content: "Helo! This is my portfolio, visit to be cool! 😎",
          },
          {
            property: "twitter:image",
            content: "/Logo.png",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
