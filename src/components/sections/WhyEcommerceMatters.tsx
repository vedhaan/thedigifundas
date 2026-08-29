"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faFaceSmile,
  faShieldHalved,
  faCartArrowDown,
  faMobileScreen,
  faSeedling,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

const benefits = [
  { icon: faArrowTrendUp, title: "Increase Online Sales" },
  { icon: faFaceSmile, title: "Improve Customer Experience" },
  { icon: faShieldHalved, title: "Build Brand Credibility" },
  { icon: faCartArrowDown, title: "Reduce Cart Abandonment" },
  { icon: faMobileScreen, title: "Improve Mobile Conversions" },
  { icon: faSeedling, title: "Support Long-Term Business Growth" },
];

const CHECK_INTERVAL_MS = 450;

export default function WhyEcommerceMatters() {
  const [checkedCount, setCheckedCount] = useState(0);

  useEffect(() => {
    if (checkedCount >= benefits.length) return;
    const timeout = setTimeout(() => {
      setCheckedCount((c) => c + 1);
    }, CHECK_INTERVAL_MS);
    return () => clearTimeout(timeout);
  }, [checkedCount]);

  const progressPct = (checkedCount / benefits.length) * 100;

  return (
    <section className="relative overflow-hidden bg-bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* left — intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
              Why Your Ecommerce Website Matters
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-[2.6rem]">
              Your Store Should Do{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                More Than Just Look Good
              </span>
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
              Customers today expect seamless browsing, fast loading speeds,
              secure checkout experiences, and mobile-friendly shopping.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
              Your website should not only attract visitors but encourage
              them to complete purchases.
            </p>
          </motion.div>

          {/* right — store health checklist panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-primary/10 to-accent-secondary/5 blur-2xl" />

            <div className="overflow-hidden rounded-2xl border border-border bg-bg-primary shadow-2xl">
              {/* panel header with live progress */}
              <div className="border-b border-border px-6 py-5 sm:px-7">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm font-semibold text-text-primary">
                    Store Health Checklist
                  </span>
                  <span className="font-heading text-xs font-bold text-accent-primary">
                    {checkedCount}/{benefits.length}
                  </span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-bg-secondary">
                  <motion.div
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                  />
                </div>
              </div>

              {/* checklist items — check in sequentially */}
              <div className="flex flex-col">
                {benefits.map((b, i) => {
                  const checked = i < checkedCount;
                  return (
                    <div
                      key={b.title}
                      className={`flex items-center gap-4 border-b border-border px-6 py-4 transition-colors duration-300 last:border-b-0 sm:px-7 ${
                        checked ? "bg-accent-primary/[0.03]" : ""
                      }`}
                    >
                      <motion.span
                        animate={{
                          scale: checked ? [1, 1.2, 1] : 1,
                          backgroundColor: checked ? "var(--color-accent-primary, #FF8A00)" : "transparent",
                        }}
                        transition={{ duration: 0.35 }}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          checked ? "border-accent-primary text-bg-primary" : "border-border text-transparent"
                        }`}
                      >
                        <FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4" />
                      </motion.span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                          checked ? "bg-accent-primary/10 text-accent-primary" : "bg-bg-secondary text-text-secondary/50"
                        }`}
                      >
                        <FontAwesomeIcon icon={b.icon} className="h-3.5 w-3.5" />
                      </span>

                      <span
                        className={`font-body text-sm font-medium transition-colors duration-300 sm:text-base ${
                          checked ? "text-text-primary" : "text-text-secondary/60"
                        }`}
                      >
                        {b.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}