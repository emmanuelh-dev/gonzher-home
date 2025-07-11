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
  title: 'Gonzher - Control de Flotas GPS | Software de Gestión de Flotas y Facturación Combustible',
  description: 'Gonzher: Líder en control de flotas GPS, software de gestión de flotas, facturación combustible flotas y monitoreo de flotas en tiempo real. Sistema completo de control de flotas GPS gratis, facturación gasolina flotas y administración de flotillas software.',
  keywords: [
    'control de flotas',
    'software de gestión de flotas',
    'facturación combustible flotas',
    'control gps flotas',
    'facturación gasolina flotas',
    'software de gestión de flotas',
    'software control de flotas',
    'control de flotas gps',
    'gps control de flotas',
    'software gestión de flotas',
    'software control de flota',
    'monitoreo de flotas',
    'control de flotas gps gratis',
    'sistemas de facturación electrónica en línea',
    'software gestión de flotas',
    'programa control de flotas',
    'facturación combustible para flotillas',
    'facturación gasolina para flotillas',
    'sistema facturación en línea',
    'software para control de flotas',
    'software manejo de flotas',
    'control de flotas por gps',
    'sistema de facturación en línea',
    'plataforma de facturación electrónica',
    'software para administración de flotas',
    'administración de flotillas software',
    'software control de flotillas',
    'sistema de control de flotas',
    'control de flotillas software',
    'sistema de facturación electrónica',
    'sistema de facturación en línea',
    'sistema de facturación cfdi',
    'gestión de flotas software',
    'gestión de flotas gps',
    'sistema control de flotas',
    'software de gestión de flotillas',
    'sistema de gestión de flotas por gps',
    'software para control de combustible',
    'software de seguimiento de flotas',
    'plataforma de facturación',
    'software control de flotillas gratis',
    'software localización flota',
    'software de rastreo de flotas gps',
    'gps flotas',
    'sistema de facturación electrónica cfdi',
    'gestión de flotas por gps',
    'administración de flota gps',
    'software para flotillas',
    'administración de flotillas software',
    'software de rastreo de flotas',
    'software para gestión de flotas',
    'software para flotas',
    'mejor software de administración de flota',
    'software para gestión de flotas',
    'control de flota gps',
    'mejor sistema para flotas',
    'software de administración de flotillas',
    'gestión de flotillas gps',
    'gonzher'
  ].join(', '),  openGraph: {
    title: 'Gonzher - Control de Flotas GPS | Software Gestión de Flotas y Monitoreo en Tiempo Real',
    description: 'Control de flotas GPS, software de gestión de flotas, facturación combustible flotas y monitoreo de flotas. Sistema completo de control de flotas GPS gratis y administración de flotillas software.',
    url: 'https://www.gonzher.com',
    type: 'website',
    images: [
      {
        url: 'https://www.gonzher.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gonzher - Control de Flotas GPS y Software de Gestión de Flotas',
      },
    ],
  },  twitter: {
    card: 'summary_large_image',
    title: 'Gonzher - Control de Flotas GPS | Software Gestión de Flotas',
    description: 'Control de flotas GPS, software de gestión de flotas, monitoreo de flotas y facturación combustible para flotillas. Sistema completo de administración de flotillas.',
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
            "name": "Gonzher - Control de Flotas GPS y Software de Gestión de Flotas",
            "description": "Software líder en control de flotas GPS, gestión de flotas, monitoreo de flotas en tiempo real, facturación combustible flotas y administración de flotillas. Sistema completo de control de flotas GPS gratis con facturación electrónica CFDI en línea.",
            "url": "https://www.gonzher.com",
            "applicationCategory": "Fleet Management Software",
            "operatingSystem": "Web-based",
            "keywords": "control de flotas, software de gestión de flotas, facturación combustible flotas, control gps flotas, monitoreo de flotas, software control de flotas, gps control de flotas, administración de flotillas software, sistema facturación en línea",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "MXN",
              "description": "Control de flotas GPS gratis - Software gratuito para gestión de flotas y facturación electrónica"
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
              "Control de flotas GPS en tiempo real",
              "Software de gestión de flotas completo",
              "Monitoreo de flotas 24/7",
              "Facturación combustible para flotillas",
              "Sistema de facturación electrónica CFDI",
              "Software control de flotillas gratis",
              "Administración de flota GPS",
              "Plataforma de facturación electrónica",
              "Software de rastreo de flotas GPS",
              "Gestión de flotas por GPS",
              "Control de flotillas software",
              "Sistema control de flotas avanzado"
            ],
            "applicationSubCategory": "Fleet Management, Electronic Billing, GPS Tracking, Fleet Monitoring, Fleet Control Software",
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Fleet Managers, Transportation Companies, Logistics Companies, Fuel Fleet Managers, GPS Fleet Controllers"
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
            "description": "Empresa líder en control de flotas GPS, software de gestión de flotas, monitoreo de flotas y facturación combustible para flotillas. Especialistas en administración de flotillas software y sistemas de facturación electrónica CFDI.",
            "url": "https://www.gonzher.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "MX"
            },
            "sameAs": [
              "https://www.facebook.com/gonzher",
              "https://twitter.com/gonzher"
            ],
            "priceRange": "Gratis - Control de Flotas GPS Sin Costo",
            "category": "Software de Gestión de Flotas y Control GPS"
          })
        }}
      />
      
      {/* Schema markup adicional para FAQ sobre control de flotas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué es el control de flotas GPS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El control de flotas GPS es un sistema de gestión de flotas que utiliza tecnología GPS para monitorear, rastrear y administrar vehículos en tiempo real. Gonzher ofrece software de control de flotas GPS gratis para la gestión completa de flotillas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuál es el mejor software de gestión de flotas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gonzher es el mejor software de gestión de flotas que combina control GPS, monitoreo de flotas en tiempo real, facturación combustible para flotillas y administración de flotillas software en una sola plataforma gratuita."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo funciona la facturación combustible para flotas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La facturación combustible para flotas permite generar facturas electrónicas CFDI automáticamente basadas en el consumo de combustible. Nuestro sistema de facturación electrónica facilita la administración fiscal de flotillas."
                }
              }
            ]
          })
        }}
      />
      
      {/* Schema markup para Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Control de Flotas GPS y Software de Gestión",
            "provider": {
              "@type": "Organization",
              "name": "Gonzher"
            },
            "areaServed": "México",
            "description": "Servicios completos de control de flotas GPS, software de gestión de flotas, monitoreo de flotas, facturación combustible para flotillas y administración de flotillas software.",
            "offers": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Control de Flotas GPS Gratis",
                  "description": "Software control de flotillas gratis con monitoreo en tiempo real"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Sistema de Facturación Electrónica CFDI",
                  "description": "Plataforma de facturación electrónica para combustible de flotas"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Software de Rastreo de Flotas GPS",
                  "description": "Gestión de flotas por GPS con localización en tiempo real"
                }
              }
            ]
          })
        }}
      />
      
      {/* Encabezados H1 ocultos para SEO */}
      <h1 className="sr-only">
        Control de Flotas GPS | Software de Gestión de Flotas | Gonzher - Monitoreo de Flotas y Facturación Combustible
      </h1>
      
      {/* Encabezados H2 ocultos para keywords de cola larga */}
      <h2 className="sr-only">
        Software Control de Flotas GPS Gratis - Sistema de Facturación Electrónica CFDI
      </h2>
      
      <h2 className="sr-only">
        Administración de Flotillas Software - Plataforma de Facturación Electrónica
      </h2>
      
      {/* Contenido semántico oculto para mejor indexación */}
      <div className="sr-only">
        <h3>Software Control de Flotas Características Principales</h3>
        <ul>
          <li>Control de flotas GPS gratis con monitoreo 24/7</li>
          <li>Software gestión de flotas con reportes en tiempo real</li>
          <li>Programa control de flotas para administración completa</li>
          <li>Sistema de facturación electrónica CFDI automatizado</li>
          <li>Plataforma de facturación para combustible de flotillas</li>
          <li>Software de rastreo de flotas GPS con localización precisa</li>
          <li>Gestión de flotas por GPS con alertas inteligentes</li>
          <li>Administración de flota GPS para empresas</li>
          <li>Sistema control de flotas con análisis avanzado</li>
          <li>Software para control de combustible optimizado</li>
        </ul>
        
        <h3>Beneficios del Control GPS de Flotas</h3>
        <p>
          Nuestro software de gestión de flotillas ofrece control de flotas por GPS, 
          monitoreo de flotas en tiempo real y facturación gasolina para flotillas. 
          El mejor sistema para flotas que incluye software localización flota y 
          gestión de flotillas GPS para optimizar la administración de flotillas software.
        </p>
        
        <h3>Sistema de Facturación Electrónica</h3>
        <p>
          Plataforma de facturación electrónica completa con sistema de facturación en línea, 
          facturación combustible para flotillas y sistema de facturación CFDI. 
          Programas para facturar en línea integrados con control de flotillas software.
        </p>
      </div>
      
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
