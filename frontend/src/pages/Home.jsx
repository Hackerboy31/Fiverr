import React from "react";
import Banner from "../components/Banner";
import FeaturedProject from "../components/FeaturedProject";
import BidCard from "../components/BidCard";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner />
      <FeaturedProject />
      <BidCard />
      <ContactForm />
    </div>
  );
};

export default Home;
