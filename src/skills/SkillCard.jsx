import AOS from "aos";
import { useEffect } from "react";
import "./skills.css";

export const SkillCard = ({ skills, title, title2 }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="testing">
      <div className="title-stack" data-aos="fade-right">
        <h3>
          {title} <span style={{ color: "#26e6c6" }}>{title2}</span>
        </h3>
      </div>
      <div className="skills-container">
        {skills.map((skill) => (
          <div
            id="item"
            className={`skill-item`}
            key={skill.id}
            data-aos="fade-right"
          >
            <p className="title-icon">{skill.name}</p>
            <img src={skill.url} alt={skill.name} className="skills-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};
