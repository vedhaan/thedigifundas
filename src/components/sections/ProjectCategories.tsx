"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { projectCategories } from "@/lib/constants/projectCategories";

export default function ProjectCategories() {
  const [active, setActive] = useState(0);
  const current = projectCategories[active];

  return (
    <Section bgSecondary>
      <div className="relative overflow-hidden">
        {/* Background gradients — matches the established radial-spotlight
            language from WorkHero/CaseStudyHero rather than a new style */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-24 h-[480px] w-[480px] rounded-full opacity-25 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,138,0,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,179,71,0.45) 0%, rgba(255,179,71,0) 70%)",
          }}
        />

        <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
            >
              Project{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                }}
              >
                Categories
              </span>
            </motion.h2>
          </div>

          {/* Mobile tab pills */}
          <div
            role="tablist"
            aria-label="Project categories"
            className="mt-10 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
          >
            {projectCategories.map((category, i) => (
              <button
                key={category.title}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-3 font-body text-sm font-medium transition-colors ${
                  active === i
                    ? "border-[#FF8A00] bg-[#FF8A00]/10 text-white"
                    : "border-[#262626] text-[#A3A3A3]"
                }`}
              >
                <FontAwesomeIcon icon={category.icon} className="h-3.5 w-3.5" />
                {category.title}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-[320px_1fr] lg:gap-10">
            {/* Desktop list */}
            <div
              role="tablist"
              aria-label="Project categories"
              className="hidden flex-col lg:flex"
            >
              {projectCategories.map((category, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={category.title}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`group flex items-center gap-4 border-l-2 py-5 pl-6 pr-4 text-left transition-colors ${
                      isActive
                        ? "border-[#FF8A00] bg-[#1a1a1a]"
                        : "border-[#262626] hover:border-[#4d4d4d]"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isActive
                          ? "bg-[#FF8A00] text-[#0D0D0D]"
                          : "bg-[#1a1a1a] text-[#A3A3A3] group-hover:text-white"
                      }`}
                    >
                      <FontAwesomeIcon icon={category.icon} className="h-4 w-4" />
                    </span>
                    <span
                      className={`font-heading text-base font-semibold transition-colors ${
                        isActive ? "text-white" : "text-[#A3A3A3] group-hover:text-white"
                      }`}
                    >
                      {category.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-[#262626] bg-[#151515] p-8 md:p-10">
              <span
                className="pointer-events-none absolute right-6 top-4 select-none font-heading text-7xl font-bold text-white/[0.04] md:text-8xl"
                aria-hidden
              >
                {String(active + 1).padStart(2, "0")}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF8A00] text-[#0D0D0D]">
                    <FontAwesomeIcon icon={current.icon} className="h-6 w-6" />
                  </span>

                  <h3 className="mt-6 font-heading text-2xl font-semibold text-white md:text-3xl">
                    {current.title}
                  </h3>

                  <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-[#A3A3A3] md:text-base">
                    {current.description}
                  </p>

                  <div className="mt-8 border-t border-[#262626] pt-6">
                    <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#FF8A00]">
                      Projects Include
                    </span>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {current.items.map((item) => (
                        <span
                          key={item}
                          className="flex items-center gap-2 rounded-full border border-[#262626] bg-[#1a1a1a] px-4 py-2 font-body text-sm text-white"
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="h-3 w-3 text-[#FF8A00]"
                          />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}