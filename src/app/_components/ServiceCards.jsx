"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Paintbrush, Smartphone, Globe } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Crafting cutting-edge websites that captivate and convert.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive interfaces that users fall in love with.",
    icon: Paintbrush,
  },
  {
    title: "Mobile App Development",
    description: "Building powerful apps that fit in your pocket.",
    icon: Smartphone,
  },
  {
    title: "SEO Optimization",
    description: "Boosting your visibility to dominate search rankings.",
    icon: Globe,
  },
];

const ServiceCard = ({ title, description, icon: Icon, isInView }) => (
  <motion.div
    className="backdrop-blur-md bg-grid-gray-800/[0.2]  p-8 rounded-md border border-gray-200/20 shadow hover:shadow-md transition-all duration-300 relative overflow-hidden group lg:w-64 lg:h-64 md:w-72 md:h-64 w-full h-full  "
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -10, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.div
      className={`absolute rounded opacity-30 group-hover:opacity-50 blur transition duration-300`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 0.3 }}
    />
    <div className="relative z-10">
      <motion.div
        className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className={`w-7 h-7 text-gray-900`} />
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200 text-base">{description}</p>
    </div>
  </motion.div>
);

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-8 md:py-16 bg-gradient-to-t from-black to-neutral-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 md:mb-16 p-3"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Our Cutting-Edge Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 max-w-max mx-auto p-5">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
