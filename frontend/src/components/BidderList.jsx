import React from "react";

const BidderList = ({ bidders }) => {
  if (!bidders || bidders.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-4">
        No bids yet. Be the first to place a bid! 🚀
      </p>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Bidders Interested in this Project
      </h2>
      <div className="space-y-4">
        {bidders.map((bidder, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {bidder.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {bidder.description}
              </p>
              <p className="text-indigo-600 font-medium">
                💰 Bid: ${bidder.amount}
              </p>
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

export default BidderList;
