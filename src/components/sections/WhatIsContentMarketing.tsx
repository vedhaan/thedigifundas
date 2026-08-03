"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faFileLines,
  faChartSimple,
  faMagnet,
  faBookOpen,
  faEnvelopeOpenText,
  faGlobe,
  faThumbtack,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const contentTypes = [
  { icon: faNewspaper, label: "Blogs", rotate: -6 },
  { icon: faFileLines, label: "Articles", rotate: 4 },
  { icon: faChartSimple, label: "Case Studies", rotate: -3 },
  { icon: faMagnet, label: "Lead Magnets", rotate: 7 },
  { icon: faBookOpen, label: "Guides", rotate: -8 },
  { icon: faEnvelopeOpenText, label: "Email Content", rotate: 3 },
  { icon: faGlobe, label: "Website Content", rotate: -4 },
];

export default function WhatIsContentMarketing() {
  return (
    <Section id="what-is-content-marketing" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 motion-reduce:hidden">
        <motion.div
          animate={{ x: [0, 50, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full bg-accent-primary/[0.07] blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.06] blur-[140px]"
        />
        <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/[0.03] blur-[180px]" />

        {/* floating pen — drifts slowly, distinct from the blob glows, literal
            nod to "writing" without being a repeated icon from the cards */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [-12, -6, -12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[12%] top-[8%] hidden text-accent-primary/[0.08] lg:block"
        >
          <FontAwesomeIcon icon={faPen} className="h-24 w-24" />
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 hidden motion-reduce:block">
        <div className="absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
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
            What Is Content Marketing?
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
            Educating, Informing &{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Engaging
            </span>{" "}
            Your Audience
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            Content marketing focuses on educating, informing, and engaging
            potential customers through valuable content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mx-auto mt-14 flex w-fit items-center gap-2 rounded-full border border-border bg-bg-primary px-4 py-2"
        >
          <FontAwesomeIcon icon={faThumbtack} className="h-3 w-3 text-accent-primary" />
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-accent-secondary">
            Examples Include
          </span>
        </motion.div>

        {/* DESKTOP — single row, spotlight vignette + connecting string */}
        <div className="relative mx-auto mt-10 hidden max-w-6xl px-2 lg:block">
          {/* spotlight vignette behind the card row */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[110%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,138,0,0.05) 0%, transparent 65%)",
            }}
            aria-hidden
          />

          {/* connecting corkboard string — a single dashed line behind the
              row, threading through the cards */}
          <svg
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-[38%] h-6 w-full"
            aria-hidden
          >
            <motion.line
              x1="7"
              y1="5"
              x2="93"
              y2="5"
              stroke="var(--color-accent-primary, #FF8A00)"
              strokeWidth="0.3"
              strokeDasharray="1.5 1.5"
              strokeOpacity="0.25"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            />
          </svg>

          <div className="relative grid grid-cols-7 items-start gap-3 xl:gap-4">
            {contentTypes.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ rotate: 0, y: -6, scale: 1.05 }}
                className="group relative"
                style={{ transformOrigin: "center bottom" }}
              >
                <div className="relative flex flex-col items-center gap-3 rounded-lg border border-border bg-bg-primary px-3 py-5 shadow-lg transition-shadow duration-300 group-hover:border-accent-primary/40 group-hover:shadow-2xl xl:px-4 xl:py-6">
                  <span
                    className="absolute -top-2.5 left-1/2 h-4 w-9 -translate-x-1/2 rounded-sm bg-accent-primary/25"
                    style={{ transform: `translateX(-50%) rotate(${item.rotate > 0 ? -8 : 8}deg)` }}
                    aria-hidden
                  />
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-bg-primary xl:h-11 xl:w-11">
                    <FontAwesomeIcon icon={item.icon} className="h-4 w-4 xl:h-4.5 xl:w-4.5" />
                  </span>
                  <p className="text-center font-heading text-xs font-semibold leading-snug text-text-primary xl:text-sm">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE / TABLET — unchanged wrapped layout */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-start justify-center gap-x-4 gap-y-8 px-4 lg:hidden">
          {contentTypes.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              className="relative"
              style={{ transformOrigin: "center bottom" }}
            >
              <div className="relative flex w-[130px] flex-col items-center gap-3 rounded-lg border border-border bg-bg-primary px-4 py-5 shadow-lg sm:w-[140px]">
                <span
                  className="absolute -top-2.5 left-1/2 h-4 w-9 -translate-x-1/2 rounded-sm bg-accent-primary/25"
                  style={{ transform: `translateX(-50%) rotate(${item.rotate > 0 ? -8 : 8}deg)` }}
                  aria-hidden
                />
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                  <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                </span>
                <p className="text-center font-heading text-xs font-semibold leading-snug text-text-primary">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}