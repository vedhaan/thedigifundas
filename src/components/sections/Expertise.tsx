"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { expertise } from "@/lib/constants/expertise";

export default function Expertise() {
  const [selected, setSelected] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  return (
    <Section id="expertise" bgSecondary>
      <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Our Expertise
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Solutions Designed Around{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
        </div>

        {/* ---------- Desktop: sidebar explorer ---------- */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-[320px_1fr] lg:gap-8">
          <div className="flex flex-col gap-2">
            {expertise.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setSelected(i)}
                className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors ${
                  selected === i
                    ? "border-accent-primary bg-bg-primary"
                    : "border-border bg-bg-primary/40 hover:border-accent-primary/50"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                    selected === i
                      ? "border-accent-primary text-accent-primary"
                      : "border-border text-text-secondary"
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                </span>
                <span
                  className={`font-heading text-sm font-semibold ${
                    selected === i ? "text-text-primary" : "text-text-secondary"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-border bg-bg-primary p-10"
            >
              <h3 className="font-heading text-2xl font-bold text-text-primary">
                {expertise[selected].title}
              </h3>
              <p className="mt-3 font-body text-text-secondary">
                {expertise[selected].intro}
              </p>
              <p className="mt-6 font-heading text-sm font-semibold text-accent-primary">
                {expertise[selected].servicesIntro}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {expertise[selected].services.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-text-secondary">
                    <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-accent-primary" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---------- Mobile: accordion ---------- */}
        <div className="mt-10 flex flex-col gap-3 lg:hidden">
          {expertise.map((item, i) => {
            const isOpen = expandedMobile === i;
            return (
              <div key={item.title} className="rounded-xl bg-bg-primary/60">
                <button
                  onClick={() => setExpandedMobile(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 rounded-xl px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-secondary border border-border text-accent-primary">
                      <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                    </span>
                    <span className="font-heading text-sm font-semibold text-text-primary">
                      {item.title}
                    </span>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`h-4 w-4 shrink-0 text-text-secondary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5 pl-[3.75rem]">
                        <p className="text-sm text-text-secondary">{item.intro}</p>
                        <p className="mt-3 font-heading text-xs font-semibold text-accent-primary">
                          {item.servicesIntro}
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {item.services.map((service) => (
                            <li
                              key={service}
                              className="flex items-center gap-2 text-sm text-text-secondary"
                            >
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="h-3 w-3 shrink-0 text-accent-primary"
                              />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
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