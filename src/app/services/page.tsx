import ServicesHero from "@/components/sections/ServicesHero";
import OurExpertise from "@/components/sections/OurExpertise";
import WhyChooseDigiFundas from "@/components/sections/WhyChooseDigiFundas";
import OurProcess from "@/components/sections/OurProcess";
import IndustriesWeSupport from "@/components/sections/IndustriesWeSupport";
import FAQ from "@/components/sections/FAQ";
import ServicesFinalCta from "@/components/sections/ServicesFinalCta";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <OurExpertise />
      <WhyChooseDigiFundas />
      <OurProcess />
      <IndustriesWeSupport />
      <FAQ />
      <ServicesFinalCta />
    </main>
  );
}