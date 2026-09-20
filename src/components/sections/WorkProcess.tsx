"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { workProcessSteps } from "@/lib/constants/workProcessSteps";

export default function WorkProcess() {
  return (
    <Section bgSecondary>
      <Container className="!max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            How We{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
              }}
            >
              Deliver Results
            </span>
          </motion.h2>
        </div>

        {/* Desktop — true horizontal flow */}
        <div className="relative mt-16 hidden lg:block">
          {/* Connecting line, drawn once behind all nodes — no coordinate math */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-[#FF8A00]/40 to-transparent"
          />
          <div className="grid grid-cols-4 gap-6">
            {workProcessSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#FF8A00] bg-[#0D0D0D] text-[#FF8A00]">
                  <FontAwesomeIcon icon={step.icon} className="h-6 w-6" />
                </span>
                <span
                  className="mt-4 text-xs font-semibold tracking-[0.15em] text-[#FF8A00]"
                  style={{ fontFamily: "ui-monospace, monospace" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[220px] font-body text-sm leading-relaxed text-[#A3A3A3]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical connector, own layout */}
        <div className="relative mt-14 lg:hidden">
          {workProcessSteps.map((step, i) => {
            const isLast = i === workProcessSteps.length - 1;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-5 pb-10 last:pb-0"
              >
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute left-[23px] top-12 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-[#FF8A00]/50 to-[#262626]"
                  />
                )}
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#FF8A00] bg-[#0D0D0D] text-[#FF8A00]">
                  <FontAwesomeIcon icon={step.icon} className="h-4 w-4" />
                </span>
                <div>
                  <span
                    className="text-xs font-semibold tracking-[0.15em] text-[#FF8A00]"
                    style={{ fontFamily: "ui-monospace, monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-white">
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
      </Container>
    </Section>
  );
}