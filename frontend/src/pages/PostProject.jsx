import React, { useState } from "react";
import about from "../assets/about.jpeg";

const PostProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    category: "",
    skills: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Project posted successfully!");
    setFormData({
      title: "",
      description: "",
      budget: "",
      category: "",
      skills: "",
      deadline: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      
      {/* About Section */}
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl mb-10 overflow-hidden">
        <div className="w-full">
          <img
            src={about}
            alt="Project Illustration"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About This Section</h2>
          <p className="text-gray-600 mb-6">
            Here you can post new projects to attract skilled freelancers. Fill in all the details including
            title, description, budget, category, required skills, and deadline. Once posted, your project will
            be visible to a wide pool of professionals.
          </p>
        </div>
      </div>

      {/* Post Project Form */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Post a New Project</h2>
        <p className="text-gray-600 text-center mb-6">
          Share your project details and attract the best freelancers!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Project Title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Project Description"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budget (USD)"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          >
            <option value="">Select Category</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile App Development</option>
            <option value="design">UI/UX Design</option>
            <option value="marketing">Digital Marketing</option>
          </select>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Required Skills (comma separated)"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold shadow-md hover:shadow-lg"
          >
            Post Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostProject;
