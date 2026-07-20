"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { principles } from "@/lib/constants/principles";

export default function CorePrinciples() {
  return (
    <Section id="principles" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-secondary/[0.06] blur-[130px]" />
        <div className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-accent-primary/[0.06] blur-[120px]" />
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
            What We Believe
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Our{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Core Principles
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(255,138,0,0.25)] ${
                p.size === "large" ? "sm:col-span-2" : ""
              }`}
              style={{
                background:
                  "linear-gradient(var(--color-border), var(--color-border))",
              }}
            >
              {/* gradient border reveal on hover — the p-[1px] parent shows this through as a border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* actual card surface, inset by the 1px border trick */}
              <div
                className={`relative h-full rounded-2xl bg-bg-primary ${
                  p.size === "large" ? "p-8 sm:p-12" : "p-8"
                }`}
              >
                {/* internal gradient wash for depth at rest, not just on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/[0.04] to-transparent" />

                {/* oversized decorative quote mark, unique per-card visual anchor */}
                <span className="pointer-events-none absolute -right-2 -top-6 select-none font-heading text-8xl font-bold text-accent-primary/[0.08] sm:text-9xl">
                  &ldquo;
                </span>

                <div className="relative">
                  <h3
                    className={`font-heading font-bold text-text-primary ${
                      p.size === "large" ? "text-2xl sm:text-3xl" : "text-xl"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`mt-4 font-body text-text-secondary ${
                      p.size === "large" ? "max-w-xl text-base sm:text-lg" : "text-sm sm:text-base"
                    }`}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}