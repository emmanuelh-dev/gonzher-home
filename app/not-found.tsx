import Image from "next/image";

export default function Custom404() {
  return <div className="h-screen flex flex-col text-center  items-center mx-auto justify-center">
    <h1 className="text-4xl lg:6xl font-bold">404 - Ocurrio un error.
    </h1>
    <Image className="w-full max-w-[450px]" src="/dog.png" width="250" height="250" alt="Perro desconectando un servidor" />
  </div>
}