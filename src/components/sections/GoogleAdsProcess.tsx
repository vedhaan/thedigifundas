"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassChart,
  faGears,
  faChartLine,
  faRocket,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  {
    icon: faMagnifyingGlassChart,
    title: "Research & Planning",
    desc: "Understanding your market, audience, and competitors.",
    lift: "lg:translate-y-0",
  },
  {
    icon: faGears,
    title: "Campaign Setup",
    desc: "Building campaigns designed around your business goals.",
    lift: "lg:-translate-y-6",
  },
  {
    icon: faChartLine,
    title: "Launch & Monitor",
    desc: "Tracking performance and identifying optimization opportunities.",
    lift: "lg:-translate-y-12",
  },
  {
    icon: faRocket,
    title: "Optimize & Scale",
    desc: "Improving results through ongoing testing and analysis.",
    lift: "lg:-translate-y-[4.5rem]",
  },
];

export default function GoogleAdsProcess() {
  return (
    <Section id="google-ads-process" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent-secondary/[0.06] blur-[140px]" />
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
            Our Process
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            How We Manage Successful{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Google Ads Campaigns
            </span>
          </h2>
        </motion.div>

        {/* DESKTOP — ascending staircase, each step higher than the last */}
        <div className="mt-24 hidden items-end gap-5 lg:flex xl:gap-7">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-1 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`group relative flex-1 ${step.lift}`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-secondary p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/40 xl:p-7">
                  {/* rising opacity per step — visual metaphor for growing momentum */}
                  <span
                    className="pointer-events-none absolute -right-3 -top-6 select-none font-heading text-8xl font-bold text-accent-primary transition-colors duration-300"
                    style={{ opacity: 0.04 + i * 0.02 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="relative flex h-12 w-12 items-center justify-center rounded-xl text-bg-primary shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))",
                      boxShadow: `0 8px 20px -4px rgba(255,138,0,${0.15 + i * 0.05})`,
                    }}
                  >
                    <FontAwesomeIcon icon={step.icon} className="h-5 w-5" />
                  </span>

                  <h3 className="relative mt-5 font-heading text-base font-bold leading-snug text-text-primary xl:text-lg">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 font-body text-xs leading-relaxed text-text-secondary xl:text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>

              {/* ascending connector arrow between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                  className={`mx-2 flex shrink-0 items-center justify-center xl:mx-3 ${step.lift}`}
                >
                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    className="h-4 w-4 text-accent-primary/50"
                    />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* closing line, optimistic payoff after reaching the top of the staircase */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-20 hidden max-w-lg items-center justify-center gap-2 text-center lg:flex"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent-primary/40" />
          <p className="font-heading text-sm font-semibold text-accent-primary">
            Every step builds toward measurable growth
          </p>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent-primary/40" />
        </motion.div>

        {/* MOBILE / TABLET — vertical ascending timeline, own simpler code path */}
        <div className="relative mx-auto mt-14 max-w-md lg:hidden">
          <div className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-t from-border to-accent-primary/40" aria-hidden />
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex gap-5"
              >
                <span
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-bg-primary shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))",
                  }}
                >
                  <FontAwesomeIcon icon={step.icon} className="h-5 w-5" />
                </span>
                <div className="pt-1">
                  <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-accent-primary/60">
                    Step 0{i + 1}
                  </span>
                  <h3 className="mt-1 font-heading text-base font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm text-text-secondary">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}