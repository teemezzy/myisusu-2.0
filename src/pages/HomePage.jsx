import React from "react";
import { Navbar } from "../component";
import {
  Cluster,
  FAQS,
  HeroSection,
  Priority,
  Signup,
  StepsToContribute,
} from "../container";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StepsToContribute />
      <Priority />
      <FAQS />
      <Cluster />
      <Signup />
    </div>
  );
};

export default HomePage;
