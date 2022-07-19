import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardClip } from "@fortawesome/free-solid-svg-icons";

import classes from "./HireMe.module.css";

const HireMe = () => {
  const hireIcon = <FontAwesomeIcon icon={faIdCardClip} size="2x" />;
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className=" flex flex-col lg:px-[140px] lg:min-h-[300px] items-center pt-20 pb-32 justify-center bg-emerald-400 text-slate-900">
      {hireIcon}
      <h1 className="text-3xl font-light mt-5 text-center border border-transparent border-b-slate-900">
        Hire Me
      </h1>
      {/* Contact Form */}

      <form
        onSubmit={submitHandler}
        className={`${classes.card} my-6 mt-10 flex flex-col w-2/3 h-full justify-center px-16 py-10`}
      >
        <label htmlFor="name" className="py-3 text-lg">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className=" rounded-md py-2 px-3 bg-emerald-100 mb-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 ease-linear duration-200"
          required
        />
        <label htmlFor="email" className="py-3 text-lg">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@yahoo.com"
          className=" rounded-md py-2 px-3 bg-emerald-100 mb-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 ease-linear duration-200"
          required
        />
        <label htmlFor="message" className="py-3 text-lg">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="10"
          cols="30"
          className="rounded-md py-2 px-3 bg-emerald-100 mb-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 ease-linear duration-200 "
          required
        ></textarea>
        <div className=" flex flex-col justify-center text-center w-full">
          <button className="bg-slate-900 text-white font-semibold w-1/3 py-2 px-4 rounded-xl ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default HireMe;
