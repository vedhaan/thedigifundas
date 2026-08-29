import EcommerceHero from "@/components/sections/EcommerceHero";
import WhyEcommerceMatters from "@/components/sections/WhyEcommerceMatters";
import EcommerceServices from "@/components/sections/EcommerceServices";
import EcommerceIndustries from "@/components/sections/EcommerceIndustries";
import EcommerceProcess from "@/components/sections/EcommerceProcess";
import WhyChooseDigiFundas from "@/components/sections/WhyChooseDigiFundas";
import EcommerceFeatures from "@/components/sections/EcommerceFeatures";
import EcommerceFAQ from "@/components/sections/EcommerceFAQ";
import EcommerceFinalCta from "@/components/sections/EcommerceFinalCta";

export default function EcommerceWebsiteDevelopmentPage() {
  return (
    <main>
      <EcommerceHero />
      <WhyEcommerceMatters />
      <EcommerceServices />
      <EcommerceIndustries />
      <EcommerceProcess />
      <WhyChooseDigiFundas />
      <EcommerceFeatures />
      <EcommerceFAQ />
      <EcommerceFinalCta />
    </main>
  );
}