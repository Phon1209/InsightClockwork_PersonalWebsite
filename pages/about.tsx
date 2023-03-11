import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";
import aboutData from "../public/json/about.json";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Patiphon Loetsuthakun</title>
      </Head>
      <section className="fullpage-item px-4 md:px-12 py-8 md:py-16">
        <Link href="/">
          <header className="flex items-center mb-8 md:mb-16 cursor-pointer self-start">
            <MdChevronLeft className="w-8 h-8" />
            <h2 className="text-title-lg md:text-display-sm text-code">
              About
            </h2>
          </header>
        </Link>
        <article className="flex p-6 px-8 flex-col-reverse gap-12 md:flex-row md:px-20">
          <div className="flex flex-col flex-1 self-center">
            <header className="hidden md:block !font-semibold text-display-sm text-code">
              Me?
            </header>
            <summary className="list-none">{aboutData.intro}</summary>
          </div>
          <div className="lg:mx-20 xl:grow xl:mx-0 flex gap-12 justify-evenly items-center">
            <Image
              objectFit="contain"
              width={200}
              height={200}
              src={`/imgs/bubble1.png`}
            />
            <header className="md:hidden !font-semibold text-display-sm text-code">
              Me?
            </header>
          </div>
        </article>
        <article>{aboutData.goal}</article>
        <article>{aboutData.why}</article>
        <article>{aboutData.hobby}</article>
      </section>
    </>
  );
};

export default About;
