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
  title: 'Gonzher - Software Control de Flotas GPS y Facturación Electrónica CFDI',
  description: 'Gonzher: Sistema integral para control de flotas GPS, facturación combustible gasolina, software administración flotillas y facturación electrónica en línea. Soluciones completas para gestión y seguimiento de flotas en tiempo real.',
  keywords: [
    'gonzher',
    'control de flotas',
    'facturación combustible flotas',
    'facturación gasolina flotas', 
    'control gps flotas',
    'sistema facturación en línea',
    'software para control de flotas',
    'sistema de facturación en línea',
    'sistemas de facturación electrónica en línea',
    'administración de flota gps',
    'control de flotillas software',
    'sistema de facturación cfdi',
    'software control de flota',
    'administración de flotillas software',
    'facturarenlinea',
    'soluciones de rastreo',
    'software para gestión de flotas',
    'sistemas de facturación',
    'software para administración de flotas',
    'factura electrónica sistema',
    'software control de flotas',
    'plataforma de facturación',
    'software para flotas',
    'seguimiento de la flota en tiempo real',
    'plataforma de facturación electrónica'
  ].join(', '),
  openGraph: {
    title: 'Gonzher - Software Control de Flotas GPS y Facturación Electrónica',
    description: 'Sistema integral para control de flotas GPS, facturación combustible, administración de flotillas y facturación electrónica CFDI en línea.',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gonzher - Software Control de Flotas GPS y Facturación',
    description: 'Sistema integral para control de flotas GPS, facturación combustible y administración de flotillas.',
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
            "name": "Gonzher",
            "description": "Software integral para control de flotas GPS, facturación combustible y administración de flotillas",
            "url": "https://www.gonzher.com",
            "applicationCategory": "Fleet Management Software",
            "operatingSystem": "Web-based",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "MXN"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Gonzher",
              "url": "https://www.gonzher.com"
            },
            "keywords": "control de flotas, facturación combustible, GPS flotillas, software gestión flotas, facturación electrónica"
          })
        }}
      />
      
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
