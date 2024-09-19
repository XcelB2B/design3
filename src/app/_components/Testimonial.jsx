import InfiniteMovingTestimonials from "@/components/ui/InfiniteMovingTestimonials";
import React from "react";

export const testimonials = [
  {
    username: "Ravi Kumar",
    description: "This service is really good. I am very satisfied.",
    stars: 5,
  },
  {
    username: "Anjali Sharma",
    description: "Excellent experience! Highly recommend.",
    stars: 4,
  },
  {
    username: "Vikram Singh",
    description: "Very helpful and professional. Will use again.",
    stars: 5,
  },
  {
    username: "Priya Patel",
    description: "Good service but can improve in some areas.",
    stars: 3,
  },
  {
    username: "Amit Verma",
    description: "Fantastic! Exceeded my expectations.",
    stars: 5,
  },
  {
    username: "Neha Gupta",
    description: "Decent service, but room for improvement.",
    stars: 3,
  },
  {
    username: "Rajesh Mehta",
    description: "Very satisfied with the service provided.",
    stars: 4,
  },
  {
    username: "Raj Reddy",
    description: "Great experience, will definitely recommend.",
    stars: 4,
  },
  {
    username: "Karan Joshi",
    description: "Service was okay, could be better.",
    stars: 3,
  },
  {
    username: "Pooja Desai",
    description: "Amazing service! Will use again for sure.",
    stars: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="relative  bg-gradient-to-t from-black to-neutral-950 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 md:mb-16 p-3">
        Testimonials
      </h1>
      <div className="max-w-6xl mx-auto">
        <InfiniteMovingTestimonials
          testimonials={testimonials}
          speed="slow"
          direction="left"
        />
        <InfiniteMovingTestimonials
          testimonials={testimonials}
          speed="slow"
          direction="right"
        />
      </div>
    </div>
  );
};

export default Testimonial;
