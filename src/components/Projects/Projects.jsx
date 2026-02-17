import githubLogo from "../../assets/images/github-logo.png";
import "./Projects.css";

export default function Projects({ projects }) {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-subtitle">
        A collection of projects showcasing my skills in full-stack development.
      </p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-card-content">
              <h3 className="project-card-title">{project.name}</h3>

              <p className="project-card-description">{project.description}</p>

              {project.images && (
                <div className="project-tech-stack">
                  {project.images.map((image, imageIdx) => (
                    <div key={imageIdx} className="project-tech-item">
                      <img
                        src={image}
                        alt={`Technology ${imageIdx + 1}`}
                        className="project-tech-icon"
                      />
                    </div>
                  ))}
                </div>
              )}
              <div className="project-link-wrapper">
                <a
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  <img
                    src={githubLogo}
                    alt="Github Logo"
                    className="project-link-icon"
                  />
                  <span>View on Github</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
