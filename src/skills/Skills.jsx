import { skills } from "../data/skills";
import { SkillCard } from "./SkillCard";
import "./skills.css";
import AOS from "aos";
import { useEffect } from "react";

export const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="skills" className="skills-section">
      <div className="title-container">
        <h1>
          Stack <span style={{ color: "#26e6c6" }}>and</span> Skills
        </h1>
        <p>some technologies have beginner knowledge</p>
      </div>

      <SkillCard
        skills={skills.filter((e) => e.language)}
        title="Programing"
        title2="Languages."
      />
      <SkillCard
        skills={skills.filter((e) => e.framework)}
        title="Frameworks."
      />
      <SkillCard skills={skills.filter((e) => e.tools)} title="Tools." />
      <SkillCard skills={skills.filter((e) => e.devops)} title="DevOps." />
      <SkillCard skills={skills.filter((e) => e.prompt)} title="Prompt." />
    </section>
  );
};
