import EmailMarketingHero from "@/components/sections/EmailMarketingHero";
import EmailMarketingServices from "@/components/sections/EmailMarketingServices";
import EmailMarketingSetup from "@/components/sections/EmailMarketingSetup";
import EmailMarketingBenefits from "@/components/sections/EmailMarketingBenefits";
import EmailMarketingFAQ from "@/components/sections/EmailMarketingFAQ";
import EmailMarketingFinalCta from "@/components/sections/EmailMarketingFinalCta";

export default function EmailMarketingPage() {
  return (
    <main>
      <EmailMarketingHero />
      <EmailMarketingServices />
      <EmailMarketingSetup />
      <EmailMarketingBenefits />
      <EmailMarketingFAQ />
      <EmailMarketingFinalCta />
    </main>
  );
}