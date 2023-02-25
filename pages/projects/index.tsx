import React, { FC } from "react";
import Head from "next/head";
import { MdChevronLeft } from "react-icons/md";
import projects from "../../public/json/projects.json";
import { convertDate } from "../../utilities/Date";

const Projects: FC = () => {
  return (
    <>
      <Head>
        <title>Projects | Patiphon Loetsuthakun</title>
      </Head>
      <section className="fullpage-item px-12 py-16">
        <header className="flex items-center">
          <MdChevronLeft className="w-12 h-12" />
          <h2 className="text-display-md">Project</h2>
        </header>

        {projects.map((project) => {
          return (
            <article>
              <header>
                <h4>{project.name}</h4>
                <p>{convertDate(project.startDate, project.endDate)}</p>
              </header>
              <summary>
                {project.techs.map((icon) => {
                  return <div>{icon}</div>;
                })}
              </summary>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
