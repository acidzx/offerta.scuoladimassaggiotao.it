import "@/styles/globals.css";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

// import { AppProps } from "next/app";

// import { ThemeProvider } from "next-themes";

import { useEffect } from "react";
import analytics from "@/utility/analytics";
import Head from "next/head";
import Layout from "@components/layout";
import { Router } from "next/router";

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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <motion.div
          key={router.route}
          initial={false}
          variants={{
            initial: {
              opacity: 0,
            },
            animate: { opacity: 1 },
          }}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div
            className="h-1 origin-[0] z-50 fixed top-0 left-0 right-0 bg-green-700"
            style={{ scaleX }}
          />

          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </>
  );
}
