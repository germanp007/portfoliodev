import "./about.css";
import { AboutSvg as Image } from "./aboutsvg/AboutSvg";

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h1>
          About <span style={{ color: "#26e6c6", textAlign: "left" }}>Me</span>
        </h1>
        <p>
          I am a Front End developer with 2 years of experience in the
          programming field. Throughout my professional career, I have worked
          with languages such as JavaScript, HTML, CSS, and libraries such as
          React, NextJs, Redux, Bootstrap, SASS. I am passionate about
          developing user interfaces and creating engaging and intuitive user
          experiences.
        </p>
      </div>
      <div className="about-image-container">
        <Image />
      </div>
    </section>
  );
};
