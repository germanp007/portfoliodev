import { skills } from "../data/skills";
import { SkillCard } from "./SkillCard";
import "./skills.css";
export const Skills = () => {
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
        title="Framewoks."
      />
      <SkillCard skills={skills.filter((e) => e.tools)} title="Tools." />
      <SkillCard skills={skills.filter((e) => e.devops)} title="Framewoks." />
    </section>
  );
};
