import BeautyWellnessHero from "@/components/sections/BeautyWellnessHero";
import WhyDigitalMarketingBeauty from "@/components/sections/WhyDigitalMarketingBeauty";
import BeautyWellnessSolutions from "@/components/sections/BeautyWellnessSolutions";
import BeautyWellnessChallenges from "@/components/sections/BeautyWellnessChallenges";
import BeautyWellnessProcess from "@/components/sections/BeautyWellnessProcess";
import WhyChooseDigiFundas from "@/components/sections/WhyChooseDigiFundas";
import BeautyWellnessFAQ from "@/components/sections/BeautyWellnessFAQ";
import BeautyWellnessFinalCta from "@/components/sections/BeautyWellnessFinalCta";

export default function BeautyWellnessPage() {
  return (
    <main>
      <BeautyWellnessHero />
      <WhyDigitalMarketingBeauty />
      <BeautyWellnessSolutions />
      <BeautyWellnessChallenges />
      <BeautyWellnessProcess />
      <WhyChooseDigiFundas />
      <BeautyWellnessFAQ />
      <BeautyWellnessFinalCta />
    </main>
  );
}