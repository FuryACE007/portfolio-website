import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div
      className={` flex flex-col w-full fixed bottom-5 h-14 justify-center items-center text-center z-30`}
    >
      <div
        className={`${classes.glass} flex flex-row w-[18rem] h-14 justify-center items-center text-center`}
      >
        <div className=" grid grid-cols-4 gap-2">
          <a
            href="/"
            className="text-slate-300 hover:text-slate-500"
            onClick={(e) => {
              let hero = document.getElementById("home");
              e.preventDefault(); // Stop Page Reloading
              home && home.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            home
          </a>
          <a
            href="/"
            className="text-slate-300 hover:text-slate-500"
            onClick={(e) => {
              let hero = document.getElementById("skills");
              e.preventDefault(); // Stop Page Reloading
              skills && skills.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            skills
          </a>
          <a
            href="/"
            className="text-slate-300 hover:text-slate-500"
            onClick={(e) => {
              let hero = document.getElementById("projects");
              e.preventDefault(); // Stop Page Reloading
              projects && projects.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Projects
          </a>
          <a
            href="/"
            className="text-slate-300 hover:text-slate-500"
            onClick={(e) => {
              let hero = document.getElementById("hireMe");
              e.preventDefault(); // Stop Page Reloading
              hireMe && hireMe.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            hireMe
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
