import Header from "@/components/ui/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsAppIcon from "@/app/sections/wpp-icon";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./GoogleAnalytics";
import { usePathname } from "next/navigation";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Software de Logística y Facturación En Linea - Sistemas Gonzher",
  description:
    "Optimiza tu logística con el software de Gonzher. Facturación en línea, seguimiento de pedidos y más para transportistas.",
  keywords:
    "software logístico, facturación en línea, soluciones para transportistas, eficiencia logística, Gonzher",
  canonical: "https://www.gonzher.com",
  meta: {
    "application-name": "Gonzher - Software de Logística y Facturación",
  },
  openGraph: {
    url: "https://www.gonzher.com",
    title: "Gonzher - Software de Logística y Facturación",
    description:
      "Optimiza tu logística con el software de Gonzher. Facturación en línea, seguimiento de pedidos y más para transportistas.",
    images: [
      {
        url: "https://gonzher.com/og-image.png",
        width: 800,
        height: 600,
        alt: "Gonzher",
      },
    ],
    twitter: {
      title: "Gonzher - ",
      description: "Optimiza procesos de transporte con nuestro software",
      image: "https://gonzher.com/og-image.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}