import Head from "next/head";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import HorizontalScrollComponents from "@/components/HorizontalScrollComponents/HorizontalScrollComponents";
import CurrentSectionContextProvider from "@/contexts/CurrentSectionContext";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Head>
        <title>VKharlakov | React Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CurrentSectionContextProvider>
        <Header />
        <HorizontalScrollComponents />
        <Projects />
        <Footer />
      </CurrentSectionContextProvider>
    </>
  );
}
