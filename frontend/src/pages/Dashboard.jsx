import React from "react";
import ProfileCard from "../components/ProfileCard";

const Dashboard = () => {
  const user = {
    name: "Alex Carter",
    role: "Full Stack Developer",
    rating: 4.8,
    bio: "Passionate developer with 5+ years of experience building scalable web applications. Skilled in modern JavaScript frameworks and always eager to learn new technologies.",
    skills: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "TypeScript"],
    projectsCompleted: 24,
    clients: 12,
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    email: "alex.carter@example.com",
    phone: "+1 234 567 890",
    location: "San Francisco, CA",
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">My Dashboard</h1>
      
      <ProfileCard {...user} />
    </div>
  );
};

export default Dashboard;
