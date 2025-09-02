import React, { useEffect } from "react";

const Contracts = () => {
  const allBidders = [
    { name: "Amit Sharma", amount: 220, description: "Frontend developer with 2+ years of React experience.", experience: 2 },
    { name: "Priya Verma", amount: 250, description: "Full-stack MERN developer, specialized in e-commerce apps.", experience: 3 },
    { name: "Rohit Mehta", amount: 300, description: "Backend expert in Node.js and MongoDB, scalable apps.", experience: 4 },
    { name: "Sneha Kapoor", amount: 270, description: "UI/UX focused React developer with clean design sense.", experience: 2 },
    { name: "Ananya Gupta", amount: 280, description: "React Native mobile app developer with 3 years of work.", experience: 3 },
    { name: "Kabir Malhotra", amount: 400, description: "Full-stack JavaScript engineer with focus on scalability.", experience: 6 },
    { name: "Neha Reddy", amount: 260, description: "Frontend Angular & React developer with strong CSS skills.", experience: 2 },
    { name: "Arjun Iyer", amount: 320, description: "Python/Django backend engineer with REST API expertise.", experience: 4 },
    { name: "Meera Nair", amount: 290, description: "UI/UX designer + React developer, skilled in Figma.", experience: 3 },
  ];

   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        All Bidders (Contracts)
      </h1>

      <div className="space-y-4">
        {allBidders.map((bidder, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{bidder.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{bidder.description}</p>
              <p className="text-indigo-600 font-medium">💰 Bid: ${bidder.amount}</p>
            </div>
            <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg">
              {bidder.experience} yrs exp
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contracts;
