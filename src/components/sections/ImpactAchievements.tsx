"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 17, suffix: "X", label: "ROAS Achieved Through Performance Marketing" },
  { value: 300, suffix: "K+", label: "Organic Views Generated Through Strategic Content" },
  { value: 3, suffix: "+", label: "Years Supporting Business Growth" },
];

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function RingStat({ stat, delay }: { stat: (typeof stats)[number]; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="relative h-40 w-40 sm:h-44 sm:w-44">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          {/* track */}
          <circle cx="60" cy="60" r={RADIUS} fill="none" stroke="var(--color-border)" strokeWidth="4" />
          {/* animated ring — draws to a full, complete circle, not a data-proportional fill */}
          <motion.circle
            cx="60"
            cy="60"
            r={RADIUS}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={isInView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.4, delay, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent-primary)" />
              <stop offset="100%" stopColor="var(--color-accent-secondary)" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            <CountUp end={stat.value} suffix={stat.suffix} />
          </span>
        </div>
      </div>

      <p className="mt-6 max-w-[220px] font-body text-sm text-text-secondary sm:text-base">
        {stat.label}
      </p>
    </div>
  );
}

export default function ImpactAchievements() {
  return (
    <Section id="impact-achievements" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent-primary/[0.06] blur-[140px]" />
      </div>

      <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Impact & Achievements
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Building Momentum Through{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Meaningful Results
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 flex flex-col items-center gap-14 sm:flex-row sm:justify-center sm:gap-10 lg:gap-16">
          {stats.map((stat, i) => (
            <RingStat key={stat.label} stat={stat} delay={i * 0.15} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 max-w-xl text-center font-heading text-lg font-semibold text-text-primary sm:text-xl"
        >
          Growing Portfolio Of Successful Client Collaborations
        </motion.p>
      </Container>
    </Section>
  );
}