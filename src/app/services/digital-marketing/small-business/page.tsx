import SmallBusinessHero from "@/components/sections/SmallBusinessHero";
import WhyDigitalMarketingSmallBusiness from "@/components/sections/WhyDigitalMarketingSmallBusiness";
import SmallBusinessSolutions from "@/components/sections/SmallBusinessSolutions";
import SmallBusinessChallenges from "@/components/sections/SmallBusinessChallenges";
import SmallBusinessProcess from "@/components/sections/SmallBusinessProcess";
import WhyChooseDigiFundas from "@/components/sections/WhyChooseDigiFundas";
import SmallBusinessFinalCta from "@/components/sections/SmallBusinessFinalCta";

export default function SmallBusinessPage() {
  return (
    <main>
      <SmallBusinessHero />
      <WhyDigitalMarketingSmallBusiness />
      <SmallBusinessSolutions />
      <SmallBusinessChallenges />
      <SmallBusinessProcess />
      <WhyChooseDigiFundas />
      <SmallBusinessFinalCta />
    </main>
  );
}