"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { comparisonPoints } from "@/lib/constants/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent-primary/[0.06] blur-[130px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Why Businesses Choose The Digi Fundas
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            A Partnership Focused On{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
        </motion.div>

        {/* column headers, desktop only — bumped up in size and weight */}
        <div className="relative mt-14 hidden grid-cols-2 gap-6 lg:grid">
          <span className="font-heading text-lg font-bold text-accent-primary sm:text-xl">
            Working With Us
          </span>
          <span className="font-heading text-lg font-bold text-text-secondary/60 sm:text-xl">
            The Typical Approach
          </span>
          {/* center divider starts at header level, extends down via the row wrapper below */}
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-border" />
        </div>

        <div className="relative mt-6 border-t border-border lg:mt-4">
          {/* vertical divider running the full height of all rows, desktop only */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-border lg:block" />

          {comparisonPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid gap-4 border-b border-border py-8 lg:grid-cols-2 lg:gap-6 lg:py-10"
            >
              {/* Us — emphasized */}
              <div className="flex gap-4 lg:pr-6">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-primary text-bg-primary">
                  <FontAwesomeIcon icon={faCheck} className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-text-primary sm:text-xl">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm text-text-secondary sm:text-base">
                    {point.description}
                  </p>
                </div>
              </div>

              {/* Typical approach — muted */}
              <div className="flex gap-4 pl-11 lg:pl-6">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary/40">
                  <FontAwesomeIcon icon={faXmark} className="h-3.5 w-3.5" />
                </span>
                <p className="font-body text-sm text-text-secondary/50 sm:text-base">
                  {point.contrast}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}