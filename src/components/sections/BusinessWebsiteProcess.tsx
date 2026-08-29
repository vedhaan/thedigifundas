"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faClipboardList,
  faPalette,
  faCode,
  faRocket,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  { icon: faMagnifyingGlass, title: "Discovery", desc: "Understanding your business objectives and customer needs." },
  { icon: faClipboardList, title: "Planning", desc: "Creating the website structure, content strategy, and functionality roadmap." },
  { icon: faPalette, title: "Design", desc: "Developing a professional visual experience aligned with your brand." },
  { icon: faCode, title: "Development", desc: "Building a fast, secure, and responsive website." },
  { icon: faRocket, title: "Launch & Optimization", desc: "Testing, deployment, and performance improvements." },
];

export default function BusinessWebsiteProcess() {
  return (
    <Section id="business-website-process" className="relative overflow-hidden">
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
            Our Development Process
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            How We Build{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Business Websites
            </span>
          </h2>
        </motion.div>

        {/* DESKTOP — pipeline with cards beneath each node, same fix as Ecommerce */}
        <div className="relative mx-auto mt-20 hidden max-w-6xl lg:block">
          <div className="absolute left-0 right-0 top-6 h-[3px] rounded-full bg-border" aria-hidden />
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-0 top-6 h-[3px] rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
            aria-hidden
          />

          <div className="relative grid grid-cols-5 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.18 + 0.3 }}
                className="group flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-bg-primary bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg">
                  <FontAwesomeIcon icon={step.icon} className="h-4.5 w-4.5" />
                </span>

                <div className="mt-6 flex w-full flex-1 flex-col items-center rounded-2xl border border-border bg-bg-secondary px-5 py-6 transition-colors duration-300 group-hover:border-accent-primary/40">
                  <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-accent-primary/60">
                    Step 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-10 flex items-center justify-between gap-6 rounded-2xl border border-border bg-bg-secondary px-8 py-5"
          >
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4 text-accent-primary" />
              <span className="font-body text-sm text-text-secondary">
                A structured 5-phase process, refined across every project we build.
              </span>
            </div>
            <span className="whitespace-nowrap font-heading text-xs font-bold uppercase tracking-widest text-accent-primary">
              5 Phases · Fully Managed
            </span>
          </motion.div>
        </div>

        {/* MOBILE / TABLET — vertical pipeline */}
        <div className="relative mx-auto mt-14 max-w-md lg:hidden">
          <div className="absolute bottom-4 left-6 top-4 w-[3px] rounded-full bg-border" aria-hidden />
          <motion.div
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-6 top-4 w-[3px] rounded-full bg-gradient-to-b from-accent-primary to-accent-secondary"
            aria-hidden
          />

          <div className="flex flex-col gap-9">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex gap-5"
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-bg-primary bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg">
                  <FontAwesomeIcon icon={step.icon} className="h-4.5 w-4.5" />
                </span>
                <div className="pt-1">
                  <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-accent-primary/60">
                    Step 0{i + 1}
                  </span>
                  <h3 className="mt-1 font-heading text-base font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm text-text-secondary">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}