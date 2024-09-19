"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BottomGradient } from "@/app/_components/Form";
import { Globe, Paintbrush, Search, Megaphone, BarChart } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Globe className="w-10 h-10 text-purple-400" />,
    title: "Web Development Services",
    description:
      "Create stunning, responsive websites tailored to your brand's unique needs.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Content Management Systems",
    ],
  },
  {
    icon: <Paintbrush className="w-10 h-10 text-pink-400" />,
    title: "UI/UX Design Services",
    description:
      "Craft intuitive and visually appealing user interfaces for optimal user experiences.",
    features: [
      "User-Centered Design",
      "Wireframing & Prototyping",
      "Responsive Design",
    ],
  },
  {
    icon: <Search className="w-10 h-10 text-blue-400" />,
    title: "Search Engine Optimization Services",
    description:
      "Boost your online visibility and drive organic traffic to your website.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Link Building Strategies",
    ],
  },
  {
    icon: <Megaphone className="w-10 h-10 text-green-400" />,
    title: "Branding Services",
    description:
      "Develop a strong, cohesive brand identity that resonates with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Brand Messaging"],
  },
  {
    icon: <BarChart className="w-10 h-10 text-yellow-400" />,
    title: "Digital Marketing Services",
    description:
      "Implement effective digital strategies to grow your online presence and reach.",
    features: ["Social Media Marketing", "Email Campaigns", "PPC Advertising"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black-800 to-neutral-950 py-14 md:py-24 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Our Services at Desire Div
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-center mb-16 max-w-3xl mx-auto"
        >
          Elevate your digital presence with our comprehensive range of services
          tailored to meet your unique business needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass border-gray-700 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-center text-purple-400">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="mb-4 text-gray-300 text-center">
                    {service.description}
                  </p>
                  <ul className="list-disc list-inside mb-6 text-gray-300 pl-5 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="mb-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={"/contact"}
                    className="bg-gradient-to-br  relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 flex items-center justify-center dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  >
                    Contact Us
                    <BottomGradient />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let&apos;s collaborate to bring your vision to life. Contact us
            today for a free consultation.
          </p>
          <Link
            href={"/contact"}
            className="bg-gradient-to-br max-w-min text-nowrap relative group/btn from-purple-600 to-pink-600 block mx-auto text-white rounded-md px-6 py-2 font-medium text-lg shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
          >
            Get in Touch
            <BottomGradient />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
