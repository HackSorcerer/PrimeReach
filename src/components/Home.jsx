import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import VisionSection from "./VisionSection";
import SolutionsSection from './SolutionsSection';
import InnovatorsSections from "./InnovatorsSections";
import Testrimonials from "./Testrimonials";

const HomePage = () => {
  return (
    <div className="bg-[#0b1120] text-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero/>

      {/* Vision Section */}
      <VisionSection/>

      {/* Solutions */}
      <SolutionsSection/>

      {/* Innovators */}
      <InnovatorsSections/>

      {/* Testimonials */}
      <Testrimonials/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
