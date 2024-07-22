import Link from "next/link"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gonzher Transports",
  "url": "https://www.gonzhertransports.com",
  "logo": "https://www.gonzhertransports.com/logo.png",
  "description": "Nuestra flota de camiones de carga pesada y conductores experimentados está lista para manejar todas sus necesidades de transporte de carga.",
  "sameAs": [
    "https://www.facebook.com/gonzhertransports",
    "https://www.instagram.com/gonzhertransports",
    "https://www.twitter.com/gonzhertransports"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-5555",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["en", "es"]
  },
  "service": [
    {
      "@type": "Service",
      "name": "Entrega Local",
      "description": "Entregas locales rápidas y confiables dentro de su ciudad o región."
    },
    {
      "@type": "Service",
      "name": "Transporte de Larga Distancia",
      "description": "Servicios de transporte de carga entre estados y de larga distancia."
    },
    {
      "@type": "Service",
      "name": "Transporte Especializado",
      "description": "Soluciones de transporte para carga sobredimensionada, pesada o frágil."
    },
    {
      "@type": "Service",
      "name": "Almacenamiento",
      "description": "Servicios de almacenamiento y distribución seguros para su carga."
    },
    {
      "@type": "Service",
      "name": "Gestión de Flotas",
      "description": "Soluciones integrales de gestión de flotas para su negocio."
    },
    {
      "@type": "Service",
      "name": "Soporte 24/7",
      "description": "Soporte al cliente disponible las 24 horas del día, los 7 días de la semana."
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nuestra Flota",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Camión Semi",
          "description": "Nuestra flota de camiones semi son perfectos para el transporte de carga de larga distancia.",
          "image": "https://www.gonzhertransports.com/images/semi-truck.jpg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Camión Volquete",
          "description": "Ideal para transportar materiales pesados o voluminosos, como suministros de construcción.",
          "image": "https://www.gonzhertransports.com/images/dump-truck.jpg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Camión Plataforma",
          "description": "Nuestros camiones plataforma pueden manejar cargas sobredimensionadas o de formas irregulares.",
          "image": "https://www.gonzhertransports.com/images/flatbed-truck.jpg"
        }
      }
    ]
  }
}
export default function Page() {
  return (
    <div className="flex flex-col min-h-dvh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <section className="w-full min-h-screen md:pt-24 lg:pt-32 bg-primary">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16 pt-32 lg:pt-24 text-white">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 place-items-center">
              <div>
                <div>
                  <h1 className="lg:leading-tighter text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-primary-foreground font-title">
                    Gonzher Trasports
                  </h1>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl pt-6">
                    Nuestra flota de camiones de carga pesada y conductores experimentados está lista para manejar todas sus necesidades de transporte de carga. Nos especializamos en camiones 3/5.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Camión Semi"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nuestros Servicios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Transporte de Carga Confiable y Eficiente
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de servicios de transporte de carga para satisfacer sus necesidades, desde entregas locales hasta envíos de larga distancia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Entrega Local</h3>
                <p className="text-sm text-muted-foreground">
                  Entregas locales rápidas y confiables dentro de su ciudad o región.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Transporte de Larga Distancia</h3>
                <p className="text-sm text-muted-foreground">
                  Servicios de transporte de carga entre estados y de larga distancia.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Transporte Especializado</h3>
                <p className="text-sm text-muted-foreground">
                  Soluciones de transporte para carga sobredimensionada, pesada o frágil.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Almacenamiento</h3>
                <p className="text-sm text-muted-foreground">
                  Servicios de almacenamiento y distribución seguros para su carga.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Gestión de Flotas</h3>
                <p className="text-sm text-muted-foreground">
                  Soluciones integrales de gestión de flotas para su negocio.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Soporte 24/7</h3>
                <p className="text-sm text-muted-foreground">
                  Soporte al cliente disponible las 24 horas del día, los 7 días de la semana.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="trucks" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justificar-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nuestra Flota</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Diversa Flota de Camiones de Carga Pesada</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestra flota incluye una variedad de camiones de carga pesada para manejar todas sus necesidades de transporte de carga.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Camión Semi"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <h3 className="text-lg font-bold mt-4">Camión Semi</h3>
                <p className="text-sm text-muted-foreground">
                  Nuestra flota de camiones semi son perfectos para el transporte de carga de larga distancia.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Camión Volquete"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <h3 className="text-lg font-bold mt-4">Camión Volquete</h3>
                <p className="text-sm text-muted-foreground">
                  Ideal para transportar materiales pesados o voluminosos, como suministros de construcción.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Camión Plataforma"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <h3 className="text-lg font-bold mt-4">Camión Plataforma</h3>
                <p className="text-sm text-muted-foreground">
                  Nuestros camiones plataforma pueden manejar cargas sobredimensionadas o de formas irregulares.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}