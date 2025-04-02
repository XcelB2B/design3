"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBtn = () => {
  const handleClick = () => {
    const phoneNumber = "+919871228880";
    const message = "Hello";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-12 h-12 border-none rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-md bg-green-500 hover:shadow-neon-green transform hover:scale-110"
      >
        <FaWhatsapp className="text-white text-2xl " />
      </button>
    </div>
  );
};

export default WhatsAppBtn;
