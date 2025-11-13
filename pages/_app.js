import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import { TabsProvider } from "../contexts/TabsContext";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <TabsProvider>
      <Layout>
        <Head title={`Pratham Sharma | ${pageProps.title}`} />
        <Component {...pageProps} />
      </Layout>
    </TabsProvider>
  );
}

export default MyApp;
