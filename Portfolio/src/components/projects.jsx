import "../styles/projects.css";
import ShelfLife from "../assets/shelflife.png";
import Atlas from "../assets/Atlas.png";
import Vibely from "../assets/vibely.png";
import Portfolio from "../assets/Portfolio.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "ShelfLife",
      githublink: "https://github.com/SrishtiOnGit/ShelfLife",
      demolink: "https://srishtiongit.github.io/ShelfLife/",
      description:
        "ShelfLife is a React web app that helps users keep track of books, courses, TV shows, games, and personal projects in one place.",
      image: ShelfLife,
    },
    {
      title: "Atlas Notes",
      githublink: "https://github.com/SrishtiOnGit/Atlas-Notes",
      demolink: "https://srishtiongit.github.io/Atlas-Notes/",
      description:
        "A digital travel experience that lets you explore the world through interactive postcards, daily discoveries, and cultural snapshots.",
      image: Atlas,
    },
    {
      title: "Vibely",
      githublink: "https://github.com/SrishtiOnGit/Vibely",
      demolink: "https://srishtiongit.github.io/Vibely/",
      description:
        "Vibely is an app which will give you a personalised music experience depending on your mood.",
      image: Vibely,
    },
    {
      title: "PortfolioForge",
      githublink: "https://github.com/SrishtiOnGit/PortfolioForge",
      demolink: "https://srishtiongit.github.io/PortfolioForge/",
      description:
        "A website which helps people get their portfolio in minutes without writing a single line of code or any designing tool.",
      image: Portfolio,
    },
  ];

  return (
    <div className="projects" id="projects">
      <h1 className="projects-title">
        Things I <span className="projects-title-02">Worked On</span>
      </h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="projects-img"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-buttons">
              <a
                href={project.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn-link"
              >
                <FaGithub /> GitHub Repo
              </a>

              <a
                href={project.demolink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn-demo"
              >
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
