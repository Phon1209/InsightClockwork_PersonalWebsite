import Head from "next/head";
import Frontpage from "../components/frontpage";
import Bubble from "../components/frontpage/bubble/bubble";

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
        <Bubble size={57} x={73} y={42}  />
        <Bubble size={57} x={100} y={600}  />
        <Bubble size={156} x={66} y={760}  />
        <Bubble size={29} x={300} y={430}  />
        <Bubble size={45} x={500} y={130}  />
        <Bubble size={100} x={400} y={880}  />
        <Bubble size={57} x={270} y={1100}  />
        <Frontpage />
      </section>
    </>
  );
}
