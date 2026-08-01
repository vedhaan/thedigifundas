import MetaAdsHero from "@/components/sections/MetaAdsHero";
import WhyMetaAds from "@/components/sections/WhyMetaAds";
import MetaAdsServices from "@/components/sections/MetaAdsServices";
import MetaAdsCampaignTypes from "@/components/sections/MetaAdsCampaignTypes";
import MetaAdsIndustries from "@/components/sections/MetaAdsIndustries";
import MetaAdsProcess from "@/components/sections/MetaAdsProcess";
import MetaAdsResults from "@/components/sections/MetaAdsResults";
import WhyChooseDigiFundas from "@/components/sections/WhyChooseDigiFundas";
import MetaAdsFAQ from "@/components/sections/MetaAdsFAQ";
import ServicesFinalCta from "@/components/sections/ServicesFinalCta";

export default function MetaAdsManagementPage() {
  return (
    <main>
      <MetaAdsHero />
      <WhyMetaAds />
      <MetaAdsServices />
      <MetaAdsCampaignTypes />
      <MetaAdsIndustries />
      <MetaAdsProcess />
      <MetaAdsResults />
      <WhyChooseDigiFundas />
      <MetaAdsFAQ />
      <ServicesFinalCta />
    </main>
  );
}