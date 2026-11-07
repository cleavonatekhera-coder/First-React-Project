
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import AddProjectForm from "./components/AddProjectForm";
import Footer from "./components/Footer";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      number: "01",
      title: "Brand Identity Design",
      category: "Branding",
      description: "A fresh and memorable visual identity for a modern lifestyle brand.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800"
    },
    {
      id: 2,
      number: "02",
      title: "E-commerce Experience",
      category: "Web Design",
      description: "A clean and intuitive online shopping experience built for customers.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    },
    {
      id: 3,
      number: "03",
      title: "Mobile App Design",
      category: "UI/UX Design",
      description: "A user-friendly mobile experience with modern interface design.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800"
    },
    {
      id: 4,
      number: "04",
      title: "Creative Photography",
      category: "Photography",
      description: "A visual storytelling project capturing creativity and culture.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
    },
    {
      id: 5,
      number: "05",
      title: "Digital Marketing",
      category: "Marketing",
      description: "A creative campaign designed to increase brand awareness.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800"
    },
    {
      id: 6,
      number: "06",
      title: "Website Development",
      category: "Development",
      description: "A responsive digital platform designed for a growing business.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase();

    return (
      project.title.toLowerCase().includes(search) ||
      project.category.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search)
    );
  });

  function handleAddProject(newProject) {
    setProjects((previousProjects) => [
      {
        ...newProject,
        id: Date.now(),
        number: String(previousProjects.length + 1).padStart(2, "0")
      },
      ...previousProjects
    ]);

    setShowForm(false);
  }
  
  function handleDeleteProject(projectId) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this project?"
  );

  if (confirmDelete) {
    setProjects((previousProjects) =>
      previousProjects.filter(
        (project) => project.id !== projectId
      )
    );
  }
}
  return (
    <>
      <Navbar />

      <Hero />

      <main className="main-content">
        <div className="add-project-heading">
          <div>
            <h2>Manage Your Portfolio</h2>
            <p>Add your latest creative projects below.</p>
          </div>

          <button
            className="add-project-button"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "+ Add Project"}
          </button>
        </div>

        {showForm && (
          <AddProjectForm
            onAddProject={handleAddProject}
            onCancel={() => setShowForm(false)}
          />
        )}

        <ProjectList
          projects={filteredProjects}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onDeleteProject={handleDeleteProject}
        />
        <Footer />
      </main>
    </>
  );
}

export default App;







