"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const benefits = [
  "Build Trust",
  "Improve Engagement",
  "Increase Visibility",
  "Generate Leads",
  "Strengthen Brand Identity",
];

const RADIUS = 140;
const ARC_LENGTH = Math.PI * RADIUS;
const TICK_COUNT = 13;
const ticks = Array.from({ length: TICK_COUNT }, (_, i) => -90 + (180 / (TICK_COUNT - 1)) * i);

export default function WhyContentMatters() {
  const gaugeRef = useRef(null);
  const isInView = useInView(gaugeRef, { once: true, margin: "-35% 0px -35% 0px" });

  return (
    <Section id="why-content-matters" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent-primary/[0.06] blur-[150px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: gauge */}
          <motion.div
            ref={gaugeRef}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center overflow-hidden rounded-3xl px-8 py-12"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, color-mix(in srgb, var(--color-accent-primary) 8%, transparent) 0%, transparent 45%, color-mix(in srgb, var(--color-accent-secondary) 6%, transparent) 100%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 40%, rgba(0,0,0,0.35) 100%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.06]" />

            <motion.div
              animate={{ x: [0, 24, -12, 0], y: [0, -16, 10, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/[0.1] blur-[100px]"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-[62%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%)" }}
            />

            <div className="relative" style={{ width: 340, height: 190 }}>
              {ticks.map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const innerR = 100;
                const outerR = 112;
                const x1 = 170 + innerR * Math.sin(rad);
                const y1 = 170 - innerR * Math.cos(rad);
                const x2 = 170 + outerR * Math.sin(rad);
                const y2 = 170 - outerR * Math.cos(rad);
                return (
                  <motion.svg
                    key={i}
                    className="absolute inset-0 h-full w-full overflow-visible"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.09 }}
                  >
                    <line
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={i / (TICK_COUNT - 1) <= 0.5 ? "var(--color-border)" : "var(--color-accent-primary)"}
                      strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
                      strokeLinecap="round"
                      opacity={i % 3 === 0 ? 0.8 : 0.4}
                    />
                  </motion.svg>
                );
              })}

              <svg viewBox="0 0 340 190" className="absolute inset-0 h-full w-full overflow-visible">
                <path d="M 30 170 A 140 140 0 0 1 310 170" fill="none" stroke="var(--color-border)" strokeWidth="14" strokeLinecap="round" />
                <motion.path
                  d="M 30 170 A 140 140 0 0 1 310 170"
                  fill="none"
                  stroke="url(#contentGaugeGradient)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={ARC_LENGTH}
                  initial={{ strokeDashoffset: ARC_LENGTH }}
                  animate={isInView ? { strokeDashoffset: 0 } : {}}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="contentGaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-border)" />
                    <stop offset="100%" stopColor="var(--color-accent-primary)" />
                  </linearGradient>
                </defs>

                <motion.path
                  d="M 250 40 C 235 60, 215 68, 195 82"
                  fill="none"
                  stroke="var(--color-text-secondary)"
                  strokeWidth="1.3"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                  transition={{ duration: 0.8, delay: 2.1 }}
                />
              </svg>

              <motion.div
                initial={{ rotate: -90 }}
                animate={isInView ? { rotate: 90 } : {}}
                transition={{ duration: 1.8, delay: 0.4, ease: [0.34, 1.2, 0.4, 1] }}
                className="absolute rounded-full bg-accent-primary"
                style={{ width: 3, height: 115, left: "170px", top: "55px", marginLeft: -1.5, transformOrigin: "1.5px 115px" }}
              />
              <div className="absolute rounded-full bg-accent-primary" style={{ width: 20, height: 20, left: "160px", top: "160px" }} />
              <div className="absolute rounded-full bg-bg-primary" style={{ width: 8, height: 8, left: "166px", top: "166px" }} />

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 2.3 }}
                className="absolute font-body text-xs italic text-text-secondary/70"
                style={{ left: "218px", top: "6px", width: "130px", transform: "rotate(-2deg)" }}
              >
                this is where content makes the difference
              </motion.p>
            </div>

            <div className="relative mt-2 flex w-full max-w-[340px] justify-between px-1">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Scrolls Past
              </span>
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent-primary">
                Stops & Engages
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="mt-6 max-w-[280px] text-center font-body text-sm text-text-secondary"
            >
              Most content gets scrolled past without a second look. The
              right content is what makes people stop.
            </motion.p>
          </motion.div>

          {/* Right */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
                Why Content Matters
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                Strong Content Helps{" "}
                <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  Businesses
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 grid grid-cols-2 gap-3"
            >
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-2.5 rounded-xl border border-border bg-bg-primary/60 px-4 py-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                    <FontAwesomeIcon icon={faCheck} className="h-3 w-3" />
                  </span>
                  <span className="font-body text-xs font-semibold leading-snug text-text-primary sm:text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}