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
              About
            </h2>
          </header>
        </Link>
        <article className="flex p-6 px-8 flex-col-reverse gap-8 md:gap-12 md:flex-row md:px-20">
          <div className="flex flex-col flex-1 self-center">
            <header className="hidden md:block !font-semibold text-display-sm text-code mb-4">
              Me?
            </header>
            <summary className="list-none text-title-lg tracking-wide">
              {aboutData.intro}
            </summary>
          </div>
          <div className="lg:mx-20 xl:grow xl:mx-0 flex gap-12 justify-evenly items-center scale-[0.8] md:scale-100">
            <Image
              objectFit="contain"
              width={240}
              height={240}
              priority
              src={`/imgs/bubble_profile.png`}
            />
            <header className="md:hidden !font-semibold text-display-lg text-code">
              Me?
            </header>
          </div>
        </article>
        <article className="flex flex-col gap-16 p-6 px-8">
          <header className="ml-6 md:ml-24 text-title-lg">
            {aboutData.goal_transition}
          </header>
          <summary className="list-none text-right self-end w-full sm:w-2/3">
            {aboutData.goal}
          </summary>
        </article>
        <article className="p-6 px-8 flex flex-col gap-12">
          <header className="text-headline-lg self-center">Why?</header>
          <summary className="list-none grid grid-flow-row gap-8 md:gap-6">
            <div className="flex justify-between gap-8 flex-col md:flex-row">
              <p className="grow-[2] basis-0">{aboutData.why[0]}</p>
              <div
                className={`${bubbleStyle.bubble_pic} grow basis-0 flex justify-center items-center`}
              >
                <Image
                  objectFit="contain"
                  height={200}
                  width={200}
                  src="/imgs/bubble_goal.png"
                />
              </div>
            </div>
            <div>
              <p>{aboutData.why[1]}</p>
            </div>
            <div className="flex justify-between gap-8 flex-col-reverse md:flex-row-reverse">
              <p className="grow-[2] basis-0 text-left md:text-right">
                {aboutData.why[2]}
              </p>
              <div
                className={`${bubbleStyle.bubble_pic} grow basis-0 hidden md:flex justify-center items-center`}
              >
                <Image
                  objectFit="contain"
                  width={200}
                  height={200}
                  src="/imgs/bubble_goal_2.png"
                />
              </div>
            </div>
          </summary>
        </article>
        <article className="p-6 px-8 flex flex-col gap-12">
          <header className="text-headline-lg self-center">Hobbies</header>
          <summary className="list-none grid grid-flow-row gap-6">
            {aboutData.hobby.map((msg) => {
              return <p>{msg}</p>;
            })}
          </summary>
        </article>
      </section>
    </>
  );
};

export default About;
