"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faBullhorn,
  faChartLine,
  faCircleQuestion,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const navTabs = [
  { icon: faGaugeHigh, label: "Dashboard" },
  { icon: faBullhorn, label: "Campaigns" },
  { icon: faChartLine, label: "Reports" },
  { icon: faCircleQuestion, label: "FAQ", active: true },
];

const faqs = [
  {
    q: "How much should I spend on Google Ads?",
    a: "The ideal budget depends on your industry, goals, and competition. We provide recommendations during consultation.",
  },
  {
    q: "How quickly can Google Ads generate results?",
    a: "Google Ads can begin generating traffic and leads shortly after campaign launch, though optimization improves performance over time.",
  },
  {
    q: "Do you manage existing Google Ads accounts?",
    a: "Yes. We can audit, optimize, and manage existing campaigns.",
  },
  {
    q: "Do you provide conversion tracking setup?",
    a: "Absolutely. Proper tracking is essential for measuring performance and making informed decisions.",
  },
];

export default function GoogleAdsFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="google-ads-faq" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
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
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Got{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
        </motion.div>

        {/* dashboard app shell — matches your sketch: top nav bar with tabs +
            user chip, FAQ tab shown active, content panel below */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-14 w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-bg-primary shadow-2xl"
        >
          {/* top nav bar */}
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-8">
            <div className="flex items-center gap-1 overflow-x-auto sm:gap-2">
              {navTabs.map((tab) => (
                <span
                  key={tab.label}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 font-heading text-xs font-semibold transition-colors duration-200 sm:px-4 sm:text-sm ${
                    tab.active
                      ? "bg-accent-primary text-bg-primary"
                      : "text-text-secondary"
                  }`}
                >
                  <FontAwesomeIcon icon={tab.icon} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>
              ))}
            </div>

            {/* user chip */}
            <div className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-bg-secondary px-3 py-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary font-heading text-[9px] font-bold text-bg-primary">
                U
              </span>
              <span className="hidden font-body text-xs text-text-secondary sm:inline">
                User
              </span>
            </div>
          </div>

          {/* content panel */}
          <div className="px-5 py-8 sm:px-10 sm:py-10">
            <p className="mt-2 text-center font-body text-sm text-text-secondary sm:text-base">
              Everything you need to know before getting started with Google Ads.
            </p>

            {/* Q&A list inside the panel */}
            <div className="mx-auto mt-8 max-w-2xl">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={faq.q}
                    className="mb-3 overflow-hidden rounded-xl border border-border bg-bg-secondary"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-accent-primary/[0.04]"
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-heading text-xs font-bold transition-colors duration-300 ${
                          isOpen
                            ? "bg-accent-primary text-bg-primary"
                            : "bg-bg-primary text-accent-primary/60"
                        }`}
                      >
                        Q
                      </span>
                      <span className="min-w-0 flex-1 font-heading text-sm font-semibold leading-snug text-text-primary sm:text-base">
                        {faq.q}
                      </span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bg-primary text-text-secondary">
                        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="h-3 w-3" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-start gap-4 border-t border-border px-5 py-4">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 font-heading text-xs font-bold text-accent-primary">
                              A
                            </span>
                            <p className="font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}