"use client";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { Button } from "@/components/ui/button";
import React from "react";

export const ContactForm = () => {
  const handleSendMessage = () => {
    // Obtén los valores del formulario
    const fullName = document.querySelector('input[name="fullName"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const company = document.querySelector('input[name="company"]').value;

    // Construye el enlace de WhatsApp con el mensaje predefinido
    const whatsappLink = `https://wa.me/8111913676?text=${encodeURIComponent(
      `Hola soy ${fullName},
Telefono: ${phone}
Company: ${company}
Mensaje: ${message}`
    )}`;

    // Abre el enlace en una nueva ventana/tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="fullName">Nombre Completo*</Label>
        <Input id="fullName" type="text" name="fullName" placeholder="Adam Gelius" />
      </div>
      <div>
        <Label htmlFor="email">Correo Electrónico*</Label>
        <Input id="email" type="email" name="email" placeholder="ejemplo@tucorreo.com" />
      </div>
      <div>
        <Label htmlFor="company">Compañía*</Label>
        <Input id="company" type="text" name="company" placeholder="Tu Compañía" />
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
        <Button type="button" onClick={handleSendMessage} className="w-full">
          Enviar Mensaje
        </Button>
      </div>
    </form>
  );
};
