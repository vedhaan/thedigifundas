"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import type { CaseStudy } from "@/lib/constants/caseStudies";

export default function CaseStudyApproach({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Section id="approach" className="relative overflow-hidden">
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
            Our Approach
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            How We Approached This Project
          </h2>
        </motion.div>

        {/* approach cards — numbered, equal height, full container width */}
        <div className="mx-auto mt-12 grid w-full max-w-5xl items-stretch gap-6 md:grid-cols-3">
          {caseStudy.approach.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex h-full flex-col rounded-2xl border border-border bg-bg-secondary p-7"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary font-heading text-sm font-bold text-bg-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold text-text-primary sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}