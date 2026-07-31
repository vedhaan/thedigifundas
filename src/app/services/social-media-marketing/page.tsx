import SmmHero from "@/components/sections/SmmHero";
import WhySocialMedia from "@/components/sections/WhySocialMedia";
import SmmServices from "@/components/sections/SmmServices";
import PlatformsWeManage from "@/components/sections/PlatformsWeManage";
import SmmProcess from "@/components/sections/SmmProcess";
import SmmIndustries from "@/components/sections/SmmIndustries";
import WhyChooseDigiFundas from "@/components/sections/WhyChooseDigiFundas";
import ImpactNumbers from "@/components/sections/ImpactNumbers";
import SmmFAQ from "@/components/sections/SmmFAQ";
import SmmFinalCta from "@/components/sections/SmmFinalCta";

export default function SocialMediaMarketingPage() {
  return (
    <main>
      <SmmHero />
      <WhySocialMedia />
      <SmmServices />
      <PlatformsWeManage />
      <SmmProcess />
      <SmmIndustries />
      <WhyChooseDigiFundas />
      <ImpactNumbers />
      <SmmFAQ />
      <SmmFinalCta />
    </main>
  );
}