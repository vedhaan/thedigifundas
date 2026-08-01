"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  {
    cmd: "understand --business",
    title: "Understand The Business",
    desc: "Learning about your products, services, audience, and objectives.",
    output: ["reading business goals...", "mapping target audience...", "status: complete"],
  },
  {
    cmd: "build --strategy",
    title: "Build The Strategy",
    desc: "Creating campaigns aligned with your goals and customer journey.",
    output: ["defining funnel stages...", "aligning campaign structure...", "status: complete"],
  },
  {
    cmd: "launch --monitor",
    title: "Launch & Monitor",
    desc: "Managing campaign performance and audience behavior.",
    output: ["deploying campaigns...", "tracking audience behavior...", "status: live"],
  },
  {
    cmd: "optimize --growth",
    title: "Optimize For Growth",
    desc: "Continuously improving results through testing and data analysis.",
    output: ["running A/B tests...", "analyzing performance data...", "status: scaling"],
  },
];

const monoStyle = { fontFamily: "ui-monospace, monospace" };

export default function MetaAdsProcess() {
  return (
    <Section id="meta-ads-process" className="relative overflow-hidden">
      {/* enhanced background — layered glows + faint scanline texture, matches terminal theme */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.07] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-accent-secondary/[0.06] blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/[0.03] blur-[180px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--color-accent-primary) 0px, transparent 1px, transparent 3px)",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
        }}
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
            Our Approach
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            How We Deliver{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Better Advertising Results
            </span>
          </h2>
        </motion.div>

        {/* terminal window — now spans the real container width, not a narrow fixed box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-14 w-full overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-border bg-bg-secondary px-4 py-3 sm:px-6">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 text-xs text-text-secondary" style={monoStyle}>
              digifundas — meta-ads-process — bash
            </span>
          </div>

          {/* 2-column grid on large screens instead of one long stacked column */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-12 lg:px-12 lg:py-14">
            {steps.map((step, i) => (
              <motion.div
                key={step.cmd}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="border-l-2 border-border pl-5 lg:pl-6"
              >
                <div className="flex flex-wrap items-baseline gap-2 text-sm sm:text-base" style={monoStyle}>
                  <span className="text-accent-primary">➜</span>
                  <span className="text-accent-secondary">~</span>
                  <span className="text-text-primary">
                    <span className="text-text-secondary">$</span> {step.cmd}
                  </span>
                </div>

                <div className="mt-2 flex flex-col gap-1">
                  {step.output.map((line, li) => (
                    <motion.span
                      key={line}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: i * 0.12 + 0.15 + li * 0.08 }}
                      className="text-xs text-text-secondary sm:text-sm"
                      style={monoStyle}
                    >
                      {li === step.output.length - 1 ? (
                        <span className="text-accent-primary">{line}</span>
                      ) : (
                        <>
                          <span className="text-text-secondary/50">{">"}</span> {line}
                        </>
                      )}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-4">
                  <h3 className="font-heading text-base font-bold text-text-primary sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-body text-xs text-text-secondary sm:text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-baseline gap-2 border-t border-border px-6 py-6 text-sm sm:px-8 sm:text-base lg:px-12" style={monoStyle}>
            <span className="text-accent-primary">➜</span>
            <span className="text-accent-secondary">~</span>
            <span className="text-text-secondary">$</span>
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
              className="inline-block h-4 w-2 bg-accent-primary"
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}