import FashionHero from "@/components/sections/FashionHero";
import WhyDigitalMarketingFashion from "@/components/sections/WhyDigitalMarketingFashion";
import FashionSolutions from "@/components/sections/FashionSolutions";
import FashionChallenges from "@/components/sections/FashionChallenges";
import FashionProcess from "@/components/sections/FashionProcess";
import WhyChooseDigiFundas from "@/components/sections/WhyChooseDigiFundas";
import ImpactNumbers from "@/components/sections/ImpactNumbers";
import FashionFAQ from "@/components/sections/FashionFAQ";
import FashionFinalCta from "@/components/sections/FashionFinalCta";

export default function FashionPage() {
  return (
    <main>
      <FashionHero />
      <WhyDigitalMarketingFashion />
      <FashionSolutions />
      <FashionChallenges />
      <FashionProcess />
      <WhyChooseDigiFundas />
      <ImpactNumbers />
      <FashionFAQ />
      <FashionFinalCta />
    </main>
  );
}