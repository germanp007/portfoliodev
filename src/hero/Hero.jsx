import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import picture from "../assets/picture.png";
import { HeroSvg } from "./HeroSvg";
import "./hero.css";
import { Social } from "./Social";
import resume from "../pdf/GermanPintoCV.pdf";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="home" className="hero-section">
      <div className="presentation" data-aos="fade-up">
        <article>
          <h3>
            Hello, <span style={{ color: "#26e6c6" }}>I&lsquo;m</span>
          </h3>
          <h1>
            German <span className="last_name">Pinto</span>
          </h1>
          <h3>Front-end Developer</h3>
          <p>
            I got strong knowledge in web development with high performance and
            quality work
          </p>
          <div className="cv-container">
            <a download href={resume} className="button">
              <i
                className="ri-download-2-fill"
                style={{ fontSize: "20px" }}
              ></i>{" "}
              Download CV
            </a>
          </div>
        </article>{" "}
      </div>

      <div className="svg-image-container" data-aos="fade-down">
        <HeroSvg />
        <img src={picture} alt="picture" className="hero-image" />
        <Social />
      </div>
    </section>
  );
};
