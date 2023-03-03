import React, { MouseEventHandler } from "react";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { LinkIcon } from "../../types/links";
import Skills from "./skills";
import Links from "./links";
import BubbleSection from "./bubble";
import { IconType } from "react-icons/lib";

const contactLists = [
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

const IconButton = React.forwardRef((props, ref) => {
  return (
    <a href={props.href} onClick={props.onClick} ref={ref}>
      <props.icon
        className={`inline box-content w-6 h-6 ${
          props.i != 0 ? "mx-2" : "mr-2"
        }`}
      ></props.icon>
    </a>
  );
});

const Frontpage = () => {
  return (
    <>
      <div className="py-12 px-8 text-white flex flex-col min-h-full md:grid md:grid-cols-12 overflow-x-hidden">
        <section className="md:col-span-5 md2:col-span-4 md:col-start-1 md:flex md:flex-col md:items-start md:my-auto lg:ml-8">
          <h1 className="text-display-md lg:text-display-lg">
            Patiphon Loetsuthakun
          </h1>
          <h2 className="text-headline-sm my-2">Full-Stack Developer</h2>
          <ul className="">
            {contactLists.map((elem, i) => {
              return (
                <Link key={elem.link} href={elem.link} passHref>
                  <IconButton icon={elem.icon} i={i} />
                </Link>
              );
            })}
          </ul>
        </section>
        {/* Disappear if hits md breakpoint */}
        <Links />
        <Skills />
        {/* Bubble */}
        <BubbleSection />
      </div>
    </>
  );
};

export default Frontpage;
