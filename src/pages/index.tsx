import Intro from "@/components/Intro";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>VKharlakov | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
    </>
  );
}
