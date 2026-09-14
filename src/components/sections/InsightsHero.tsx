"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBookOpen, faTag } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const READ_TIME_MIN = 6;
const TOTAL_STEPS = 40;

export default function InsightsHero() {
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setProgress(Math.min((step / TOTAL_STEPS) * 100, 100));
      if (step >= TOTAL_STEPS) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [inView]);

  const minutesLeft = Math.max(READ_TIME_MIN - Math.round((progress / 100) * READ_TIME_MIN), 0);

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
              Insights
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              Ideas, Insights &{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Strategies For Business Growth
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                At The Digi Fundas, we share practical insights, industry
                perspectives, and actionable strategies designed to help
                businesses strengthen their digital presence and accelerate
                growth.
              </p>
            </div>

            <div className="mt-8">
              <Button href="#featured-insights" variant="primary">
                Explore Latest Articles
              </Button>
            </div>
          </motion.div>

          {/* reading progress mockup — literal to the "blog/article" concept */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            onViewportEnter={() => setInView(true)}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: "420px" }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-[110px]" />

            <div
              style={{ position: "relative", width: "100%", maxWidth: "100%", overflow: "hidden", boxSizing: "border-box" }}
              className="rounded-2xl border border-border bg-bg-secondary shadow-2xl"
            >
              {/* scroll progress bar pinned to top, like a real reading article */}
              <div className="h-1 w-full overflow-hidden bg-bg-primary">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                  className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                />
              </div>

              <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }} className="p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-accent-primary/10 px-2.5 py-1 font-body text-[10px] font-semibold text-accent-primary">
                    <FontAwesomeIcon icon={faTag} className="h-2.5 w-2.5" />
                    Digital Marketing
                  </span>
                </div>

                <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-text-primary sm:text-xl">
                  How Digital Marketing Helps Small Businesses Grow
                </h3>

                <div className="mt-3 flex items-center gap-4 border-b border-border pb-4">
                  <span className="flex items-center gap-1.5 font-body text-xs text-text-secondary">
                    <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
                    {minutesLeft > 0 ? `${minutesLeft} min left` : "Finished"}
                  </span>
                  <span className="flex items-center gap-1.5 font-body text-xs text-text-secondary">
                    <FontAwesomeIcon icon={faBookOpen} className="h-3 w-3" />
                    {READ_TIME_MIN} min read
                  </span>
                </div>

                {/* placeholder text lines, mimicking article body */}
                <div className="mt-4 flex flex-col gap-2.5">
                  <div className="h-2 w-full rounded-full bg-border/70" />
                  <div className="h-2 w-[94%] rounded-full bg-border/70" />
                  <div className="h-2 w-[88%] rounded-full bg-border/70" />
                  <div className="h-2 w-[70%] rounded-full bg-border/70" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}