import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import favicon from '../../public/favicon.ico'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>; // Adjust the type of pageProps as per your requirements
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
