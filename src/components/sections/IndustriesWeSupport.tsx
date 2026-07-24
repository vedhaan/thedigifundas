"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const industries = [
  "Jewellery Brands",
  "Fashion & Clothing Brands",
  "Beauty & Wellness Businesses",
  "Service-Based Businesses",
  "Ecommerce Brands",
  "Startups & Entrepreneurs",
  "Local Businesses",
];

export default function IndustriesWeSupport() {
  return (
    <Section id="industries-support" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-primary/[0.06] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Industries We Support
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Helping Businesses Across{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Diverse Industries
            </span>
          </h2>
        </motion.div>

        {/* ---------- Mobile/tablet: static pills, fade-in/up ---------- */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-3 lg:hidden">
          {industries.map((industry, i) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-full border border-border bg-bg-secondary px-5 py-2.5 font-heading text-sm font-semibold text-text-primary transition-colors duration-200 hover:border-accent-primary hover:text-accent-primary"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </Container>

      {/* ---------- Desktop: full-bleed infinite marquee, hidden on mobile/tablet ---------- */}
      <div className="relative mt-14 hidden w-full overflow-x-hidden lg:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-bg-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-bg-primary to-transparent" />

        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max gap-5">
            {[...industries, ...industries].map((industry, i) => (
              <span
                key={`${industry}-${i}`}
                className="shrink-0 whitespace-nowrap rounded-full border border-border bg-bg-secondary px-7 py-4 font-heading text-base font-semibold text-text-primary transition-colors duration-200 hover:border-accent-primary hover:text-accent-primary"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}