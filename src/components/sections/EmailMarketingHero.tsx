"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEnvelopeOpen, faChartLine, faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const SEQUENCE_DELAY_MS = 900;

export default function EmailMarketingHero() {
  const [phase, setPhase] = useState<"arriving" | "opened" | "stats">("arriving");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("opened"), SEQUENCE_DELAY_MS);
    const t2 = setTimeout(() => setPhase("stats"), SEQUENCE_DELAY_MS * 2);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

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
              Email Marketing Services
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              Email Marketing That{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Builds Relationships & Drives Results
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                At The Digi Fundas, we create email marketing strategies
                that help businesses stay connected with their audience,
                improve engagement, and generate repeat business.
              </p>
            </div>

            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Book A Strategy Call
              </Button>
            </div>
          </motion.div>

          {/* inbox mockup — email arrives, gets opened, stats reveal */}
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
                  Inbox
                </span>
                <span className="rounded-full bg-accent-primary/10 px-2.5 py-1 font-body text-[10px] font-semibold text-accent-primary">
                  1 New
                </span>
              </div>

              <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }} className="p-5 sm:p-6">
                {/* incoming email card */}
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-bg-primary p-4"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary">
                    <FontAwesomeIcon
                      icon={phase === "arriving" ? faEnvelope : faEnvelopeOpen}
                      className="h-3.5 w-3.5"
                    />
                  </span>
                  <div style={{ minWidth: 0, overflow: "hidden" }} className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}
                        className="font-heading text-sm font-bold text-text-primary"
                      >
                        The Digi Fundas
                      </span>
                      <span className="shrink-0 font-body text-[10px] text-text-secondary">now</span>
                    </div>
                    <p
                      style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}
                      className="mt-1 font-body text-sm text-text-secondary"
                    >
                      Your monthly growth insights are here
                    </p>
                    <AnimatePresence>
                      {phase !== "arriving" && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-1.5 inline-block rounded-full bg-accent-primary/10 px-2 py-0.5 font-body text-[9px] font-semibold text-accent-primary"
                        >
                          Opened
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* campaign stats — reveal after "opened" */}
                <AnimatePresence>
                  {phase === "stats" && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-5 grid grid-cols-2 gap-3"
                    >
                      <div className="rounded-xl border border-border bg-bg-primary p-4">
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faChartLine} className="h-3 w-3 text-accent-primary" />
                          <span className="font-body text-[10px] text-text-secondary">Open Rate</span>
                        </div>
                        <div className="mt-1.5 font-heading text-xl font-bold text-text-primary">
                          42%
                        </div>
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-bg-secondary">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "42%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                          />
                        </div>
                      </div>
                      <div className="rounded-xl border border-border bg-bg-primary p-4">
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faArrowPointer} className="h-3 w-3 text-accent-primary" />
                          <span className="font-body text-[10px] text-text-secondary">Click Rate</span>
                        </div>
                        <div className="mt-1.5 font-heading text-xl font-bold text-text-primary">
                          18%
                        </div>
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-bg-secondary">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "18%" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}