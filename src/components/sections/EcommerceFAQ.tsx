"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const faqs = [
  {
    q: "Which platform is best for ecommerce websites?",
    a: "The ideal platform depends on your business requirements. We help businesses choose between Shopify, WooCommerce, and custom solutions.",
  },
  {
    q: "Can you redesign an existing ecommerce website?",
    a: "Yes. We can redesign and optimize existing stores to improve performance and user experience.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. Every ecommerce website is optimized for mobile devices.",
  },
  {
    q: "Do you provide SEO setup?",
    a: "Yes. We implement foundational SEO best practices during development.",
  },
];

export default function EcommerceFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="ecommerce-faq" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent-primary/[0.05] blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-secondary/[0.05] blur-[130px]" />
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

        {/* "Customer Questions" widget — styled like a real product-page Q&A block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-border bg-bg-secondary"
        >
          <div className="flex items-center gap-3 border-b border-border px-6 py-5 sm:px-8">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
              <FontAwesomeIcon icon={faCircleQuestion} className="h-4 w-4" />
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-text-primary">
                Customer Questions
              </p>
              <p className="font-body text-xs text-text-secondary">
                Common questions about building your ecommerce store
              </p>
            </div>
          </div>

          <div className="px-2 py-2 sm:px-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-4 py-5 text-left transition-colors duration-200 hover:bg-accent-primary/[0.03] sm:px-6"
                  >
                    <span className="font-heading text-xs font-bold text-accent-primary/50">
                      Q{i + 1}
                    </span>
                    <span className="min-w-0 flex-1 font-heading text-sm font-semibold text-text-primary sm:text-base">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen ? "bg-accent-primary text-bg-primary" : "bg-bg-primary text-accent-primary"
                      }`}
                    >
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
                        <div className="flex items-start gap-4 px-4 pb-5 sm:px-6">
                          <span className="font-heading text-xs font-bold text-accent-primary/50">
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
        </motion.div>
      </Container>
    </Section>
  );
}