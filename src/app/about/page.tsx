import AboutHero from "@/components/sections/AboutHero";
import OurStory from "@/components/sections/OurStory";
import MeetFounder from "@/components/sections/MeetFounder";
import CorePrinciples from "@/components/sections/CorePrinciples";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Industries from "@/components/sections/Industries";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ImpactAchievements from "@/components/sections/ImpactAchievements";
import AboutFinalCta from "@/components/sections/AboutFinalCta";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MeetFounder />
      <CorePrinciples />
      <WhatWeDo />
      <Industries />
      <WhyChooseUs />
      <ImpactAchievements />
      <AboutFinalCta />
    </main>
  );
}