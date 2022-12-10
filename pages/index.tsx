import Head from "next/head";
import HeroSection from "../core/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className="w-100">
      <Head>
        <title>Gripas Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <HeroSection />
    </div>
  );
}
