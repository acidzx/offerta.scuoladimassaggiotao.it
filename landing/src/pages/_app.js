import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";
import Layout from "@components/layout";
import { useEffect } from "react";
import analytics from "@/utility/analytics";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    analytics.page();
    // this will fire the Page Track function on every new router change.
  }, []);

  return (
    // <ThemeProvider attribute="class">
    // <Layout>
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Permissions-Policy" content="ch-ua-form-factor=()" />
      </Head>
      <Component {...pageProps} />
    </>
    /*      </Layout>
     </ThemeProvider> */
  );
}
