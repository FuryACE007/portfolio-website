import React from "react";
import hero from "../assets/heroVideo.mp4";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className=" min-h-[39rem] relative lg:px-20 py-36">
      <video className={classes.bgVideo} autoPlay loop muted>
        <source src={hero} type="video/mp4" />
      </video>
      <div className="absolute">
        <h1 className={`text-6xl ${classes.heroTitle}`}>Hi, I'm Sudhanshu</h1>
        <h2 className={`text-2xl py-7 ${classes.heroSubtitle}`}>
          A Full Stack Web Developer who likes building amazing websites
        </h2>
        <button
          className={`${classes.btn} bg-slate-50 block px-12 py-4 mt-6 text-black rounded-tl-none rounded-3xl items-center hover:rounded-none hover:bg-slate-900 hover:text-slate-100 duration-500`}
        >
          H I R E &nbsp;M E
        </button>
      </div>
    </div>
  );
};

export default Hero;
