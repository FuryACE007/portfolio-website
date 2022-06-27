import React from "react";
import hero from "../assets/heroVideo.mp4";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className=" min-h-[35rem] relative px-16 py-36">
      <video className={classes.bgVideo} autoPlay loop muted>
        <source src={hero} type="video/mp4" />
      </video>
      <div className="absolute">
        <h1 className={`text-5xl ${classes.heroTitle}`}>Hi, I'm Sudhanshu</h1>
        <h2 className=" text-xl font-light py-5">A Full Stack Web Developer who likes to build amazing websites</h2>
      </div>
    </div>
  );
};

export default Hero;
