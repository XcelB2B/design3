import FaqPage from "@/app/_components/FaqPage";
import React from "react";

export const metadata = {
  title: "FAQ - Desire Div",
  description: "Desire Div - Web Development, Design, and SEO Services Agency",
};
const FAQ = () => {
  return (
    <div className="bg-gradient-to-t from-gray-950 to-black py-12 md:py-24">
      <FaqPage />
    </div>
  );
};

export default FAQ;
