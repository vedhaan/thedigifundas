import ContentCreationHero from "@/components/sections/ContentCreationHero";
import ContentCreationServices from "@/components/sections/ContentCreationServices";
import WhyContentMatters from "@/components/sections/WhyContentMatters";
import ContentCreationProcess from "@/components/sections/ContentCreationProcess";
import ContentCreationFAQ from "@/components/sections/ContentCreationFAQ";
import ContentCreationFinalCta from "@/components/sections/ContentCreationFinalCta";

export default function ContentCreationPage() {
  return (
    <main>
      <ContentCreationHero />
      <ContentCreationServices />
      <WhyContentMatters />
      <ContentCreationProcess />
      <ContentCreationFAQ />
      <ContentCreationFinalCta />
    </main>
  );
}