"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your business, goals, audience, and challenges.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Developing a customized roadmap aligned with your objectives.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Implementing solutions across design, marketing, content, development, and automation.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "Monitoring performance, gathering insights, and continuously improving outcomes.",
  },
];

// Node positions along the zigzag path, in the 0-800 (x) / 0-900 (y) SVG coordinate space
const nodePositions = [
  { x: 120, y: 100 },
  { x: 620, y: 300 },
  { x: 120, y: 550 },
  { x: 620, y: 800 },
];

// Smooth curve connecting the 4 nodes via cubic bezier segments
const pathD = `
  M ${nodePositions[0].x} ${nodePositions[0].y}
  C ${nodePositions[0].x + 250} ${nodePositions[0].y + 50},
    ${nodePositions[1].x - 250} ${nodePositions[1].y - 50},
    ${nodePositions[1].x} ${nodePositions[1].y}
  C ${nodePositions[1].x - 250} ${nodePositions[1].y + 100},
    ${nodePositions[2].x + 250} ${nodePositions[2].y - 100},
    ${nodePositions[2].x} ${nodePositions[2].y}
  C ${nodePositions[2].x + 250} ${nodePositions[2].y + 100},
    ${nodePositions[3].x - 250} ${nodePositions[3].y - 100},
    ${nodePositions[3].x} ${nodePositions[3].y}
`;

export default function OurProcess() {
  const desktopRef = useRef(null);
  const isInView = useInView(desktopRef, { once: true, amount: 0.2 });

  return (
    <Section id="process" className="relative overflow-hidden">
      {/* drifting gradient background */}
      <motion.div
        animate={{ x: [0, 50, -30, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/3 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-primary/[0.07] blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, -40, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-accent-secondary/[0.06] blur-[140px]"
      />

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Our Process
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            How We{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Work
            </span>
          </h2>
        </motion.div>

        {/* ---------- Desktop: centered winding SVG path ---------- */}
        <div
          ref={desktopRef}
          className="relative mx-auto mt-16 hidden max-w-3xl lg:block"
          style={{ height: "900px" }}
        >
          <svg viewBox="0 0 800 900" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMin meet">
            {/* faint static track */}
            <path d={pathD} fill="none" stroke="var(--color-border)" strokeWidth="2" />
            {/* animated gradient draw-in */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="url(#processGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-accent-primary)" />
                <stop offset="100%" stopColor="var(--color-accent-secondary)" />
              </linearGradient>
            </defs>
          </svg>

          {steps.map((step, i) => {
            const pos = nodePositions[i];
            const alignRight = pos.x > 400;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.35 }}
                style={{
                  position: "absolute",
                  left: `${(pos.x / 800) * 100}%`,
                  top: `${(pos.y / 900) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* node dot */}
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent-primary bg-bg-primary shadow-[0_0_16px_rgba(255,138,0,0.5)]" />

                {/* content card, offset from the node */}
                <div
                  className={`group absolute top-1/2 w-72 -translate-y-1/2 rounded-2xl border border-border bg-bg-primary/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[calc(50%+4px)] hover:border-accent-primary/50 hover:shadow-[0_20px_50px_-15px_rgba(255,138,0,0.2)] ${
                    alignRight ? "left-8" : "right-8 text-right"
                  }`}
                >
                  <span className="font-heading text-3xl font-bold text-accent-primary/30 transition-colors group-hover:text-accent-primary/60">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ---------- Mobile/tablet: simple vertical stack, no zigzag ---------- */}
        <div className="mt-14 max-w-xl lg:hidden">
          <div className="relative">
            <div className="absolute bottom-0 left-[19px] top-2 w-px bg-border" />
            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-14"
                >
                  <span className="absolute left-[11px] top-1 h-[19px] w-[19px] rounded-full border-2 border-accent-primary bg-bg-secondary shadow-[0_0_16px_rgba(255,138,0,0.5)]" />
                  <span className="font-heading text-2xl font-bold text-accent-primary/30">
                    {step.number}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-text-secondary sm:text-base">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}