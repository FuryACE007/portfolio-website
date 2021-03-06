import React from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardClip } from "@fortawesome/free-solid-svg-icons";

import classes from "./HireMe.module.css";

const HireMe = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const hireIcon = <FontAwesomeIcon icon={faIdCardClip} size="2x" />;

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const message = messageInputRef.current.value;

    console.log(name, email, message);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
  };

  return (
    <section id="hireMe">
      <div className=" flex flex-col lg:px-[140px] items-center md:pt-20 md:pb-32 pt-12 pb-20 justify-center bg-emerald-400 text-slate-900">
        {hireIcon}
        <h1 className="text-3xl font-light mt-5 text-center border border-transparent border-b-slate-900">
          Hire Me
        </h1>
        {/* Contact Form */}

        <form
          netlify
          name="contact"
          onSubmit={submitHandler}
          className={`${classes.card} my-6 mt-10 flex flex-col md:w-2/3 w-4/5 h-full justify-center md:px-16 md:py-10 px-5 py-6`}
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
            ref={nameInputRef}
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
            ref={emailInputRef}
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
            ref={messageInputRef}
            required
          ></textarea>
          <div className=" flex flex-col justify-center text-center w-full">
            <button
              className="bg-slate-800 text-white font-semibold mx-auto w-1/3 py-2 px-2 my-5 shadow-lg hover:shadow-none hover:bg-slate-900 ease-linear duration-200 rounded-xl "
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HireMe;
