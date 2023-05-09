import { skills } from "../data/skills";
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

      <div className="skills-container">
        {skills
          .filter((e) => e.language)
          .map((skill) => (
            <div id="item" className="skill-item">
              <p style={{ color: "black" }} className="title-icon">
                {skill.name}
              </p>
              <img src={skill.url} alt={skill.name} className="skills-logo" />
            </div>
          ))}
      </div>
    </section>
  );
};
