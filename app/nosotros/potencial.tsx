import Image from 'next/image';
import React from 'react';

const potenciales = [
  {
    title: 'Llega a tus clientes estén donde estén',
    description:
      'Muestra tus anuncios en el lugar y momento adecuados gracias a Gonzher Ads. Deja que la automatización de Gonzher encuentre los formatos de anuncios con mejor rendimiento en YouTube, Discover, Búsqueda y más para maximizar las conversiones de tu negocio.',
    image: '/facturacion.png',
  },
  {
    title: 'Registra, aprende y optimiza el ROI',
    description:
      'Registra las conversiones para obtener información de tu público objetivo. La optimización automática del presupuesto de Gonzher te permite captar clientes nuevos con el ROI más alto.',
    image: '/consumos.png',
  },
  {
    title: 'Controla tu presupuesto',
    description:
      'Obtén recomendaciones, raliza ajustes y decide tu presupuesto mensual. La tecnología de Gonzher te permite medir resultados y aprovechar tu inversión publicitaria de la mejor manera.',
    image: '/facturacion.png',
  },
];

export default function Potencial() {
  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-center text-4xl font-bold font-title'>
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
