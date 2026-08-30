"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faCartShopping,
  faGem,
  faSpa,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const personas = [
  {
    icon: faHandshake,
    label: "Service-Based Businesses",
    desc: "Automate lead generation, enquiries, and client communication.",
  },
  {
    icon: faCartShopping,
    label: "Ecommerce Brands",
    desc: "Improve customer support and marketing efficiency.",
  },
  {
    icon: faGem,
    label: "Fashion & Jewellery Brands",
    desc: "Enhance content workflows and customer engagement.",
  },
  {
    icon: faSpa,
    label: "Beauty & Wellness Businesses",
    desc: "Simplify appointment management and customer communication.",
  },
  {
    icon: faSeedling,
    label: "Growing Businesses",
    desc: "Create scalable systems that support expansion.",
  },
];

export default function WhoBenefitsFromAi() {
  return (
    <Section id="who-benefits-ai" bgSecondary className="relative overflow-hidden">
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
            Who Can Benefit From AI?
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            AI Solutions For{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Businesses Of All Sizes
            </span>
          </h2>
        </motion.div>

        {/* MOBILE — horizontal scroll-snap, every card visible via swipe,
            zero click-to-reveal required, native gesture-driven */}
        <div className="mt-12 lg:hidden">
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pl-1 pr-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`#who-benefits-ai div::-webkit-scrollbar { display: none; }`}</style>

            {personas.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="shrink-0 snap-start"
              >
                <div className="flex h-full w-[240px] flex-col gap-3 rounded-2xl border border-border bg-bg-primary p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary">
                    <FontAwesomeIcon icon={p.icon} className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="font-heading text-sm font-bold leading-snug text-text-primary">
                    {p.label}
                  </h3>
                  <p className="font-body text-xs leading-relaxed text-text-secondary">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="w-1 shrink-0" aria-hidden />
          </div>

          {/* scroll position dots — visual affordance, no interaction needed */}
          <div className="mt-4 flex justify-center gap-1.5">
            {personas.map((p) => (
              <span key={p.label} className="h-1.5 w-1.5 rounded-full bg-border" aria-hidden />
            ))}
          </div>
        </div>

        {/* DESKTOP — full grid, everything visible at once, no interaction needed either */}
        <div className="mt-14 hidden grid-cols-5 gap-4 lg:grid">
          {personas.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-bg-primary p-6 transition-colors duration-300 hover:border-accent-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-bg-primary">
                <FontAwesomeIcon icon={p.icon} className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-heading text-sm font-bold leading-snug text-text-primary">
                {p.label}
              </h3>
              <p className="font-body text-xs leading-relaxed text-text-secondary">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}