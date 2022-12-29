import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { OverlayContextProvider } from "../context/OverlayContext";
import FreelancerForm from "../core/Forms/FreelancerForm";
import GetStarted from "../core/Forms/GetStarted";
import Navbar from "../core/Navbar/Navbar";
import "../styles/main.scss";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "fallback",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <OverlayContextProvider>
        <Navbar className={poppins.className} />
        <main className={`main overflow-y-hidden ${poppins.className}`}>
          <Component {...pageProps} />
        </main>
        <GetStarted />
        <FreelancerForm />
        <footer className=" bg-primary"></footer>
      </OverlayContextProvider>
    </>
  );
}
