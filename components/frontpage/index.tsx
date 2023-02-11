import React from "react";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { LinkIcon } from "../../types/links";
import Skills from "./skills";
import Links from "./links";
import BubbleText from "../bubble/bubbleText";

const contactLists: LinkIcon[] = [
  {
    icon: BsLinkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ptphon",
  },
  {
    icon: IoMdMail,
    title: "Email",
    link: "mailto: ploetsuthakun@gmail.com",
  },
  {
    icon: BsGithub,
    title: "GitHub",
    link: "https://github.com/Phon1209",
  },
];

const Frontpage = () => {
  return (
    <>
      <div className="py-12 px-8 text-white flex flex-col min-h-full md:grid md:grid-cols-12">
        <section className="md:col-span-5 md:col-start-1">
          <h1 className="text-display-md lg:text-display-lg">
            Patiphon Loetsuthakun
          </h1>
          <h2 className="text-headline-sm my-2">Full-Stack Developer</h2>
          <ul className="">
            {contactLists.map((elem, i) => {
              return (
                <Link key={elem.link} href={elem.link}>
                  <elem.icon
                    className={`inline box-content w-6 h-6 ${
                      i != 0 ? "mx-2" : "mr-2"
                    }`}
                  ></elem.icon>
                </Link>
              );
            })}
          </ul>
        </section>
        {/* Disappear if hits md breakpoint */}
        <Links />
        <Skills />
        {/* Bubble */}
        <section className="hidden md:block md:col-end-13 md:col-span-7">
          <BubbleText text="Hello" />
          <BubbleText text="Projects" />
          <BubbleText text="Awards" />
          <BubbleText text="About" />
        </section>
      </div>
    </>
  );
};

export default Frontpage;
