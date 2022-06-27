import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className=" min-h-screen">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <HireMe />
        <Footer />
        <Navbar />
      </div>
    </>
  );
};

export default App;
