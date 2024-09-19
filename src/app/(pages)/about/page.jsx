import AboutPage from "@/app/_components/AboutPage";
import React from "react";

export const metadata = {
  title: "About Us - Desire Div",
  description: "Desire Div - Web Development, Design, and SEO Services Agency",
};
const About = () => {
  return (
    <div className="bg-gradient-to-b from-black-800 to-neutral-950 py-8 md:py-16">
      <AboutPage />
    </div>
  );
};

export default About;
