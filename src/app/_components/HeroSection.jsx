"use client";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/Highlight";
import React, { useState, useEffect } from "react";

const services = ["Development", "Designing", "SEO", "Branding", "Marketing"];

const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          Website
          <Highlight className="text-white dark:text-black mt-2 block">
            <span
              className={`inline-block transition-all duration-500 ease-in-out ${
                isAnimating
                  ? "opacity-0 transform translate-y-2"
                  : "opacity-100 transform translate-y-0"
              }`}
            >
              {services[currentService]}
            </span>
            {" Agency"}
          </Highlight>
        </h1>
        <p className="mt-6 text-sm sm:text-xl text-center max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
          Welcome to Desire Div, Delhi&apos;s premier website solutions
          provider. Our experienced team excels in creating stunning, impactful
          digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-8 gap-4 sm:gap-6">
          <Button
            href="/contact"
            className="text-base px-6 py-4 sm:px-10 sm:py-6 bg-gradient-to-r from-indigo-400 to-purple-400"
            variant="default"
          >
            Get Started
          </Button>
          <Button
            href="/services"
            className="text-base px-6 py-4 sm:px-10 sm:py-6"
            variant="outline"
          >
            Our Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
