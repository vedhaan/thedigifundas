"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faStar, faBolt, faFileLines, faBoxOpen, faSignsPost } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const faqs = [
  {
    q: "Do you provide logo design only?",
    a: "Yes. We offer standalone logo design services as well as complete branding packages.",
    icon: faStar,
    rotate: -3,
  },
  {
    q: "Can you redesign our existing brand assets?",
    a: "Absolutely. We can refresh and modernize existing branding materials.",
    icon: faBolt,
    rotate: 2,
  },
  {
    q: "Do you provide editable source files?",
    a: "Yes. Final deliverables include appropriate editable and high-resolution files.",
    icon: faFileLines,
    rotate: -2,
  },
  {
    q: "Can you design exhibition materials?",
    a: "Yes. We create complete exhibition and event branding solutions.",
    icon: faSignsPost,
    rotate: 3,
  },
];

export default function BrandingFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="branding-faq" bgSecondary className="relative overflow-hidden">
      {/* layered maximalist background — multiple simultaneous textures, deliberately busy */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-[28rem] w-[28rem] rounded-full bg-accent-primary/[0.10] blur-[130px]" />
        <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-accent-secondary/[0.10] blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-primary/[0.08] blur-[140px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #FF8A00 0px, #FF8A00 2px, transparent 2px, transparent 22px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#FFB347 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
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
          <span className="inline-block -rotate-2 rounded-full border-2 border-accent-primary bg-accent-primary/10 px-4 py-1.5 font-heading text-sm font-black uppercase tracking-wider text-accent-primary">
            ★ Frequently Asked Questions ★
          </span>
          <h2 className="mt-5 font-heading text-4xl font-black leading-tight text-text-primary sm:text-5xl">
            Got{" "}
            <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">
              Questions?!
            </span>
          </h2>
        </motion.div>

        {/* maximalist cards — huge numerals, gradient borders, rotated sticker
            badges, layered shadows, thick borders, all at once, deliberately */}
        <div className="mx-auto mt-16 grid w-full max-w-6xl gap-8 sm:grid-cols-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 24, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: faq.rotate }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="group relative"
              >
                {/* thick gradient border frame */}
                <div className="relative rounded-3xl bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-primary p-[3px] shadow-2xl shadow-accent-primary/20">
                  <div className="relative overflow-hidden rounded-[calc(1.5rem-3px)] bg-bg-primary">
                    {/* huge ghost numeral, bleeding off the corner */}
                    <span className="pointer-events-none absolute -right-4 -top-8 select-none font-heading text-[9rem] font-black leading-none text-accent-primary/[0.08]">
                      {i + 1}
                    </span>

                    {/* rotated sticker badge */}
                    <span
                      className="absolute -left-3 -top-3 z-10 flex h-12 w-12 rotate-[-12deg] items-center justify-center rounded-full border-2 border-bg-primary bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg"
                    >
                      <FontAwesomeIcon icon={faq.icon} className="h-5 w-5 text-bg-primary" />
                    </span>

                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="relative flex w-full flex-col gap-4 p-7 pt-9 text-left sm:p-9 sm:pt-10"
                    >
                      <span className="font-heading text-xl font-black leading-snug text-text-primary sm:text-2xl">
                        {faq.q}
                      </span>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="rounded-xl border-2 border-dashed border-accent-primary/30 bg-accent-primary/5 p-4 font-body text-sm font-medium leading-relaxed text-text-primary sm:text-base">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <span
                        className={`flex w-fit items-center gap-2 rounded-full border-2 px-4 py-1.5 font-heading text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                          isOpen
                            ? "border-accent-primary bg-accent-primary text-bg-primary"
                            : "border-accent-primary/40 text-accent-primary"
                        }`}
                      >
                        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="h-3 w-3" />
                        {isOpen ? "Close" : "Reveal"}
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}