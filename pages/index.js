import Head from "next/head";
import Download from "../components/Download";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="container-bookmark">
      <Head>
        <title>Bookmark</title>
        <meta
          name="description"
          content="Bookmark landing page-challenge by front end mentor"
        />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>

      <Header />
      <Hero />
      <Main />
      <Download />
      <FAQ />
      <Footer />
    </div>
  );
}
