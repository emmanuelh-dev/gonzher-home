import About from "@/app/sections/about";
import Contact from "@/app/sections/contact";
import FAQ from "@/app/sections/faq";
import Features from "@/app/sections/features";
import OurMarkers from "@/app/sections/markers";
import Pricing from "@/app/sections/pricing";
import Services from "@/app/sections/services";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import AppOperadores from "../sections/AppOperadores";
import { CarrouselApp } from "../sections/CarouselApp";

export default function Page() {
  return (
    <div className="pt-14">
        <AppOperadores/>
        <CarrouselApp/>
    </div>
  );
}
