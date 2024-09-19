import ServicesPage from "@/app/_components/ServicesPages";
import React from "react";

export const metadata = {
  title: "Services - Desire Div",
  description: "Desire Div - Web Development, Design, and SEO Services Agency",
};
const Services = () => {
  return (
    <div className="bg-gradient-to-b from-black-800 to-neutral-950 py-8 md:py-16">
      <ServicesPage />
    </div>
  );
};

export default Services;
