"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";

const Carrousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Container>
            <div className="flex flex-col lg:flex-row items-center gap-10">              <div className="text-center max-w-[780px] lg:w-1/3 mx-auto">
                <h2 className="animate-fade-up lg:text-left font-bold text-3xl sm:text-4xl md:text-[45px] leading-snug sm:leading-snug md:leading-snug mb-8 text-white font-title">
                  Control de Flotas GPS | Facturación Combustible para Flotillas
                </h2>
                <p className="lg:text-left text-base sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed mx-auto mb-10 text-neutral-100 max-w-[600px]">
                  Software de gestión de flotas líder en control de flotas GPS gratis, facturación gasolina para flotillas y sistema de facturación electrónica CFDI. Optimiza tu administración de flotillas software con monitoreo de flotas en tiempo real.
                </p>

                <div className="flex flex-wrap  items-center gap-4 mb-10">
                  <a
                    href="/#contactanos"
                    title="Formulario de contáctanos"
                    className={buttonVariants({ variant: "default" })}
                  >
                    Contáctanos
                  </a>
                  <a
                    href="https://system.gonzher.com/login"
                    target="_blank"
                    className={buttonVariants({ variant: "outline" })}
                  >
                    Iniciar Sesión
                    <span className="pl-2">
                      <svg
                        width="20"
                        height="8"
                        viewBox="0 0 20 8"
                        className="fill-current"
                      >
                        <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <Image
                src="/about.png"
                alt="Control de Flotas GPS | Software de Gestión de Flotas y Facturación Combustible"
                className="max-w-full mx-auto lg:rounded-xl rounded-t-xl rounded-tr-xl h-full object-cover lg:w-2/3"
                priority
                width={845}
                height={560}
              />
            </div>
          </Container>
        </CarouselItem>
        <CarouselItem>
          <Container>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="text-center max-w-[780px] lg:w-1/3 mx-auto">
                <h2 className="animate-fade-up lg:text-left font-bold text-3xl sm:text-4xl md:text-[45px] leading-snug sm:leading-snug md:leading-snug mb-8 text-white font-title">
                  Software GPS avanzado
                </h2>
                <p className="lg:text-left text-base sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed mx-auto mb-10 text-neutral-100 max-w-[600px]">
                  Monitorea y administra fácilmente tu fuerza móvil en todo
                  momento y todo lugar. Da seguimiento a tus unidades de manera
                  práctica y segura. Conoce las ventajas de nuestro sistema.
                  Contáctanos para más información.
                </p>

                <div className="flex flex-wrap  items-center gap-4 mb-10">
                  <a
                    href="/#contactanos"
                    title="Formulario de contáctanos"
                    className={buttonVariants({ variant: "default" })}
                  >
                    Contáctanos
                  </a>
                  <a
                    href="https://gps.gonzher.com"
                    target="_blank"
                    className={buttonVariants({variant: "outline"})}
                  >
                    Iniciar Sesión
                    <span className="pl-2">
                      <svg
                        width="20"
                        height="8"
                        viewBox="0 0 20 8"
                        className="fill-current"
                      >
                        <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <Image
                src="/gps.png"
                alt="Software de logística para transportistas"
                className="max-w-full mx-auto lg:rounded-xl rounded-t-xl rounded-tr-xl h-full object-cover lg:w-2/3"
                priority
                width={845}
                height={560}
              />
            </div>
          </Container>
        </CarouselItem>
      </CarouselContent>
      <div className="text-center">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default Carrousel;
