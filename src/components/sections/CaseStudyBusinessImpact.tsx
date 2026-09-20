"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import type { CaseStudy } from "@/lib/constants/caseStudies";

export default function CaseStudyBusinessImpact({ caseStudy }: { caseStudy: CaseStudy }) {
  // Not every case study has this section — only Moon Glow's source doc
  // includes it. Return null cleanly rather than rendering an empty block.
  if (!caseStudy.businessImpact) {
    return null;
  }

  return (
    <Section id="business-impact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent-primary/[0.05] blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-secondary/[0.05] blur-[130px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/[0.06] to-transparent p-8 text-center sm:p-12"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg shadow-accent-primary/20">
            <FontAwesomeIcon icon={faLightbulb} className="h-6 w-6" />
          </span>

          <span className="mt-5 block font-heading text-xs font-bold uppercase tracking-widest text-accent-primary">
            Business Impact
          </span>

          <p className="mx-auto mt-4 max-w-2xl font-body text-lg font-medium leading-relaxed text-text-primary sm:text-xl">
            {caseStudy.businessImpact}
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}