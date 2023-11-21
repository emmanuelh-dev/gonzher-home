import React from "react";
import { BiCheck } from "react-icons/bi";
const PRECIOS = [
  {
    plan: "NÓMINA + CONTABLE",
    precio: "$3,000",
    descuento: "$2250",
    moneda: "MXN",
    frecuencia: "x mes",
    folios: "ILIMITADOS",
    funciones: [
      "TODAS las funciones del plan BÁSICO",
      "TODAS las funciones del plan NÓMINA",
      "TODAS las funciones del plan CONTABLE",
      "Gráficas comparativas en tiempo real",
      "Soporte gratuito",
    ],
    masInformacion: "Más información",
    iniciar: "INICIAR",
  },
  {
    plan: "NÓMINA",
    precio: "$1,850",
    descuento: "$1390",
    moneda: "MXN",
    frecuencia: "x mes",
    folios: "GRATIS*",
    funciones: [
      "TODAS las funciones del plan BÁSICO",
      "Previsualiza los cálculos antes de generar",
      "Reportes descargables en tiempo real",
      "Cálculos automáticos",
      "Reportes históricos de sueldos y asimilados",
      "Importa y exporta información de empleados",
      "Factura con fecha diferente",
      "Soporte gratuito",
    ],
    masInformacion: "Más información",
    iniciar: "INICIAR",
    mejorOpcion: "MEJOR OPCIÓN",
  },
  {
    plan: "CONTABLE",
    precio: "$999",
    descuento: "$749",
    moneda: "MXN",
    frecuencia: "x mes",
    folios: "GRATIS*",
    funciones: [
      "TODAS las funciones del plan BÁSICO",
      "Cálculo del impuesto según tu régimen",
      "Amarre contable",
      "Cierre de periodos automáticamente",
      "Gráfica de gastos acorde a balanza",
      "Póliza automática",
      "Factura con fecha diferente",
      "Soporte gratuito",
    ],
    masInformacion: "Más información",
    iniciar: "INICIAR",
    mejorOpcion: "MEJOR OPCIÓN",
  },
  {
    plan: "BÁSICO",
    seleccionaFolios: "Selecciona Folios",
    precio: "100",
    descuento: "99",
    moneda: "MXN",
    frecuencia: "x 12 meses",
    funciones: [
      "Emite CFDI (Factura, Carta Porte, Factura Comercio Exterior, Complemento de Pago)",
      "Descarga SAT",
      "Catálogos SAT precargados",
      "Cancela CFDI's",
      "Estadísticas básicas",
      "Soporte gratuito",
    ],
    comprar: "COMPRAR",
  },
];

const Pricing = () => {
  return (
    <div>
      <section
        id="pricing"
        className=" bg-white pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden "
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[800px]">
                <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 ">
                  Conoce nuestros planes
                </h2>
                <p className=" text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-body-color ">
                  Si tiene alguna pregunta o necesita más información sobre
                  nuestros costos unitarios, no dude en ponerse en contacto con
                  nuestro equipo de atención al cliente. Estamos aquí para
                  ayudarle a optimizar sus operaciones logísticas y de
                  transporte.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {PRECIOS.map((precio, index) => (
              <div className="w-full" key={index}>
                <div
                  className=" bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 text-center wow fadeInUp "
                  data-wow-delay=".15s "
                >
                  <span className="text-dark font-medium text-base uppercase block mb-2">
                    {precio.plan}
                  </span>
                  <h2 className="font-semibold text-primary text-[20px] line-through">
                    {precio.precio}/mes
                  </h2>
                  <h3 className="font-semibold text-red-400 mb-9 text-[28px]">
                    {precio.descuento}/mes
                  </h3>
                  <div className="mb-10">
                    {precio.funciones.map((funcion, index) => (
                      <p
                        className=" text-base font-medium text-body-color leading-loose mb-1 flex items-center gap-2 text-left"
                        key={index}
                      >
                        <BiCheck />{funcion}
                      </p>
                    ))}
                  </div>
                  <div className="w-full">
                    <a
                      href=""
                      className=" inline-block text-base font-medium text-primary bg-transparent border border-[#D4DEFF] rounded-full text-center py-4 px-11 hover:text-white hover:bg-primary hover:border-primary transition duration-300 ease-in-out "
                    >
                      Comprar Ahora
                    </a>
                  </div>
                  <span className=" absolute left-0 bottom-0 z-[-1] w-14 h-14 rounded-tr-full block bg-primary "></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
