import BrandingHero from "@/components/sections/BrandingHero";
import WhyBranding from "@/components/sections/WhyBranding";
import BrandingServices from "@/components/sections/BrandingServices";
import BrandingProcess from "@/components/sections/BrandingProcess";
import BusinessWebsiteIndustries from "@/components/sections/BusinessWebsiteIndustries";
import WhyChooseDigiFundas from "@/components/sections/WhyChooseDigiFundas";
import BrandingFAQ from "@/components/sections/BrandingFAQ";
import BrandingFinalCta from "@/components/sections/BrandingFinalCta";

export default function BrandingDesignPage() {
  return (
    <main>
      <BrandingHero />
      <WhyBranding />
      <BrandingServices />
      <BrandingProcess />
      <BusinessWebsiteIndustries />
      <WhyChooseDigiFundas />
      <BrandingFAQ />
      <BrandingFinalCta />
    </main>
  );
}