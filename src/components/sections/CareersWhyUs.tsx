"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faLightbulb,
  faGraduationCap,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const reasons = [
  {
    title: "Growth-Focused Environment",
    description:
      "Work on real projects that challenge you and help you develop practical skills.",
    icon: faArrowTrendUp,
  },
  {
    title: "Creative Freedom",
    description: "We value ideas, initiative, and innovation.",
    icon: faLightbulb,
  },
  {
    title: "Continuous Learning",
    description:
      "Stay updated with the latest trends in marketing, design, technology, AI, and business growth.",
    icon: faGraduationCap,
  },
  {
    title: "Collaborative Culture",
    description:
      "Work with passionate professionals who believe in creativity, strategy, and continuous improvement.",
    icon: faUsers,
  },
];

export default function CareersWhyUs() {
  const [active, setActive] = useState(0);

  return (
    <Section bgSecondary>
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-0 h-[480px] w-[480px] rounded-full opacity-20 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,138,0,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full opacity-15 blur-[120px]"
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
              More Than Just{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                }}
              >
                A Workplace
              </span>
            </motion.h2>
          </div>

          {/* Desktop — fanned panels, height matched to content */}
          <div className="mt-16 hidden gap-3 lg:flex lg:h-[260px]">
            {reasons.map((reason, i) => {
              const isActive = active === i;
              return (
                <motion.button
                  key={reason.title}
                  onClick={() => setActive(i)}
                  animate={{ flex: isActive ? 3 : 1 }}
                  whileHover={!isActive ? { y: -4 } : undefined}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className={`group relative overflow-hidden rounded-2xl border text-left transition-colors duration-300 ${
                    isActive
                      ? "border-[#FF8A00]/40"
                      : "border-[#262626] hover:border-[#FF8A00]/30"
                  }`}
                  style={{
                    background: isActive
                      ? "linear-gradient(160deg, #1f1f1f 0%, #161616 100%)"
                      : "linear-gradient(160deg, #171717 0%, #121212 100%)",
                  }}
                >
                  <span
                    className={`pointer-events-none absolute bottom-3 right-4 select-none font-heading text-5xl font-bold transition-colors duration-300 ${
                      isActive ? "text-[#FF8A00]/10" : "text-white/[0.06]"
                    }`}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35, delay: 0.15 }}
                      className="relative flex h-full flex-col justify-center p-8"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF8A00] text-[#0D0D0D]">
                        <FontAwesomeIcon icon={reason.icon} className="h-6 w-6" />
                      </span>
                      <h3 className="mt-5 max-w-xs font-heading text-2xl font-semibold text-white md:text-3xl">
                        {reason.title}
                      </h3>
                      <p className="mt-3 max-w-sm font-body text-base leading-relaxed text-[#A3A3A3]">
                        {reason.description}
                      </p>
                    </motion.div>
                  ) : (
                    <div className="relative flex h-full flex-col items-center justify-center gap-4 p-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#A3A3A3] transition-colors group-hover:bg-[#FF8A00]/10 group-hover:text-[#FF8A00]">
                        <FontAwesomeIcon icon={reason.icon} className="h-4.5 w-4.5" />
                      </span>
                      <span
                        className="font-heading text-sm font-semibold uppercase tracking-wide text-[#A3A3A3] transition-colors group-hover:text-white"
                        style={{ writingMode: "vertical-rl" }}
                      >
                        {reason.title}
                      </span>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile — accordion */}
          <div className="mt-14 space-y-3 lg:hidden">
            {reasons.map((reason, i) => {
              const isOpen = active === i;
              return (
                <div
                  key={reason.title}
                  className="overflow-hidden rounded-2xl border border-[#262626]"
                  style={{
                    background: "linear-gradient(160deg, #191919 0%, #141414 100%)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-[#FF8A00] text-[#0D0D0D]"
                          : "bg-white/5 text-[#A3A3A3]"
                      }`}
                    >
                      <FontAwesomeIcon icon={reason.icon} className="h-4 w-4" />
                    </span>
                    <span className="font-heading text-base font-semibold text-white">
                      {reason.title}
                    </span>
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-[4.25rem] font-body text-sm leading-relaxed text-[#A3A3A3]">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </Section>
  );
}