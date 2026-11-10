
import { useState } from "react";

function AddProjectForm({ onAddProject, onCancel }) {
  // Local  form inputs
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Validate the form
    if (
      !title.trim() ||
      !category.trim() ||
      !description.trim() ||
      !image.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new project object
    const newProject = {
      title: title.trim(),
      category: category.trim(),
      description: description.trim(),
      image: image.trim()
    };

    // Send the project to the parent component
    onAddProject(newProject);

    // Clear the form
    setTitle("");
    setCategory("");
    setDescription("");
    setImage("");
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>

      <h2>Add a New Project</h2>

      <p className="form-description">
        Share your latest creative work with the world.
      </p>

      <div className="form-group">
        <label htmlFor="title">Project Title</label>
        <input
          id="title"
          type="text"
          placeholder="e.g. Brand Identity Design"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Project Category</label>
        <input
          id="category"
          type="text"
          placeholder="e.g. Branding"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Project Description</label>
        <textarea
          id="description"
          placeholder="Describe your project..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Project Image URL</label>
        <input
          id="image"
          type="url"
          placeholder="https://example.com/image.jpg"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="save-button">
          Save Project
        </button>

        <button
          type="button"
          className="cancel-button"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>

    </form>
  );
}

export default AddProjectForm;
