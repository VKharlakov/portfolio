import HorizontalScrollComponents from "@/components/HorizontalScrollComponents/HorizontalScrollComponents";
import Intro from "@/components/Intro/Intro";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>VKharlakov | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HorizontalScrollComponents />
      <Projects />
    </>
  );
}
