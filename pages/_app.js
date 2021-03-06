import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Custom Wordle</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="bg-stone-900 w-screen h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
