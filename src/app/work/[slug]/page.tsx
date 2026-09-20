import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/lib/constants/caseStudies";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyOverview from "@/components/sections/CaseStudyOverview";
import CaseStudyApproach from "@/components/sections/CaseStudyApproach";
import CaseStudyPerformanceInsights from "@/components/sections/CaseStudyPerformanceInsights";
import CaseStudyTransformation from "@/components/sections/CaseStudyTransformation";
import CaseStudyResults from "@/components/sections/CaseStudyResults";
import CaseStudyBusinessImpact from "@/components/sections/CaseStudyBusinessImpact";
import CaseStudyFinalCta from "@/components/sections/CaseStudyFinalCta";
import CaseStudyShowcase from "@/components/sections/CaseStudyShowcase";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main>
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyOverview caseStudy={caseStudy} />
      <CaseStudyShowcase caseStudy={caseStudy} />
      <CaseStudyApproach caseStudy={caseStudy} />
      <CaseStudyPerformanceInsights caseStudy={caseStudy} />
      <CaseStudyTransformation caseStudy={caseStudy} />
      <CaseStudyResults caseStudy={caseStudy} />
      <CaseStudyBusinessImpact caseStudy={caseStudy} />
      <CaseStudyFinalCta />
    </main>
  );
}