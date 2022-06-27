import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import classes from './App.module.css';

const App = () => {
  return (
    <>
      <main className={`min-h-screen ${classes.bgGradient} text-slate-50`}>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <HireMe />
        <Footer />
        <Navbar />
      </main>
    </>
  );
};

export default App;
