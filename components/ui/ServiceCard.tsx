"use client";
import { useState } from "react";

interface Props {
  service: {
    titulo: string;
    descripcion: string;
    icon: React.ReactNode;
  };
  children?: React.ReactNode;
}
export default function ServiceCard({ service, children }: Props) {
  const [open, setOpen] = useState(false);
  const { titulo, descripcion, icon } = service;
  return (
    <div className="mb-12 p-8 bg-primary rounded-2xl text-white flex flex-col items-center justify-center">
      {icon}
      <h4 className="font-bold text-2xl text-dark mb-3 ">{titulo}</h4>
      <p
        className={`overflow-hidden transition-all duration-500 ${open ? "h-72" : "h-0"}`}
      >
        {descripcion}
      </p>
      <button
        title={`Ver mas ${titulo}`}
        className="py-2 font-medium text-base text-white/80 hover:text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? "Ver menos" : "Ver Más"}
      </button>
    </div>
  );
}
