"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faScaleBalanced, faHammer, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  { icon: faMagnifyingGlass, title: "Understand", desc: "Identify business challenges and inefficiencies." },
  { icon: faScaleBalanced, title: "Evaluate", desc: "Assess opportunities where AI can create value." },
  { icon: faHammer, title: "Build", desc: "Develop customized automation workflows and systems." },
  { icon: faArrowsRotate, title: "Optimize", desc: "Monitor performance and continuously improve outcomes." },
];

export default function AiApproach() {
  return (
    <Section id="ai-approach" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#FF8A00 1px, transparent 1px)",
          backgroundSize: "32px 32px",
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
            Our Approach
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            How We Implement{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
        </motion.div>

        {/* processing loop — full-width panel, real container width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 w-full rounded-2xl border border-border bg-bg-secondary p-8 sm:p-10 lg:p-14"
        >
          {/* four cards in a row, connected by a rotating scan ring behind them,
              representing an ongoing loop rather than a one-way pipeline */}
          <div className="relative">
            {/* rotating dashed ring — pure CSS transform rotation, no coordinate math */}
            <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="h-[92%] w-[92%] rounded-[3rem] border-2 border-dashed border-accent-primary/15"
              />
            </div>

            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-primary p-6 text-center transition-colors duration-300 hover:border-accent-primary/40"
                >
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg shadow-accent-primary/20">
                    <FontAwesomeIcon icon={step.icon} className="h-5 w-5" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-bg-primary bg-bg-secondary font-heading text-[9px] font-bold text-accent-primary">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="font-heading text-base font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="font-body text-xs leading-relaxed text-text-secondary">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* loop indicator — explicit, states the cyclical nature outright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faArrowsRotate} className="h-3 w-3 text-accent-primary/60" />
            <span className="font-body text-xs text-text-secondary">
              A continuous cycle — optimization feeds back into understanding new opportunities.
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}