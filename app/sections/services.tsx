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
      descripcion:
        "Transforma tu gestión financiera con nuestra Facturación Electrónica. Simplifica el proceso de facturación y mantén un registro preciso de todas tus transacciones. ¡La eficiencia nunca fue tan elegante!",
      icono: <AiOutlineFileText className="text-7xl text-blue-500" />,
    },
    {
      titulo: "Rastreo Satélital",
      descripcion:
        "Control total en tus manos con nuestro servicio de Rastreo Satelital. Mantén un ojo en tus activos en tiempo real y toma decisiones informadas. La seguridad y la eficacia en cada movimiento.",
      icono: <BiMap className="text-7xl text-green-500" />,
    },
    {
      titulo: "Control de Combustible",
      descripcion:
        "Optimiza tu consumo de combustible con nuestro sistema de Control de Combustible. Reduzca costos, maximice la eficiencia y mantén tus operaciones en marcha.",
      icono: <FaGasPump className="text-7xl text-yellow-500" />,
    },
    {
      titulo: "Control de Viajes",
      descripcion:
        "Navega hacia la eficiencia con nuestro servicio de Control de Viajes. Desde la planificación hasta la ejecución, cada viaje es una oportunidad para la perfección operativa.",
      icono: <HiOutlineLocationMarker className="text-7xl text-red-500" />,
    },
    {
      titulo: "App para Operadores",
      descripcion:
        "Empodera a tus operadores con nuestra App para IOS y Android. La movilidad se encuentra con la eficiencia en la palma de sus manos. ¡Dondequiera que vayan, tu negocio prospera!",
      icono: <IoLogoApple className="text-7xl text-purple-500" />,
    },
    {
      titulo: "Control de Mantenimientos",
      descripcion:
        "Alarga la vida útil de tus activos con nuestro sistema de Control de Mantenimientos. Programa, sigue y gestiona cada aspecto del mantenimiento para un rendimiento óptimo. La confiabilidad comienza aquí.",
      icono: <AiFillTool className="text-7xl text-gray-500" />,
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
            <p className="text-gray-600 tracking-wide leading-tight text-center text-lg">
              {service.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
