"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] text-sm md:text-base"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white  backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2]  shadow-xl text-sm  "
              >
                <motion.div layout className="w-max h-full p-4 text-sm ">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className=" sticky top-0 z-50   flex justify-between max-w-7xl mx-auto items-center px-4 md:px-8 py-5 "
    >
      <Link href={"/"} className="sm:text-2xl text-base font-bold text-white">
        {" "}
        Desire Div
      </Link>
      <div className="flex space-x-4 text-sm md:text-base">{children}</div>
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link {...rest} className="text-neutral-700  hover:text-gray-500 text-sm">
      {children}
    </Link>
  );
};
