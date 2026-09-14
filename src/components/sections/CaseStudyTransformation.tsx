"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import type { CaseStudy } from "@/lib/constants/caseStudies";

export default function CaseStudyTransformation({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Section id="transformation" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent-primary">
            The Transformation
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Before &{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              After
            </span>
          </h2>
        </motion.div>

        {/* full-width table-style before/after rows — reads as a single
            coherent transformation, not disconnected cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-12 w-full max-w-4xl overflow-hidden rounded-2xl border border-border"
        >
          {/* column headers */}
          <div className="grid grid-cols-2 divide-x divide-border bg-bg-secondary">
            <div className="px-6 py-4 sm:px-8">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-text-secondary">
                Before
              </span>
            </div>
            <div className="px-6 py-4 sm:px-8">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent-primary">
                After
              </span>
            </div>
          </div>

          {/* rows */}
          <div className="divide-y divide-border">
            {caseStudy.transformation.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative grid grid-cols-2 divide-x divide-border"
              >
                <div className="flex items-center bg-bg-primary px-6 py-5 sm:px-8">
                  <span className="font-body text-sm leading-relaxed text-text-secondary line-through decoration-text-secondary/30 sm:text-base">
                    {row.before}
                  </span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-accent-primary/[0.04] to-transparent px-6 py-5 sm:px-8">
                  <span className="font-body text-sm font-medium leading-relaxed text-text-primary sm:text-base">
                    {row.after}
                  </span>
                </div>

                {/* connecting arrow marker at the column boundary */}
                <span className="absolute left-1/2 top-1/2 z-10 hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg-secondary text-accent-primary sm:flex">
                  <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}