"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  faMagnifyingGlass, faChessKnight, faPenNib, faBullhorn, faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const stages = [
  { id: "01", icon: faMagnifyingGlass, title: "Discovery", desc: "Understanding your business, audience, competitors, and goals." },
  { id: "02", icon: faChessKnight, title: "Strategy Development", desc: "Creating a tailored social media roadmap." },
  { id: "03", icon: faPenNib, title: "Content Creation", desc: "Producing engaging content aligned with your brand." },
  { id: "04", icon: faBullhorn, title: "Publishing & Engagement", desc: "Managing content distribution and audience interaction." },
  { id: "05", icon: faGaugeHigh, title: "Optimization", desc: "Tracking performance and improving results continuously." },
];

export default function SmmProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section id="smm-process" className="relative overflow-hidden">
      {/* excellent background: layered mesh + circuit-style traces + drifting glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-accent-primary/[0.08] blur-[160px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent-secondary/[0.06] blur-[150px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 85% 70% at 50% 45%, black 25%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 45%, black 25%, transparent 100%)",
        }}
      />
      {/* slow horizontal scan light */}


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

        {/* Console panel */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
        >
          {/* title bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-secondary" style={{ fontFamily: "ui-monospace, monospace" }}>
              campaign_pipeline.log
            </span>
            <span className="flex items-center gap-1.5">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-accent-primary"
              />
              <span className="font-heading text-[10px] font-semibold uppercase tracking-wider text-accent-primary" style={{ fontFamily: "ui-monospace, monospace" }}>
                live
              </span>
            </span>
          </div>

          {/* stage rows */}
          <div className="divide-y divide-white/5">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="group relative flex items-center gap-4 px-5 py-5 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-6 sm:px-8"
              >
                <span
                  className="w-10 shrink-0 font-heading text-xs font-bold text-text-secondary/50"
                  style={{ fontFamily: "ui-monospace, monospace" }}
                >
                  {stage.id}
                </span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary transition-colors duration-300 group-hover:bg-accent-primary group-hover:text-bg-primary">
                  <FontAwesomeIcon icon={stage.icon} className="h-4 w-4" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-heading text-sm font-bold text-text-primary sm:text-base">{stage.title}</h3>
                  </div>
                  <p className="mt-1 font-body text-xs text-text-secondary sm:text-sm">{stage.desc}</p>

                  {/* progress bar — fills on scroll-in, staggered per row */}
                  <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.9, delay: 0.3 + i * 0.2, ease: "easeOut" }}
                      className="h-full origin-left rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                    />
                  </div>
                </div>

                <span
                  className="hidden shrink-0 font-heading text-[10px] font-semibold uppercase tracking-wider text-accent-primary/70 sm:block"
                  style={{ fontFamily: "ui-monospace, monospace" }}
                >
                  complete
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}