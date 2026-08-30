import AiSolutionsHero from "@/components/sections/AiSolutionsHero";
import WhyAiMatters from "@/components/sections/WhyAiMatters";
import AiSolutionsServices from "@/components/sections/AiSolutionsServices";
import WhoBenefitsFromAi from "@/components/sections/WhoBenefitsFromAi";
import AiApproach from "@/components/sections/AiApproach";
import WhyChooseDigiFundas from "@/components/sections/WhyChooseDigiFundas";
import AiFAQ from "@/components/sections/AiFAQ";
import AiSolutionsFinalCta from "@/components/sections/AiSolutionsFinalCta";



export default function AiSolutionsPage() {
  return (
    <main>
      <AiSolutionsHero />
      <WhyAiMatters />
      <AiSolutionsServices />
      <WhoBenefitsFromAi />
      <AiApproach />
      <WhyChooseDigiFundas />
      <AiFAQ />
      <AiSolutionsFinalCta />
    </main>
  );
}