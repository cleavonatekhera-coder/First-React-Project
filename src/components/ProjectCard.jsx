


function ProjectCard({ project, onDeleteProject }) {
  return (
    <article className="project-card">

      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />

        <span className="project-number">
          {project.number}
        </span>
      </div>

      <div className="project-info">

        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-card-actions">
          <a href="#contact" className="project-link">
            View Project 
          </a>

          <button
            className="delete-button"
            onClick={() => onDeleteProject(project.id)}
          >
            Delete
          </button>
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;
