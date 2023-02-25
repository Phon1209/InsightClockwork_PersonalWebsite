import React, { FC } from "react";
import Head from "next/head";
import { MdChevronLeft } from "react-icons/md";
import projects from "../../public/json/projects.json";
import { convertDate } from "../../utilities/Date";
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
  return (
    <>
      <Head>
        <title>Projects | Patiphon Loetsuthakun</title>
      </Head>
      <section className="fullpage-item px-12 py-16">
        <header className="flex items-center mb-8 md:mb-16">
          <MdChevronLeft className="w-12 h-12" />
          <h2 className="text-display-md">Project</h2>
        </header>
        <div className="grid grid-flow-col auto-cols-auto">
          {projects.map((project) => {
            return (
              <article
                key={project.name}
                style={{
                  background: project.background,
                }}
                className="flex flex-col gap-6 items-center w-fit h-[210px] p-2 min-w-[240px] rounded-[30px] bg-black justify-center"
              >
                <header className="flex flex-col gap-2 items-center">
                  <h4 className="text-headline-md font-semibold">
                    {project.name}
                  </h4>
                  <p className="text-title-sm">
                    {convertDate(project.startDate, project.endDate)}
                  </p>
                </header>
                <summary className="list-none flex gap-4">
                  {project.techs.map((iconName) => {
                    const IconComponent = icons[iconName];
                    return <IconComponent key={iconName} className="w-6 h-6" />;
                  })}
                </summary>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
