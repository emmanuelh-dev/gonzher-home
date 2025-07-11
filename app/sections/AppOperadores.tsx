import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppOperadores = ({ className }: { className?: string }) => {
  return (
    <div>
      <section
        id="acerca-de"
        className={`${className} "pt-20 lg:pt-[120px] pb-20 lg:pb-[120px] bg-gradient-to-br from-primary to-teal-700"`}
      >
        <div className="container mx-auto">
          <div className="fadeInUp" data-wow-delay=".2s">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="lg:flex items-center justify-between overflow-hidden space-y-20">
                  <div className="lg:w-2/3">
                    <h2 className="font-title text-center lg:text-left font-bold lg:text-8xl text-4xl sm:leading-snug text-white mb-6 animate-fade-up ">
                      App Control de Flotillas
                      <span className="block">para Operadores!</span>
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                      <Link
                        href="/app-operadores"
                        className="animate-fade-up inline-flex items-center justify-center py-4 px-6 rounded text-white bg-primary text-base font-medium hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out   "
                      >
                        Más Información
                      </Link>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.gonzher.app"
                        target="_blank"
                      >
                        <div className="flex max-w-48 h-12 px-3 gap-2 rounded-xl items-center justify-center bg-black text-white dark:text-black dark:bg-white sm:h-14">
                          <svg
                            className="w-5 sm:w-7"
                            viewBox="30 336.7 120.9 129.2"
                          >
                            <path
                              fill="#FFD400"
                              d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                            ></path>
                            <path
                              fill="#FF3333"
                              d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                            ></path>
                            <path
                              fill="#48FF48"
                              d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                            ></path>
                            <path
                              fill="#3BCCFF"
                              d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                            ></path>
                          </svg>
                          <div>
                            <div className="text-[.5rem] sm:text-xs">
                              Descargar
                            </div>
                            <div className="text-sm font-semibold font-sans -mt-1 sm:text-xl">
                              Google Play
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href="https://apps.apple.com/mx/app/gonzher/id6448482872"
                        target="_blank"
                      >
                        <div className="flex max-w-48 h-12 px-3 gap-2 rounded-xl items-center justify-center bg-black text-white dark:text-black dark:bg-white  sm:gap-3 sm:h-14">
                          <svg className="w-5 sm:w-7" viewBox="0 0 384 512">
                            <path
                              fill="currentColor"
                              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                            ></path>
                          </svg>
                          <div>
                            <div className="text-[.5rem] sm:text-xs">
                              Descargar
                            </div>
                            <div className="text-lg font-semibold font-sans -mt-1 sm:text-2xl">
                              App Store
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <Image
                    width={300}
                    height={300}
                    src="/mobile-app.png"
                    alt="imagen"
                    className="mx-auto lg:ml-auto w-full max-w-sm"
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

export default AppOperadores;
