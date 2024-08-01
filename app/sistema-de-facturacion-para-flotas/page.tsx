import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Container from '@/components/ui/container'
import Globe from '@/components/magicui/globe'
import NosAman from '../sections/NosAman'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({
  title: "Facturación automatizada para flotas de vehículos",
  description: "Facturación automática de viajes, generación automática de remisiones y gestión de camiones todo en uno."
})


export default function Page() {
  return (
    <main>
      <section className="w-full pt-20">
        <Container className='py-24'>
          <div className="grid mx-auto gap-4 md:grid-cols-2 md:gap-16">
            <div>
              <div className="mb-4">
                <h1 className='text-neutral-500 text-sm'>Facturación automatizada para flotas de vehículos</h1>
                <p className="text-5xl lg:text-5xl font-bold tracking-tighter mb-6">
                  Optimice la facturación de su flota con nuestro sistema
                </p>
              </div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Facturación automática de viajes, generación automática de remisiones y gestión de camiones todo en
                uno.
              </p>
              <div className="flex flex-col lg:flex-row gap-4 mt-6">
                <Link
                  href="#contactanos"
                  className={buttonVariants({ variant: 'default' })}
                  prefetch={false}
                >
                  Solicitar una demostración
                </Link>
                <a
                  href="https://system.gonzher.com/login"
                  target="_blank"
                  className={buttonVariants({ variant: "outline" })}
                >
                  Iniciar Sesión
                  <span className="pl-2">
                    <svg
                      width="20"
                      height="8"
                      viewBox="0 0 20 8"
                      className="fill-current"
                    >
                      <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <Image
              src="/about.png"
              alt="Software de logística para transportistas"
              className="max-w-full mx-auto lg:rounded-xl rounded-t-xl rounded-tr-xl h-full object-cover"
              priority
              width={845}
              height={560}
            />
          </div>
        </Container>
      </section>
      <section id="fleet">
        <Container>
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold tracking-tighter">Gestión de flotas</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mantenga el control de su flota con nuestras herramientas de gestión avanzadas.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className='relative w-full h-full overflow-hidden'>
              <Globe className='-top-32' />
            </div>
            <div className="flex flex-col space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Seguimiento de vehículos</h3>
                    <p className="text-muted-foreground">
                      Monitoree la ubicación y el estado de cada vehículo en tiempo real.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Mantenimiento programado</h3>
                    <p className="text-muted-foreground">
                      Programe y rastree el mantenimiento de su flota para maximizar la eficiencia.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Informes de rendimiento</h3>
                    <p className="text-muted-foreground">
                      Obtenga informes detallados sobre el rendimiento de su flota para tomar mejores decisiones.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <NosAman />
    </main>
  )
}
