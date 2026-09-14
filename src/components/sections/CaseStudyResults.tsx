"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import type { CaseStudy } from "@/lib/constants/caseStudies";

export default function CaseStudyResults({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Section id="results" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent-primary/[0.07] blur-[200px]" />
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
            Results
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            What We{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Achieved
            </span>
          </h2>
        </motion.div>

        {/* full-width milestone sequence — guide line + numerals locked to
            one fixed axis via grid, no progressive indent to break alignment */}
        <div className="relative mx-auto mt-16 w-full max-w-4xl">
          {/* single continuous guide line, positioned relative to the grid's
              fixed numeral column, not drifting per-row */}
          <div
            className="pointer-events-none absolute bottom-8 top-8 w-px sm:left-[88px]"
            style={{
              left: "44px",
              background: "linear-gradient(180deg, transparent 0%, var(--color-accent-primary, #FF8A00) 8%, var(--color-accent-primary, #FF8A00) 92%, transparent 100%)",
              opacity: 0.3,
            }}
            aria-hidden
          />

          <div className="flex flex-col">
            {caseStudy.results.map((result, i) => (
              <motion.div
                key={result}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="relative grid grid-cols-[24px_64px_1fr] items-center gap-4 py-8 sm:grid-cols-[24px_88px_1fr] sm:gap-6 sm:py-10"
              >
                {/* node — fixed column, always centered on the line regardless of row */}
                <span className="relative z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary shadow-[0_0_18px_rgba(255,138,0,0.55)]" />

                {/* large outlined numeral — fixed column width, same size every row */}
                <span
                  className="font-heading text-5xl font-bold leading-none text-transparent sm:text-7xl"
                  style={{ WebkitTextStroke: "2px rgba(255,138,0,0.55)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p className="max-w-2xl font-body text-lg font-medium leading-relaxed text-text-primary sm:text-2xl">
                  {result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}