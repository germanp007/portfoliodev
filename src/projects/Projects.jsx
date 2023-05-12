import { projects } from "../data/projects";
import "./projects.css";
export const Projects = () => {
  return (
    <div>
      {projects.map((item, index) => (
        <>
          <div
            key={index}
            className="style-card"
            style={{
              color: "white",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "200px",
              height: "200px",
            }}
          >
            {" "}
            <h3>{item.title}</h3>
          </div>
        </>
      ))}
    </div>
  );
};
