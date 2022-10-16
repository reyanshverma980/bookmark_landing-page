import Head from "next/head";
import { useState } from "react";
import Download from "../components/Download";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import MobileNav from "../components/MobileNav";

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    return setMobileNav((prevState) => {
      return !prevState;
    });
  };

  return (
    <div
      className={`container-bookmark relative ${
        mobileNav ? "h-screen overflow-hidden" : ""
      }`}
    >
      <Head>
        <title>Bookmark</title>
        <meta
          name="description"
          content="Bookmark landing page-challenge by front end mentor"
        />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>

      {mobileNav && <MobileNav toggle={toggleMobileNav} />}
      {!mobileNav && <Header nav={mobileNav} toggle={toggleMobileNav} />}
      <Hero />
      <Main />
      <Download />
      <FAQ />
      <Footer />
    </div>
  );
}
