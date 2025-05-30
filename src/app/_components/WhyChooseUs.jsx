"use client";
import { cn } from "@/lib/utils";
import {
  IconCode,
  IconUserCheck,
  IconCurrencyRupee,
  IconClock,
  IconShieldCheck,
  IconPhoneCall,
  IconThumbUp,
  IconStar,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  const features = [
    {
      title: "Expert Developers",
      description:
        "Our team consists of highly skilled developers with years of experience.",
      icon: <IconCode />,
    },
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients' needs and ensure their satisfaction.",
      icon: <IconUserCheck />,
    },
    {
      title: "Affordable Pricing",
      description:
        "We offer competitive pricing without compromising on quality.",
      icon: <IconCurrencyRupee />,
    },
    {
      title: "Timely Delivery",
      description: "We ensure timely delivery of projects, every time.",
      icon: <IconClock />,
    },
    {
      title: "Secure Solutions",
      description: "We provide secure and reliable web solutions.",
      icon: <IconShieldCheck />,
    },
    {
      title: "24/7 Support",
      description:
        "Our support team is available round the clock to assist you.",
      icon: <IconPhoneCall />,
    },
    {
      title: "Quality Assurance",
      description:
        "We follow strict quality assurance processes to deliver the best.",
      icon: <IconThumbUp />,
    },
    {
      title: "Proven Track Record",
      description: "We have a proven track record of successful projects.",
      icon: <IconStar />,
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-black-800 to-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 md:mb-16 p-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-max mx-auto p-5">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r xl:border-r py-10 relative group/feature",
        (index === 0 || index === 4) && "xl:border-l md:border-r",
        index < 4 && "xl:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-500/40  to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-500/50  to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300  group-hover/feature:bg-pink-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-200">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-300  max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
