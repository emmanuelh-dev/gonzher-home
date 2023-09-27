import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = [
  {
    title: "¿El software es accesible?",
    description:
      "Sí, nuestro software está diseñado para ser accesible y fácil de usar para todos los usuarios.",
  },
  {
    title: "¿Cuáles son las características principales del software?",
    description:
      "Nuestro software ofrece una amplia gama de características, incluyendo gestión de rutas, seguimiento de envíos, informes de rendimiento y más. Puede personalizarse para satisfacer las necesidades específicas de su empresa.",
  },
  {
    title: "¿Es posible integrar el software con otros sistemas?",
    description:
      "Sí, nuestro software es altamente personalizable y puede integrarse fácilmente con otros sistemas y aplicaciones que su empresa utilice.",
  },
  {
    title: "¿Cómo se realiza el seguimiento de los envíos?",
    description:
      "El seguimiento de los envíos se realiza a través de nuestro sistema de seguimiento en tiempo real. Puede ver la ubicación y el estado de sus envíos en cualquier momento.",
  },
  {
    title: "¿El costo del servicio es por unidad?",
    description:
      "Sí, el costo del servicio es por unidad además de la póliza.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-[#b2eced] pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                FAQ
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] text-gray-800 mb-4">
                ¿Alguna Pregunta?
              </h2>
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
