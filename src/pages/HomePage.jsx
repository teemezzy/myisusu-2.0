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

const HomePage = ({ signUp, login}) => {
  return (
    <div>
      <Navbar signUp={signUp} login={login} />
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
