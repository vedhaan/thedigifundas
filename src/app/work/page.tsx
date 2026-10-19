import WorkHero from "@/components/sections/WorkHero";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";
import ProjectCategories from "@/components/sections/ProjectCategories";
import FeaturedCaseStudy from "@/components/sections/FeaturedCaseStudy";
import WorkProcess from "@/components/sections/WorkProcess";
import WorkIndustries from "@/components/sections/WorkIndustries";
import ClientFeedback from "@/components/sections/ClientFeedback";
import WorkFinalCta from "@/components/sections/WorkFinalCta";

export default function WorkPage() {
  return (
    <main>
      <WorkHero />
      <CaseStudiesGrid />
      <ProjectCategories />
      <FeaturedCaseStudy />
      <WorkProcess />
      <WorkIndustries />
      {/* TODO: ClientFeedback is wired for local testing only.
          testimonials.ts still has duplicate "Client Name 3" entries
          in both arrays, placeholder quotes, and every videoUrl is null.
          Do not deploy this section live until testimonials.ts is real. */}
      {/* <ClientFeedback /> */}
      <WorkFinalCta />
    </main>
  );
}