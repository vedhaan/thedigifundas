"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faStar,
  faMicrophone,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const SEARCH_QUERY = "best digital marketing agency";
const TYPING_SPEED_MS = 65;
const SEARCHING_DURATION_MS = 650;

type Phase = "typing" | "searching" | "result";

function useTypewriter(text: string) {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    let charIndex = 0;
    let typingInterval: ReturnType<typeof setInterval>;
    let searchingTimeout: ReturnType<typeof setTimeout>;

    setDisplay("");
    setPhase("typing");

    typingInterval = setInterval(() => {
      charIndex += 1;
      setDisplay(text.slice(0, charIndex));

      if (charIndex >= text.length) {
        clearInterval(typingInterval);
        setPhase("searching");
        searchingTimeout = setTimeout(() => {
          setPhase("result");
          // plays once — no restart scheduled, stays static on the result
        }, SEARCHING_DURATION_MS);
      }
    }, TYPING_SPEED_MS);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(searchingTimeout);
    };
  }, [text]);

  return { display, phase };
}

export default function GoogleAdsHero() {
  const { display, phase } = useTypewriter(SEARCH_QUERY);

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
              Google Ads Management Services
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              Google Ads Campaigns Designed To{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Generate Qualified Leads & Business Growth
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                At The Digi Fundas, we help businesses connect with
                high-intent audiences through strategic Google Ads campaigns
                designed to generate leads, drive website traffic, increase
                sales, and maximize return on investment.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Book A Strategy Call
              </Button>
              <Button href="/insights" variant="secondary">
                View Success Stories
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              position: "relative",
              margin: "0 auto",
              width: "100%",
              maxWidth: "520px",
            }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-[110px]" />

            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "100%",
                overflow: "hidden",
                borderRadius: "1rem",
                boxSizing: "border-box",
              }}
              className="border border-border bg-bg-secondary shadow-2xl"
            >
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400/70" />
                <span
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    minWidth: 0,
                    flex: "1 1 0%",
                  }}
                  className="ml-2 rounded-full bg-bg-primary px-3 py-1 font-body text-[11px] text-text-secondary"
                >
                  google.com/search
                </span>
              </div>

              <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }} className="p-5 sm:p-6">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    width: "100%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    boxSizing: "border-box",
                  }}
                  className="rounded-full border border-border bg-bg-primary px-4 py-3.5 shadow-sm sm:py-3"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="h-3.5 w-3.5 shrink-0 text-text-secondary" />

                  <span
                    style={{
                      position: "relative",
                      display: "block",
                      minWidth: 0,
                      flex: "1 1 0%",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                    className="font-body text-sm text-text-primary sm:text-base"
                  >
                    {display}
                    {phase === "typing" && (
                      <span
                        aria-hidden
                        style={{
                          display: "inline-block",
                          width: "1.5px",
                          height: "1em",
                          verticalAlign: "middle",
                          marginLeft: "1px",
                        }}
                        className="animate-pulse bg-accent-primary"
                      />
                    )}
                  </span>

                  <div style={{ position: "relative", width: "14px", height: "14px", flexShrink: 0 }}>
                    <AnimatePresence mode="wait">
                      {phase === "searching" ? (
                        <motion.div
                          key="spinner"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, rotate: 360 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            opacity: { duration: 0.15 },
                            rotate: { duration: 0.6, repeat: Infinity, ease: "linear" },
                          }}
                          style={{ position: "absolute", inset: 0 }}
                        >
                          <FontAwesomeIcon icon={faCircleNotch} className="h-3.5 w-3.5 text-accent-primary" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="mic"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          style={{ position: "absolute", inset: 0 }}
                        >
                          <FontAwesomeIcon icon={faMicrophone} className="h-3.5 w-3.5 text-accent-primary/60" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <motion.div
                  layout
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ width: "100%", maxWidth: "100%", overflow: "hidden", marginTop: "1.25rem" }}
                >
                  <AnimatePresence>
                    {phase === "result" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ width: "100%", maxWidth: "100%", overflow: "hidden", boxSizing: "border-box" }}
                        className="rounded-xl border border-border bg-bg-primary p-4 sm:p-5"
                      >
                        <div className="flex w-full items-center gap-2">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary font-heading text-[10px] font-bold text-bg-primary">
                            D
                          </span>
                          <div style={{ minWidth: 0, flex: "1 1 0%" }} className="leading-tight">
                            <p style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} className="font-body text-xs text-text-primary">
                              The Digi Fundas
                            </p>
                            <p style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} className="font-body text-[10px] text-text-secondary">
                              www.thedigifundas.com
                            </p>
                          </div>
                          <span className="ml-auto shrink-0 rounded border border-accent-primary/40 px-1.5 py-0.5 font-body text-[10px] font-semibold text-accent-primary">
                            Ad
                          </span>
                        </div>

                        <h4 className="mt-3 font-body text-base font-medium leading-snug text-accent-secondary sm:text-lg">
                          Digital Marketing Agency | Bhavnagar, Gujarat
                        </h4>
                        <p className="mt-2 font-body text-xs leading-relaxed text-text-secondary sm:text-sm">
                          Grow your business with data-driven Google Ads
                          campaigns. Qualified leads, real ROI. Book a free
                          strategy call today.
                        </p>

                        <div className="mt-4 flex flex-col gap-2 border-t border-border pt-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                          <span className="flex items-center gap-1.5 font-body text-[11px] text-text-secondary">
                            <FontAwesomeIcon icon={faStar} className="h-3 w-3 shrink-0 text-accent-primary" />
                            4.9 Rating
                          </span>
                          <span className="flex items-center gap-1.5 font-body text-[11px] text-text-secondary">
                            <FontAwesomeIcon icon={faLocationDot} className="h-3 w-3 shrink-0 text-accent-primary" />
                            Serving Local &amp; Nationwide Clients
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}