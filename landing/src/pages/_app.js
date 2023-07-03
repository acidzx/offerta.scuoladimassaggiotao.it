import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";
import Layout from "@components/layout";
import { useEffect } from "react";
import analytics from "@/utility/analytics";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    analytics.page();
    // this will fire the Page Track function on every new router change.
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
