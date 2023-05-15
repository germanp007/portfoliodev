import { Navbar } from "./Navbar/Navbar";
import { Hero } from "./hero/Hero";
import { About } from "../src/about/About";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";
import { useEffect } from "react";
import AOS from "aos";

export const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="main_container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};
