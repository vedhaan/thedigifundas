"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBullseye } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { getCaseStudyBySlug } from "@/lib/constants/caseStudies";

export default function FeaturedCaseStudy() {
  const study = getCaseStudyBySlug("mishthi-art");
  if (!study) return null;

  const primaryChallenge = study.challenges[0];
  const topObjectives = study.objectives.slice(0, 3);

  return (
    <Section>
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,138,0,0) 70%)",
          }}
        />

        <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span
              className="text-xs font-medium tracking-[0.2em] text-[#FF8A00]"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              CASE STUDY — 01
            </span>
            <span className="h-px w-10 bg-[#FF8A00]/50" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#A3A3A3]">
              {study.category}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {study.clientName}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
              }}
            >
              Success Story
            </span>
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-l-2 border-[#FF8A00] pl-6"
            >
              <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#A3A3A3]">
                The Challenge
              </span>
              <p className="mt-3 font-heading text-xl font-medium leading-snug text-white md:text-2xl">
                {primaryChallenge}
              </p>

              <div className="mt-8">
                <Button href={`/work/${study.slug}`} variant="secondary">
                  Read Full Case Study
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-3.5 w-3.5" />
                </Button>
              </div>

              {topObjectives.length > 0 && (
                <div className="mt-12 border-t border-[#262626] pt-8">
                  <div className="flex items-center gap-2.5">
                    <FontAwesomeIcon
                      icon={faBullseye}
                      className="h-3.5 w-3.5 text-[#FF8A00]"
                    />
                    <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#A3A3A3]">
                      What We Set Out To Achieve
                    </span>
                  </div>
                  <ul className="mt-5 space-y-4">
                    {topObjectives.map((objective, i) => (
                      <motion.li
                        key={objective}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * i }}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="mt-0.5 text-sm font-semibold text-[#FF8A00]"
                          style={{ fontFamily: "ui-monospace, monospace" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-body text-sm leading-relaxed text-[#A3A3A3]">
                          {objective}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            <div className="relative">
              {study.approach.map((step, i) => {
                const isLast = i === study.approach.length - 1;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 * i }}
                    className="relative flex gap-5 pb-10 last:pb-0"
                  >
                    {!isLast && (
                      <span
                        aria-hidden
                        className="absolute left-[15px] top-9 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#FF8A00]/50 to-[#262626]"
                      />
                    )}
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#FF8A00] bg-[#0D0D0D] font-body text-xs font-semibold text-[#FF8A00]">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 font-body text-sm leading-relaxed text-[#A3A3A3]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Full-width stat strip — divide-x/y utilities, not manual index logic */}
          <div className="mt-20 grid grid-cols-2 divide-x divide-y divide-[#262626] border-t border-[#262626] md:grid-cols-4 md:divide-y-0">
            {study.stats.map((stat, i) => {
              const isLong = stat.value.length > 8;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex flex-col px-5 py-8 md:px-8"
                >
                  <span
                    className={`flex min-h-[2.75rem] items-end bg-clip-text font-heading font-bold text-transparent md:min-h-[3.5rem] ${
                      isLong
                        ? "text-xl sm:text-2xl md:text-3xl"
                        : "text-3xl sm:text-4xl md:text-5xl"
                    }`}
                    style={{
                      backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-2 block font-body text-xs uppercase tracking-wide text-[#A3A3A3] sm:text-sm">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </div>
    </Section>
  );
}