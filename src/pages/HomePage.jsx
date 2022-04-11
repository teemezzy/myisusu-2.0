import React from "react";
import { Navbar } from "../component";
import { Cluster, FAQS, HeroSection, Priority, StepsToContribute } from "../container";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StepsToContribute />
      <Priority />
      <FAQS />
      <Cluster />
    </div>
  );
};

export default HomePage;
