"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faBriefcase,
  faBullseye,
  faEye,
  faBullhorn,
  faFaceSmile,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

const benefits = [
  { icon: faShieldHalved, title: "Build Trust & Credibility" },
  { icon: faBriefcase, title: "Showcase Products & Services" },
  { icon: faBullseye, title: "Generate Leads & Enquiries" },
  { icon: faEye, title: "Improve Online Visibility" },
  { icon: faBullhorn, title: "Support Marketing Campaigns" },
  { icon: faFaceSmile, title: "Create Better Customer Experiences" },
];

const STEP_INTERVAL_MS = 350;

export default function WhyBusinessWebsite() {
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    if (litCount >= benefits.length) return;
    const timeout = setTimeout(() => setLitCount((c) => c + 1), STEP_INTERVAL_MS);
    return () => clearTimeout(timeout);
  }, [litCount]);

  const allLit = litCount >= benefits.length;

  return (
    <section className="relative overflow-hidden bg-bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* left — intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
              Why Your Business Needs A Professional Website
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-[2.6rem]">
              Your Digital Presence{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Starts With Your Website
              </span>
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
              Customers often research businesses online before making
              purchasing decisions.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
              Your website should work as a 24/7 business asset that helps
              convert visitors into customers.
            </p>
          </motion.div>

          {/* right — credibility timeline, sequential check-in, ends on 24/7 badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-primary/10 to-accent-secondary/5 blur-2xl" />

            <div className="overflow-hidden rounded-2xl border border-border bg-bg-primary p-6 shadow-2xl sm:p-7">
              <div className="relative flex flex-col">
                {/* base track line */}
                <div className="absolute bottom-8 left-[15px] top-1 w-[2px] bg-border" aria-hidden />

                {benefits.map((b, i) => {
                  const lit = i < litCount;
                  return (
                    <div key={b.title} className="relative flex items-center gap-4 py-2.5">
                      <motion.span
                        animate={{
                          borderColor: lit ? "var(--color-accent-primary, #FF8A00)" : "var(--color-border, #262626)",
                          backgroundColor: lit ? "var(--color-accent-primary, #FF8A00)" : "transparent",
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full border-2 bg-bg-primary"
                      >
                        <FontAwesomeIcon
                          icon={b.icon}
                          className={`h-3.5 w-3.5 transition-colors duration-300 ${
                            lit ? "text-bg-primary" : "text-text-secondary/40"
                          }`}
                        />
                      </motion.span>
                      <span
                        className={`font-body text-sm font-medium transition-colors duration-300 sm:text-base ${
                          lit ? "text-text-primary" : "text-text-secondary/50"
                        }`}
                      >
                        {b.title}
                      </span>
                    </div>
                  );
                })}

                {/* 24/7 badge — lights up last, stays lit, the literal payoff */}
                <motion.div
                  initial={{ opacity: 0.4, scale: 0.96 }}
                  animate={{
                    opacity: allLit ? 1 : 0.4,
                    scale: allLit ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 mt-4 flex items-center gap-4 rounded-xl border border-accent-primary/30 bg-accent-primary/5 px-4 py-3"
                >
                  <span className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary">
                    <FontAwesomeIcon icon={faClock} className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-heading text-sm font-bold text-accent-primary sm:text-base">
                    Working 24/7 As Your Business Asset
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}