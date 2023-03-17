import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  MdChevronLeft,
  MdSportsScore,
  MdCollectionsBookmark,
} from "react-icons/md";
import { BsAwardFill } from "react-icons/bs";
import awardData from "../public/json/awards.json";
import Image from "next/image";

const IconsElement = {
  BsAwardFill,
  MdSportsScore,
  MdCollectionsBookmark,
};

const About = () => {
  return (
    <>
      <Head>
        <title>About | Patiphon Loetsuthakun</title>
      </Head>
      <section className="fullpage-item fullpage-item--scrollable scrollbar-hide px-8 md:px-12 py-8 md:py-16 flex flex-col gap-12 text-[20px] leading-[44px] lg:pb-24 2xl:px-48">
        <header className="flex flex-col items-center justify-items-stretch gap-4 text-code">
          <h2 className="text-display-sm">Awards and Academics</h2>
          <Link href="/">
            <div className="cursor-pointer text-xl text-teal-200 flex gap-4 items-center self-start">
              <MdChevronLeft className="w-6 h-6" />
              Back to Main
            </div>
          </Link>
        </header>

        {awardData.map((schoolData) => {
          return (
            <section
              key={schoolData.school}
              className="flex flex-col gap-11 justify-start md:flex-row md:gap-16 max-w-3xl self-center"
            >
              <div className="w-24 h-24 shrink-0 self-center md:self-start">
                <Image
                  width={96}
                  height={96}
                  src={schoolData.logo}
                  objectFit="contain"
                />
              </div>
              <article className="text-body-md md:text-body-lg flex flex-col gap-8">
                <header>
                  <h5 className="text-title-lg md:text-headline-sm !font-semibold mb-2">
                    {schoolData.school}
                  </h5>
                  <p className="text-title-sm md:text-title-md">
                    {schoolData.degree}
                  </p>
                  <p className="text-title-sm md:text-title-md">
                    {schoolData.years}
                  </p>
                </header>
                <section>
                  <summary>{schoolData.desc}</summary>
                </section>
                {schoolData.sections.map((sectionData) => {
                  const Icon = IconsElement[sectionData.icon];

                  return (
                    <section
                      key={sectionData.title}
                      className="grid grid-flow-row gap-2"
                    >
                      <header className="flex gap-3 items-center">
                        <Icon className="w-6 h-6" />
                        <h6 className="text-title-md !font-bold">
                          {sectionData.title}
                        </h6>
                      </header>
                      <summary>
                        {sectionData.lists.map((item, i) => {
                          return (
                            <li key={i}>
                              <span className="text-code">{item.bold}</span>
                              {item.description}
                            </li>
                          );
                        })}
                      </summary>
                    </section>
                  );
                })}
              </article>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default About;
