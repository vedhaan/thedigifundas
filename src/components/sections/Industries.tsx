"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { industries } from "@/lib/constants/industries";

export default function Industries() {
  return (
    <Section id="industries" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Industries We Work With
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Supporting Businesses Across{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Diverse Industries
            </span>
          </h2>
          <p className="mt-4 font-body text-text-secondary sm:text-lg">
            We have experience working with businesses across:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3 sm:gap-4"
        >
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-border bg-bg-primary px-5 py-2.5 font-heading text-sm font-semibold text-text-primary transition-colors duration-200 hover:border-accent-primary hover:text-accent-primary sm:px-6 sm:py-3 sm:text-base"
            >
              {industry}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-10 max-w-2xl text-center font-body text-text-secondary sm:text-lg"
        >
          Every industry presents unique challenges, and our approach is
          always tailored to the specific needs of the business.
        </motion.p>
      </Container>
    </Section>
  );
}