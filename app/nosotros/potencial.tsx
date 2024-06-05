import Image from 'next/image';
import React from 'react';

const potenciales = [
  {
    title: 'Consumo Anual',
    description:
      'Identifica cualquier factor que pueda haber influido en los cambios de consumo de tus unidades a lo largo del año. Por ejemplo, eventos especiales, falta de mantenimientos o robo de gasolina.',
    image: '/graphs/2.png',
  },
  {
    title: 'Facturación Anual',
    description:
      'Analiza las tendencias generales que se observan en la gráfica. ¿Hay picos en ciertos meses? ¿Hay algún patrón de aumento o disminución a lo largo del año? Identifica cualquier punto clave que desees resaltar, como el mes con la facturación más alta, el mes con la facturación más baja, o cualquier mes que haya experimentado un cambio significativo en comparación con los demás.',
    image: '/graphs/3.png',
  },
  {
    title: 'Controla tu presupuesto',
    description:
      'Examina cualquier factor que pueda haber influido en los cambios de actividad de viaje a lo largo del año. Analiza los patrones generales de viaje a lo largo del año y como mejorarlos.',
    image: '/graphs/4.png',
  },
  {
    title: 'Mantenimientos Anuales',
    description:
      'Anticipa tus unidades con el control de mantenimientos. Uno de los principales objetivos del mantenimiento de automóviles es garantizar la seguridad del conductor y otros usuarios de la carretera. El mantenimiento preventivo puede requerir una inversión inicial, a largo plazo puede ayudar a reducir los costos de reparación',
    image: '/graphs/5.png',
  },
];

export default function Potencial() {
  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-center text-4xl lg:text-6xl font-bold font-title py-10 mt-20'>
        El potencial de Gonzher
        <span className='text-teal-500 block'>para tu negocio</span>
      </h2>
      <div className='space-y-10 mt-20'>
        {potenciales.map((potencial) => (
          <div className='lg:flex gap-8 mx-auto' key={potencial.title}>
            <div className='lg:w-1/3 flex items-center justify-center'>
              <Image
                src={potencial.image}
                width={300}
                height={300}
                alt={potencial.title}
              />
            </div>
            <div className='lg:w-2/3 flex flex-col items-center justify-center'>
              <div>
                <h3 className='font-title text-2xl'>{potencial.title}</h3>
                <p>{potencial.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
