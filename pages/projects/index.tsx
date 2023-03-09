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
  SiLaravel,
} from "react-icons/si";
import Image from "next/image";

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
  SiLaravel,
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
      <section className="fullpage-item fullpage-item--scrollable px-4 md:px-12 py-8 md:py-16 flex flex-col items-center">
        <Link href="/">
          <header className="flex items-center mb-8 md:mb-16 cursor-pointer self-start">
            <MdChevronLeft className="w-8 h-8" />
            <h2 className="text-title-lg md:text-display-sm code-text">
              Project
            </h2>
          </header>
        </Link>
        <div className="grid grid-flow-row mx-auto lg:grid-cols-2 2xl:grid-cols-3 items-center auto-cols-max gap-8 md:gap-16">
          {sortedProjects.map((project) => {
            return (
              <Link key={project.name} href={project.link}>
                <article className="project-card hide-first-child md:show-first-child">
                  <Image
                    objectFit="cover"
                    alt={project.illustration}
                    width={200}
                    height={200}
                    src={`/imgs/Illustration/${project.illustration}.svg`}
                  ></Image>
                  <div className="flex flex-col gap-6 items-center justify-center p-2 w-fit">
                    <header className="flex flex-col gap-2 items-center whitespace-nowrap">
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
                  </div>
                  <div
                    style={{
                      background: project.background,
                    }}
                    className="card-background md:hidden"
                  ></div>
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
