"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faPenNib,
  faArrowTrendUp,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const journey = [
  { label: "Learn", icon: faBookOpen, top: "68%", left: "0%", float: 3.2 },
  { label: "Create", icon: faPenNib, top: "46%", left: "28%", float: 3.8 },
  { label: "Grow", icon: faArrowTrendUp, top: "24%", left: "56%", float: 3.4 },
  { label: "Impact", icon: faBullseye, top: "2%", left: "80%", float: 4.0 },
];

export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] pt-10 pb-28 md:pt-14 md:pb-32">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 30% 25%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 30% 25%, black 0%, transparent 75%)",
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

      {/* Primary glow — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full opacity-25 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,138,0,0.55) 0%, rgba(255,138,0,0) 70%)",
        }}
      />

      {/* Balancing glow — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,179,71,0.5) 0%, rgba(255,179,71,0) 70%)",
        }}
      />

      {/* Edge vignette so the dot-grid doesn't cut off abruptly */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 60%, #0D0D0D 100%), linear-gradient(90deg, #0D0D0D 0%, transparent 15%, transparent 85%, #0D0D0D 100%)",
        }}
      />

      <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
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
                Careers
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Build, Create &{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                }}
              >
                Grow
              </span>{" "}
              With The Digi Fundas
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-xl space-y-4 font-body text-base leading-relaxed text-[#A3A3A3] md:text-lg"
            >
              <p>
                At The Digi Fundas, we believe great work happens when
                talented people are given the opportunity to learn, create,
                and make an impact.
              </p>
              <p>
                We're always looking for passionate marketers, designers,
                content creators, developers, and creative thinkers who want
                to contribute to meaningful projects and grow alongside
                ambitious brands.
              </p>
              <p>
                Whether you're an experienced professional, freelancer, or
                student looking for hands-on experience, we'd love to hear
                from you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-9"
            >
              <Button href="#open-positions" variant="primary">
                View Open Opportunities
              </Button>
            </motion.div>
          </div>

          {/* Right column — desktop ascending journey */}
          <div className="relative hidden h-[420px] lg:block">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[18%] left-0 h-px w-[75%] origin-left rotate-[-24deg] bg-gradient-to-r from-[#FF8A00]/50 to-transparent"
            />
            {journey.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="absolute"
                style={{ top: step.top, left: step.left }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: step.float,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex w-[150px] flex-col items-center gap-3 rounded-2xl border border-[#262626] bg-[#151515] px-5 py-5 text-center shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF8A00]/10 text-[#FF8A00]">
                    <FontAwesomeIcon icon={step.icon} className="h-4.5 w-4.5" />
                  </span>
                  <span className="font-body text-sm font-semibold text-white">
                    {step.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile — compact horizontal progress row */}
          <div className="relative mt-2 lg:hidden">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-[#FF8A00]/40 to-transparent"
            />
            <div className="relative grid grid-cols-4 gap-2">
              {journey.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FF8A00] bg-[#0D0D0D] text-[#FF8A00]">
                    <FontAwesomeIcon icon={step.icon} className="h-4 w-4" />
                  </span>
                  <span className="mt-2 font-body text-xs font-medium text-white">
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}