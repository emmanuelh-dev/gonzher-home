import React from "react";
import { AiFillTool, AiOutlineFileText } from "react-icons/ai";
import { IoLogoApple } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaGasPump } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import ServiceCard from "@/components/ui/ServiceCard";

const SERVICES = [
  {
    titulo: "Facturación Combustible Flotas",
    descripcion:
      "Sistema de facturación electrónica CFDI especializado en facturación combustible flotas y facturación gasolina flotas. Plataforma de facturación en línea que genera Comprobantes Fiscales Digitales por Internet de forma fácil, rápida y segura. Sistema facturación en línea con carta porte 3.1 y sistemas de facturación electrónica en línea siempre actualizados.",    icon: (
      <AiOutlineFileText
        className="text-5xl text-white mb-8 mx-auto"
      />
    ),
  },
  {
    titulo: "Control GPS Flotas",
    descripcion:
      "Software de gestión de flotas con control GPS flotas en tiempo real. Nuestro sistema de control de flotas te permite monitorear y administrar tu flota con administración de flota GPS. Software para control de flotas que reduce costos, aumenta productividad y optimiza el mantenimiento vehicular con control de flotas GPS profesional.",
    icon: (
      <BiMap className="text-5xl text-white mb-8 mx-auto " />
    ),
  },
  {
    titulo: "Software Control Combustible",
    descripcion:
      "Software especializado para control de flotas enfocado en combustible. El combustible es uno de los rubros más costosos en la gestión de flotas. Nuestro software de gestión de flotas incluye módulo de control de combustible que permite analizar detalladamente rendimiento y costos con paneles KPI personalizables y análisis instantáneo.",
    icon: (
      <FaGasPump
        className="text-5xl text-white mb-8 mx-auto "
      />
    ),
  },
  {
    titulo: "Software Gestión de Flotas",
    descripcion:
      "Software para gestión de flotas completo de punto A a punto B. Con nuestro programa control de flotas podrás monitorear en tiempo real el estatus de tus viajes. Software manejo de flotas que ahorra tiempo, dinero y optimiza la operación logística con tecnología avanzada de seguimiento y notificaciones automáticas a clientes.",
    icon: (
      <HiOutlineLocationMarker
        className="text-5xl text-white mb-8 mx-auto"
      />
    ),
  },
  {
    titulo: "App Control de Flotillas",
    descripcion:
      "Aplicación móvil para administración de flotillas software. Operadores pueden descargar nuestra app disponible en Android e iOS. Control de flotillas software que visualiza en tiempo real detalles de viajes: horario de carga, salida, fotos, llegada y descarga. Software control de flotillas con tecnología móvil avanzada.",
    icon: (
      <IoLogoApple
        className="text-5xl text-white mb-8 mx-auto"
      />
    ),
  },
  {
    titulo: "Software para Flotillas",
    descripcion:
      "Sistema de gestión de flotas para control de mantenimientos. Anticípate a fallas y evita paradas no planificadas con nuestro software para flotillas. Sistema diseñado para optimizar gastos y aumentar productividad vehicular. Crea y ejecuta planes de mantenimiento personalizados con software de administración de flotillas.",
    icon: (
      <AiFillTool
        className="text-5xl text-white mb-8 mx-auto "
      />
    ),
  },
];

const Features = () => {
  return (
    <section
      className="pt-20 lg:pt-[120px] pb-8 lg:pb-[70px] mx-auto pattern"
      id="caracteristicass"
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">            <div className="mb-12 lg:mb-20 text-center max-w-[800px] mx-auto">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Software de Gestión de Flotas
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4 font-title animate-fade-up animate-duration-1000 animate-delay-300 text-balance">
                Facturación Combustible Flotas y Control GPS - <strong>Gonzher</strong>
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Software para control de flotas especializado en facturación gasolina flotas, control de flotas GPS y sistema facturación en línea CFDI. Plataforma completa de administración de flotillas.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 transition duration-700 ease-in-out transform max-w-2xl mx-auto">
          {SERVICES.map((service, index) => (
            <ServiceCard service={service} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
