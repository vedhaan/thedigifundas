"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLightbulb, faComments, faBullseye } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const principles = [
  {
    title: "Personalized Approach",
    statement: "Every business is different, and so are our solutions.",
    icon: faUser,
  },
  {
    title: "Strategic Thinking",
    statement: "We focus on long-term business growth rather than short-term tactics.",
    icon: faLightbulb,
  },
  {
    title: "Transparent Communication",
    statement: "Clear expectations, regular updates, and honest recommendations.",
    icon: faComments,
  },
  {
    title: "Results-Oriented Execution",
    statement: "Every project is guided by measurable objectives and performance indicators.",
    icon: faBullseye,
  },
];

const SLIDE_DURATION = 4500;

export default function WhyChooseUsReel() {
  const [active, setActive] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setCycleKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % principles.length);
      setCycleKey((k) => k + 1);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [cycleKey]);

  const current = principles[active];

  return (
    <Section id="why-choose-reel" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
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
            Why Businesses Choose Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            What Makes The{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          {/* Left: story-style tab list with progress bars */}
          <div className="flex flex-col gap-3">
            {principles.map((p, i) => (
              <button
                key={p.title}
                onClick={() => goTo(i)}
                className={`group relative flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-colors ${
                  active === i
                    ? "border-accent-primary/40 bg-bg-secondary"
                    : "border-border bg-transparent hover:border-white/20"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                    active === i ? "bg-accent-primary text-bg-primary" : "bg-bg-secondary text-text-secondary"
                  }`}
                >
                  <FontAwesomeIcon icon={p.icon} className="h-4 w-4" />
                </span>

                <span
                  className={`font-heading text-sm font-semibold transition-colors sm:text-base ${
                    active === i ? "text-text-primary" : "text-text-secondary"
                  }`}
                >
                  {p.title}
                </span>

                {/* progress bar — fills over SLIDE_DURATION when active, resets on tab change */}
                <span className="absolute bottom-0 left-5 right-5 h-[2px] overflow-hidden rounded-full bg-border">
                  {active === i && (
                    <motion.span
                      key={cycleKey}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-primary to-accent-secondary"
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Right: cinematic stage — large crossfading statement */}
          <div className="relative flex min-h-[280px] items-center rounded-3xl border border-white/10 bg-gradient-to-br from-bg-secondary to-bg-primary p-10 sm:min-h-[320px] sm:p-14">
            <div className="pointer-events-none absolute right-8 top-8 select-none font-heading text-8xl font-bold leading-none text-white/[0.04] sm:text-9xl">
              {String(active + 1).padStart(2, "0")}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">
                  {String(active + 1).padStart(2, "0")} / {String(principles.length).padStart(2, "0")}
                </span>
                <h3 className="mt-4 max-w-xl font-heading text-2xl font-bold leading-snug text-text-primary sm:text-3xl lg:text-4xl">
                  {current.statement}
                </h3>
                <p className="mt-4 font-body text-sm font-semibold uppercase tracking-wider text-text-secondary">
                  {current.title}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}