import "../styles/hero.css";
import { FaGithub, FaDiscord, FaEnvelope, FaSlack } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Srishti</h1>
      <h1 className="hero-title-02">Srivastava</h1>
      <p className="description">
        Student. Developer. Builder. I enjoy creating digital experiences,
        experimenting with new ideas, and asking questions that most people
        overlook. Every project here started with curiosity.
      </p>
      <div className="button-group">
        <button className="hero-btn">View Projects</button>
        <button className="hero-contact">Contact</button>
      </div>

      <div className="social-links">
        <a href="https://github.com/SrishtiOnGit">
          <FaGithub /> Github
        </a>

        <a href="#discord">
          <FaDiscord /> Discord
        </a>

        <a href="#email">
          <FaEnvelope /> Email
        </a>

        <a href="#slack">
          <FaSlack /> Slack
        </a>
      </div>
    </div>
  );
};

export default Hero;
