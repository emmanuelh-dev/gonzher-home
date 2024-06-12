import About from "@/app/sections/about";
import Contact from "@/app/sections/contact";
import FAQ from "@/app/sections/faq";
import Features from "@/app/sections/features";
import OurMarkers from "@/app/sections/markers";
import Pricing from "@/app/sections/pricing";
import Services from "@/app/sections/services";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Potencial from "./potencial";
import Objetivos from "./objetivos";

export default function Home() {
  return (
    <div>
      <div className="relative pt-[120px] md:pt-[130px] lg:pt-[160px]">
        <div className="container mx-auto space-y-12">
          <Objetivos />
          <Potencial />
        </div>
      </div>
    </div>
  );
}
