import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main className="container-fluid py-5 bg-secondary-green">
      <h1 className="display-2 text-green fw-bold text-center py-3">My Portfolio</h1>
      <p className="text-center">
        Welcome to my portfolio. Here you’ll find a selection of my work.
        Explore my projects to learn more about what I do.
      </p>

      <div className="container">
        <div className="row">
          {projects && projects.map((project) => (
            <ProjectCard key={project.id} to={project.link} src={project.image} title={project.title} description={project.description} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
