import React from "react";
import Card from "./SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs, faNodeJs, faReact, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";


const Skills = () => {
  const vueIcon = <FontAwesomeIcon icon={faVuejs} />;
  const nodeIcon = <FontAwesomeIcon icon={faNodeJs} />;
  const reactIcon = <FontAwesomeIcon icon={faReact} />;
  const cssIcon = <FontAwesomeIcon icon={faCss3Alt} />;
  const dbIcon = <FontAwesomeIcon icon={faDatabase} />;
  const skills = [
    {
      name: "React JS",
      icon: reactIcon,
    },
    {
      name: "Vue JS",
      icon: vueIcon,
    },
    {
      name: "Next JS",
      icon: reactIcon,
    },
    {
      name: "Nuxt JS",
      icon: vueIcon,
    },
    {
      name: "Backend using Node JS & Express",
      icon: nodeIcon,
    },
    {
      name: "CMS: GraphCMS, Sanity",
      icon: null,
    },
    {
      name: "Database: Mongodb, Postgres, Firebase",
      icon: dbIcon,
    },
    {
      name: "Styling using Pure CSS, Tailwind, Bootstrap, Material UI, Vuetify & Chakra UI",
      icon: cssIcon,
    },
  ];
  return (
    <section id="skills">
      <div className="flex flex-col lg:px-[140px] items-center mb-20 lg:mt-[-5rem] justify-center lg:min-h-[40rem]">
        <h1 className="text-3xl font-light py-3 my-12 lg:my-20 text-center border border-transparent border-b-emerald-200">
          My Top Skills
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
          {skills.map((skill) => (
            <Card key={skill.name}> <span className=" mx-2">{skill.icon?skill.icon:''}</span> {skill.name}</Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
