"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faFont, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const swatches = ["#FF8A00", "#FFB347", "#0D0D0D", "#FFFFFF", "#A3A3A3"];
const STEP_INTERVAL_MS = 700;

// Steps: 0 = nothing, 1 = logo revealed, 2 = palette revealed, 3 = type revealed
const TOTAL_STEPS = 3;

export default function BrandingHero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= TOTAL_STEPS) return;
    const timeout = setTimeout(() => setStep((s) => s + 1), STEP_INTERVAL_MS);
    return () => clearTimeout(timeout);
  }, [step]);

  const ready = step >= TOTAL_STEPS;

  return (
    <section
      style={{ overflowX: "hidden", position: "relative", width: "100%" }}
      className="bg-bg-primary py-16 sm:py-20 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(255,138,0,0.10) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,179,71,0.08) 0%, transparent 50%), linear-gradient(180deg, #0D0D0D 0%, #141414 55%, #0D0D0D 100%)",
          }}
        />
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
              Branding & Design Services
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              Creative Design Solutions That{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Strengthen Brands & Create Lasting Impressions
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                At The Digi Fundas, we help businesses develop professional,
                consistent, and impactful visual identities through
                strategic branding and creative design solutions. Whether
                you&apos;re launching a new brand, refreshing your identity,
                preparing for an exhibition, or creating marketing
                collateral, our design services are built to support your
                business goals.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Book A Consultation
              </Button>
              <Button href="/work" variant="secondary">
                View Design Portfolio
              </Button>
            </div>
          </motion.div>

          {/* brand kit assembling live — logo, palette, typography, ready state */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: "440px" }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-[110px]" />

            <div
              style={{ position: "relative", width: "100%", maxWidth: "100%", overflow: "hidden", boxSizing: "border-box" }}
              className="rounded-2xl border border-border bg-bg-secondary shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Brand Kit
                </span>
                <AnimatePresence mode="wait">
                  {ready ? (
                    <motion.span
                      key="ready"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1.5 rounded-full bg-accent-primary/10 px-2.5 py-1 font-body text-[10px] font-semibold text-accent-primary"
                    >
                      <FontAwesomeIcon icon={faCircleCheck} className="h-2.5 w-2.5" />
                      Ready
                    </motion.span>
                  ) : (
                    <motion.span
                      key="building"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-body text-[10px] text-text-secondary"
                    >
                      Building...
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }} className="flex flex-col gap-5 p-5 sm:p-6">
                {/* logo mark */}
                <div>
                  <p className="mb-2 font-body text-[10px] uppercase tracking-wider text-text-secondary/60">
                    Logo Mark
                  </p>
                  <div className="flex h-20 w-full items-center justify-center rounded-lg border border-border bg-bg-primary sm:h-24">
                    <AnimatePresence>
                      {step >= 1 && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary font-heading text-lg font-bold text-bg-primary"
                        >
                          D
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* color palette */}
                <div>
                  <p className="mb-2 flex items-center gap-1.5 font-body text-[10px] uppercase tracking-wider text-text-secondary/60">
                    <FontAwesomeIcon icon={faPalette} className="h-2.5 w-2.5" />
                    Color Palette
                  </p>
                  <div className="flex gap-2">
                    {swatches.map((color, i) => (
                      <AnimatePresence key={color}>
                        {step >= 2 && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.08 }}
                            className="h-9 flex-1 rounded-lg border border-border sm:h-10"
                            style={{ backgroundColor: color }}
                          />
                        )}
                      </AnimatePresence>
                    ))}
                  </div>
                </div>

                {/* typography pairing */}
                <div>
                  <p className="mb-2 flex items-center gap-1.5 font-body text-[10px] uppercase tracking-wider text-text-secondary/60">
                    <FontAwesomeIcon icon={faFont} className="h-2.5 w-2.5" />
                    Typography
                  </p>
                  <div className="rounded-lg border border-border bg-bg-primary px-4 py-3">
                    <AnimatePresence>
                      {step >= 3 && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35 }}
                        >
                          <p className="font-heading text-lg font-bold text-text-primary">Aa Sora</p>
                          <p className="font-body text-xs text-text-secondary">Aa Inter — Body Text</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}