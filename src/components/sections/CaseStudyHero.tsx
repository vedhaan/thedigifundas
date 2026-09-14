"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "@/lib/constants/caseStudies";

function StatCard({ stat, delay }: { stat: { value: string; label: string }; delay: number }) {
  const [inView, setInView] = useState(false);
  const [displayValue, setDisplayValue] = useState(stat.value);
  const numericMatch = stat.value.match(/^(\d+)(.*)$/);

  // long qualitative values ("New Walk-ins", "Google Profile") get a
  // smaller size so they fit on one line, matching short numeric values
  // ("17X") visually instead of wrapping and breaking row alignment
  const isLong = stat.value.length > 10;

  useEffect(() => {
    if (!inView || !numericMatch) return;
    const target = parseInt(numericMatch[1], 10);
    const suffix = numericMatch[2];
    let current = 0;
    const step = Math.ceil(target / 25) || 1;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setDisplayValue(`${current}${suffix}`);
      if (current >= target) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.4, delay }}
      className="group relative flex h-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-7 text-center backdrop-blur-sm transition-colors duration-300 hover:border-accent-primary/30 sm:px-5"
    >
      <div className="flex min-h-[2.25rem] w-full items-center justify-center sm:min-h-[2.75rem]">
        <span
          className={`whitespace-nowrap font-heading font-bold leading-tight text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text ${
            isLong ? "text-base sm:text-lg lg:text-xl" : "text-xl sm:text-2xl lg:text-3xl"
          }`}
        >
          {displayValue}
        </span>
      </div>
      <span className="font-body text-xs leading-snug text-text-secondary sm:text-sm">
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function CaseStudyHero({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <section
      style={{ overflowX: "hidden", position: "relative", width: "100%" }}
      className="bg-bg-primary py-16 sm:py-20 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,138,0,0.10) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(255,179,71,0.08) 0%, transparent 50%), linear-gradient(180deg, #0D0D0D 0%, #141414 55%, #0D0D0D 100%)",
          }}
        />
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.a
          href="/work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 inline-flex items-center gap-2 font-heading text-sm font-semibold text-text-secondary transition-colors duration-200 hover:text-accent-primary"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-3 w-3" />
          Back To Work
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            {caseStudy.detailHeroSubtitle}
          </span>

          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
            {caseStudy.detailHeroTitle}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            {caseStudy.detailHeroIntro}
          </p>
        </motion.div>

        {/* stats row — equal-height cards via grid + h-full, fixed value
            zone prevents wrap-induced misalignment across cards */}
        <div className="mx-auto mt-14 grid w-full max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {caseStudy.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}