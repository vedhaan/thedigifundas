"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram, faFacebook, faLinkedin, faPinterest, faYoutube, faThreads,
} from "@fortawesome/free-brands-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const platforms = [
  { label: "Instagram", icon: faInstagram, gradient: "linear-gradient(135deg, #833AB4, #E1306C, #FCAF45)" },
  { label: "Facebook", icon: faFacebook, gradient: "#1877F2" },
  { label: "LinkedIn", icon: faLinkedin, gradient: "#0A66C2" },
  { label: "Pinterest", icon: faPinterest, gradient: "#E60023" },
  { label: "YouTube", icon: faYoutube, gradient: "#FF0000" },
  { label: "Threads", icon: faThreads, gradient: "#FFFFFF" },
];

const barPattern = [0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.45];

function ChannelStrip({ platform, index }: { platform: (typeof platforms)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-bg-secondary to-bg-primary px-4 py-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl"
    >
      {/* internal glow wash, brand-tinted, brightens the card itself */}
      <span
        className="pointer-events-none absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
        style={{ background: platform.gradient }}
      />

      <span
        className="absolute inset-x-6 top-0 h-[3px] rounded-full opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: platform.gradient }}
      />

      <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-white/30">
        <FontAwesomeIcon icon={platform.icon} className="h-5 w-5" />
      </span>

      <span className="relative font-heading text-xs font-semibold text-text-primary/90 transition-colors duration-300 group-hover:text-text-primary">
        {platform.label}
      </span>

      <div className="relative flex h-14 items-end gap-[3px]">
        {barPattern.map((height, i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full"
            style={{ background: platform.gradient, opacity: 0.75 }}
            animate={{ scaleY: [height * 0.5, height, height * 0.6, height * 0.9, height * 0.5] }}
            transition={{
              duration: 1.8 + (i % 3) * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.12,
            }}
            initial={{ height: "56px", transformOrigin: "bottom" }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function PlatformsWeManage() {
  return (
    <Section id="platforms" bgSecondary className="relative overflow-hidden">
      {/* thematic background — a broadcast waveform strip, not a gradient blob */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-[0.12]">
        <svg viewBox="0 0 1200 120" className="h-24 w-full" preserveAspectRatio="none">
          <motion.path
            d="M0,60 C50,20 100,100 150,60 C200,20 250,100 300,60 C350,20 400,100 450,60 C500,20 550,100 600,60 C650,20 700,100 750,60 C800,20 850,100 900,60 C950,20 1000,100 1050,60 C1100,20 1150,100 1200,60"
            fill="none"
            stroke="var(--color-accent-primary)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </svg>
      </div>
      {/* faint scanning sweep across the waveform, continuous */}
      <motion.div
        animate={{ x: ["-10%", "110%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        className="pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent"
      />

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Platforms We Manage
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Social Platforms We{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-3 gap-4 sm:grid-cols-6">
          {platforms.map((platform, i) => (
            <ChannelStrip key={platform.label} platform={platform} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}