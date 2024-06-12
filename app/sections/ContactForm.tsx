"use client";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { Button } from "@/components/ui/button";
import React from "react";

export const ContactForm = () => {
  const sendMessage = (formData: FormData) => {
    const { fullName, phone, company, message } = Object.fromEntries(formData);
    // Construye el enlace de WhatsApp con el mensaje predefinido
    const whatsappLink = `https://wa.me/8128938412?text=${encodeURIComponent(
      `Hola soy ${fullName},
Telefono: ${phone}
Company: ${company}
Mensaje: ${message}`
    )}`;

    // Abre el enlace en una nueva ventana/tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <form className="space-y-4" action={sendMessage}>
      <div>
        <Label htmlFor="fullName">Nombre Completo*</Label>
        <Input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Adam Gelius"
        />
      </div>
      <div>
        <Label htmlFor="email">Correo Electrónico*</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="ejemplo@tucorreo.com"
        />
      </div>
      <div>
        <Label htmlFor="company">Compañía*</Label>
        <Input
          id="company"
          type="text"
          name="company"
          placeholder="Tu Compañía"
        />
      </div>
      <div>
        <Label htmlFor="phone">Teléfono*</Label>
        <Input id="phone" type="text" name="phone" placeholder="+123123123" />
      </div>
      <div>
        <Label htmlFor="message">Mensaje*</Label>
        <textarea
          id="message"
          name="message"
          placeholder="escribe tu mensaje aquí"
          className="w-full border-0 border-b border-[#f1f1f1] focus:border-primary focus:outline-none py-4 resize-none"
        ></textarea>
      </div>
      <div>
        <Button type="submit" className="w-full">
          Enviar Mensaje
        </Button>
      </div>
    </form>
  );
};
