import React from "react";
import { AiFillTool, AiOutlineFileText } from "react-icons/ai";
import { IoLogoApple } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaGasPump } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
const SERVICES = [
  {
    titulo: "Facturación Electrónica",
    descripcion:
      "Transforma tu gestión financiera con nuestra Facturación Electrónica. Simplifica el proceso de facturación y mantén un registro preciso de todas tus transacciones. ¡La eficiencia nunca fue tan elegante!",
    icon: <AiOutlineFileText className="text-7xl text-white text-center" />,
  },
  {
    titulo: "Rastreo Satélital",
    descripcion:
      "Control total en tus manos con nuestro servicio de Rastreo Satelital. Monitoreo 24h en tiempo real y toma decisiones informadas. La seguridad y la eficacia en cada movimiento.",
    icon: <BiMap className="text-7xl text-white text-center " />,
  },
  {
    titulo: "Control de Combustible",
    descripcion:
      "Optimiza tu consumo de combustible con nuestro sistema de Control de Combustible. Reduzca costos, maximice la eficiencia y mantén tus operaciones en marcha.",
    icon: <FaGasPump className="text-7xl text-white text-center " />,
  },
  {
    titulo: "Control de Viajes",
    descripcion:
      "Navega hacia la eficiencia con nuestro servicio de Control de Viajes. Desde la planificación hasta la ejecución, cada viaje es una oportunidad para la perfección operativa.",
    icon: <HiOutlineLocationMarker className="text-7xl text-white text-center" />,
  },
  {
    titulo: "App para Operadores",
    descripcion:
      "Empodera a tus operadores con nuestra App para IOS y Android. La movilidad se encuentra con la eficiencia en la palma de sus manos. ¡Dondequiera que vayan, tu negocio prospera!",
    icon: <IoLogoApple className="text-7xl text-white text-center" />,
  },
  {
    titulo: "Control de Mantenimientos",
    descripcion:
      "Alarga la vida útil de tus activos con nuestro sistema de Control de Mantenimientos. Programa, sigue y gestiona cada aspecto del mantenimiento para un rendimiento óptimo. La confiabilidad comienza aquí.",
    icon: <AiFillTool className="text-7xl text-white text-center " />,
  },
];
const Features = () => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-8 lg:pb-[70px] container mx-auto">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mb-12 lg:mb-20 max-w-[620px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
              Características
              </span>
              <h2 className=" font-bold text-3xl sm:text-4xl md:text-[42px] text-gray-900 mb-4">
                Características Destacadas de Nuestra App
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 gap-4">
          {SERVICES.map((service, index) => (
            <div className="w-full max-w-[15rem]" key={index}>
              <div
                className=" p-4 rounded-xl mb-12 group wow fadeInUp bg-primary text-center"
                data-wow-delay=".1s"
              >
                {service.icon}
                <h4 className="font-bold text-xl text-white mb-3 ">
                  {service.titulo}
                </h4>
                {/* <p className="text-body-color mb-8 lg:mb-11">
                  {service.descripcion}
                </p> */}
                <a
                  href="javascript:void(0)"
                  className="font-medium text-base text-body-color hover:text-primary"
                >
                  Descubra Más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
