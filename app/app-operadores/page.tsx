import AppOperadores from "../sections/AppOperadores";
import { CarrouselApp } from "../sections/CarouselApp";
import { genPageMetadata } from "../seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'App para Operadores',
  description: 'En Gonzher desarrollamos software de gestión logística que optimiza procesos operativos de empresas de transporte, con soluciones todo en uno que incluyen rastreo en tiempo real, planificación de rutas, gestión de flotas, análisis de indicadores clave y facturación automatizada.',
}

export default function Page() {
  return (
    <div>
      <AppOperadores />
      <CarrouselApp />
    </div>
  );
}
