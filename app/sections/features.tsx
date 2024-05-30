import React from "react";
import { AiFillTool, AiOutlineFileText } from "react-icons/ai";
import { IoLogoApple } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaGasPump } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import ServiceCard from "@/components/ui/ServiceCard";
const SERVICES = [
  {
    titulo: "Facturación Electrónica",
    descripcion:
      "Sistema en la nube que facilita tu Facturación en Línea. Genera tus Comprobantes Fiscales Digitales por Internet (CFDI) de una forma fácil, rápida y segura. Emite facturas, notas de crédito, recibos de honorarios, complementos de pago, carta porte, cualquier tipo de CFDI.  Siempre estamos actualizándonos. ¡Conócenos!",
    icon: (
      <AiOutlineFileText
        alt="icono de factura"
        className="text-5xl text-white mb-8 mx-auto"
      />
    ),
  },
  {
    titulo: "Rastreo Satélital",
    descripcion:
      "Monitorea y administra fácilmente tu fuerza móvil de trabajadores. Ten una vista de 360º en casi tiempo real de las maniobras diarias de tu flota, para reducir costos, aumentar la productividad, estar al día con el mantenimiento del vehículo y sacar el máximo provecho a cada día de trabajo.",
    icon: (
      <BiMap alt="icono de gps" className="text-5xl text-white mb-8 mx-auto " />
    ),
  },
  {
    titulo: "Control de Combustible",
    descripcion:
      "Sabemos que el combustible es uno de los rubros más costosos en la gestión de la flota, desarrollamos un módulo que te permitirá analizar detalladamente y desde diferentes puntos de vista su rendimiento y costos. Nuestro panel personalizable te facilita revisar tu progreso comparado con tu indicador KPI o tus presupuestos, con el análisis instantáneo que te ofrece nuestra app.",
    icon: (
      <FaGasPump
        alt="icono de bomba de compustible"
        className="text-5xl text-white mb-8 mx-auto "
      />
    ),
  },
  {
    titulo: "Control de Viajes",
    descripcion:
      "De punto A a punto B tu entrega segura! Con nuestra app podrás monitorear en tiempo real el estatus de tus viajes. Podrás ahorrar tiempo, dinero y operación logística con nuestra tecnología. Además, notifica a tus clientes sobre el estatus de sus traslados hasta la entrega.",
    icon: (
      <HiOutlineLocationMarker
        alt="icono de gps"
        className="text-5xl text-white mb-8 mx-auto"
      />
    ),
  },
  {
    titulo: "App para Operadores",
    descripcion:
      "Conoce los beneficios de nuestra tecnología, tus operadores podrán descargar nuestra app disponible en sistema operativo ANDROID o iOS. Podrás visualizar en tiempo real cada detalle de los viajes realizados. - Horario de carga- Horario de salida - Fotos - Horario de llegada  -Horario de descarga",
    icon: (
      <IoLogoApple
        alt="icono del logo de apple"
        className="text-5xl text-white mb-8 mx-auto"
      />
    ),
  },
  {
    titulo: "Control de Mantenimientos",
    descripcion:
      "Conoce nuestro apartado para control de mantenimientos. Anticípate a las fallas y evita paradas no planificadas o accidentes.  Nuestro sistema esta diseñado para optimizar tus gastos y aumentar la productividad de tus vehículos. Crea y ejecuta tus propios planes de mantenimiento de acuerdo con tu operación.",
    icon: (
      <AiFillTool
        alt="icono de logo de mantenimiento"
        className="text-5xl text-white mb-8 mx-auto "
      />
    ),
  },
];
const Features = () => {
  return (
    <section
      className="pt-20 lg:pt-[120px] pb-8 lg:pb-[70px] container mx-auto"
      id="caracteristicass"
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mb-12 lg:mb-20 max-w-[800px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Caracteristicas
              </span>
              <h2 className=" font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4 font-title">
                Tu socio en el camino a la excelencia operativa
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 transition duration-700 ease-in-out transform">
          {SERVICES.map((service, index) => (
            <ServiceCard service={service} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
