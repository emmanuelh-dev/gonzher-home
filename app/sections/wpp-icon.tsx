import React from "react";
import { BsWhatsapp } from "react-icons/bs";
const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/8128938412?text="
      className="bg-green-500 p-4 rounded-full fixed bottom-10 right-10 z-[100]"
    >
      <BsWhatsapp className="text-white text-4xl lg:text-5xl" />
    </a>
  );
};

export default WhatsAppIcon;
