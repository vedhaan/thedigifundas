"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const faqs = [
  {
    q: "How long does it take to develop a website?",
    a: "The timeline depends on the complexity of the project. Most business websites are completed within a few weeks.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Yes. Every website we develop is fully responsive across devices.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We can improve both the design and functionality of existing websites.",
  },
  {
    q: "Do you provide SEO setup?",
    a: "Yes. We implement foundational SEO best practices during development.",
  },
];

// Jali-inspired lattice pattern — repeating diamond/octagon motif, common in
// Indian architectural screens (jharokhas, stone jali work). Pure geometry,
// rendered as a subtle SVG background texture, not literal imagery.
const jaliPattern = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 2 L54 30 L30 58 L6 30 Z M30 14 L42 30 L30 46 L18 30 Z' fill='none' stroke='%23FF8A00' stroke-width='0.6' opacity='0.35'/%3E%3C/svg%3E`;

export default function BusinessWebsiteFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="business-website-faq" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent-primary/[0.05] blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-secondary/[0.05] blur-[130px]" />
      </div>

      {/* jali lattice texture — subtle geometric screen pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `url("${jaliPattern}")`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 15%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 15%, transparent 90%)",
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
            Got{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
        </motion.div>

        {/* ornamental panel — corner flourishes framing the accordion,
            mandala-inspired motif at top center */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          {/* mandala accent — simple concentric geometric motif, centered above panel */}
          <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="#FF8A00" strokeWidth="1" opacity="0.4" />
              <circle cx="24" cy="24" r="15" stroke="#FF8A00" strokeWidth="1" opacity="0.3" />
              {[...Array(8)].map((_, i) => {
                const angle = (i * 360) / 8;
                const rad = (angle * Math.PI) / 180;
                const x = 24 + 15 * Math.cos(rad);
                const y = 24 + 15 * Math.sin(rad);
                return <circle key={i} cx={x} cy={y} r="2" fill="#FF8A00" opacity="0.5" />;
              })}
              <circle cx="24" cy="24" r="4" fill="#FF8A00" opacity="0.6" />
            </svg>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-accent-primary/25 bg-bg-secondary pt-10">
            {/* corner flourishes — simple L-shaped ornamental brackets */}
            {["top-4 left-4 border-t-2 border-l-2", "top-4 right-4 border-t-2 border-r-2", "bottom-4 left-4 border-b-2 border-l-2", "bottom-4 right-4 border-b-2 border-r-2"].map(
              (pos) => (
                <span
                  key={pos}
                  className={`pointer-events-none absolute h-5 w-5 border-accent-primary/30 ${pos}`}
                  aria-hidden
                />
              )
            )}

            <div className="px-6 pb-6 sm:px-10 sm:pb-8">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={faq.q} className="border-b border-accent-primary/15 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 py-5 text-left transition-colors duration-200 hover:bg-accent-primary/[0.03]"
                    >
                      <span className="font-heading text-base font-semibold text-text-primary sm:text-lg">
                        {faq.q}
                      </span>
                      <span
                        className={`ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? "border-accent-primary bg-accent-primary text-bg-primary"
                            : "border-accent-primary/30 text-accent-primary"
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
                          <p className="pb-5 font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                            {faq.a}
                          </p>
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