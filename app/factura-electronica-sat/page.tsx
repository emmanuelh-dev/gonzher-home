import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FileIcon, FileTextIcon, PuzzleIcon, ReceiptIcon, TruckIcon, UsersIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { genPageMetadata } from '../seo'
import { Beam } from './Beam'
import Link from 'next/link'

export const metadata = genPageMetadata({
  title: "Facturar en línea CFDI | Sistema de Facturación Electrónica",
  description: "Facturar en línea nunca había sido tan fácil. Facturama es el Sistema de Facturación Online líder de México. Prueba por 30 días, Gratis 15 folios fiscales."
})

export default function Page() {
  return (
    <main>
      <section className="relative pt-[120px] md:pt-[130px] lg:pt-[160px] bg-gradient-to-r from-primary to-teal-800">
        <div className="container mx-auto py-16">
          <div className="flex flex-col lg:flex-row items-center mx-4 gap-10">
            <div className="lg:w-1/2 mx-auto">
              <h1 className='text-white'>Sistema de facturación electrónica CFDI 4.0 en México</h1>
              <h2 className="animate-fade-up lg:text-left font-bold text-3xl sm:text-4xl md:text-[35px] leading-snug sm:leading-snug md:leading-snug mb-8 font-title text-white">
                Facturar en línea
                nunca había sido
                tan fácil en el 2024
              </h2>
              <p className="lg:text-left text-base sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed mx-auto mb-10 text-neutral-200">
                Emisión de CFDI autorizados por el SAT, de manera
                rápida y segura a través del mejor portal de timbrado
                de facturas en México.
              </p>

              <div className="flex flex-wrap items-center mb-10">
                <a
                  href="#contactanos"
                  title="Formulario de contáctanos"
                  className={buttonVariants({ variant: "default" })}
                >
                  Solicitar Demo
                </a>
                <a
                  href="https://system.gonzher.com/login"
                  target="_blank"
                  className="text-base font-medium py-4 px-6 sm:px-10 flex items-center hover:opacity-70 transition duration-300 ease-in-out text-white"
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
              className="max-w-full mx-auto lg:rounded-xl rounded-t-xl rounded-tr-xl h-full object-cover lg:w-1/2"
              priority
              width={845}
              height={560}
            />
          </div>
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-4">
              <div className=' py-4'>
                <h2 className="inline-block rounded-lg bg-muted py-1 text-sm text-neutral-400">Mejor sistema para facturas en línea 4.0
                  válidas ante el SAT</h2>
                <p className="text-4xl font-bold tracking-tighter sm:text-5xl">Características</p>
              </div>
              <p>
                Nuestra plataforma de facturación es 100% en línea. <strong>Tus facturas electrónicas, complementos de pago, recibos, catálogos de clientes y productos quedarán almacenados en la nube.</strong>.
              </p>
              <p>uestro portal permite que emitas todo tipo de comprobantes fiscales, desde CFDI 4.0 hasta los complementos de pago más avanzados; cómo <strong>carta porte 3.0</strong> o complementos de comercio exterior, sin descargar programas o software complicado y sin plazos forzosos, paga cuando lo necesites.</p>
              <p>
                <strong>Conoce todos los servicios de facturación en la nube que tenemos para ti: </strong>
              </p>
            </div>
          </div>
          <div className="grid gap-16 lg:gap-8 md:grid-cols-2 lg:grid-cols-4 py-14">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <FileIcon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Facturación electrónica</h3>
              </div>
              <p className="text-muted-foreground">
                Podrás facturar en línea CFDI 4.0, recibir y recuperar tus comprobantes fiscales, todo almacenado en tu
                perfil.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <UsersIcon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Nómina</h3>
              </div>
              <p className="text-muted-foreground">
                Carga la información de tus empleados y genera recibos de nómina en línea de forma rápida y segura.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <PuzzleIcon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Complementos</h3>
              </div>
              <p className="text-muted-foreground">Incorpora tus complementos fiscales a la factura electrónica.</p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <FileIcon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Cotizaciones</h3>
              </div>
              <p className="text-muted-foreground">
                Genera cotizaciones y conviértelas en facturas en línea con un sólo clic.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b lg:bg-gradient-to-r from-teal-900 to-primary py-20 text-primary-foreground">
        <div className="container flex flex-col items-center gap-6 px-4 sm:px-6 md:px-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl space-y-4 text-center md:text-left my-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">Simplifica tu Facturación Logística</h1>
            <p className="text-lg text-neutral-200">
              Optimiza tu proceso de facturación y realiza el seguimiento de tus envíos con nuestra potente plataforma de facturación logística.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#contactanos" className={`${buttonVariants({variant:'default'})} w-full sm:w-auto`}>Solicitar Demo</Link>
              <Button variant="outline" className="w-full sm:w-auto">
                Más Información
              </Button>
            </div>
          </div>
          <Beam />
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container space-y-12 px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Optimiza la Facturación de tus viajes </h2>
            <p className="mt-4 text-muted-foreground">
              Nuestra plataforma ofrece una variedad de características para simplificar tu proceso de facturación y mejorar tus operaciones logísticas.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <TruckIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Seguimiento de tus Envíos</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitorea el estado de tus envíos en tiempo real y recibe alertas por cualquier retraso o cambio.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ReceiptIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Facturación Simplificada</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Genera y envía facturas con solo unos clics, y mantén un registro de tus pagos y saldos pendientes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FileTextIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Facturación Electrónica</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cumple con las regulaciones de facturación electrónica y envía tus facturas electrónicamente, reduciendo el papeleo y mejorando la eficiencia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
