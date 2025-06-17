import About from "@/app/sections/about";
import Contact from "@/app/sections/contact";
import FAQ from "@/app/sections/faq";
import Features from "@/app/sections/features";
import OurMarkers from "@/app/sections/markers";
import Pricing from "@/app/sections/pricing";
import Services from "@/app/sections/services";
import AppOperadores from "@/app/sections/AppOperadores";
import Carrousel from "./components/Carrousel";
import Modulos from "./sections/Modulos";
import NosAman from "./sections/NosAman";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gonzher - Facturación Combustible Flotas | Software de Gestión de Flotas GPS',
  description: 'Gonzher: Facturación combustible flotas, facturación gasolina flotas y control GPS flotas. Software de gestión de flotas, control de flotas y sistema facturación en línea CFDI. Plataforma completa para administración de flotillas.',
  keywords: [
    'facturación combustible flotas',
    'facturación gasolina flotas',
    'control gps flotas',
    'software de gestión de flotas',
    'control de flotas',
    'sistema facturación en línea',
    'software para control de flotas',
    'sistema de facturación en línea',
    'sistemas de facturación electrónica en línea',
    'software de gestión de flotas',
    'control de flotas gps',
    'software control de flotas',
    'gps control de flotas',
    'software gestión de flotas',
    'software control de flota',
    'programa control de flotas',
    'control de flotillas software',
    'sistema de control de flotas',
    'facturación combustible para flotillas',
    'administración de flota gps',
    'facturación gasolina para flotillas',
    'software para administración de flotas',
    'administración de flotillas software',
    'plataforma de facturación electrónica',
    'control de flotas gps gratis',
    'software control de flotillas',
    'software manejo de flotas',
    'software para gestión de flotas',
    'software de rastreo de flotas gps',
    'gestión de flotas por gps',
    'software para flotillas',
    'gestión de flotas gps',
    'software de gestión de flotillas',
    'plataforma de facturación',
    'sistema de facturación cfdi',
    'gonzher'
  ].join(', '),  openGraph: {
    title: 'Gonzher - Facturación Combustible Flotas | Software de Gestión de Flotas GPS',
    description: 'Facturación combustible flotas, control GPS flotas y software de gestión de flotas. Sistema completo para administración de flotillas y facturación electrónica CFDI en línea.',
    url: 'https://www.gonzher.com',
    type: 'website',
    images: [
      {
        url: 'https://www.gonzher.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gonzher - Software Control de Flotas y Facturación',
      },
    ],
  },  twitter: {
    card: 'summary_large_image',
    title: 'Gonzher - Facturación Combustible Flotas | Software Gestión Flotas',
    description: 'Facturación combustible flotas, control GPS flotas y software de gestión de flotas para administración de flotillas.',
    images: ['https://www.gonzher.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.gonzher.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <div>
      {/* Contenido estructurado con schema markup para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Gonzher - Facturación Combustible Flotas",
            "description": "Software de gestión de flotas GPS para facturación combustible flotas, facturación gasolina flotas y control GPS flotas. Sistema completo de administración de flotillas y facturación electrónica CFDI en línea.",
            "url": "https://www.gonzher.com",
            "applicationCategory": "Fleet Management Software",
            "operatingSystem": "Web-based",
            "keywords": "facturación combustible flotas, facturación gasolina flotas, control gps flotas, software de gestión de flotas, control de flotas, sistema facturación en línea, software para control de flotas, administración de flota gps",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "MXN",
              "description": "Software gratuito para control de flotas GPS y facturación electrónica"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Gonzher",
              "url": "https://www.gonzher.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.gonzher.com/logo.png"
              }
            },
            "featureList": [
              "Facturación combustible para flotas",
              "Control GPS de flotas en tiempo real", 
              "Software de gestión de flotas",
              "Sistema de facturación electrónica CFDI",
              "Administración de flotillas",
              "Plataforma de facturación en línea",
              "Control de flotillas software",
              "Rastreo GPS de flotas"
            ],
            "applicationSubCategory": "Fleet Management, Electronic Billing, GPS Tracking",
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Fleet Managers, Transportation Companies, Logistics Companies"
            }
          })
        }}
      />
      
      {/* Schema markup adicional para LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Gonzher",
            "description": "Empresa especializada en software de gestión de flotas, facturación combustible flotas y control GPS flotas",
            "url": "https://www.gonzher.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "MX"
            },
            "sameAs": [
              "https://www.facebook.com/gonzher",
              "https://twitter.com/gonzher"
            ],
            "priceRange": "Gratis",
            "category": "Software de Gestión de Flotas"
          })
        }}
      />
      
      {/* Encabezados H1 ocultos para SEO */}
      <h1 className="sr-only">
        Gonzher - Facturación Combustible Flotas | Software de Gestión de Flotas GPS | Control GPS Flotas | Sistema Facturación en Línea CFDI
      </h1>
      
      <div className="relative pt-[120px] md:pt-[130px] lg:pt-[160px] bg-gradient-to-r from-primary to-teal-800">
        <Carrousel />
      </div>
      <Features />
      <About />
      <Pricing />
      <AppOperadores />
      <FAQ />
      <OurMarkers />
      <NosAman />
    </div>
  );
}
