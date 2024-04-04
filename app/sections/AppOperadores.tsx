import Image from "next/image";
import React from "react";

const AppOperadores = () => {
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
                <div className="lg:flex items-center justify-between border overflow-hidden">
                  <Image
                    width={300}
                    height={300}
                    src="/mobile-app.png"
                    alt="imagen"
                    className="mx-auto lg:ml-auto w-full max-w-sm"
                  />
                  <div className=" lg:max-w-[565px] xl:max-w-[640px] w-full py-12 px-7 sm:px-12 md:p-16 lg:py-9 lg:px-16 xl:p-[70px] ">
                    <span className=" text-sm font-medium text-white py-2 px-5 bg-primary inline-block mb-5 ">
                      Acerca de Nosotros
                    </span>
                    <h2 className="font-title font-bold text-3xl sm:text-4xl 2xl:text-[40px] sm:leading-snug text-dark mb-6 ">
                      App para Operadores!
                    </h2>
                    <p className="text-base text-body-color mb-9 leading-relaxed">
                      Controla tus viajes en un solo lugar
                    </p>
                    <p className="text-base text-body-color mb-9 leading-relaxed">
                      Asistencia las 24/h
                    </p>
                    <p className="text-base text-body-color mb-9 leading-relaxed">
                      Ten el control de tus movimientos
                    </p>
                    <a
                      href=""
                      className=" inline-flex items-center justify-center py-4 px-6 rounded text-white bg-primary text-base font-medium hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out   "
                    >
                      Más Información
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppOperadores;
