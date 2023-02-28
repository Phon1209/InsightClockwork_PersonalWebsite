import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";
import projects from "../../public/json/projects.json";
import { convertDate, sortDate } from "../../utilities/Date";
import {
  SiNextdotjs,
  SiFramer,
  SiIbmwatson,
  SiReact,
  SiArduino,
  SiFirebase,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiMicrosoftazure,
  SiPhpmyadmin,
  SiJavascript,
} from "react-icons/si";

const icons = {
  SiNextdotjs,
  SiFramer,
  SiIbmwatson,
  SiReact,
  SiArduino,
  SiFirebase,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiMicrosoftazure,
  SiPhpmyadmin,
  SiJavascript,
};

const Projects: FC = () => {
  const sortedProjects = projects.sort((a, b) => {
    return sortDate(new Date(a.startDate), new Date(b.startDate), true);
  });

  return (
    <>
      <Head>
        <title>Projects | Patiphon Loetsuthakun</title>
      </Head>
      <section className="fullpage-item px-4 md:px-12 py-8 md:py-16 flex flex-col items-center">
        <Link href="/">
          <header className="flex items-center mb-8 md:mb-16 cursor-pointer self-start">
            <MdChevronLeft className="w-8 h-8" />
            <h2 className="text-title-lg md:text-display-sm code-text">
              Project
            </h2>
          </header>
        </Link>
        <div className="grid grid-flow-row mx-auto md:grid-flow-col items-center auto-cols-max gap-8 md:gap-16">
          {sortedProjects.map((project) => {
            return (
              <Link key={project.name} href={project.link}>
                <article
                  style={{
                    background: project.background,
                  }}
                  className="flex flex-col gap-6 items-center w-fit h-[210px] p-2 min-w-[240px] rounded-[30px] bg-black justify-center cursor-pointer"
                >
                  <header className="flex flex-col gap-2 items-center">
                    <h4 className="!font-semibold text-headline-md">
                      {project.name}
                    </h4>
                    <p className="text-title-sm">
                      {convertDate(project.startDate, project.endDate)}
                    </p>
                  </header>
                  <summary className="list-none flex gap-4">
                    {project.techs.map((iconName) => {
                      const IconComponent = icons[iconName];
                      return (
                        <IconComponent key={iconName} className="w-6 h-6" />
                      );
                    })}
                  </summary>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
