import BusinessWebsiteHero from "@/components/sections/BusinessWebsiteHero";
import WhyBusinessWebsite from "@/components/sections/WhyBusinessWebsite";
import BusinessWebsiteServices from "@/components/sections/BusinessWebsiteServices";
import BusinessWebsiteTypes from "@/components/sections/BusinessWebsiteTypes";
import BusinessWebsiteIndustries from "@/components/sections/BusinessWebsiteIndustries";
import BusinessWebsiteProcess from "@/components/sections/BusinessWebsiteProcess";
import WhyChooseDigiFundas from "@/components/sections/WhyChooseDigiFundas";
import BusinessWebsiteFeatures from "@/components/sections/BusinessWebsiteFeatures";
import BusinessWebsiteFAQ from "@/components/sections/BusinessWebsiteFAQ";
import BusinessWebsiteFinalCta from "@/components/sections/BusinessWebsiteFinalCta";

export default function BusinessWebsiteDevelopmentPage() {
  return (
    <main>
      <BusinessWebsiteHero />
      <WhyBusinessWebsite />
      <BusinessWebsiteServices />
      <BusinessWebsiteTypes />
      <BusinessWebsiteIndustries />
      <BusinessWebsiteProcess />
      <WhyChooseDigiFundas />
      <BusinessWebsiteFeatures />
      <BusinessWebsiteFAQ />
      <BusinessWebsiteFinalCta />
    </main>
  );
}