"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const DOC_TEXT =
  "How to Build a Content Strategy That Actually Drives Growth";
const TYPING_SPEED_MS = 55;

const calendarDays = [
  { label: "Mon", filled: true },
  { label: "Tue", filled: false },
  { label: "Wed", filled: true },
  { label: "Thu", filled: true },
  { label: "Fri", filled: false },
];

function useTypewriter(text: string) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplay("");
    setDone(false);

    const interval = setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, TYPING_SPEED_MS);

    return () => clearInterval(interval);
  }, [text]);

  return { display, done };
}

export default function ContentMarketingHero() {
  const { display, done } = useTypewriter(DOC_TEXT);
  const wordCount = display.trim().length > 0 ? display.trim().split(/\s+/).length : 0;

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
              Content Marketing Services
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              Strategic Content Marketing Designed To{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Build Authority & Drive Growth
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                Content marketing is more than creating content. It&apos;s
                about delivering the right message to the right audience at
                the right time.
              </p>
            </div>

            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Schedule A Consultation
              </Button>
            </div>
          </motion.div>

          {/* content editor mockup — the actual product of content marketing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: "520px" }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-[110px]" />

            <div
              style={{ position: "relative", width: "100%", maxWidth: "100%", overflow: "hidden", boxSizing: "border-box" }}
              className="rounded-2xl border border-border bg-bg-secondary shadow-2xl"
            >
              {/* editor chrome */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400/70" />
                <span className="ml-2 flex items-center gap-1.5 font-body text-[11px] text-text-secondary">
                  <FontAwesomeIcon icon={faPenNib} className="h-3 w-3 text-accent-primary/60" />
                  Draft — Untitled Article
                </span>
              </div>

              <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }} className="p-5 sm:p-6">
                {/* document title being typed */}
                <div
                  style={{ position: "relative", minWidth: 0, overflow: "hidden" }}
                  className="rounded-lg border border-border bg-bg-primary p-4"
                >
                  <span className="font-body text-[10px] uppercase tracking-wider text-text-secondary/60">
                    H1
                  </span>
                  <h3
                    style={{ overflowWrap: "break-word" }}
                    className="mt-1 font-heading text-base font-bold leading-snug text-text-primary sm:text-lg"
                  >
                    {display}
                    {!done && (
                      <span
                        aria-hidden
                        style={{ display: "inline-block", width: "2px", height: "1em", marginLeft: "2px", verticalAlign: "middle" }}
                        className="animate-pulse bg-accent-primary"
                      />
                    )}
                  </h3>
                </div>

                {/* placeholder body lines */}
                <div className="mt-4 flex flex-col gap-2">
                  <div className="h-2 w-full rounded-full bg-border/70" />
                  <div className="h-2 w-[92%] rounded-full bg-border/70" />
                  <div className="h-2 w-[75%] rounded-full bg-border/70" />
                </div>

                {/* word count + SEO score row */}
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4">
                  <span className="font-body text-xs text-text-secondary">
                    {wordCount} words
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-body text-xs text-text-secondary">SEO Score</span>
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-border">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: done ? "88%" : "20%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                      />
                    </div>
                  </div>
                </div>

                {/* mini content calendar strip */}
                <div className="mt-5 flex items-center justify-between gap-2 rounded-lg border border-border bg-bg-primary px-3 py-2.5">
                  {calendarDays.map((day) => (
                    <div key={day.label} className="flex flex-col items-center gap-1">
                      <span className="font-body text-[9px] uppercase text-text-secondary/60">
                        {day.label}
                      </span>
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded ${
                          day.filled ? "bg-accent-primary/15 text-accent-primary" : "bg-bg-secondary text-transparent"
                        }`}
                      >
                        {day.filled && <FontAwesomeIcon icon={faCircleCheck} className="h-2.5 w-2.5" />}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}