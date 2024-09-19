"use client";

import React from "react";
import { motion } from "framer-motion";
import { WhyChooseUs } from "./WhyChooseUs";
import InfiniteMovingTestimonials from "@/components/ui/InfiniteMovingTestimonials";
import { testimonials } from "./Testimonial";
import {
  Sparkles,
  Star,
  Heart,
  Zap,
  RefreshCw,
  CheckCircle,
  Users,
} from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const valueIcons = [
    { icon: Star, color: "text-yellow-400" },
    { icon: Heart, color: "text-red-400" },
    { icon: Zap, color: "text-blue-400" },
    { icon: RefreshCw, color: "text-green-400" },
    { icon: CheckCircle, color: "text-purple-400" },
    { icon: Sparkles, color: "text-pink-400" },
    { icon: Users, color: "text-indigo-400" },
  ];

  const values = [
    "Reliability",
    "Integrity",
    "Creativity",
    "Innovation",
    "Continuous Improvement",
    "Perfection",
    "Total Customer Satisfaction",
  ];

  const words = `Desire Div is a dynamically well-established web Designing and Development company with a strong, talented team of experienced IT experts. Our professionals possess excellent domain knowledge across various development platforms, serving a global clientele ranging from start-ups to large organizations.`;

  const words2 = `Our goal is to empower our clients to maximize their business potential and revenue generation. We leverage the vast reach of the internet, utilizing our expertise in cutting-edge internet technologies to deliver exceptional results.`;

  return (
    <motion.div
      className="min-h-screen text-white p-4 md:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 md:mb-16 mt-5 sm:mt-0"
        variants={itemVariants}
      >
        About Us
      </motion.h1>

      <motion.section
        className="max-w-4xl mx-auto mb-8 md:mb-16"
        variants={itemVariants}
      >
        <TextGenerateEffect words={words} duration={1} filter={false} />
        <div className="text-sm md:text-lg leading-relaxed mt-4">
          <TextGenerateEffect words={words2} duration={1} filter={false} />
        </div>
      </motion.section>

      <motion.section
        className="max-w-4xl mx-auto mb-16"
        variants={itemVariants}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 md:mb-16 p-3">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value}
              className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {React.createElement(valueIcons[index].icon, {
                className: `w-8 h-8 ${valueIcons[index].color}`,
              })}
              <span className="text-lg font-semibold">{value}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div variants={itemVariants}>
        <WhyChooseUs />
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 md:mb-16 p-3">
          Testimonials
        </h2>
        <InfiniteMovingTestimonials
          testimonials={testimonials}
          speed="slow"
          direction="left"
        />
        <div className="my-8"></div>
        <InfiniteMovingTestimonials
          testimonials={testimonials}
          speed="slow"
          direction="right"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
