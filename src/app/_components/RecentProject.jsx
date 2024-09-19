"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description:
      "A cutting-edge web application showcasing modern design principles and advanced functionality.",
    image:
      "https://i.pinimg.com/564x/00/a1/c9/00a1c944b7af9e2fa38f5897319b00c4.jpg",
  },
  {
    id: 2,
    title: "Project Beta",
    description:
      "An innovative mobile app that revolutionizes user experience with intuitive interfaces and real-time updates.",
    image:
      "https://i.pinimg.com/564x/fb/fc/df/fbfcdf0c3ef236af4214674955485ce7.jpg",
  },
  {
    id: 3,
    title: "Project Gamma",
    description:
      "A robust backend system powering high-performance data processing and analytics for enterprise solutions.",
    image:
      "https://i.pinimg.com/564x/fc/ac/bd/fcacbd51f300d2b3acc6b40a1c52204a.jpg",
  },
];

export default function Component() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="relative min-h-screen bg-gradient-to-b from-black to-neutral-950 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.2 },
          },
        }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 md:mb-16 p-3">
          Our Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              className="flex"
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden flex flex-col w-full">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </div>
                  <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    Learn More
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full opacity-70"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}
