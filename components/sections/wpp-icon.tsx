import React from "react";
import { BsWhatsapp } from "react-icons/bs";
const WhatsAppIcon = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=4684513&text=" className="fixed bottom-10 right-10 z-[100]">
      <BsWhatsapp className="text-green-500 text-5xl lg:text-6xl" />
    </a>
  );
};

export default WhatsAppIcon;
