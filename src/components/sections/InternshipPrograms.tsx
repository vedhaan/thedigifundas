"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import {
  internshipCategories,
  internshipBenefits,
} from "@/lib/constants/internshipPrograms";

export default function InternshipPrograms() {
  return (
    <Section bgSecondary>
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-10 h-[460px] w-[460px] rounded-full opacity-20 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,138,0,0) 70%)",
          }}
        />

        <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Left — pitch + categories */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="font-body text-sm font-semibold uppercase tracking-[0.15em] text-[#FF8A00]"
              >
                Internship Programs
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
              >
                Learn While{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                  }}
                >
                  You Build
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-5 max-w-lg font-body text-base leading-relaxed text-[#A3A3A3] md:text-lg"
              >
                We actively encourage students and freshers to gain practical
                experience through our internship programs.
              </motion.p>

              <div className="mt-8">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-white">
                  Available Internship Categories
                </span>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {internshipCategories.map((category, i) => (
                    <motion.span
                      key={category.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                      whileHover={{ y: -3, borderColor: "rgba(255,138,0,0.5)" }}
                      className="group flex cursor-default items-center gap-2 rounded-full border border-[#262626] bg-[#1a1a1a] px-4 py-2.5 font-body text-sm text-white transition-colors"
                    >
                      <motion.span
                        whileHover={{ rotate: 12 }}
                        transition={{ duration: 0.2 }}
                        className="flex"
                      >
                        <FontAwesomeIcon
                          icon={category.icon}
                          className="h-3.5 w-3.5 text-[#FF8A00]"
                        />
                      </motion.span>
                      {category.label}
                    </motion.span>
                  ))}
                </div>

                {/* Balancing anchor — derived from real data, not invented copy */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-6 flex items-center gap-3 border-t border-[#262626] pt-5"
                >
                  <span
                    className="text-2xl font-bold text-[#FF8A00]"
                    style={{ fontFamily: "ui-monospace, monospace" }}
                  >
                    {String(internshipCategories.length).padStart(2, "0")}
                  </span>
                  <span className="font-body text-sm text-[#A3A3A3]">
                    Career paths to explore across marketing, design, and
                    technology.
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Right — certificate-styled benefits card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="overflow-hidden rounded-3xl border-2 border-dashed border-[#FF8A00]/30 bg-[#151515]">
                {/* Top — seal with living pulse */}
                <div className="p-8 text-center">
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
                    <motion.span
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute h-16 w-16 rounded-full border-2 border-[#FF8A00]"
                    />
                    <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#FF8A00] bg-[#FF8A00]/10">
                      <FontAwesomeIcon
                        icon={internshipBenefits[4].icon}
                        className="h-6 w-6 text-[#FF8A00]"
                      />
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-white">
                    What You'll Gain
                  </h3>
                  <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-[#A3A3A3]">
                    Internship Benefits
                  </p>
                </div>

                {/* Perforated divider */}
                <div className="relative">
                  <div className="border-t border-dashed border-[#262626]" />
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#151515]"
                  />
                  <span
                    aria-hidden
                    className="absolute right-0 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#151515]"
                  />
                </div>

                {/* Benefits list */}
                <ul className="space-y-2 p-8">
                  {internshipBenefits.map((benefit, i) => (
                    <motion.li
                      key={benefit.label}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      whileHover={{ x: 4, backgroundColor: "rgba(255,138,0,0.05)" }}
                      className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF8A00]/10 text-[#FF8A00]">
                        <FontAwesomeIcon icon={benefit.icon} className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-body text-sm text-white">
                        {benefit.label}
                      </span>
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                        className="ml-auto"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="h-3.5 w-3.5 text-[#FF8A00]/60"
                        />
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </Section>
  );
}