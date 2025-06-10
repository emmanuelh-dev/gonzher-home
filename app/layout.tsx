import "@/css/globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";
import Contacto from "./sections/contact";
import SEOFooterLinks from "./components/SEOFooterLinks";

import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Software de Logística y Facturación En Linea - Sistemas Gonzher",
    template: `%s - Sistemas Gozher`,
  },
  description: "Optimiza tu logística con el software de Gonzher. Facturación en línea, seguimiento de pedidos y más para transportistas.",
  keywords:
    "software logístico, facturación en línea, soluciones para transportistas, eficiencia logística, Gonzher",
  openGraph: {
    url: "https://www.gonzher.com",
    title: "Gonzher - Software de Logística y Facturación",
    description:
      "Optimiza tu logística con el software de Gonzher. Facturación en línea, seguimiento de pedidos y más para transportistas.",
    images: [
      {
        url: "https://www.gonzher.com/og-image.png",
        width: 800,
        height: 600,
        alt: "Gonzher",
      },
    ],
  },
  twitter: {
    title: "Gonzher - ",
    description: "Optimiza procesos de transporte con nuestro software",
    images: "https://www.gonzher.com/og-image.png",

  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  return (
    <html lang="es">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
        <Contacto />
        <SEOFooterLinks />
      </body>
    </html>
  );
}
