"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faUserGroup,
  faHeart,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const FOLLOWERS_START = 3200;
const FOLLOWERS_END = 12800;
const ENGAGEMENT_START = 1.8;
const ENGAGEMENT_END = 6.4;

function useCountUp(from: number, to: number, start: boolean, decimals = 0) {
  const [value, setValue] = useState(from);
  useEffect(() => {
    if (!start) return;
    const steps = 40;
    const increment = (to - from) / steps;
    let current = from;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      current += increment;
      setValue(i >= steps ? to : current);
      if (i >= steps) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, [start, from, to]);
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value);
}

export default function FashionHero() {
  const [inView, setInView] = useState(false);
  const followers = useCountUp(FOLLOWERS_START, FOLLOWERS_END, inView);
  const engagement = useCountUp(ENGAGEMENT_START, ENGAGEMENT_END, inView, 1);

  const chartPoints = [20, 35, 30, 48, 42, 60, 55, 75, 68, 90];

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
              Digital Marketing For Fashion & Clothing Brands
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              Helping Fashion Brands{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Build Visibility, Drive Sales & Create Lasting Connections
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                At The Digi Fundas, we help fashion and clothing brands
                strengthen their digital presence through branding, content
                creation, social media marketing, paid advertising, and
                ecommerce solutions designed to support long-term growth.
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

          {/* brand growth snapshot — the actual outcome this service sells,
              not a shopping mockup. Speaks to the fashion brand OWNER, not
              their customer. */}
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
              {/* brand profile header */}
              <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary font-heading text-sm font-bold text-bg-primary">
                  YB
                </span>
                <div style={{ minWidth: 0, overflow: "hidden" }} className="flex-1">
                  <p
                    style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}
                    className="font-heading text-sm font-bold text-text-primary"
                  >
                    yourfashionbrand
                  </p>
                  <p className="font-body text-xs text-text-secondary">Growth over 90 days</p>
                </div>
                <span className="shrink-0 rounded-full bg-accent-primary/10 px-2.5 py-1 font-body text-[10px] font-semibold text-accent-primary">
                  Live
                </span>
              </div>

              <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }} className="p-5">
                {/* two headline metrics, ticking up live */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-bg-primary p-4">
                    <div className="flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faUserGroup} className="h-3 w-3 text-accent-primary" />
                      <span className="font-body text-[10px] text-text-secondary">Followers</span>
                    </div>
                    <div className="mt-1.5 font-heading text-xl font-bold text-text-primary tabular-nums">
                      {Number(followers).toLocaleString()}
                    </div>
                    <div className="mt-1 flex items-center gap-1 font-body text-[10px] font-semibold text-accent-primary">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="h-2.5 w-2.5" />
                      +300%
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-bg-primary p-4">
                    <div className="flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faHeart} className="h-3 w-3 text-accent-primary" />
                      <span className="font-body text-[10px] text-text-secondary">Engagement</span>
                    </div>
                    <div className="mt-1.5 font-heading text-xl font-bold text-text-primary tabular-nums">
                      {engagement}%
                    </div>
                    <div className="mt-1 flex items-center gap-1 font-body text-[10px] font-semibold text-accent-primary">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="h-2.5 w-2.5" />
                      +255%
                    </div>
                  </div>
                </div>

                {/* growth trend line — simple polyline, no coordinate risk */}
                <div className="mt-4 rounded-xl border border-border bg-bg-primary p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-body text-[10px] text-text-secondary">Audience Growth</span>
                    <span className="flex items-center gap-1 font-body text-[10px] font-semibold text-accent-primary">
                      <FontAwesomeIcon icon={faBullseye} className="h-2.5 w-2.5" />
                      Since Launch
                    </span>
                  </div>
                  <svg viewBox="0 0 300 90" className="h-16 w-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="fashionGrowthFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF8A00" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#FF8A00" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="fashionGrowthStroke" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FF8A00" />
                        <stop offset="100%" stopColor="#FFB347" />
                      </linearGradient>
                    </defs>
                    {(() => {
                      const points = chartPoints
                        .map((v, i) => `${(i * 300) / (chartPoints.length - 1)},${90 - v}`)
                        .join(" ");
                      const area = `0,90 ${points} 300,90`;
                      return (
                        <>
                          <motion.polygon
                            points={area}
                            fill="url(#fashionGrowthFill)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          />
                          <motion.polyline
                            points={points}
                            fill="none"
                            stroke="url(#fashionGrowthStroke)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: inView ? 1 : 0 }}
                            transition={{ duration: 1.1, ease: "easeInOut" }}
                          />
                        </>
                      );
                    })()}
                  </svg>
                </div>

                {/* what drove it — ties metrics to real services offered */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Content Strategy", "Meta Ads", "Influencer Content"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg-primary px-3 py-1.5 font-body text-[10px] text-text-secondary"
                    >
                      {tag}
                    </span>
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