
import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";

function ProjectList({projects, searchTerm, onSearchChange, onDeleteProject}) {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-heading">

        <div>
          <p className="section-label">
            OUR PORTFOLIO
          </p>

          <h2>Selected Works</h2>

          <p className="section-description">
            A collection of ideas transformed into
            meaningful digital experiences.
          </p>
        </div>

        <span className="project-count">
          {projects.length} Projects
        </span>

      </div>

      {/* Search Component */}
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
      />

      {/* Project Cards */}
      {projects.length > 0 ? (

        <div className="project-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
                onDeleteProject={onDeleteProject}
            />
          ))}

        </div>

      ) : (

        <div className="no-projects">
          <h3>No projects found</h3>
          <p>
            Try another search keyword or clear your search.
          </p>
        </div>

      )}

    </section>
  );
}

export default ProjectList;
