import Image from 'next/image';
import React from 'react';
import { PiEngineFill } from 'react-icons/pi';

const objetivos = [
  {
    title: 'Maximiza los clientes potenciales y las conversiones',
    description:
      'Consigue clientes potenciales de mayor calidad y mejora las conversiones.',
    icon: <div className='bg-amber-400/50 rounded-full p-4'><PiEngineFill /></div>,
  },
  {
    title: 'Aumenta las ventas en línea',
    description:
      'Llega a los compradores donde se encuentren y aumenta el tráfico y las ventas de tu sitio.',
    icon: <div className='bg-amber-400/50 rounded-full p-4'><PiEngineFill /></div>,
  },
  {
    title: 'Impulsa el tráfico presencial en la tienda',
    description:
      'Atrae a los consumidores a tu tienda y aumenta las ventas tradicionales.',
    icon: <div className='bg-amber-400/50 rounded-full p-4'><PiEngineFill /></div>,
  },
  {
    title: 'Muestra tu marca a más personas',
    description:
      'Muestra tu marca para aumentar el alcance y la participación.',
    icon: <div className='bg-amber-400/50 rounded-full p-4'><PiEngineFill /></div>,
  },
  {
    title: 'Promociona tu aplicación para los usuarios nuevos',
    description:
      'Promociona tu aplicación entre los usuarios adecuados para impulsar las descargas y la participación.',
    icon: <div className='bg-amber-400/50 rounded-full p-4'><PiEngineFill /></div>,
  },
];

export default function Objetivos() {
  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-center text-4xl font-bold font-title'>
        Alcanza todos tus objetivos en un solo lugar
      </h2>
      <div className='flex gap-12 flex-wrap mt-20'>
        {objetivos.map((potencial) => (
          <div
            className='flex flex-col items-center text-center gap-8 w-64 mx-auto'
            key={potencial.title}
          >
            <div className='flex items-center justify-center'>
              {potencial.icon}
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div>
                <h3 className='font-title text-xl'>{potencial.title}</h3>
                <p>{potencial.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
