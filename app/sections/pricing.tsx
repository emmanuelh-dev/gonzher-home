import React from "react";
import { BiCheck } from "react-icons/bi";
interface Producto {
  id: number;
  name: string;
  description: string;
  price: string;
  original_price: number;
  // Agrega las demás propiedades aquí según sea necesario
}
const Pricing = async () => {
  let productos: Producto[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/productos`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }

    const data = await response.json();
    productos = data.productos;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }

  return (
    <div>
      <section
        id="precios"
        className=" bg-white pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden pattern"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[600px]">
                <h2 className="animate-fade-up font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 text-balance font-title">
                  Conoce nuestros planes
                </h2>
                <p className=" text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-body-color ">
                  En Gonzher, nos esforzamos por ofrecerte un servicio
                  excepcional. Disponemos de planes personalizados para ti y
                  toda tu flota.
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex gap-6 items-center justify-center flex-wrap max-w-4xl mx-auto">
            {productos ? (
              productos.map((producto) => (
                <div
                  className="w-full max-w-sm animate-fade-up"
                  key={producto.id}
                >
                  <div
                    className="shadow-xl bg-white rounded-xl relative z-10 overflow-hidden py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 text-center wow fadeInUp "
                    data-wow-delay=".15s "
                  >
                    <span className="text-dark font-medium text-base uppercase block mb-2">
                      {producto.name}
                    </span>
                    <h2 className="font-semibold text-primary text-[20px] line-through">
                      {producto?.original_price ?? +producto.price + 100}/Año
                    </h2>
                    <h3 className="font-semibold text-red-400 mb-9 text-[28px]">
                      {producto.price}/Año
                    </h3>
                    <div className="mb-10">{producto.description}</div>
                    <div className="w-full">
                      <a
                        href="https://wa.me/8128938412?text="
                        className=" inline-block text-base font-medium text-primary bg-transparent border border-[#D4DEFF] rounded-full text-center py-4 px-11 hover:text-white hover:bg-primary hover:border-primary transition duration-300 ease-in-out "
                      >
                        Comprar Ahora
                      </a>
                    </div>
                    <span className=" absolute left-0 bottom-0 z-[-1] w-14 h-14 rounded-tr-full block bg-primary "></span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center text-center w-full">
                Proximamente...
              </div>
            )}
            <div className="w-full max-w-sm animate-fade-up">
              <div
                className="shadow-xl bg-white rounded-xl relative z-10 overflow-hidden py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 text-center wow fadeInUp"
                data-wow-delay=".15s"
              >
                <span className="text-dark font-medium text-base uppercase block mb-2">
                  Pesonaliza tu plan
                </span>
                <h2 className="font-semibold text-primary text-[20px] mb-4">
                  Personalizado
                </h2>
                <div className="mb-10">
                  Contáctanos para personalizar tu plan de acuerdo a tus
                  necesidades.
                </div>
                <div className="w-full">
                  <a
                    href="https://wa.me/8128938412?text="
                    className=" inline-block text-base font-medium text-primary bg-transparent border border-[#D4DEFF] rounded-full text-center py-4 px-11 hover:text-white hover:bg-primary hover:border-primary transition duration-300 ease-in-out "
                  >
                    Contacto ventas
                  </a>
                </div>
                <span className="absolute left-0 bottom-0 z-[-1] w-14 h-14 rounded-tr-full block bg-primary"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
