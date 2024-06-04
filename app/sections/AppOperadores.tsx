import Image from 'next/image';
import React from 'react';

const AppOperadores = () => {
  return (
    <div>
      <section
        id='acerca-de'
        className='pt-20 lg:pt-[120px] pb-20 lg:pb-[120px] bg-gradient-to-br from-primary to-teal-700'
      >
        <div className='container mx-auto'>
          <div className='fadeInUp' data-wow-delay='.2s'>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full px-4'>
                <div className='lg:flex items-center justify-between overflow-hidden space-y-20'>
                  <div className='lg:w-2/3'>
                    <h2 className='font-title font-bold lg:text-8xl text-4xl sm:leading-snug text-white mb-6 animate-fade-up '>
                      App para
                      <span className='block'>Operadores!</span>
                    </h2>
                    <a
                      href=''
                      className='animate-fade-up inline-flex items-center justify-center py-4 px-6 rounded text-white bg-primary text-base font-medium hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out   '
                    >
                      Más Información
                    </a>
                  </div>
                  <Image
                    width={300}
                    height={300}
                    src='/mobile-app.png'
                    alt='imagen'
                    className='mx-auto lg:ml-auto w-full max-w-sm'
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
