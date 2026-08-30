"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping,
  faGaugeHigh,
  faClock,
  faChartLine,
  faFaceSmile,
  faBrain,
  faFileLines,
  faHeadset,
  faEnvelope,
  faArrowUpRightDots,
  faUsers,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

const benefits = [
  { icon: faHandsHelping, title: "Reduce Manual Work" },
  { icon: faGaugeHigh, title: "Improve Productivity" },
  { icon: faClock, title: "Save Time" },
  { icon: faChartLine, title: "Increase Operational Efficiency" },
  { icon: faFaceSmile, title: "Enhance Customer Experiences" },
  { icon: faBrain, title: "Support Better Decision Making" },
];

const inputs = [
  { icon: faFileLines, label: "Manual Data Entry" },
  { icon: faHeadset, label: "Customer Support" },
  { icon: faEnvelope, label: "Follow-Up Emails" },
];

const outputs = [
  { icon: faArrowUpRightDots, label: "Faster Output" },
  { icon: faUsers, label: "Better Experience" },
  { icon: faBolt, label: "Smarter Decisions" },
];

function NodeGraph() {
  return (
    <div className="relative grid grid-cols-3 items-center gap-6 sm:gap-10">
      <div className="flex flex-col gap-4">
        {inputs.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex cursor-default items-center gap-2.5 rounded-xl border border-border bg-bg-primary px-4 py-3 transition-colors duration-300 hover:border-accent-primary/40 sm:px-5 sm:py-3.5"
          >
            <FontAwesomeIcon icon={item.icon} className="h-3.5 w-3.5 shrink-0 text-text-secondary" />
            <span className="font-body text-xs leading-tight text-text-secondary sm:text-sm">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="pointer-events-none absolute h-full w-full" preserveAspectRatio="none">
          <line x1="0" y1="18" x2="50" y2="50" stroke="#262626" strokeWidth="0.6" />
          <line x1="0" y1="50" x2="50" y2="50" stroke="#262626" strokeWidth="0.6" />
          <line x1="0" y1="82" x2="50" y2="50" stroke="#262626" strokeWidth="0.6" />
          <line x1="50" y1="50" x2="100" y2="18" stroke="#262626" strokeWidth="0.6" />
          <line x1="50" y1="50" x2="100" y2="50" stroke="#262626" strokeWidth="0.6" />
          <line x1="50" y1="50" x2="100" y2="82" stroke="#262626" strokeWidth="0.6" />

          {[
            [0, 18, 50, 50],
            [0, 50, 50, 50],
            [0, 82, 50, 50],
          ].map(([x1, y1, x2, y2], i) => (
            <motion.circle
              key={`in-${i}`}
              r="1.3"
              fill="#FF8A00"
              animate={{ cx: [x1, x2], cy: [y1, y2], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            />
          ))}
          {[
            [50, 50, 100, 18],
            [50, 50, 100, 50],
            [50, 50, 100, 82],
          ].map(([x1, y1, x2, y2], i) => (
            <motion.circle
              key={`out-${i}`}
              r="1.3"
              fill="#FFB347"
              animate={{ cx: [x1, x2], cy: [y1, y2], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 + i * 0.4 }}
            />
          ))}
        </svg>

        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          whileHover={{ scale: 1.2 }}
          transition={{
            scale: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative z-10 flex h-20 w-20 cursor-default items-center justify-center rounded-full border-2 border-accent-primary/40 bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg shadow-accent-primary/30 sm:h-24 sm:w-24"
        >
          <FontAwesomeIcon icon={faBrain} className="h-7 w-7 text-bg-primary sm:h-8 sm:w-8" />
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        {outputs.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex cursor-default items-center gap-2.5 rounded-xl border border-accent-primary/25 bg-accent-primary/5 px-4 py-3 transition-colors duration-300 hover:border-accent-primary/50 sm:px-5 sm:py-3.5"
          >
            <FontAwesomeIcon icon={item.icon} className="h-3.5 w-3.5 shrink-0 text-accent-primary" />
            <span className="font-body text-xs leading-tight text-text-primary sm:text-sm">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function WhyAiMatters() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
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
            Why AI Matters
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-[2.6rem]">
            Work Smarter,{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Scale Faster
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            Businesses today face increasing demands for efficiency, speed,
            and personalization.
          </p>
        </motion.div>

        {/* full-width node graph — spans the real container width now, no
            narrow max-w-5xl gap on large screens */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 w-full rounded-2xl border border-border bg-bg-primary p-8 sm:p-10 lg:p-14"
        >
          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-text-secondary/50">
              Manual Tasks
            </span>
            <span className="h-px w-10 bg-border" />
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent-primary">
              AI Core
            </span>
            <span className="h-px w-10 bg-border" />
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-text-secondary/50">
              Business Outcomes
            </span>
          </div>
          <div className="mx-auto max-w-4xl">
            <NodeGraph />
          </div>
        </motion.div>

        {/* benefits — full width, matches the panel above */}
        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3 rounded-xl border border-border bg-bg-primary p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                <FontAwesomeIcon icon={b.icon} className="h-3.5 w-3.5" />
              </span>
              <span className="font-heading text-xs font-semibold leading-snug text-text-primary sm:text-sm">
                {b.title}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 max-w-xl text-center font-body text-base text-text-secondary sm:text-lg"
        >
          Rather than replacing human expertise, AI helps teams focus on
          higher-value activities that drive growth.
        </motion.p>
      </Container>
    </section>
  );
}   