"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const points = [
  {
    title: "Business-Focused Approach",
    description: "Every recommendation is aligned with your growth objectives.",
  },
  {
    title: "Creative + Analytical Thinking",
    description: "Combining creativity with performance-driven strategies.",
  },
  {
    title: "Integrated Expertise",
    description: "Marketing, design, content, development, and AI solutions under one roof.",
  },
  {
    title: "Long-Term Perspective",
    description: "Building brands and systems that support sustainable growth.",
  },
];

export default function WhyChooseDigiFundas() {
  return (
    <Section id="why-choose-digifundas" bgSecondary className="relative overflow-hidden">
      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Why Choose The Digi Fundas
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            A Strategic Partner, Not Just A{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Service Provider
            </span>
          </h2>
        </motion.div>

        {/* ---------- Desktop: interlocking diagonal panels ---------- */}
        <div className="relative mt-16 hidden lg:block">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative flex items-center"
              style={{
                marginTop: i === 0 ? 0 : "-1.5rem",
                zIndex: points.length - i,
              }}
            >
              <div
                className={`relative w-full overflow-hidden py-10 pl-12 pr-10 transition-transform duration-300 group-hover:-translate-y-1 ${
                  i % 2 === 0 ? "-skew-y-1" : "skew-y-1"
                }`}
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(90deg, color-mix(in srgb, var(--color-accent-primary) 10%, var(--color-bg-primary)), var(--color-bg-primary))"
                      : "linear-gradient(90deg, var(--color-bg-primary), color-mix(in srgb, var(--color-accent-secondary) 10%, var(--color-bg-primary)))",
                  borderLeft: "3px solid var(--color-accent-primary)",
                }}
              >
                {/* content counter-skewed so text stays level */}
                <div className={`flex items-center gap-8 ${i % 2 === 0 ? "skew-y-1" : "-skew-y-1"}`}>
                  <span className="shrink-0 font-heading text-5xl font-bold text-accent-primary/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-text-primary transition-colors group-hover:text-accent-primary sm:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl font-body text-sm text-text-secondary sm:text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------- Mobile/tablet: flat stacked fallback, no skew ---------- */}
        <div className="mt-14 flex flex-col gap-4 lg:hidden">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-5 rounded-2xl border-l-[3px] border-accent-primary bg-bg-primary p-6"
            >
              <span className="shrink-0 font-heading text-3xl font-bold text-accent-primary/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-text-primary">
                  {point.title}
                </h3>
                <p className="mt-1.5 font-body text-sm text-text-secondary">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}