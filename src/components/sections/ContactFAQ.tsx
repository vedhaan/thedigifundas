"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const faqs = [
  {
    question: "How soon can we start?",
    answer: "After the initial consultation and project approval, we begin onboarding and planning immediately.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. We work with startups, growing businesses, and established brands.",
  },
  {
    question: "Can I hire you for a single service?",
    answer: "Absolutely. We offer both standalone services and integrated growth solutions.",
  },
  {
    question: "Do you offer customized packages?",
    answer: "Yes. Every proposal is tailored to the business requirements and goals.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="contact-faq" bgSecondary className="relative overflow-hidden">
      {/* atmosphere: soft grain + a single slow-drifting glow, restrained */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-primary/[0.05] blur-[170px]" />

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Left: editorial heading, stays put, doesn't compete */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
              Questions
            </span>
            <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.05] text-text-primary sm:text-5xl">
              Answers,
              <br />
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                before you ask.
              </span>
            </h2>
            <p className="mt-6 max-w-xs font-body text-text-secondary">
              The things people usually want to know before reaching out.
            </p>
          </motion.div>

          {/* Right: editorial accordion with gliding indicator */}
          <div className="relative">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative border-b border-border py-7 first:pt-0"
                >
                  {/* gliding indicator — shared layoutId, smoothly moves between open rows */}
                  {isOpen && (
                    <motion.div
                      layoutId="faq-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute -left-6 top-7 h-8 w-[3px] rounded-full bg-gradient-to-b from-accent-primary to-accent-secondary sm:-left-8"
                    />
                  )}

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 text-left"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className={`font-heading text-sm font-semibold transition-colors ${isOpen ? "text-accent-primary" : "text-text-secondary/50"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className={`font-heading text-xl font-bold transition-colors sm:text-2xl ${isOpen ? "text-text-primary" : "text-text-secondary"}`}>
                        {faq.question}
                      </h3>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen ? "border-accent-primary text-accent-primary" : "border-border text-text-secondary"
                      }`}
                    >
                      <FontAwesomeIcon icon={faPlus} className="h-3 w-3" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pl-[3.25rem] pt-5 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}