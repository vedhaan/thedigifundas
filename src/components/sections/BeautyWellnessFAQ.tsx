"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faSpa } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const faqs = [
  {
    q: "Do you work with salons and makeup artists?",
    a: "Yes. We work with salons, makeup artists, wellness businesses, skincare brands, and beauty entrepreneurs.",
  },
  {
    q: "Can you help increase appointment bookings?",
    a: "Absolutely. Our marketing strategies focus on generating enquiries and bookings.",
  },
  {
    q: "Which platform works best for beauty businesses?",
    a: "Instagram, Meta Ads, Google Ads, and local SEO often deliver strong results.",
  },
  {
    q: "Can you create content for beauty brands?",
    a: "Yes. We provide content planning, creative design, reels strategy, and content creation support.",
  },
];

export default function BeautyWellnessFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="beauty-wellness-faq" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent-secondary/[0.08] blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-primary/[0.06] blur-[130px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="flex items-center justify-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            <FontAwesomeIcon icon={faSpa} className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Got{" "}
            <span className="bg-gradient-to-r from-accent-secondary to-accent-primary bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="overflow-hidden rounded-[1.5rem] border border-border bg-bg-primary"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-accent-secondary/[0.04] sm:px-7"
                >
                  <span className="font-heading text-base font-semibold text-text-primary sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-gradient-to-br from-accent-secondary to-accent-primary text-bg-primary"
                        : "bg-bg-secondary text-accent-primary"
                    }`}
                  >
                    <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="h-3.5 w-3.5" />
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
                      <p className="px-6 pb-5 font-body text-sm leading-relaxed text-text-secondary sm:px-7 sm:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}