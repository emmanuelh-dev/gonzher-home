import React from "react";

const MODULOS = [
  {
    title: "Facturación",
    description: ["Sistema en la nube", "Fácil acceso", "Sistema amigable"],
  },
  {
    title: "GPS",
    description: [
      "App móvil",
      "Plataforma Web",
      "Soporte técnico",
      "Cuentas espejo",
      "Monitoreo 24/7",
      "Apagado/encendido de motor",
      "Sensor de temperatura para thermos",
    ],
  },
  {
    title: "Administrativos",
    description: [
      "Dashboard",
      "Facturación",
      "Cobranza",
      "Cuentas por pagar",
      "Control de Mantenimientos",
      "Control de Gasolina",
      "Control de Viajes",
      "Carta Porte",
      "App para operadores",
    ],
  },
];

const Modulos = () => {
  return (
    <div className="pattern h-screen flex flex-col justify-center">
      <div className="mx-auto container">
        <h1 className="font-title text-4xl lg:text-6xl py-6">
          Nuestros módulos
        </h1>
        <div className="flex bg-gradient-to-r from-slate-900 via-teal-800 to-teal-600 justify-center">
          {MODULOS.map((m) => (
            <div key={m.title} className="max-w-sm p-8 text-white block h-full">
              <h2 className="text-center text-4xl pb-6 font-bold">{m.title}</h2>
              <ul className="px-12">
                {m.description.map((d) => (
                  <li key={d} className="ml-6 list-disc">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modulos;
