import React from "react";
import { Star } from "lucide-react";

const ProfileCard = ({ name, role, rating, bio, skills, projectsCompleted, clients, image, email, phone, location }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full border-4 border-indigo-600 object-cover"
      />

      {/* Profile Details */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-indigo-600 font-semibold mb-2">{role}</p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={`${
                i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-600 font-medium">{rating} / 5.0</span>
        </div>

        {/* Bio */}
        <p className="text-gray-700 mb-4">{bio}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 text-gray-700 mb-4">
          <div>
            <p className="font-bold text-gray-800">{projectsCompleted}</p>
            <p className="text-sm">Projects Completed</p>
          </div>
          <div>
            <p className="font-bold text-gray-800">{clients}</p>
            <p className="text-sm">Clients</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-gray-700 space-y-1">
          <p><span className="font-semibold">Email:</span> {email}</p>
          <p><span className="font-semibold">Phone:</span> {phone}</p>
          <p><span className="font-semibold">Location:</span> {location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
