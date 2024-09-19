"use client";

import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Form from "./Form";

const ContactPage = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen pt-16  text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <Card className="glass border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.234350710504!2d77.0431152752875!3d28.592745575686497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bd8f405bcf1%3A0x9e601372145832d0!2sDesire%20Div%20-%20Website%20Designing%20Company%20in%20Dwarka!5e0!3m2!1sen!2sin!4v1726728527028!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                  ></iframe>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-800">
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-purple-500 p-3 rounded-full">
                      <MapPinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-200">
                        Address
                      </p>
                      <p className="text-xs text-gray-400">
                        T-16, Pocket-5, Plot No - 6, Malik Buillcon, New Delhi
                        110075
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-pink-500 p-3 rounded-full">
                      <PhoneIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-200">Phone</p>
                      <p className="text-xs text-gray-400">+91 9871228881</p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-indigo-500 p-3 rounded-full">
                      <MailIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-200">Email</p>
                      <p className="text-xs text-gray-400">
                        hello@desirediv.com
                      </p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="glass border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Send us a message
                </h3>
                <Form />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
