export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gonzher",
  "url": "https://www.gonzher.com",
  "logo": "https://www.gonzher.com/logo.png",
  "description": "Software integral para control de flotas GPS, facturación combustible y administración de flotillas",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MX"
  },
  "sameAs": [
    "https://www.facebook.com/gonzher",
    "https://www.linkedin.com/company/gonzher"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+52-1-234-567-8900",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  }
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Gonzher Fleet Management",
  "applicationCategory": "Fleet Management Software",
  "operatingSystem": "Web-based",
  "description": "Software para control de flotas GPS, facturación combustible y administración de flotillas",
  "url": "https://www.gonzher.com",
  "publisher": {
    "@type": "Organization",
    "name": "Gonzher"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "MXN",
    "description": "Demo gratuita disponible"
  },
  "featureList": [
    "Control GPS en tiempo real",
    "Facturación combustible flotas",
    "Administración de flota GPS",
    "Sistema facturación en línea",
    "Control de flotillas software",
    "Seguimiento de la flota en tiempo real"
  ]
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Gonzher",
  "url": "https://www.gonzher.com",
  "description": "Software para control de flotas GPS y facturación electrónica",
  "publisher": {
    "@type": "Organization",
    "name": "Gonzher"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.gonzher.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
