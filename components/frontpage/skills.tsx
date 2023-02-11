import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiArduino,
  SiMicrosoftazure,
  SiExpress,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
import { BsChevronRight } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import Link from "next/link";

interface Skill {
  icon: IconType;
  title: string;
  startDate: Date;
  proficiency: number;
}

const skills: Skill[] = [
  {
    icon: SiNextdotjs,
    title: "Next.js",
    startDate: new Date("Sep 5th, 2022"),
    proficiency: 60,
  },
  {
    icon: SiTailwindcss,
    title: "TailwindCSS",
    startDate: new Date("May 7th, 2020"),
    proficiency: 90,
  },
  {
    icon: SiReact,
    title: "React.js",
    startDate: new Date("Apr 16th, 2018"),
    proficiency: 90,
  },
  {
    icon: SiArduino,
    title: "Arduino",
    startDate: new Date("May 10th, 2022"),
    proficiency: 50,
  },
  {
    icon: SiMicrosoftazure,
    title: "Azure Cloud",
    startDate: new Date("Sep 10th, 2022"),
    proficiency: 80,
  },
  {
    icon: SiExpress,
    title: "Express.js",
    startDate: new Date("Oct 24th, 2021"),
    proficiency: 75,
  },
  {
    icon: SiMongodb,
    title: "MongoDB",
    startDate: new Date("Oct 24th, 2021"),
    proficiency: 80,
  },
  {
    icon: SiFigma,
    title: "Figma",
    startDate: new Date("Dec 29th, 2021"),
    proficiency: 80,
  },
];

const Skills = () => {
  return (
    <>
      {/* Skill Section */}
      <div className="flex-grow flex flex-col justify-end gap-4 md:hidden">
        <section className="flex flex-wrap gap-4">
          {skills.map((elem) => {
            return <elem.icon key={elem.title} className="w-6 h-6" />;
          })}
        </section>
        {/* Projects */}
        <Link href="/projects">
          <section className="flex gap-4 items-center">
            <h3 className="text-title-lg">My Projects</h3>
            <BsChevronRight className="w-6 h-6" />
          </section>
        </Link>
      </div>
    </>
  );
};

export default Skills;
