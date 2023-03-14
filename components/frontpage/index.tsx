import React, { FC } from "react";
import Link, { LinkProps } from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
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

interface ILinkButton {
  icon: IconType;
  i: number;
}

const IconButtonLink: FC = React.forwardRef(
  (props: ILinkButton & LinkProps, ref: React.Ref<HTMLAnchorElement>) => {
    return (
      <Link href={props.href}>
        <a href={props.href as string} onClick={props.onClick} ref={ref}>
          <props.icon
            className={`inline box-content w-6 h-6 ${
              props.i != 0 ? "mx-2" : "mr-2"
            }`}
          ></props.icon>
        </a>
      </Link>
    );
  }
);
IconButtonLink.displayName = "IconButtonLink";

const Frontpage = () => {
  return (
    <>
      <div className="py-12 px-8 text-white flex flex-col min-h-full md:grid md:grid-cols-12 overflow-hidden">
        <section className="md:col-span-5 md2:col-span-4 md:col-start-1 md:flex md:flex-col md:items-start md:my-auto lg:ml-8">
          <h1 className="text-display-md lg:text-display-lg">
            Patiphon Loetsuthakun
          </h1>
          <h2 className="text-headline-sm my-2">Full-Stack Developer</h2>
          <ul>
            {contactLists.map((elem, i) => {
              const prop = {
                href: elem.link,
                icon: elem.icon,
                i,
              };
              return <IconButtonLink {...prop} key={elem.title} />;
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
