"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faWandSparkles, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const faqs = [
  {
    q: "Is AI suitable for small businesses?",
    a: "Yes. Many AI tools and automation systems can help small businesses save time and improve efficiency.",
  },
  {
    q: "Can AI replace employees?",
    a: "No. AI is best used to support teams by automating repetitive tasks and improving productivity.",
  },
  {
    q: "What processes can be automated?",
    a: "Marketing, lead generation, reporting, customer communication, content workflows, and many operational tasks.",
  },
  {
    q: "Do you provide customized AI solutions?",
    a: "Yes. Every solution is designed around specific business needs and objectives.",
  },
];

const GENERATE_DELAY_MS = 550;

export default function AiFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [generating, setGenerating] = useState<number | null>(null);

  const handleClick = (i: number) => {
    if (open === i) {
      setOpen(null);
      return;
    }
    setOpen(null);
    setGenerating(i);
    setTimeout(() => {
      setGenerating(null);
      setOpen(i);
    }, GENERATE_DELAY_MS);
  };

  return (
    <Section id="ai-faq" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent-primary/[0.06] blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-secondary/[0.05] blur-[130px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#FF8A00 1px, transparent 1px)",
          backgroundSize: "32px 32px",
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
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Ask{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Anything
            </span>
          </h2>
        </motion.div>

        {/* AI answer-engine style query list — full width */}
        <div className="mx-auto mt-14 flex w-full max-w-4xl flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const isGenerating = generating === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="overflow-hidden rounded-2xl border border-border bg-bg-primary"
              >
                {/* query row — styled like a submitted prompt */}
                <button
                  type="button"
                  onClick={() => handleClick(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-accent-primary/[0.03] sm:px-7"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4 w-4 shrink-0 text-text-secondary" />
                  <span className="min-w-0 flex-1 font-body text-base text-text-primary sm:text-lg">
                    {faq.q}
                  </span>
                  {isGenerating && (
                    <FontAwesomeIcon icon={faCircleNotch} className="h-3.5 w-3.5 shrink-0 animate-spin text-accent-primary" />
                  )}
                </button>

                {/* generating state — brief, mimics real AI query latency */}
                <AnimatePresence>
                  {isGenerating && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="flex items-center gap-2 px-6 py-4 sm:px-7">
                        {[0, 1, 2].map((d) => (
                          <motion.span
                            key={d}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }}
                            className="h-1.5 w-1.5 rounded-full bg-accent-primary"
                          />
                        ))}
                        <span className="ml-1 font-body text-xs text-text-secondary">
                          Generating response...
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* answer — tagged like a real AI response */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="flex items-start gap-3 px-6 py-5 sm:px-7">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary">
                          <FontAwesomeIcon icon={faWandSparkles} className="h-3 w-3" />
                        </span>
                        <div>
                          <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-accent-primary/60">
                            AI Response
                          </span>
                          <p className="mt-1.5 font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                            {faq.a}
                          </p>
                        </div>
                      </div>
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