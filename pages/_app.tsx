import "../styles/main.scss";
import type { AppProps } from "next/app";
import Navbar from "../core/Navbar/Navbar";
import Head from "next/head";
import { Poppins } from '@next/font/google'


const poppins = Poppins({
  weight: ['100','200','300','400','500','600', '700','800','900'],
  style: ['normal', 'italic'],
  display: "fallback",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar className={poppins.className}/>
      <main className={`main overflow-y-hidden ${poppins.className}`} >
        <Component {...pageProps} />
      </main>

      <footer className="footer bg-primary"></footer>
    </>
  );
}
