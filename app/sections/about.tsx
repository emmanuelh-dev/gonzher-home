import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="acerca-de"
        className="pt-20 lg:pt-[120px] pb-20 lg:pb-[120px] bg-gradient-to-l from-primary to-teal-700"
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
                    <span className=" text-sm font-medium text-white py-2 px-5 bg-primary inline-block mb-5 ">
                      Acerca de Nosotros
                    </span>
                    <h2 className="animate-fade-up font-title font-bold text-3xl sm:text-4xl 2xl:text-[40px] sm:leading-snug text-dark mb-6 ">
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
                      vehículos alrededor de todo México, que mejoraron su
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
                    <Link
                      href="/nosotros"
                      className=" inline-flex items-center justify-center py-4 px-6 rounded text-white bg-primary text-base font-medium hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out   "
                    >
                      Más Información
                    </Link>
                  </div>
                  <div className="w-full grow space-y-1.5 overflow-auto p-4">
                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent bg-slate-100 px-4 py-1.5 font-medium text-slate-900 transition"
                      href="https://system.gonzher.com/dashboard"
                    >
                      <svg
                        className="hi-outline hi-home inline-block h-6 w-6 text-teal-600 transition"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"></path>
                      </svg>
                      <span className="grow">Dashboard</span>
                      <span className="text-teal-500">•</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/direcciones"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"></path>
                      </svg>
                      <span className="grow">Direcciones</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/camiones"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"></path>
                      </svg>
                      <span className="grow">Camiones</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/viajes"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path>
                      </svg>
                      <span className="grow">Viajes</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://api.gonzher.com"
                      target="blank"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                      </svg>
                      <span className="grow">GPS</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/usuarios"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                      </svg>
                      <span className="grow">Usuarios</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/grupos"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                      <span className="grow">Grupos</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/ventas"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                        ></path>
                      </svg>
                      <span className="grow">Ventas</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/eventos"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        ></path>
                      </svg>
                      <span className="grow">Eventos</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/clientes"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <polyline points="17 11 19 13 23 9"></polyline>
                      </svg>
                      <span className="grow">Clientes</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/remisiones"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                      </svg>
                      <span className="grow">Remisiones</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/operaciones/nominas-viajes"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"></path>
                      </svg>
                      <span className="grow">Nóminas</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/operaciones/cartas-porte"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        ></path>
                      </svg>
                      <span className="grow">Cartas porte 3.0</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/operaciones/facturacion"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        ></path>
                      </svg>
                      <span className="grow">Facturación</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/operaciones/cobros-viajes"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span className="grow">Cobranza</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/taller/camiones"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"></path>
                      </svg>
                      <span className="grow">Mantenimientos</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/taller/consumos"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"></path>
                      </svg>
                      <span className="grow">Consumos</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/gonzher/configuracion"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          xmlns="http://www.w3.org/2000/svg"
                          cx="12"
                          cy="12"
                          r="3"
                        ></circle>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                        ></path>
                      </svg>
                      <span className="grow">Configuración</span>
                    </a>

                    <a
                      className="group flex items-center space-x-3 rounded-xl border border-transparent px-4 py-1.5 font-medium text-slate-600 transition hover:bg-slate-100 active:border-slate-200 active:text-slate-900:bg-slate-900/50:border-slate-700/50:text-slate-100"
                      href="https://system.gonzher.com/dashboard/notificaciones"
                    >
                      <svg
                        className="hi-outline hi-user-circle inline-block h-6 w-6 text-slate-700 transition group-hover:text-teal-600"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"></path>
                      </svg>
                      <span className="grow">Notificaciones</span>
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

export default About;
