"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHandshake,
  faRocket,
  faImages,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const websiteTypes = [
  { icon: faBuilding, label: "Corporate", fullLabel: "Corporate Websites", desc: "Professional websites designed to strengthen brand credibility and showcase business offerings." },
  { icon: faHandshake, label: "Service-Based", fullLabel: "Service-Based Business Websites", desc: "Focused on lead generation and customer enquiries." },
  { icon: faRocket, label: "Startup", fullLabel: "Startup Websites", desc: "Helping new businesses establish a strong online presence." },
  { icon: faImages, label: "Portfolio", fullLabel: "Portfolio Websites", desc: "Showcasing projects, expertise, and achievements." },
  { icon: faBullseye, label: "Landing Page", fullLabel: "Landing Pages", desc: "Designed specifically for marketing campaigns and lead generation." },
];

const bar = "rounded-full bg-border";
const block = "rounded-lg bg-bg-secondary border border-border";

// Each wireframe is a distinct, literal representation of that website type's
// actual layout — not decoration, a demonstration.
function Wireframe({ index }: { index: number }) {
  switch (index) {
    case 0: // Corporate — hero + 3 feature columns
      return (
        <div className="flex h-full flex-col gap-4 p-5 sm:p-7">
          <div className={`${block} flex h-24 items-center justify-center sm:h-28`}>
            <div className="flex flex-col items-center gap-2">
              <div className={`${bar} h-2.5 w-32`} />
              <div className={`${bar} h-2 w-20 opacity-50`} />
            </div>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`${block} flex flex-col items-center justify-center gap-2 p-3`}>
                <div className="h-6 w-6 rounded-full bg-accent-primary/20" />
                <div className={`${bar} h-1.5 w-10`} />
              </div>
            ))}
          </div>
        </div>
      );
    case 1: // Service-Based — split hero + form
      return (
        <div className="grid h-full grid-cols-2 gap-4 p-5 sm:p-7">
          <div className={`${block} flex flex-col justify-center gap-2 p-4`}>
            <div className={`${bar} h-2.5 w-3/4`} />
            <div className={`${bar} h-2 w-1/2 opacity-50`} />
            <div className="mt-2 h-6 w-20 rounded-full bg-accent-primary/30" />
          </div>
          <div className={`${block} flex flex-col justify-center gap-2.5 p-4`}>
            <div className={`${bar} h-2 w-full`} />
            <div className={`${bar} h-2 w-full`} />
            <div className={`${bar} h-2 w-2/3`} />
            <div className="mt-1 h-6 w-full rounded-md bg-accent-primary/30" />
          </div>
        </div>
      );
    case 2: // Startup — big centered hero + stats row
      return (
        <div className="flex h-full flex-col gap-4 p-5 sm:p-7">
          <div className="flex flex-1 flex-col items-center justify-center gap-3">
            <div className={`${bar} h-3 w-48`} />
            <div className={`${bar} h-2 w-32 opacity-50`} />
            <div className="mt-1 h-7 w-28 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`${block} flex flex-col items-center gap-1 p-3`}>
                <div className={`${bar} h-2.5 w-8 bg-accent-primary/40`} />
                <div className={`${bar} h-1.5 w-12 opacity-40`} />
              </div>
            ))}
          </div>
        </div>
      );
    case 3: // Portfolio — grid gallery
      return (
        <div className="grid h-full grid-cols-3 gap-3 p-5 sm:p-7">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`${block} flex items-end p-2`}>
              <div className={`${bar} h-1.5 w-full opacity-60`} />
            </div>
          ))}
        </div>
      );
    case 4: // Landing Page — single centered CTA
      return (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-5 sm:p-7">
          <div className={`${bar} h-3 w-56`} />
          <div className={`${bar} h-2 w-40 opacity-50`} />
          <div className="mt-2 h-9 w-36 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
        </div>
      );
    default:
      return null;
  }
}

export default function BusinessWebsiteTypes() {
  const [active, setActive] = useState(0);

  return (
    <Section id="business-website-types" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
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
            Types Of Websites We Develop
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Website Solutions For{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Different Business Needs
            </span>
          </h2>
        </motion.div>

        {/* browser window with switchable tabs — each tab shows a literal
            wireframe of that website type's actual layout, full container width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-14 w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-bg-primary shadow-2xl"
        >
          {/* browser chrome */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400/70" />
          </div>

          {/* clickable tab bar — one tab per website type */}
          <div className="flex overflow-x-auto border-b border-border">
            {websiteTypes.map((type, i) => (
              <button
                key={type.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`group relative flex shrink-0 items-center gap-2.5 border-r border-border px-5 py-3.5 transition-colors duration-200 sm:px-6 ${
                  active === i ? "bg-bg-secondary" : "hover:bg-bg-secondary/50"
                }`}
              >
                <FontAwesomeIcon
                  icon={type.icon}
                  className={`h-3.5 w-3.5 shrink-0 transition-colors duration-200 ${
                    active === i ? "text-accent-primary" : "text-text-secondary"
                  }`}
                />
                <span
                  className={`whitespace-nowrap font-heading text-xs font-semibold transition-colors duration-200 sm:text-sm ${
                    active === i ? "text-text-primary" : "text-text-secondary"
                  }`}
                >
                  {type.label}
                </span>
                <span
                  className={`absolute inset-x-0 bottom-0 h-[2px] bg-accent-primary transition-transform duration-200 ${
                    active === i ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* wireframe preview area — generous height, fills large-screen width */}
          <div className="h-[260px] sm:h-[300px] lg:h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <Wireframe index={active} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* description strip below the wireframe */}
          <div className="border-t border-border bg-bg-secondary px-6 py-5 sm:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="font-heading text-base font-bold text-text-primary sm:text-lg">
                  {websiteTypes[active].fullLabel}
                </h3>
                <p className="mt-1.5 font-body text-sm text-text-secondary sm:text-base">
                  {websiteTypes[active].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}