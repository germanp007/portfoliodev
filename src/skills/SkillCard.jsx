export const SkillCard = ({ skills, title, title2 }) => {
  return (
    <>
      <div className="title-stack">
        <h3>
          {title} <span style={{ color: "#26e6c6" }}>{title2}</span>
        </h3>
      </div>
      <div className="skills-container">
        {skills.map((skill) => (
          <div id="item" className="skill-item" key={skill.id}>
            <p className="title-icon">{skill.name}</p>
            <img src={skill.url} alt={skill.name} className="skills-logo" />
          </div>
        ))}
      </div>
    </>
  );
};
