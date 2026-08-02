import GoogleAdsHero from "@/components/sections/GoogleAdsHero";
import WhyGoogleAds from "@/components/sections/WhyGoogleAds";
import GoogleAdsServices from "@/components/sections/GoogleAdsServices";
import GoogleAdsCampaignTypes from "@/components/sections/GoogleAdsCampaignTypes";
import MetaAdsIndustries from "@/components/sections/MetaAdsIndustries";
import GoogleAdsProcess from "@/components/sections/GoogleAdsProcess";
import WhyChooseDigiFundas from "@/components/sections/WhyChooseDigiFundas";
import ImpactNumbers from "@/components/sections/ImpactNumbers";
import GoogleAdsFAQ from "@/components/sections/GoogleAdsFAQ";
import ServicesFinalCta from "@/components/sections/ServicesFinalCta";

export default function GoogleAdsManagementPage() {
  return (
    <main>
      <GoogleAdsHero />
      <WhyGoogleAds />
      <GoogleAdsServices />
      <GoogleAdsCampaignTypes />
      <MetaAdsIndustries />
      <GoogleAdsProcess />
      <WhyChooseDigiFundas />
      <ImpactNumbers />
      <GoogleAdsFAQ />
      <ServicesFinalCta />
    </main>
  );
}