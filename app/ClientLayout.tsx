"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/ui/Header";
import WhatsAppIcon from "@/app/sections/wpp-icon";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./GoogleAnalytics";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname(); // Utiliza usePathname para obtener la ruta actual

  return (
    <>
      <Header pathName={pathName} />
      {children}
      <WhatsAppIcon />
      <GoogleAnalytics />
      <Analytics />
    </>
  );
};

export default ClientLayout;
