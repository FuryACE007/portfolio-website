import React from "react";
import hero from "../assets/heroVideo.mp4";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="min-h-[39rem] flex flex-col relative lg:px-20 md:px-14 px-12 py-36">
        <video className={classes.bgVideo} autoPlay loop muted>
          <source src={hero} type="video/mp4" />
        </video>
        <div className="absolute">
          <h1 className={`lg:text-6xl md:text-5xl text-4xl ${classes.heroTitle}`}>Hi,<br></br> <span className=" leading-relaxed">I'm Sudhanshu</span></h1>
          <h2 className={`lg:text-2xl md:text-2xl text-lg py-7 ${classes.heroSubtitle}`}>
            A Full Stack Web Developer who likes building amazing websites
          </h2>
          <a
            href="/"
            onClick={(e) => {
              let hero = document.getElementById("hireMe");
              e.preventDefault(); // Stop Page Reloading
              hireMe && hireMe.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <button
              className={`${classes.btn} bg-slate-50 block md:px-12 md:py-4 px-8 py-4 mt-6 text-black rounded-tl-none rounded-3xl items-center hover:rounded-none hover:bg-slate-900 hover:text-slate-100 duration-500`}
            >
              H I R E &nbsp;M E
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
