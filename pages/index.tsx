import Head from "next/head";
import { useEffect, useState } from "react";
import Bubble from "../components/bubble/bubble";
import Frontpage from "../components/frontpage";

const getRandomInt = (lower: number = 0, upper: number) =>
  lower + Math.floor(Math.random() * (upper - lower));

export default function Home() {
  // Add Bubble
  const [bubbleLocation, setBubbleLocation] = useState([]);
  const pages = 2;
  const bubbleForEachPage = 4;
  useEffect(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    const newLocation = [];
    new Array(pages).fill(0).forEach((e, i) => {
      new Array(bubbleForEachPage).fill(0).forEach(() => {
        newLocation.push({
          x: getRandomInt(0, width),
          y: getRandomInt(height * i, height * (i + 1)),
          size: 145,
        });
      });
    });
    setBubbleLocation(newLocation);
  }, []);

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
      <section className="fullpage-item">
        <h1 className="text-2xl text-dark-white-extra">Hello World</h1>
      </section>

      {/* Bubble Overlay */}
      {bubbleLocation.map((elem, i) => {
        return <Bubble key={i} x={elem.x} y={elem.y} size={elem.size} />;
      })}
    </>
  );
}
