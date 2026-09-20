"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faImages, faImage } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const formatBadges = [
  { label: "Reels & Video Content", top: "2%", left: "-6%" },
  { label: "Social Media Creatives", top: "84%", left: "58%" },
];

export default function ContentCreationHero() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] pt-10 pb-24 md:pt-14 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 25% 20%, rgba(255,138,0,0.14) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-[480px] w-[480px] rounded-full opacity-20 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,138,0,0) 70%)",
        }}
      />

      <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A00]" />
              <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#A3A3A3]">
                Content Creation Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Content That{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                }}
              >
                Captures Attention
              </span>
              , Builds Trust & Inspires Action
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-xl space-y-4 font-body text-base leading-relaxed text-[#A3A3A3] md:text-lg"
            >
              <p>
                At The Digi Fundas, we create strategic content designed to
                strengthen brand presence, improve engagement, and support
                business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" variant="primary">
                Book A Strategy Call
              </Button>
              <Button href="/work" variant="secondary">
                View Our Work
              </Button>
            </motion.div>
          </div>

          {/* Right column — one large focal panel, real depth behind it */}
          <div className="relative hidden h-[540px] items-center justify-center lg:flex">
            {/* Back panel — Static Post, largest, furthest back */}
            <motion.div
              initial={{ opacity: 0, rotate: 0, y: 30 }}
              animate={{ opacity: 1, rotate: -12, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="absolute h-[420px] w-[320px] rounded-[28px] border border-[#262626] bg-[#151515] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]"
              style={{ transformOrigin: "bottom center" }}
            >
              <div className="flex h-full flex-col p-5">
                <div
                  className="flex-1 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(160deg, #FF8A00 0%, #1a1005 70%, #0D0D0D 100%)",
                    opacity: 0.35,
                  }}
                />
              </div>
            </motion.div>

            {/* Middle panel — Carousel, slightly forward */}
            <motion.div
              initial={{ opacity: 0, rotate: 0, y: 30 }}
              animate={{ opacity: 1, rotate: 9, y: 10 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="absolute h-[400px] w-[300px] rounded-[28px] border border-[#262626] bg-[#151515] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]"
              style={{ transformOrigin: "bottom center" }}
            >
              <div className="flex h-full flex-col p-5">
                <div className="grid flex-1 grid-cols-2 gap-2">
                  {[0, 1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="rounded-xl"
                      style={{
                        background:
                          "linear-gradient(160deg, #FF8A00 0%, #1a1005 70%, #0D0D0D 100%)",
                        opacity: 0.3 + n * 0.05,
                      }}
                    />
                  ))}
                </div>
                <span className="mt-3 flex items-center gap-2 font-body text-xs font-medium text-[#A3A3A3]">
                  <FontAwesomeIcon icon={faImages} className="h-3 w-3" />
                  Carousel
                </span>
              </div>
            </motion.div>

            {/* Front panel — Reel, largest, dominant focal point */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="relative z-10 flex h-[460px] w-[300px] flex-col overflow-hidden rounded-[28px] border border-[#262626] bg-[#151515] shadow-[0_40px_80px_-25px_rgba(0,0,0,0.75)]"
            >
              <div className="flex gap-1.5 p-4">
                <span className="h-1 flex-1 rounded-full bg-white/70" />
                <span className="h-1 flex-1 rounded-full bg-white/20" />
                <span className="h-1 flex-1 rounded-full bg-white/20" />
              </div>

              <div className="relative flex flex-1 items-center justify-center">
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, #FF8A00 0%, #1a1005 60%, #0D0D0D 100%)",
                    opacity: 0.55,
                  }}
                />
                <motion.span
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#FF8A00] text-[#0D0D0D] shadow-lg"
                >
                  <FontAwesomeIcon icon={faPlay} className="ml-1.5 h-8 w-8" />
                </motion.span>
              </div>

              <div className="p-5">
                <span className="flex items-center gap-2 font-body text-xs font-medium text-[#A3A3A3]">
                  <FontAwesomeIcon icon={faImage} className="h-3 w-3" />
                  Reel
                </span>
                <div className="mt-2.5 h-2.5 w-2/3 rounded-full bg-white/15" />
                <div className="mt-2 h-2.5 w-1/2 rounded-full bg-white/10" />
              </div>
            </motion.div>

            {/* Floating badges — real established category labels */}
            {formatBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                className="absolute z-20"
                style={{ top: badge.top, left: badge.left }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3.4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[#262626] bg-[#151515] px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#FF8A00]" />
                  <span className="font-body text-sm font-medium text-white">
                    {badge.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}