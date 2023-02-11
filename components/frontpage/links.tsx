import React from "react";
import Link from "next/link";
import { BsAwardFill, BsFillPersonFill } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { LinkIcon } from "../../types/links";

const pageLinks: LinkIcon[] = [
  {
    icon: BsAwardFill,
    title: "Awards and Academics",
    link: "/awards",
  },
  {
    icon: IoIosPaper,
    title: "Résumé",
    link: "/resume",
  },
  {
    icon: BsFillPersonFill,
    title: "About Me",
    link: "/about",
  },
];

const Links = () => {
  return (
    <section className="grid grid-flow-row auto-rows-max mt-16 mb-6 gap-4 md:hidden">
      {pageLinks.map((elem) => {
        return (
          <div key={elem.title} className="flex">
            <elem.icon className="w-6 h-6" />
            <Link href={elem.link}>
              <h3 className="ml-4 text-title-md">{elem.title}</h3>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Links;
