"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import type { CaseStudy } from "@/lib/constants/caseStudies";

// deterministic upward-trending point sets per tab index — no randomness,
// each tab gets a visually distinct but always-positive (rising) curve
const trendShapes = [
  [128, 118, 108, 92, 80, 58, 48, 26, 30, 18],
  [130, 125, 110, 100, 82, 70, 52, 40, 28, 16],
  [126, 120, 112, 96, 84, 62, 44, 34, 22, 12],
];

export default function CaseStudyPerformanceInsights({ caseStudy }: { caseStudy: CaseStudy }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!caseStudy.performanceInsights || caseStudy.performanceInsights.length === 0) {
    return null;
  }

  // group insights by their label so each tab shows only its own data
  const categories = Array.from(new Set(caseStudy.performanceInsights.map((i) => i.label)));
  const activeInsights = caseStudy.performanceInsights.filter(
    (insight) => insight.label === categories[activeTab]
  );
  const trend = trendShapes[activeTab % trendShapes.length];
  const points = trend.map((y, i) => [i * (400 / (trend.length - 1)), y]);
  const linePoints = points.map(([x, y]) => `${x},${y}`).join(" ");
  const areaPoints = `0,140 ${linePoints} 400,140`;

  return (
    <Section id="performance-insights" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent-primary/[0.05] blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-secondary/[0.05] blur-[130px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent-primary">
            Key Performance Insights
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Data-Driven Decisions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-12 w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-bg-primary shadow-2xl"
        >
          {/* header — title + clickable category tabs, real state switching */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4 sm:px-8">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                <FontAwesomeIcon icon={faGaugeHigh} className="h-3.5 w-3.5" />
              </span>
              <span className="font-heading text-sm font-bold text-text-primary">Dashboard</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`rounded-full border px-3 py-1.5 font-body text-xs font-medium transition-colors duration-200 ${
                    activeTab === i
                      ? "border-accent-primary bg-accent-primary text-bg-primary"
                      : "border-border bg-bg-secondary text-text-secondary hover:border-accent-primary/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* chart — swaps per active tab, always trending upward */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <svg viewBox="0 0 400 140" className="h-40 w-full sm:h-48" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`csFadeUp-${activeTab}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF8A00" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#FF8A00" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id={`csLineStroke-${activeTab}`} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FFB347" />
                      <stop offset="100%" stopColor="#FF8A00" />
                    </linearGradient>
                  </defs>

                  <motion.polygon
                    points={areaPoints}
                    fill={`url(#csFadeUp-${activeTab})`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  />
                  <motion.polyline
                    points={linePoints}
                    fill="none"
                    stroke={`url(#csLineStroke-${activeTab})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>
            </AnimatePresence>

            {/* active tab's real data callout */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`data-${activeTab}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-4 flex flex-col gap-3"
              >
                {activeInsights.map((insight, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 rounded-xl border border-border bg-bg-secondary px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
                      <span className="font-body text-sm font-semibold text-text-primary">
                        {insight.dataPoint}
                      </span>
                    </div>
                    <span className="font-body text-xs leading-relaxed text-text-secondary sm:max-w-md sm:text-right">
                      {insight.interpretation}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-2xl text-center font-body text-xs text-text-secondary/60">
          Figures reflect the analysed campaign period and are provided for
          context on the optimisation process.
        </p>
      </Container>
    </Section>
  );
}