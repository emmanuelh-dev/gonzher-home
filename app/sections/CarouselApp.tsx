import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarrouselApp() {
  return (
    <div>
      <div className="flex flex-col container mx-auto min-h-screen items-center justify-center">
        <h2 className="text-4xl lg:text-6xl py-12 font-title font-bold">
          Conoce en Nuestra App
        </h2>
        <p>
          En Gonzher desarrollamos software de gestión logística que optimiza
          procesos operativos de empresas de transporte, con soluciones todo en
          uno que incluyen rastreo en tiempo real, planificación de rutas,
          gestión de flotas, análisis de indicadores clave y facturación
          automatizada.
        </p>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <CardContent className="p-6">
                  <Image
                    src={`/app/1.jpeg`}
                    width={300}
                    height={300}
                    alt="Imagen app operadores Gonzher"
                  />
                  <p className="block py-2">Ingresa y crea un nuevo viaje</p>
                </CardContent>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <CardContent className="p-6">
                  <Image
                    src={`/app/2.jpeg`}
                    width={300}
                    height={300}
                    alt="Imagen app operadores Gonzher"
                  />
                  <p className="block py-2">Agrega las fotos</p>
                </CardContent>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <CardContent className="p-6">
                  <Image
                    src={`/app/3.jpeg`}
                    width={300}
                    height={300}
                    alt="Imagen app operadores Gonzher"
                  />
                  <p className="block py-2">Agrega la información</p>
                </CardContent>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <CardContent className="p-6">
                  <Image
                    src={`/app/4.jpeg`}
                    width={300}
                    height={300}
                    alt="Imagen app operadores Gonzher"
                  />
                  <p className="block py-2">Selecciona el Origen</p>
                </CardContent>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <CardContent className="p-6">
                  <Image
                    src={`/app/5.jpeg`}
                    width={300}
                    height={300}
                    alt="Imagen app operadores Gonzher"
                  />
                  <p className="block py-2">Selecciona el destino</p>
                </CardContent>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <CardContent className="p-6">
                  <Image
                    src={`/app/6.jpeg`}
                    width={300}
                    height={300}
                    alt="Imagen app operadores Gonzher"
                  />
                  <p className="block py-2">Confirma tu viaje</p>
                </CardContent>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <CardContent className="p-6">
                  <Image
                    src={`/app/7.jpeg`}
                    width={300}
                    height={300}
                    alt="Imagen app operadores Gonzher"
                  />
                  <p className="block py-2">Inicia el viaje</p>
                </CardContent>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <CardContent className="p-6">
                  <Image
                    src={`/app/8.jpeg`}
                    width={300}
                    height={300}
                    alt="Imagen app operadores Gonzher"
                  />
                  <p className="block py-2">Finaliza tu viaje</p>
                </CardContent>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <CardContent className="p-6">
                  <Image
                    src={`/app/9.jpeg`}
                    width={300}
                    height={300}
                    alt="Imagen app operadores Gonzher"
                  />
                  <p className="block py-2">Viaje exitoso</p>
                </CardContent>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
