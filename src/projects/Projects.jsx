import { projects } from "../data/projects";
import "./projects.css";

export const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        {projects.map((item) => (
          <div
            key={item.id}
            className="style-card"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.image})`,
            }}
          >
            {" "}
            <div>
              <h3>{item.title}</h3>
            </div>
            <div className="projects-description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a className="link" href={item.url} target="_blank">
                Go there
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
