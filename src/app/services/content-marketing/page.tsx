import ContentMarketingHero from "@/components/sections/ContentMarketingHero";
import WhatIsContentMarketing from "@/components/sections/WhatIsContentMarketing";
import ContentMarketingServices from "@/components/sections/ContentMarketingServices";
import ContentMarketingBenefits from "@/components/sections/ContentMarketingBenefits";
import ContentMarketingFAQ from "@/components/sections/ContentMarketingFAQ";
import ContentMarketingFinalCta from "@/components/sections/ContentMarketingFinalCta";

export default function ContentMarketingPage() {
  return (
    <main>
      <ContentMarketingHero />
      <WhatIsContentMarketing />
      <ContentMarketingServices />
      <ContentMarketingBenefits />
      <ContentMarketingFAQ />
      <ContentMarketingFinalCta />
    </main>
  );
}