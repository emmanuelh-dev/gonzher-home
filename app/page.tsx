import About from '@/app/sections/about';
import Contact from '@/app/sections/contact';
import FAQ from '@/app/sections/faq';
import Features from '@/app/sections/features';
import OurMarkers from '@/app/sections/markers';
import Pricing from '@/app/sections/pricing';
import Services from '@/app/sections/services';
import AppOperadores from '@/app/sections/AppOperadores';
import Carrousel from './components/Carrousel';
import Modulos from './sections/Modulos';
import NosAman from './sections/NosAman';

export default function Home() {
  return (
    <div>
      <div className='relative pt-[120px] md:pt-[130px] lg:pt-[160px] bg-gradient-to-r from-primary to-teal-800'>
        <Carrousel />
      </div>
      <Features />
      <About />
      <Pricing />
      <AppOperadores />
      <FAQ />
      <OurMarkers />
      <NosAman />
      <Contact />
    </div>
  );
}
