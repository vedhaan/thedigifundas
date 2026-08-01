"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCircleQuestion, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const faqs = [
  {
    q: "How much should I spend on Meta Ads?",
    a: "Budget recommendations depend on your industry, goals, and competition. We provide guidance during consultation.",
  },
  {
    q: "How quickly can I see results?",
    a: "Paid advertising can generate results quickly, but ongoing optimization improves long-term performance.",
  },
  {
    q: "Do you create ad creatives?",
    a: "Yes. We provide ad copy, creative direction, and campaign creatives.",
  },
  {
    q: "Can you manage existing campaigns?",
    a: "Absolutely. We can optimize and improve existing Meta advertising campaigns.",
  },
];

export default function MetaAdsFAQ() {
  const [active, setActive] = useState(0);

  return (
    <Section id="meta-ads-faq" className="relative overflow-hidden">
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

        {/* DESKTOP — now spans the real container width, 2fr/3fr split so the
            answer panel has genuine presence instead of matching a narrow rail */}
        <div className="mt-14 hidden overflow-hidden rounded-2xl border border-border lg:grid lg:grid-cols-[2fr_3fr]">
          <div className="flex flex-col border-r border-border bg-bg-secondary">
            {faqs.map((faq, i) => (
              <button
                key={faq.q}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`group relative flex items-center gap-5 border-b border-border px-8 py-7 text-left transition-colors duration-300 last:border-b-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary/60 ${
                  active === i ? "bg-bg-primary" : "hover:bg-bg-primary/50"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-[3px] bg-accent-primary transition-transform duration-300 ${
                    active === i ? "scale-y-100" : "scale-y-0"
                  }`}
                />
                <span
                  className={`font-heading text-sm font-bold transition-colors duration-300 ${
                    active === i ? "text-accent-primary" : "text-text-secondary/40"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`font-heading text-base font-semibold leading-snug transition-colors duration-300 xl:text-lg ${
                    active === i ? "text-text-primary" : "text-text-secondary"
                  }`}
                >
                  {faq.q}
                </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`ml-auto h-3.5 w-3.5 shrink-0 transition-all duration-300 ${
                    active === i ? "translate-x-0 text-accent-primary opacity-100" : "-translate-x-1 text-transparent opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* answer panel — fills the wider 3fr column, richer content, own texture */}
          <div className="relative flex min-h-[340px] items-center overflow-hidden bg-bg-primary p-10 xl:p-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "radial-gradient(var(--color-border) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                maskImage: "radial-gradient(ellipse 70% 60% at 30% 30%, black 20%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 30% 30%, black 20%, transparent 100%)",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg shadow-accent-primary/20">
                  <FontAwesomeIcon icon={faCircleQuestion} className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold leading-snug text-text-primary">
                  {faqs[active].q}
                </h3>
                <p className="mt-4 font-body text-base leading-relaxed text-text-secondary xl:text-lg">
                  {faqs[active].a}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  {faqs.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Go to question ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        active === i ? "w-6 bg-accent-primary" : "w-1.5 bg-border hover:bg-accent-primary/40"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* still have a question — closes the panel, doubles as a CTA, uses leftover visual weight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-8 hidden items-center justify-between rounded-2xl border border-border bg-bg-secondary px-8 py-6 lg:flex"
        >
          <p className="font-body text-sm text-text-secondary">
            Still have a question about running Meta Ads for your business?
          </p>
          <Button href="/contact" variant="secondary">
            Book A Strategy Call
          </Button>
        </motion.div>

        {/* MOBILE / TABLET — unchanged plain accordion */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-3 lg:hidden">
          {faqs.map((faq, i) => {
            const open = active === i;
            return (
              <div key={faq.q} className="overflow-hidden rounded-xl border border-border bg-bg-secondary">
                <button
                  type="button"
                  onClick={() => setActive(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-heading text-sm font-semibold text-text-primary">{faq.q}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                    <FontAwesomeIcon icon={open ? faMinus : faPlus} className="h-3 w-3" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 font-body text-sm leading-relaxed text-text-secondary">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}