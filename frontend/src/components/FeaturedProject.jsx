import React from "react";
import ProjectCard from "./ProjectCard";

import { useNavigate } from "react-router-dom";

const FeaturedProject = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Build a Portfolio Website",
      description: "A modern portfolio with animations and blog section.",
      budget: 200,
      skills: ["React", "TailwindCSS", "JavaScript"],
    },
    {
      id: 2,
      title: "E-commerce Storefront",
      description: "An online store with cart, checkout, and payments.",
      budget: 500,
      skills: ["Node.js", "MongoDB", "React"],
    },
    {
      id: 3,
      title: "Freelance Marketplace",
      description: "A platform for clients to hire freelancers.",
      budget: 1000,
      skills: ["MERN", "Stripe API", "Socket.IO"],
    },
    {
      id: 4,
      title: "Chat Application",
      description: "A real-time chat app with authentication and group messaging.",
      budget: 400,
      skills: ["Socket.IO", "Express.js", "React"],
    },
    {
      id: 5,
      title: "Task Management Tool",
      description: "A Kanban-style productivity tool with drag-and-drop boards.",
      budget: 600,
      skills: ["React", "Redux", "Firebase"],
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Featured Projects
      </h2>
      <p className="text-gray-600 mb-6">
        Browse top freelance projects and start bidding today.
      </p>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/project-data")} // or any page you want
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Show More Projects
        </button>
      </div>
    </div>
  );
};

export default FeaturedProject;
