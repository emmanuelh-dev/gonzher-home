import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = [
  {
    title: "¿Qué incluye el software de gestión de flotas Gonzher?",
    description:
      "Nuestro software de gestión de flotas incluye facturación combustible para flotillas, facturación gasolina para flotillas, control de flotas GPS, sistema de facturación en línea CFDI, administración de flota GPS y software para control de flotas todo integrado en una plataforma con monitoreo de flotas 24/7.",
  },
  {
    title: "¿Cómo funciona el sistema de facturación combustible para flotillas?",
    description:
      "El sistema de facturación combustible para flotillas permite generar automáticamente facturas CFDI para combustible y gasolina. Incluye facturación gasolina para flotillas, control de consumos, reportes detallados y integración con sistemas de facturación electrónica en línea para optimizar la administración de flotillas software.",
  },
  {
    title: "¿El software control de flotas incluye GPS gratuito?",
    description:
      "Sí, nuestro software control de flotas incluye control de flotas GPS gratis en tiempo real. Es un sistema control de flotas GPS que permite rastreo satelital, gestión de flotas por GPS, software de rastreo de flotas GPS y administración completa de flotillas software con monitoreo de flotas avanzado.",
  },
  {
    title: "¿Qué diferencia tiene este programa control de flotas?",
    description:
      "Nuestro programa control de flotas se especializa en control de flotillas software con facturación integrada. Es un software manejo de flotas completo que incluye software para gestión de flotas, plataforma de facturación electrónica y sistema control de flotas todo en uno con gestión de flotas GPS.",
  },
  {
    title: "¿Es compatible con sistemas de facturación electrónica existentes?",
    description:
      "Sí, nuestro software de gestión de flotillas se integra con sistemas de facturación electrónica en línea existentes. Incluye plataforma de facturación electrónica CFDI, sistema de facturación en línea y es compatible con software de administración de flotillas actuales para facilitar la migración.",
  },
  {
    title: "¿El software de gestión de flotillas es escalable?",
    description:
      "Nuestro software de gestión de flotillas es completamente escalable. Desde software para flotillas pequeñas hasta administración de flotillas software para grandes empresas. El software gestión de flotas se adapta al crecimiento de tu negocio con gestión de flotas GPS profesional y control de flotas GPS gratis.",
  },
];

const FAQ = () => {
  return (
    <section
      id="preguntas frecuentes"
      className="bg-[#b2eced] pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[800px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Preguntas Frecuentes Control de Flotas GPS | Software de Gestión
              </span>
              <h2 className="font-bold font-title text-3xl sm:text-4xl md:text-[42px] text-gray-800 mb-4">
                Facturación Combustible para Flotillas y Software Control GPS
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Resuelve tus dudas sobre nuestro software de gestión de flotas, facturación gasolina para flotillas, control de flotas GPS gratis y monitoreo de flotas
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 w-full gap-8">
          {FAQs.map((question, index) => (
            <div
              key={index}
              className="w-full bg-white border border-[#89ecda] rounded-lg p-5 sm:p-8 mb-8 h-min"
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{question.title}</AccordionTrigger>
                  <AccordionContent>{question.description}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
