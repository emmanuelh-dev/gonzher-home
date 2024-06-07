import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function CarrouselApp() {
  return (
    <div>
      <div className='flex flex-col container mx-auto min-h-screen items-center justify-center'>
        <h2 className='text-4xl lg:text-6xl py-12 font-title font-bold'>
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
            align: 'start',
          }}
          className='w-full max-w-4xl mx-auto'
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                <div className='p-4'>
                  <CardContent className='p-6'>
                    <Image
                      src={`/app/${index+1}.jpeg`}
                      width={300}
                      height={300}
                      alt='Imagen app operadores Gonzher'
                    />
                    <p className='block py-2'>Texto prueba mamalon</p>
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
