"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faBullseye,
  faArrowTrendUp,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";

// Dashboard mockup metrics — cosmetic/illustrative only, not client data.
const metrics = [
  { icon: faDollarSign, label: "ROAS", value: 4.2, suffix: "x", barPct: 82 },
  { icon: faUserGroup, label: "Reach", value: 128, suffix: "K", barPct: 68 },
  { icon: faBullseye, label: "CTR", value: 3.6, suffix: "%", barPct: 55 },
  { icon: faArrowTrendUp, label: "Leads", value: 940, suffix: "+", barPct: 90 },
];

// Simple upward growth line — plain x/y points only, no path arcs or rotation math.
const graphPoints = [
  [0, 100],
  [40, 92],
  [80, 78],
  [120, 82],
  [160, 55],
  [200, 48],
  [240, 25],
  [300, 12],
];
const pointsAttr = graphPoints.map(([x, y]) => `${x},${y}`).join(" ");
const areaAttr = `0,120 ${pointsAttr} 300,120`;

export default function MetaAdsHero() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-16 sm:py-20 lg:py-16">
      {/* base gradient wash — sits under the existing blob glows, gives the
          section actual depth instead of flat black */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(255,138,0,0.10) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,179,71,0.08) 0%, transparent 50%), linear-gradient(180deg, #0D0D0D 0%, #141414 55%, #0D0D0D 100%)",
        }}
      />

      {/* existing blob glows, kept as-is */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
              Meta Ads Management Services
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              Performance-Driven Meta Ads That{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Generate Leads, Sales & Business Growth
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                Running ads is easy. Running profitable ads requires strategy,
                testing, audience understanding, and continuous optimization.
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

          {/* MacBook mockup containing the dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-[110px]" />

            <div className="relative rounded-t-2xl border border-border bg-[#1a1a1a] p-2 shadow-2xl sm:p-3">
              <div className="mx-auto mb-2 h-1.5 w-1.5 rounded-full bg-[#0a0a0a]" />

              <div className="overflow-hidden rounded-lg border border-border/60 bg-bg-secondary p-4 sm:p-6">
                <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                    <span className="h-2 w-2 rounded-full bg-green-400/70" />
                    <span className="ml-2 font-heading text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      Campaign Overview
                    </span>
                  </div>
                  <span className="rounded-full border border-border px-2 py-0.5 font-body text-[10px] font-medium text-accent-primary">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  {metrics.map((m, i) => (
                    <div key={m.label} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bg-primary border border-border text-accent-primary">
                          <FontAwesomeIcon icon={m.icon} className="h-3 w-3" />
                        </span>
                        <span className="font-body text-[11px] text-text-secondary">
                          {m.label}
                        </span>
                      </div>

                      <div className="font-heading text-xl font-bold text-text-primary sm:text-2xl">
                        <CountUp end={m.value} suffix={m.suffix} />
                      </div>

                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-primary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${m.barPct}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg border border-border bg-bg-primary p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-body text-[11px] text-text-secondary">
                      Ad Performance Trend
                    </span>
                    <span className="flex items-center gap-1 font-body text-[11px] text-accent-primary">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="h-3 w-3" />
                      +64% this month
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 300 120"
                    className="h-24 w-full sm:h-28"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="metaAdsAreaFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF8A00" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#FF8A00" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="metaAdsLineStroke" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FF8A00" />
                        <stop offset="100%" stopColor="#FFB347" />
                      </linearGradient>
                    </defs>

                    <motion.polygon
                      points={areaAttr}
                      fill="url(#metaAdsAreaFill)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    />

                    <motion.polyline
                      points={pointsAttr}
                      fill="none"
                      stroke="url(#metaAdsLineStroke)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                    />

                    {graphPoints.map(([x, y], i) => (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="3.5"
                        fill="#FFB347"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative h-3 rounded-b-2xl border border-t-0 border-border bg-gradient-to-b from-[#2a2a2a] to-[#161616] sm:h-4">
              <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-md bg-[#0a0a0a] sm:w-24" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}