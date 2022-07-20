import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from "../../data/projects.js";

import classes from "./Projects.module.css";

const Projects = () => {
  const codeIcon = <FontAwesomeIcon icon={faCode} />;
  const gitHubIcon = <FontAwesomeIcon icon={faGithub} size="2x" />;
  return (
    <section id="projects">
      <div className=" flex flex-col lg:px-[140px] lg:min-h-[300px] items-center pt-20 pb-32 justify-center bg-slate-900 ">
        <h1 className="text-3xl font-light py-3 mb-24 text-center border border-transparent border-b-emerald-200">
          <div className="mb-4">{codeIcon}</div>
          <span>Apps I've Built</span>
        </h1>
        {/* Projects */}

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-14">
          {projects.map((project) => (
            <a
              className="flex flex-col relative items-center justify-center lg:w-[36rem] lg:h-[20rem] w-[20rem] h-[12rem] mx-3 rounded-2xl ring-8 ring-slate-800"
              key={project.name}
              href={project.link}
              target="_blank"
            >
              <img
                src={project.image}
                alt={project.name}
                className=" absolute w-full h-full object-cover rounded-2xl"
              />
              <div
                className={`px-8 py-10 relative items-center justify-center text-center z-10 w-full h-full opacity-0 rounded-2xl hover:opacity-100 ease-linear duration-200 ${classes.glass}`}
              >
                <h2 className="tracking-widest text-lg text-slte-300 title-font font-semibold bg-slate-700 px-3 py-2 rounded-tl-xl rounded-br-xl mb-3">
                  {project.tech}
                </h2>
                <h1 className="title-font text-xl font-medium text-white mb-3">
                  {project.name}
                </h1>
                <p className="leading-relaxed text-lg text-gray-800 font-medium">
                  {project.description}
                </p>
                <button className=" my-2 hover:translate-y-0.5 transition-all">
                  <a href={project.github} target="_blank">
                    {gitHubIcon}
                  </a>
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
