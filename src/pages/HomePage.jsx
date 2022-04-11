import React from "react";
import { Footer, Navbar } from "../component";
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
      <Footer />
    </div>
  );
};

export default HomePage;
