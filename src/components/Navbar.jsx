import React from "react";
import classes from "./Navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGear, faLaptopCode, faIdBadge } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const homeIcon = <FontAwesomeIcon icon={faHouse} />;
  const skillsIcon = <FontAwesomeIcon icon={faGear} />;
  const projectsIcon = <FontAwesomeIcon icon={faLaptopCode} />;
  const contactIcon = <FontAwesomeIcon icon={faIdBadge} />;

  return (
    <div
      className={` flex flex-col w-full fixed bottom-5 h-14 justify-center items-center text-center z-30`}
    >
      <div
        className={`${classes.glass} flex flex-row w-[18rem] h-14 justify-center items-center text-center`}
      >
        <div className=" grid grid-cols-4 gap-9">
          <a
            href="/"
            className=" text-indigo-500 hover:text-indigo-700 text-xl ease-in duration-200"
            onClick={(e) => {
              let hero = document.getElementById("home");
              e.preventDefault(); // Stop Page Reloading
              home && home.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {homeIcon}
          </a>
          <a
            href="/"
            className="text-indigo-500 hover:text-indigo-700 text-xl ease-in duration-200"
            onClick={(e) => {
              let hero = document.getElementById("skills");
              e.preventDefault(); // Stop Page Reloading
              skills && skills.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {skillsIcon}
          </a>
          <a
            href="/"
            className="text-indigo-500 hover:text-indigo-700 text-xl ease-in duration-200"
            onClick={(e) => {
              let hero = document.getElementById("projects");
              e.preventDefault(); // Stop Page Reloading
              projects && projects.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {projectsIcon}
          </a>
          <a
            href="/"
            className="text-indigo-500 hover:text-indigo-700 text-xl ease-in duration-200"
            onClick={(e) => {
              let hero = document.getElementById("hireMe");
              e.preventDefault(); // Stop Page Reloading
              hireMe && hireMe.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {contactIcon}
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
