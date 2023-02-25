import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { Poppins } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { OverlayContextProvider } from "../context/OverlayContext";
import * as gtag from "../lib/gtag";
import dynamic from "next/dynamic";
import Footer from "../core/Footer/Footer";
import Script from "next/script";

const GetStarted = dynamic(() => import("../core/Forms/GetStarted"));
const CustomPackage = dynamic(() => import("../core/Forms/CustomPackage"));
const BuyPackageForm = dynamic(() => import("../core/Forms/BuyPackageForm"));
const FreelancerForm = dynamic(() => import("../core/Forms/FreelancerForm"));

const Navbar = dynamic(() => import("../core/Navbar/Navbar"));
import { DefaultSeo } from "next-seo";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "fallback",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo
        titleTemplate="%s | Gripas Marketing"
        defaultTitle="Gripas Marketing"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://gripas.ascenddevs.com/",
          siteName: "Gripas Marketing",
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-3MQMJRZFG6"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>

      <OverlayContextProvider>
        <Navbar className={poppins.className} />
        <main
          id="main"
          className={`main overflow-y-hidden ${poppins.className}`}
        >
          <Component {...pageProps} />
        </main>
        <GetStarted />
        <FreelancerForm />
        <CustomPackage />
        <BuyPackageForm />
        <Footer className={poppins.className} />
      </OverlayContextProvider>
    </>
  );
}
