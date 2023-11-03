import Header from "@/components/ui/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsAppIcon from "@/components/sections/wpp-icon";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Gonzher -  Tu asistente virutal",
  description:
    "Potencie su eficiencia operativa con nuestras innovadoras Soluciones de Software para la Industria de Logística y Transporte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <WhatsAppIcon />
        <Analytics />
      </body>
    </html>
  );
}
