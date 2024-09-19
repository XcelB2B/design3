import ContactPage from "@/app/_components/ContactPage";
import React from "react";

export const metadata = {
  title: "Contact - Desire Div",
  description: "Desire Div - Web Development, Design, and SEO Services Agency",
};
const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-black-800 to-neutral-950 py-8 md:py-16">
      <ContactPage />
    </div>
  );
};

export default Contact;
