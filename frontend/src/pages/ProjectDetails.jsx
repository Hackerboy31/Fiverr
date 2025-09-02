import React from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectDetails = () => {
  const projects = [
    {
      id: "1",
      title: "Build a Portfolio Website",
      description: "A modern portfolio with animations, responsive layout, and blog section.",
      budget: 200,
      skills: ["React", "TailwindCSS", "JavaScript"],
    },
    {
      id: "2",
      title: "E-commerce Storefront",
      description: "An online store with shopping cart, checkout system, and payment integration.",
      budget: 500,
      skills: ["Node.js", "MongoDB", "React"],
    },
    {
      id: "3",
      title: "Freelance Marketplace",
      description: "A full-fledged freelance bidding platform with chat, contracts, and payments.",
      budget: 1000,
      skills: ["MERN", "Stripe API", "Socket.IO"],
    },
    {
      id: "4",
      title: "Portfolio Website",
      description: "A responsive personal portfolio with animations and blog integration.",
      budget: 250,
      skills: ["React", "TailwindCSS"],
    },
    {
      id: "5",
      title: "E-commerce Store",
      description: "Online store with shopping cart, checkout, and payment integration.",
      budget: 500,
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "6",
      title: "Chat Application",
      description: "A real-time chat app with private, group chats, and media sharing.",
      budget: 400,
      skills: ["Socket.IO", "Express.js", "React"],
    },
    {
      id: "7",
      title: "Task Management Tool",
      description: "A Kanban-style productivity tool with drag-and-drop boards.",
      budget: 600,
      skills: ["React", "Redux", "Firebase"],
    },
    {
      id: "8",
      title: "AI Content Generator",
      description: "A web app that generates blog posts and marketing copy using GPT.",
      budget: 1200,
      skills: ["Next.js", "OpenAI API", "TailwindCSS"],
    },
    {
      id: "9",
      title: "Fitness Tracking App",
      description: "A mobile-friendly app to track workouts, calories, and progress charts.",
      budget: 700,
      skills: ["React Native", "Firebase", "Charts.js"],
    },
    {
      id: "10",
      title: "Hotel Booking System",
      description: "A booking platform with room availability, payment gateway, and admin panel.",
      budget: 800,
      skills: ["Django", "PostgreSQL", "React"],
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
