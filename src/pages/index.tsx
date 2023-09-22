import Head from "next/head";
import Contacts from "@/components/Contacts/Contacts";
import Projects from "@/components/Projects/Projects";
import HorizontalScrollComponents from "@/components/HorizontalScrollComponents/HorizontalScrollComponents";
import Navbar from "@/components/Navbar/Navbar";
import CurrentSectionContextProvider from "@/contexts/CurrentSectionContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>VKharlakov | React Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CurrentSectionContextProvider>
        <Navbar />
        <HorizontalScrollComponents />
        <Projects />
        <Contacts />
      </CurrentSectionContextProvider>
    </>
  );
}
