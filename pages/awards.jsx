import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";
import aboutData from "../public/json/about.json";
import Image from "next/image";
import bubbleStyle from "../styles/bubble.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Patiphon Loetsuthakun</title>
      </Head>
      <section className="fullpage-item fullpage-item--scrollable scrollbar-hide px-8 md:px-12 py-8 md:py-16 flex flex-col gap-12 text-[20px] leading-[44px] lg:pb-24 2xl:px-48">
        <Link href="/">
          <header className="flex items-center md:mb-4 cursor-pointer self-start">
            <MdChevronLeft className="w-8 h-8" />
            <h2 className="text-title-lg md:text-display-sm text-code">
              Awards and Academics
            </h2>
          </header>
        </Link>
        <article className="flex p-6 px-8 flex-col-reverse gap-8 md:gap-12 md:flex-row md:px-20"></article>
      </section>
    </>
  );
};

export default About;
