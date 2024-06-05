import Image from 'next/image';
import React from 'react';
import { PiEngineFill } from 'react-icons/pi';
import { FaRobot, FaRegSmile, FaLightbulb, FaRegClock, FaChartLine, FaRegThumbsUp } from 'react-icons/fa';

const objetivos = [
  {
    title: 'Automatización',
    description: ' Implementamos sistemas automatizados para reducir la carga manual y aumentar la productividad.',
    icon: <div className='bg-blue-600 rounded-full p-6'><FaRobot className='size-10 text-white'/></div>,
  },
  {
    title: 'Satisfacción del cliente',
    description: 'Ofrecemos un servicio al cliente excepcional, resolviendo cualquier problema de manera rápida y eficaz.',
    icon: <div className='bg-amber-300 rounded-full p-6'><FaRegSmile className='size-10 text-white'/></div>,
  },
  {
    title: 'Innovación',
    description: 'Implementamos y aprovechamos las últimas tecnologías para mejorar todos nuestros servicios.',
    icon: <div className='bg-amber-400 rounded-full p-6'><FaLightbulb className='size-10 text-white'/></div>,
  },
  {
    title: 'Eficiencia y precisión',
    description: 'Garantizar que todos los procesos de facturación sean rápidos y precisos para evitar errores y retrasos.',
    icon: <div className='bg-amber-400 rounded-full p-6'><FaRegClock className='size-10 text-white'/></div>,
  },
  {
    title: 'Crecimiento',
    description: 'Expandir nuestra base de clientes y ampliar nuestros servicios para cubrir más necesidades del mercado.',
    icon: <div className='bg-teal-400 rounded-full p-6'><FaChartLine className='size-10 text-white'/></div>,
  },
  {
    title: 'Calidad de servicio',
    description: 'Mantener altos estándares de calidad en todos nuestros procesos para asegurar la satisfacción y fidelidad de nuestros clientes.',
    icon: <div className='bg-blue-400 rounded-full p-6'><FaRegThumbsUp className='size-10 text-white'/></div>,
  },
];

export default function Objetivos() {
  return (
    <div className='mx-auto'>
      <h2 className='text-center text-4xl lg:text-6xl font-bold font-title'>
        Nuestros Objetivos
      </h2>
      <div className=' max-w-[65rem] mx-auto'>
        <div className="mt-20 grid lg:grid-cols-3 gap-10">
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
    </div>
  );
}
