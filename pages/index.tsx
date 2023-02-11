import Head from "next/head";
import Frontpage from "../components/frontpage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Patiphon Loetsuthakun</title>
        <meta
          name="description"
          content="Patiphon(Phon) Loetsuthakun's personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="fullpage-item">
        <Frontpage />
      </section>
    </>
  );
}
