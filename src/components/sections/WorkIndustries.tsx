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
  "Local Businesses",
  "Startups",
];

function MarqueeRow({
  reverse = false,
  filled = false,
}: {
  reverse?: boolean;
  filled?: boolean;
}) {
  const track = [...industries, ...industries];

  return (
    <div
      aria-hidden
      className="flex w-max items-center gap-8"
      style={{
        animation: `${reverse ? "marquee-reverse" : "marquee"} ${
          reverse ? 34 : 28
        }s linear infinite`,
      }}
    >
      {track.map((industry, i) => (
        <div key={`${industry}-${i}`} className="flex items-center gap-8">
          <span
            className={`whitespace-nowrap font-heading text-4xl font-bold transition-colors duration-300 sm:text-5xl md:text-6xl ${
              filled
                ? "text-white hover:text-[#FF8A00]"
                : "text-transparent [-webkit-text-stroke:1px_#3d3d3d] hover:[-webkit-text-stroke:1px_#FF8A00]"
            }`}
          >
            {industry}
          </span>
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF8A00]/60" />
        </div>
      ))}
    </div>
  );
}

export default function WorkIndustries() {
  return (
    <Section>
      <Container className="!max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-body text-sm font-semibold uppercase tracking-[0.15em] text-[#FF8A00]"
          >
            Industries We've Worked With
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Experience Across{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
              }}
            >
              Multiple Industries
            </span>
          </motion.h2>
        </div>

        {/* Screen-reader accessible list — the marquee below is decorative */}
        <ul className="sr-only">
          {industries.map((industry) => (
            <li key={industry}>{industry}</li>
          ))}
        </ul>
      </Container>

      <div className="relative mt-16 space-y-6 overflow-hidden py-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0D0D0D] to-transparent sm:w-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0D0D0D] to-transparent sm:w-40"
        />

        <MarqueeRow filled />
        <MarqueeRow reverse />
      </div>
    </Section>
  );
}