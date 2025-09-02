import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ id, title, description, budget, skills }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <p className="text-indigo-600 font-bold">Budget: ${budget}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-indigo-100 text-indigo-600 text-sm px-2 py-1 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* ✅ Button navigates to project details page */}
      <button
        onClick={() => navigate(`/project/${id}`)}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Place a Bid
      </button>
    </div>
  );
};

export default ProjectCard;
