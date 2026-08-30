"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faRotate,
  faFaceSmile,
  faBullseye,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const benefits = [
  { icon: faUserCheck, title: "Increase Customer Retention" },
  { icon: faRotate, title: "Generate Repeat Purchases" },
  { icon: faFaceSmile, title: "Improve Customer Engagement" },
  { icon: faBullseye, title: "Support Lead Generation" },
  { icon: faGears, title: "Automate Communication" },
];

export default function EmailMarketingBenefits() {
  return (
    <Section id="email-marketing-benefits" className="relative overflow-hidden">
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
            Benefits Of Email Marketing
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            One Channel,{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              A Full Customer Lifecycle
            </span>
          </h2>
        </motion.div>

        {/* DESKTOP — full-width customer lifecycle flow, real container width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mt-20 hidden w-full lg:block"
        >
          <div className="absolute left-0 right-0 top-8 h-[3px] rounded-full bg-border" aria-hidden />
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-0 top-8 h-[3px] rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
            aria-hidden
          />

          <div className="relative grid grid-cols-5 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.18 + 0.3 }}
                className="group flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-bg-primary bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg">
                  <FontAwesomeIcon icon={b.icon} className="h-6 w-6" />
                </span>
                <div className="mt-6 flex w-full flex-col items-center rounded-2xl border border-border bg-bg-secondary px-4 py-6 transition-colors duration-300 group-hover:border-accent-primary/40">
                  <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-accent-primary/60">
                    Stage 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-bold leading-snug text-text-primary">
                    {b.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* MOBILE / TABLET — vertical lifecycle, own simpler code path */}
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
          <div className="flex flex-col gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex items-center gap-5"
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-bg-primary bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg">
                  <FontAwesomeIcon icon={b.icon} className="h-4.5 w-4.5" />
                </span>
                <div>
                  <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-accent-primary/60">
                    Stage 0{i + 1}
                  </span>
                  <h3 className="mt-0.5 font-heading text-sm font-bold text-text-primary">
                    {b.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-14 max-w-xl text-center font-body text-sm text-text-secondary sm:text-base"
        >
          One consistent channel, guiding customers from first purchase to
          lasting loyalty.
        </motion.p>
      </Container>
    </Section>
  );
}