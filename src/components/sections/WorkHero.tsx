"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faPalette,
  faPenNib,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const serviceCards = [
  { icon: faChartLine, label: "Strategic Marketing" },
  { icon: faPalette, label: "Creative Design" },
  { icon: faPenNib, label: "Content Creation" },
  { icon: faCubes, label: "Digital Solutions" },
];

export default function WorkHero() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] pt-12 pb-28 md:pt-22 md:pb-32">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 30% 20%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 30% 20%, black 0%, transparent 70%)",
        }}
      />

      {/* Noise texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[560px] w-[560px] rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,138,0,0) 70%)",
        }}
      />

      {/* Diagonal accent line */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 hidden h-px w-[420px] origin-right rotate-[-8deg] bg-gradient-to-l from-[#FF8A00]/60 to-transparent lg:block"
      />

      <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center gap-3"
            >
              <span
                className="text-xs font-medium tracking-[0.2em] text-[#FF8A00]"
                style={{ fontFamily: "ui-monospace, monospace" }}
              >
                04
              </span>
              <span className="h-px w-10 bg-[#FF8A00]/50" />
              <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#A3A3A3]">
                Our Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.75rem]"
            >
              Transforming Ideas
              <br />
              Into{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                }}
              >
                Measurable
              </span>{" "}
              Business Growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-xl font-body text-base leading-relaxed text-[#A3A3A3] md:text-lg"
            >
              Every brand has a unique story, challenge, and vision. Our work
              is centered around helping businesses strengthen their digital
              presence, build meaningful customer connections, and achieve
              measurable results through strategic marketing, creative
              design, content creation, and digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" variant="primary">
                Start a Project
              </Button>
              <Button href="#case-studies" variant="secondary">
                View Case Studies
              </Button>
            </motion.div>
          </div>

          {/* Right column — offset card stack */}
          <div className="relative hidden h-[420px] lg:block">
            {serviceCards.map((card, i) => {
              const rotations = [-6, 4, -3, 5];
              const offsets = [
                { top: "0%", left: "8%" },
                { top: "20%", left: "42%" },
                { top: "48%", left: "0%" },
                { top: "66%", left: "46%" },
              ];
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 24, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: rotations[i] }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  whileHover={{ rotate: 0, scale: 1.04 }}
                  className="absolute flex w-[210px] items-center gap-3 rounded-2xl border border-[#262626] bg-[#151515] px-5 py-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]"
                  style={{ top: offsets[i].top, left: offsets[i].left }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF8A00]/10 text-[#FF8A00]">
                    <FontAwesomeIcon icon={card.icon} className="h-4 w-4" />
                  </span>
                  <span className="font-body text-sm font-medium text-white">
                    {card.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-[#FF8A00] to-transparent"
        />
      </motion.div>
    </section>
  );
}