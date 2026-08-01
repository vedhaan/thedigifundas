"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassChart,
  faPenNib,
  faGears,
  faFlaskVial,
  faChartLine,
  faArrowRight,
  faArrowRotateLeft,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const stages = [
  {
    icon: faMagnifyingGlassChart,
    title: "Campaign Strategy",
    intro:
      "Every successful campaign begins with a clear understanding of your audience, goals, and market.",
    listLabel: "Services Include:",
    items: ["Audience Research", "Competitor Analysis", "Campaign Planning", "Funnel Strategy"],
  },
  {
    icon: faPenNib,
    title: "Ad Creative Development",
    intro: "Creative performance often determines campaign success.",
    listLabel: "Services Include:",
    items: ["Ad Copywriting", "Creative Direction", "Image Ad Design", "Video Ad Concepts", "Carousel Ad Design"],
  },
  {
    icon: faGears,
    title: "Campaign Setup",
    intro: "Professional campaign setup designed for performance and scalability.",
    listLabel: "Services Include:",
    items: ["Campaign Structure", "Audience Targeting", "Conversion Tracking", "Pixel Setup", "Event Configuration"],
  },
  {
    icon: faFlaskVial,
    title: "Optimization & Testing",
    intro: "Continuous optimization helps improve performance over time.",
    listLabel: "Services Include:",
    items: ["A/B Testing", "Audience Testing", "Creative Testing", "Budget Optimization", "Conversion Optimization"],
  },
  {
    icon: faChartLine,
    title: "Reporting & Analysis",
    intro: "Transparent reporting focused on business outcomes.",
    listLabel: "Services Include:",
    items: ["Monthly Reports", "Campaign Performance Analysis", "Cost Per Lead Tracking", "ROAS Monitoring", "Strategic Recommendations"],
  },
];

export default function MetaAdsServices() {
  return (
    <Section id="meta-ads-services" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-primary/[0.04] blur-[130px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(var(--color-border) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 25%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 25%, transparent 100%)",
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
            Our Meta Ads Services
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            What&apos;s{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Included
            </span>
          </h2>
        </motion.div>

        {/* Flow map — full width on large screens, same proven pattern as SMM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-12 hidden w-full items-center justify-center gap-1 lg:flex 2xl:max-w-6xl"
        >
          {stages.map((stage, i) => (
            <div key={stage.title} className="flex flex-1 items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-primary/30 bg-bg-secondary text-accent-primary 2xl:h-14 2xl:w-14">
                  <FontAwesomeIcon icon={stage.icon} className="h-4 w-4 2xl:h-5 2xl:w-5" />
                </span>
                <span className="max-w-[100px] text-center font-heading text-[11px] font-semibold text-text-secondary 2xl:text-xs">
                  {stage.title}
                </span>
              </div>
              {i < stages.length - 1 && (
                <FontAwesomeIcon icon={faArrowRight} className="mx-3 mb-6 h-3.5 w-3.5 shrink-0 text-accent-primary/40" />
              )}
            </div>
          ))}
          <div className="flex flex-1 flex-col items-center gap-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-accent-primary/40 text-accent-primary/60 2xl:h-14 2xl:w-14">
              <FontAwesomeIcon icon={faArrowRotateLeft} className="h-4 w-4 2xl:h-5 2xl:w-5" />
            </span>
            <span className="max-w-[100px] text-center font-heading text-[11px] font-semibold text-text-secondary/60 2xl:text-xs">
              Feeds Back Into Setup
            </span>
          </div>
        </motion.div>

        {/* Service cards — same numbered ghost-digit pattern as SMM */}
        <div className="mx-auto mt-14 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-bg-secondary p-7 transition-colors duration-300 hover:border-accent-primary/40 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="pointer-events-none absolute -right-2 -top-5 select-none font-heading text-7xl font-bold text-accent-primary/[0.06] transition-colors duration-300 group-hover:text-accent-primary/[0.1]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg shadow-accent-primary/20">
                <FontAwesomeIcon icon={stage.icon} className="h-4.5 w-4.5" />
              </span>

              <h3 className="relative mt-5 font-heading text-lg font-bold text-text-primary">
                {stage.title}
              </h3>
              <p className="relative mt-2.5 font-body text-sm text-text-secondary">{stage.intro}</p>

              <div className="relative mt-5 border-t border-border pt-4">
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent-primary">
                  {stage.listLabel}
                </span>
                <ul className="mt-3 flex flex-col gap-2">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheck} className="h-3 w-3 shrink-0 text-accent-primary" />
                      <span className="font-body text-sm text-text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}