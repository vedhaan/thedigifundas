"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faUser, faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const userMessage = "Can you automate our lead follow-up emails?";
const aiResponse =
  "Yes — I can set up an automated sequence that follows up with new leads instantly, saving your team hours every week.";

const TYPING_SPEED_MS = 22;
const THINK_DELAY_MS = 600;
const CARD_DELAY_MS = 500;

export default function AiSolutionsHero() {
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [phase, setPhase] = useState<"thinking" | "typing" | "done">("thinking");

  useEffect(() => {
    const thinkTimeout = setTimeout(() => setPhase("typing"), THINK_DELAY_MS);
    return () => clearTimeout(thinkTimeout);
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayedResponse(aiResponse.slice(0, i));
      if (i >= aiResponse.length) {
        clearInterval(interval);
        setTimeout(() => setPhase("done"), CARD_DELAY_MS);
      }
    }, TYPING_SPEED_MS);
    return () => clearInterval(interval);
  }, [phase]);

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
              AI Solutions & Automation
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              AI-Powered Solutions Designed To{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Improve Efficiency & Accelerate Business Growth
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                At The Digi Fundas, we help businesses leverage AI and
                automation to simplify repetitive tasks, improve
                productivity, enhance customer experiences, and create more
                efficient business systems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Book A Consultation
              </Button>
              <Button href="#ai-services" variant="secondary">
                Explore AI Solutions
              </Button>
            </div>
          </motion.div>

          {/* AI chat mockup — the literal product, not a borrowed shape */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: "460px" }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-[110px]" />

            <div
              style={{ position: "relative", width: "100%", maxWidth: "100%", overflow: "hidden", boxSizing: "border-box" }}
              className="rounded-2xl border border-border bg-bg-secondary shadow-2xl"
            >
              <div className="flex items-center gap-2.5 border-b border-border px-5 py-3.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary">
                  <FontAwesomeIcon icon={faRobot} className="h-3 w-3" />
                </span>
                <span className="font-heading text-xs font-semibold text-text-primary">
                  AI Assistant
                </span>
                <span className="ml-auto flex items-center gap-1.5 rounded-full bg-accent-primary/10 px-2.5 py-1 font-body text-[10px] font-semibold text-accent-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                  Online
                </span>
              </div>

              <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }} className="flex flex-col gap-4 p-5 sm:p-6">
                {/* user message bubble */}
                <div className="flex items-start justify-end gap-2.5">
                  <div
                    style={{ minWidth: 0, overflow: "hidden" }}
                    className="max-w-[85%] rounded-2xl rounded-tr-sm bg-accent-primary px-4 py-2.5"
                  >
                    <p
                      style={{ overflowWrap: "break-word" }}
                      className="font-body text-sm text-bg-primary"
                    >
                      {userMessage}
                    </p>
                  </div>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bg-primary text-text-secondary">
                    <FontAwesomeIcon icon={faUser} className="h-2.5 w-2.5" />
                  </span>
                </div>

                {/* AI response bubble — thinking dots, then typed text */}
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary">
                    <FontAwesomeIcon icon={faRobot} className="h-2.5 w-2.5" />
                  </span>
                  <div
                    style={{ minWidth: 0, overflow: "hidden" }}
                    className="max-w-[85%] rounded-2xl rounded-tl-sm bg-bg-primary px-4 py-2.5"
                  >
                    {phase === "thinking" ? (
                      <div className="flex items-center gap-1 py-1">
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            className="h-1.5 w-1.5 rounded-full bg-text-secondary"
                          />
                        ))}
                      </div>
                    ) : (
                      <p
                        style={{ overflowWrap: "break-word" }}
                        className="font-body text-sm text-text-primary"
                      >
                        {displayedResponse}
                        {phase === "typing" && (
                          <span
                            aria-hidden
                            style={{ display: "inline-block", width: "1.5px", height: "1em", marginLeft: "2px", verticalAlign: "middle" }}
                            className="animate-pulse bg-accent-primary"
                          />
                        )}
                      </p>
                    )}
                  </div>
                </div>

                {/* automation summary card — appears once response completes */}
                <AnimatePresence>
                  {phase === "done" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="rounded-xl border border-accent-primary/25 bg-accent-primary/5 p-4"
                    >
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faBolt} className="h-3.5 w-3.5 text-accent-primary" />
                        <span className="font-heading text-xs font-bold text-text-primary">
                          Workflow Automated
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-1.5 font-body text-[11px] text-text-secondary">
                        <FontAwesomeIcon icon={faClock} className="h-2.5 w-2.5 text-accent-primary" />
                        Estimated 6+ hours saved per week
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