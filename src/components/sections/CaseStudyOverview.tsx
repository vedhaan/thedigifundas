"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faBullseye } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import type { CaseStudy } from "@/lib/constants/caseStudies";

export default function CaseStudyOverview({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Section id="overview" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent-primary/[0.05] blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-secondary/[0.05] blur-[130px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        {/* overview — centered, matches hero's centered alignment above it,
            instead of switching to left-align mid-page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent-primary">
            Overview
          </span>
          <p className="mt-4 font-body text-lg leading-relaxed text-text-primary sm:text-xl">
            {caseStudy.overview}
          </p>
        </motion.div>

        {/* challenge + objectives — equal height enforced via items-stretch
            (grid default) + h-full on each card, regardless of item count */}
        <div className="mx-auto mt-16 grid max-w-5xl items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col rounded-2xl border border-border bg-bg-primary p-7 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-secondary text-text-secondary">
                <FontAwesomeIcon icon={faCircleExclamation} className="h-4 w-4" />
              </span>
              <h2 className="font-heading text-lg font-bold text-text-primary sm:text-xl">
                The Challenge
              </h2>
            </div>
            <ul className="mt-6 flex flex-1 flex-col gap-4">
              {caseStudy.challenges.map((c, i) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bg-secondary font-heading text-[10px] font-bold text-text-secondary/70">
                    {i + 1}
                  </span>
                  <span className="font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex h-full flex-col rounded-2xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/[0.06] to-transparent p-7 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                <FontAwesomeIcon icon={faBullseye} className="h-4 w-4" />
              </span>
              <h2 className="font-heading text-lg font-bold text-text-primary sm:text-xl">
                Objectives
              </h2>
            </div>
            <ul className="mt-6 flex flex-1 flex-col gap-4">
              {caseStudy.objectives.map((o, i) => (
                <li key={o} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-primary/15 font-heading text-[10px] font-bold text-accent-primary">
                    {i + 1}
                  </span>
                  <span className="font-body text-sm leading-relaxed text-text-primary sm:text-base">
                    {o}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}