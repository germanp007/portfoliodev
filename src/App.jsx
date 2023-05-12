import { Navbar } from "./Navbar/Navbar";
import { Hero } from "./hero/Hero";
import { About } from "../src/about/About";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";

export const App = () => {
  return (
    <main className="main_container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
};
