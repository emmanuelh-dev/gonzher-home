import React from "react";
import { AiFillTool, AiOutlineFileText } from "react-icons/ai";
import { IoLogoApple } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaGasPump } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
const Services = () => {
  const SERVICES = [
    {
      titulo: "Facturación Electrónica",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icono: <AiOutlineFileText className="text-7xl text-blue-500" />, // Puedes cambiar esto al icono específico que desees
    },
    {
      titulo: "Rastreo Satélital",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icono: <BiMap className="text-7xl text-green-500" />, // Puedes cambiar esto al icono específico que desees
    },
    {
      titulo: "Control de Combustible",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icono: <FaGasPump className="text-7xl text-yellow-500" />, // Puedes cambiar esto al icono específico que desees
    },
    {
      titulo: "Control de Viajes",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icono: <HiOutlineLocationMarker className="text-7xl text-red-500" />, // Puedes cambiar esto al icono específico que desees
    },
    {
      titulo: "App para Operadores",
      descripcion: "Compatible con IOS y Android",
      icono: <IoLogoApple className="text-7xl text-purple-500" />, // Puedes cambiar esto al icono específico que desees para IOS
    },
    {
      titulo: "Control de Mantenimientos",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icono: <AiFillTool className="text-7xl text-gray-500" />, // Puedes cambiar esto al icono específico que desees
    },
  ];

  return (
<section className="pt-16 lg:pt-24 pb-8 lg:pb-16 container mx-auto px-8">
  <div className="flex flex-wrap gap-8">
    {SERVICES.map((service, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 w-full sm:max-w-[12rem]"
      >
        <div className="flex items-center justify-center mb-4">
          {service.icono}
        </div>
        <h3 className="text-xl  mb-2 text-center">{service.titulo}</h3>
        <p className="text-gray-600 tracking-wide leading-tight text-center text-lg">{service.descripcion}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Services;
