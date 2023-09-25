import { projects } from "../data/projects";
import AOS from "aos";
import { useEffect } from "react";

import "./projects.css";

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 4000,
    });
  }, []);
  return (
    <section id="projects" className="projects-section">
      <div className="title-projects-section">
        <h1 style={{ textAlign: "center" }}>
          Proje
          <span style={{ color: "#26e6c6" }}>cts</span>
        </h1>
      </div>
      <div className="projects-container">
        {projects.map((item) => (
          <div
            key={item.id}
            className="style-card"
            data-aos="zoom-in-up"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.image})`,
            }}
          >
            {" "}
            <div className="title-description">
              <h3>{item.title}</h3>
            </div>
            <div className="projects-description">
              <p>{item.description}</p>
              <a
                className="link"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                Go there
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
