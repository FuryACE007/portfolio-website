import React from "react";
import Card from "./SkillCard";

const Skills = () => {
  const skills = [
    {
      name: "React JS",
    },
    {
      name: "Vue JS",
    },
    {
      name: "Next JS",
    },
    {
      name: "Nuxt JS",
    },
    {
      name: "Backend using Node JS & Express",
    },
    {
      name: "CMS: GraphCMS, Sanity",
    },
    {
      name: "Database: Mongodb, Postgres, Firebase",
    },
    {
      name: "Styling using Pure CSS, Tailwind, Bootstrap, Material UI, Vuetify & Chakra UI",
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:px-[140px] items-center justify-center lg:min-h-[300px]">
        <h1 className="text-3xl font-light py-3 my-12 text-center border border-transparent border-b-emerald-200">
          My Top Skills
        </h1>
        <div className="grid lg:grid-cols-2 gap-5">
          {skills.map((skill) => (
            <Card key={skill.name}>{skill.name}</Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
