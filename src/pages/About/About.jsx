import instagramLogo from "./instagram.png";
import linkedinLogo from "./linkedin.png";
import githubLogo from "./github-sign.png";
import profileImage from "./image.jpeg";
import cv from "./cv.pdf";
import cvIcon from "./cv-icon.png";
import "./About.css";

export function About() {
  return (
    <div className="about-container">
      <div className="about-description">
        <h1>About me</h1>
        <img
          src={profileImage}
          alt=""
          style={{ borderRadius: "100%", height: "150px", padding: "0px" }}
        />
        <p>Hey, my name is Razvan, I'm 21 years old, from Cluj-Napoca.</p>
        <p>
          I`m ready to learn more and develop myself even further to become
          better in what I do.
        </p>
      </div>

      <div className="social-media-btn">
        <a
          href="https://www.instagram.com/i_am_razvann/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramLogo} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/razvan-ilea-4a7a18179/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinLogo} alt="" />
        </a>
        <a
          href="https://github.com/Razvan-Ilea"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="" />
        </a>
        <a href={cv} target="_blank" rel="noreferrer">
          <img src={cvIcon} alt="" />
        </a>
      </div>
    </div>
  );
}
