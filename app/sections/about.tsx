import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="acerca-de"
        className="pt-20 lg:pt-[120px] pb-20 lg:pb-[120px] bg-primary"
      >
        <div className="container mx-auto">
          <div className="bg-white wow fadeInUp" data-wow-delay=".2s">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div
                  className=" lg:flex items-center justify-between border overflow-hidden
              "
                >
                  <div className=" lg:max-w-[565px] xl:max-w-[640px] w-full py-12 px-7 sm:px-12 md:p-16 lg:py-9 lg:px-16 xl:p-[70px] ">
                    <Link className=" text-sm font-medium text-white py-2 px-5 bg-primary inline-block mb-5 " href="/nosotros">
                      Acerca de Nosotros
                    </Link>
                    <h2 className="font-title font-bold text-3xl sm:text-4xl 2xl:text-[40px] sm:leading-snug text-dark mb-6 ">
                      Líderes en software para transportistas
                    </h2>
                    <p className="text-base text-body-color mb-9 leading-relaxed">
                      En Gonzher desarrollamos software de gestión logística que
                      optimiza procesos operativos de empresas de transporte,
                      con soluciones todo en uno que incluyen rastreo en tiempo
                      real, planificación de rutas, gestión de flotas, análisis
                      de indicadores clave y facturación automatizada.
                    </p>
                    <p className="text-base text-body-color mb-9 leading-relaxed">
                      Nos respaldan la administración exitosa de más de 5000
                      vehículos alrededor del mundo, que mejoraron su
                      productividad hasta 30% gracias a nuestras innovadoras
                      apps móviles para conductores y nuestra integración
                      avanzada con sistemas de contabilidad existentes.
                    </p>
                    <p className="text-base text-body-color mb-9 leading-relaxed">
                      Operar con Gonzher significa control total sobre la
                      rentabilidad de tu negocio, toma de decisiones basada en
                      datos e incremento en la satisfacción del cliente. ¿Listo
                      para llevar tu empresa de transporte al siguiente nivel?
                    </p>
                    <a
                      href=""
                      className=" inline-flex items-center justify-center py-4 px-6 rounded text-white bg-primary text-base font-medium hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out   "
                    >
                      Más Información
                    </a>
                  </div>
                  <Image
                    width={300}
                    height={300}
                    src="/nav.png"
                    alt="imagen"
                    className="mx-auto lg:ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
