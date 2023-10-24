import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Pricing from "@/components/sections/pricing";
import Services from "@/components/sections/services";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative pt-[120px] md:pt-[130px] lg:pt-[160px] bg-primary">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center mx-4">
            <div className="text-center max-w-[780px] mx-auto">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-[45px] leading-snug sm:leading-snug md:leading-snug mb-8 text-white">
                Soluciones de Software para la Industria de Logística y
                Transporte
              </h1>
              <p className="text-base sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed mx-auto mb-10 text-neutral-100 max-w-[600px]">
                Potencie su eficiencia operativa con nuestras innovadoras
                Soluciones de Software para la Industria de Logística y
                Transporte
              </p>

              <ul className="flex flex-wrap items-center justify-center mb-10">
                <li>
                  <a
                    href="/#contact"
                    className={buttonVariants({ variant: "default" })}
                  >
                    Contactanos
                  </a>
                </li>
                <li>
                  <a
                    href="https://system.gonzher.com/login"
                    target="_blank"
                    className="text-base font-medium py-4 px-6 sm:px-10 flex items-center hover:opacity-70 transition duration-300 ease-in-out text-white"
                  >
                    Iniciar Sesión
                    <span className="pl-2">
                      <svg
                        width="20"
                        height="8"
                        viewBox="0 0 20 8"
                        className="fill-current"
                      >
                        <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4">
              <div
                className="mx-auto max-w-[845px] relative z-10 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="mt-16">
                  <Image
                    src="/hero-image.jpg"
                    alt="hero"
                    className="max-w-full mx-auto rounded-t-xl rounded-tr-xl"
                    width={845}
                    height={560}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <About />
      <Pricing />
      <FAQ />
      <Contact />


    </div>
  );
}
