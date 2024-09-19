"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a typical website cost for an Indian business?",
    answer:
      "The cost of a website for an Indian business can vary widely depending on the complexity and features required. A basic website might start from ₹20,000, while more complex e-commerce or custom solutions can range from ₹50,000 to ₹5,00,000 or more.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline for website development can vary based on the project's complexity. A simple website might take 2-4 weeks, while a more complex one could take 2-3 months or longer. We work closely with our clients to establish realistic timelines and milestones.",
  },
  {
    question: "Do you provide website maintenance services?",
    answer:
      "Yes, we offer comprehensive website maintenance services. This includes regular updates, security patches, content updates, and technical support. We have flexible maintenance packages to suit different needs and budgets.",
  },
  {
    question: "Can you help with SEO for my Indian market website?",
    answer:
      "We specialize in SEO strategies tailored for the Indian market. This includes local SEO, keyword optimization in multiple Indian languages, and strategies to improve your visibility on popular Indian search engines and directories.",
  },
  {
    question: "Do you develop mobile apps as well?",
    answer:
      "Yes, we offer mobile app development services for both Android and iOS platforms. We can create native apps or cross-platform solutions using technologies like React Native or Flutter, depending on your specific requirements and budget.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods including bank transfers, UPI, popular Indian payment gateways, and international options like PayPal for our overseas clients. We can discuss the most convenient option for you during our project consultation.",
  },
];

const FaqItem = ({ faq, index, expandedIndex, setExpandedIndex }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <motion.div
        initial={false}
        animate={{
          backgroundColor:
            expandedIndex === index
              ? "rgba(75, 85, 99, 0.3)"
              : "rgba(31, 41, 55, 0.5)",
        }}
      >
        <button
          onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
          className="flex justify-between items-center w-full p-5 text-left"
        >
          <span className="font-medium text-gray-100 text-lg">
            {faq.question}
          </span>
          <ChevronDown
            className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${
              expandedIndex === index ? "transform rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence initial={false}>
          {expandedIndex === index && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{
                duration: 0.4,
                ease: [0.04, 0.62, 0.23, 0.98],
              }}
            >
              <div className="p-5 text-gray-300 bg-gray-800 bg-opacity-50">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default function FaqPage({ maxItems }) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const displayedFaqs = maxItems ? faqs.slice(0, maxItems) : faqs;

  return (
    <div className="relative min-h-screen bg-gradient-to-t from-gray-950 to-black py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 md:mb-16 p-3"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {displayedFaqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
