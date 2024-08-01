import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, buttonVariants } from '@/components/ui/button'
import Globe from '@/components/magicui/globe'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({
  title: "GPS - Gonzher Soluciones de rastreo y seguimiento en tiempo real para tu flota",
  description: "Mejora la eficiencia operativa de tu negocio con nuestras soluciones de rastreo y seguimiento en tiempo real."
})

export default function Page() {
  return (
    <main>
      <section className="w-full pt-24">
        <div className="space-y-10 xl:space-y-16 container px-4 py-16 lg:py-24">
          <div className="grid gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter font-bold tracking-tighter text-5xl md:text-6xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Soluciones de rastreo y seguimiento en tiempo real para tu flota
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Mejora la eficiencia operativa de tu negocio con nuestras soluciones de rastreo y seguimiento en
                tiempo real.
              </p>
              <div className="space-x-4 mt-6">
                <Link
                  href="#contactanos"
                  className={buttonVariants({ variant: 'default' })}
                  prefetch={false}
                >
                  Solicitar Cotización
                </Link>
                <Link
                  href="#features"
                  className={buttonVariants({ variant: 'outline' })}
                  prefetch={false}
                >
                  Ver Soluciones
                </Link>
              </div>
            </div>
            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-40 pb-40 pt-8 md:pb-60">
              <Globe className="-top-10" />
              {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" /> */}
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted text-sm">Características Clave</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Soluciones Avanzadas de Rastreo y Geolocalización
              </h2>
              <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                Nuestra plataforma ofrece una amplia gama de funcionalidades para satisfacer todas sus necesidades de
                seguimiento y geolocalización.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Seguimiento en Tiempo Real</h3>
              <p className="text-sm text-muted-foreground">
                Monitoree la ubicación de sus activos, vehículos y personal en tiempo real a través de nuestra
                plataforma web y móvil.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Informes y Análisis</h3>
              <p className="text-sm text-muted-foreground">
                Genere informes detallados sobre el historial de desplazamientos, velocidad, tiempo de actividad y
                más.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Alertas y Notificaciones</h3>
              <p className="text-sm text-muted-foreground">
                Reciba alertas en tiempo real sobre eventos como salidas de zona, exceso de velocidad, paradas
                prolongadas y más.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Geovallas y Geocercas</h3>
              <p className="text-sm text-muted-foreground">
                Defina áreas geográficas de interés y reciba notificaciones cuando sus activos entren o salgan de
                ellas.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Soporte Técnico</h3>
              <p className="text-sm text-muted-foreground">
                Cuente con nuestro equipo de expertos para brindarle asistencia técnica y personalización de acuerdo a
                sus necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 mb-4">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nuestros Clientes</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Empresas que confían en nosotros</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl">
                Nuestras soluciones de rastreo y seguimiento en tiempo real han ayudado a empresas de diversos
                sectores a mejorar la eficiencia de sus operaciones.
              </p>
            </div>
          </div>
          <div className="divide-y rounded-lg border">
            <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
                <Image
                  src="/logo.png"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <span>Gonzher</span>
              </div>
              <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
                <Image
                  src="/logo.png"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                />
                <span>Gonzher</span>
              </div>
              <div className="mx-auto flex flex-col w-full items-center justify-center p-8">
                <Image
                  src="/logo.png"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <span>Gonzher</span>
              </div>
            </div>
            <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
                <Image
                  src="/logo.png"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <span>Gonzher</span>
              </div>
              <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
                <Image
                  src="/logo.png"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <span>Gonzher</span>
              </div>
              <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
                <Image
                  src="/logo.png"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <span>Gonzher</span>
              </div>
            </div>
          </div>
          <div className="flex max-sm:justify-center space-x-4 mt-8">
            <Link
              href="#contactanos"
              className={buttonVariants({ variant: 'default' })}
              prefetch={false}
            >
              Solicitar Cotización
            </Link>
            <Link
              href="#"
              className={buttonVariants({ variant: "outline" })}
              prefetch={false}
            >
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className='relative w-full h-full overflow-hidden'>
              <Globe className='-top-32' />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">Comienza a tomar control de tu flota ahora</h2>
              <p className="text-muted-foreground mb-6 text-lg md:text-xl">
                Nuestra plataforma te ayuda a optimizar tus procesos de negocio y mejorar la eficiencia.
              </p>
              <div className="flex gap-4">
                <Link href='#contactanos' className={buttonVariants({ variant: 'default' })}>Contactar Ventas</Link>
                <Link href='#features' className={buttonVariants({ variant: 'outline' })}>Explorar Características</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
