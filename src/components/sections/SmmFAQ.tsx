"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const faqs = [
  {
    q: "Which social media platforms should my business focus on?",
    a: "The right platform depends on your audience, industry, and goals. We help identify the most effective channels for your business.",
  },
  {
    q: "How often should businesses post on social media?",
    a: "Consistency is more important than volume. We recommend a content strategy based on your business objectives.",
  },
  {
    q: "How long does it take to see results?",
    a: "Social media growth is a long-term process. Businesses typically begin seeing meaningful improvements within a few months of consistent strategy implementation.",
  },
  {
    q: "Do you create content as well?",
    a: "Yes. We provide content planning, design, copywriting, and video content creation.",
  },
];

export default function SmmFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="smm-faq" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-primary/[0.06] blur-[150px]" />
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
            FAQs
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* Terminal panel — same title-bar convention as SmmProcess's console, for consistency */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            </div>
            <span
              className="font-heading text-[11px] font-semibold uppercase tracking-widest text-text-secondary"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              faq_query.sh
            </span>
            <span className="flex items-center gap-1.5">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-accent-primary"
              />
              <span
                className="font-heading text-[10px] font-semibold uppercase tracking-wider text-accent-primary"
                style={{ fontFamily: "ui-monospace, monospace" }}
              >
                ready
              </span>
            </span>
          </div>

          <div className="divide-y divide-white/5 p-2 sm:p-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="px-3 py-1">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-start gap-3 py-4 text-left"
                  >
                    <span
                      className="mt-0.5 shrink-0 font-heading text-sm font-bold text-accent-primary"
                      style={{ fontFamily: "ui-monospace, monospace" }}
                    >
                      $
                    </span>
                    <span className="flex-1 font-body text-sm font-semibold text-text-primary sm:text-base">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-0.5 shrink-0 text-text-secondary"
                    >
                      <FontAwesomeIcon icon={faChevronDown} className="h-3.5 w-3.5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-start gap-3 pb-4 pl-6">
                          <span
                            className="mt-0.5 shrink-0 font-heading text-sm font-bold text-text-secondary/50"
                            style={{ fontFamily: "ui-monospace, monospace" }}
                          >
                            &gt;
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
        </motion.div>
      </Container>
    </Section>
  );
}