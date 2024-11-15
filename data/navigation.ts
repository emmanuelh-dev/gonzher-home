import { FaFileInvoiceDollar, FaMapMarkerAlt } from "react-icons/fa";

export const navigationSections = [
  {
    id: 'products',
    title: 'Productos',
    type: 'dropdown',
    layout: 'grid',
    columns: 'lg:grid-cols-2',
    width: 'w-[600px]',
    items: [
      {
        href: "https://system.gonzher.com",
        title: "Facturación",
        description: "Sistema de CFDI 4.0",
        icon: FaFileInvoiceDollar
      },
      {
        href: "https://gps.gonzher.com",
        title: "GPS Gonzher",
        description: "Administra tu flota.",
        icon: FaMapMarkerAlt
      },
      {
        href: "/app-operadores",
        title: "App Operadores",
        description: "Automatiza tu logística.",
        icon: FaMapMarkerAlt
      }
    ]
  },
  {
    id: 'products',
    title: 'Descargas',
    type: 'dropdown',
    layout: 'grid',
    columns: 'lg:grid-cols-2',
    width: 'w-[600px]',
    items: [
      {
        href: "https://play.google.com/store/apps/details?id=org.gonzher.manager",
        title: "GPS GONZHER",
        description: "Android",
        icon: FaMapMarkerAlt
      },
      {
        href: "https://apps.apple.com/mx/app/gonzher/id6448482872",
        title: "GPS GONZHER",
        description: "IOS",
        icon: FaMapMarkerAlt
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.gonzher.app",
        title: "APP OPERADORES",
        description: "Android",
        icon: FaMapMarkerAlt
      },
      {
        href: "https://apps.apple.com/mx/app/gonzher/id6448482872",
        title: "APP OPERADORES",
        description: "IOs",
        icon: FaMapMarkerAlt
      },
    ]
  },
  {
    id: 'links',
    type: 'links',
    items: [
      {
        href: "https://docs.gonzher.com/docs/intro",
        title: "Documentación",
        variant: "link"
      },
      {
        href: "/nosotros",
        title: "Nosotros",
        variant: "link"
      },
      {
        href: "/app-operadores",
        title: "App Operadores",
        variant: "link"
      }
    ]
  }
];