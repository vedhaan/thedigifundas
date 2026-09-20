import CareersHero from "@/components/sections/CareersHero";
import CareersWhyUs from "@/components/sections/CareersWhyUs";
import OpenPositions from "@/components/sections/OpenPositions";
import InternshipPrograms from "@/components/sections/InternshipPrograms";
import OurValues from "@/components/sections/OurValues";
import ApplicationForm from "@/components/sections/ApplicationForm";
import FreelanceCollaborations from "@/components/sections/FreelanceCollaborations";
import CareersFinalCta from "@/components/sections/CareersFinalCta";

export default function CareerPage() {
  return (
    <main>
      <CareersHero />
      <CareersWhyUs />
      <OpenPositions />
      <InternshipPrograms />
      <OurValues />
      {/* TODO: ApplicationForm is UI-only, not wired to a real endpoint.
          Resume upload specifically needs a paid Formspree plan (or an
          alternate upload method) — confirm before connecting. */}
      <ApplicationForm />
      <FreelanceCollaborations />
      <CareersFinalCta />
    </main>
  );
}