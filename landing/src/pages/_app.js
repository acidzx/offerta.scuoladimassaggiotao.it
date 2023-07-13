import "@/styles/globals.css";

import { motion } from "framer-motion";
import { AppProps } from "next/app";

// import { ThemeProvider } from "next-themes";

import { useEffect } from "react";
import analytics from "@/utility/analytics";
import Head from "next/head";
import Layout from "@components/layout";
import ModalForm from "@components/modalForm";
import PrivacyPolicy from "@components/layout/footer/privacyPolicy";
/* import TermsConditions from "./terms_conditions";
import CookiePolicy from "./cookiePolicy"; */

export const scrollIntoTheView = (id) => {
  if (typeof window !== "undefined") {
    let element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    analytics.page();
    // this will fire the Page Track function on every new router change.
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Permissions-Policy" content="ch-ua-form-factor=()" />
      </Head>
      <Layout>
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: { opacity: 1 },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
      <ModalForm />
      <PrivacyPolicy />
    </>
  );
}
