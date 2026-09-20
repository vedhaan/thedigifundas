"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faLightbulb,
  faTrophy,
  faArrowTrendUp,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const values = [
  {
    title: "Ownership",
    description: "Take responsibility for your work and outcomes.",
    icon: faFlag,
    rotate: "-3deg",
    offset: "0px",
    fastener: "pin" as const,
  },
  {
    title: "Creativity",
    description: "Think differently and bring fresh ideas to the table.",
    icon: faLightbulb,
    rotate: "2deg",
    offset: "28px",
    fastener: "tape" as const,
  },
  {
    title: "Excellence",
    description: "Strive for quality in everything you do.",
    icon: faTrophy,
    rotate: "-2deg",
    offset: "-12px",
    fastener: "pin" as const,
  },
  {
    title: "Continuous Improvement",
    description: "Learn, adapt, and evolve.",
    icon: faArrowTrendUp,
    rotate: "3deg",
    offset: "20px",
    fastener: "tape" as const,
  },
  {
    title: "Integrity",
    description: "Honesty and transparency guide every decision.",
    icon: faShieldHalved,
    rotate: "-1.5deg",
    offset: "-6px",
    fastener: "pin" as const,
  },
];

export default function OurValues() {
  return (
    <Section>
      <div className="relative overflow-hidden">
        {/* Corkboard-style background wash — fills the full width instead
            of leaving bare flanks around a narrow content cluster */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,138,0,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-15 blur-[160px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,138,0,0) 70%)",
          }}
        />

        <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
            >
              What We{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                }}
              >
                Believe In
              </span>
            </motion.h2>
          </div>

          {/* Full-width grid, not a narrow centered cluster */}
          <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
                className="group relative xl:rotate-[var(--tilt)]"
                style={{
                  ["--tilt" as string]: value.rotate,
                  marginTop: value.offset,
                }}
              >
                {value.fastener === "pin" ? (
                  <span className="absolute left-1/2 top-0 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF8A00] shadow-[0_2px_8px_rgba(0,0,0,0.5)]" />
                ) : (
                  <span className="absolute left-1/2 top-0 z-10 h-5 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] bg-[#FFB347]/70" />
                )}

                <div className="relative min-h-[220px] rounded-lg border border-[#262626] bg-[#151515] p-7 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.7)] transition-shadow duration-300 group-hover:border-[#FF8A00]/30 group-hover:shadow-[0_25px_50px_-15px_rgba(255,138,0,0.15)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8A00]/10 text-[#FF8A00]">
                    <FontAwesomeIcon icon={value.icon} className="h-5 w-5" />
                  </span>

                  <h3 className="mt-5 font-heading text-xl font-bold text-white">
                    {value.title}
                  </h3>

                  <svg
                    width="60"
                    height="8"
                    viewBox="0 0 60 8"
                    className="mt-1 text-[#FF8A00]/50"
                    aria-hidden
                  >
                    <path
                      d="M2 5 Q 15 1, 30 4 T 58 3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  <p className="mt-3 font-body text-sm leading-relaxed text-[#A3A3A3]">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}