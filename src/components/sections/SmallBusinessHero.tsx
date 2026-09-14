"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faPhone,
  faUsers,
  faCircleCheck,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const LEADS_TARGET = 34;
const services = [
  { label: "Google Business Profile", active: true },
  { label: "Local SEO", active: true },
  { label: "Social Media Presence", active: true },
];

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = Math.ceil(target / 30);
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setValue(current);
      if (current >= target) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, [start, target]);
  return value;
}

export default function SmallBusinessHero() {
  const [inView, setInView] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);
  const leads = useCountUp(LEADS_TARGET, inView);

  useEffect(() => {
    if (!inView || checkedCount >= services.length) return;
    const timeout = setTimeout(() => setCheckedCount((c) => c + 1), 400);
    return () => clearTimeout(timeout);
  }, [inView, checkedCount]);

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
              Digital Marketing For Small Businesses
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[2.9rem]">
              Helping Small Businesses{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Build Visibility, Generate Leads & Grow With Confidence
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                At The Digi Fundas, we help small businesses create a strong
                digital presence through strategic marketing, branding,
                content creation, website development, and advertising
                solutions designed to attract customers and support
                sustainable growth.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Book A Strategy Call
              </Button>
              <Button href="/work" variant="secondary">
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* enhanced local visibility snapshot — map, before/after strip,
              service checklist, richer without becoming flashy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            onViewportEnter={() => setInView(true)}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: "440px" }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-[110px]" />

            <div
              style={{ position: "relative", width: "100%", maxWidth: "100%", overflow: "hidden", boxSizing: "border-box" }}
              className="rounded-2xl border border-border bg-bg-secondary shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Local Visibility
                </span>
                <span className="rounded-full bg-accent-primary/10 px-2.5 py-1 font-body text-[10px] font-semibold text-accent-primary">
                  This Month
                </span>
              </div>

              <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }} className="p-5 sm:p-6">
                {/* richer map card — multiple pins, radar pulse, depth */}
                <div className="relative flex h-36 w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br from-bg-primary to-bg-secondary sm:h-40">
                  <div
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                      backgroundImage: "radial-gradient(var(--color-border) 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  {/* radar pulse rings behind the main pin */}
                  <motion.span
                    animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                    className="absolute h-10 w-10 rounded-full bg-accent-primary/40"
                  />
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg"
                  >
                    <FontAwesomeIcon icon={faLocationDot} className="h-4.5 w-4.5" />
                  </motion.span>
                  {/* smaller secondary pins — implies a wider reach area */}
                  <span className="absolute left-[22%] top-[30%] h-5 w-5 rounded-full bg-accent-secondary/50" />
                  <span className="absolute right-[20%] bottom-[28%] h-4 w-4 rounded-full bg-accent-primary/30" />
                  <span className="absolute right-[30%] top-[25%] h-3 w-3 rounded-full bg-accent-secondary/40" />
                </div>

                {/* before/after visibility strip */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-bg-primary px-4 py-3">
                  <div className="text-center">
                    <p className="font-body text-[9px] uppercase tracking-wider text-text-secondary/60">Before</p>
                    <p className="mt-0.5 font-heading text-sm font-bold text-text-secondary">Page 3</p>
                  </div>
                  <FontAwesomeIcon icon={faArrowTrendUp} className="h-4 w-4 text-accent-primary" />
                  <div className="text-center">
                    <p className="font-body text-[9px] uppercase tracking-wider text-accent-primary/70">After</p>
                    <p className="mt-0.5 font-heading text-sm font-bold text-accent-primary">Page 1</p>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <p className="font-body text-[9px] uppercase tracking-wider text-text-secondary/60">Search Rank</p>
                  </div>
                </div>

                {/* review + lead stats */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-bg-primary p-4">
                    <div className="flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faStar} className="h-3 w-3 text-accent-primary" />
                      <span className="font-body text-[10px] text-text-secondary">Google Rating</span>
                    </div>
                    <div className="mt-1.5 font-heading text-xl font-bold text-text-primary">4.8</div>
                    <div className="mt-1 flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="h-2.5 w-2.5 text-accent-primary" />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-bg-primary p-4">
                    <div className="flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faPhone} className="h-3 w-3 text-accent-primary" />
                      <span className="font-body text-[10px] text-text-secondary">New Leads</span>
                    </div>
                    <div className="mt-1.5 font-heading text-xl font-bold text-text-primary tabular-nums">
                      {leads}
                    </div>
                    <div className="mt-1 flex items-center gap-1 font-body text-[10px] text-accent-primary">
                      <FontAwesomeIcon icon={faUsers} className="h-2.5 w-2.5" />
                      From local search
                    </div>
                  </div>
                </div>

                {/* what's running — sequential checklist, ties visibility to real work */}
                <div className="mt-3 flex flex-col gap-2 rounded-xl border border-border bg-bg-primary p-4">
                  <p className="font-body text-[10px] uppercase tracking-wider text-text-secondary/60">
                    Actively Running
                  </p>
                  {services.map((s, i) => {
                    const checked = i < checkedCount;
                    return (
                      <div key={s.label} className="flex items-center gap-2.5">
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className={`h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${
                            checked ? "text-accent-primary" : "text-border"
                          }`}
                        />
                        <span
                          className={`font-body text-xs transition-colors duration-300 ${
                            checked ? "text-text-primary" : "text-text-secondary/50"
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}