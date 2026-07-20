"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const storyBeats = [
  "What began as a passion for helping businesses improve their online presence has evolved into a multidisciplinary agency that supports brands across marketing, design, content creation, website development, and AI-powered solutions.",
  "Over the last 3+ years, we've worked with businesses from diverse industries, helping them strengthen their visibility, create stronger brand identities, improve customer engagement, and achieve measurable marketing results.",
  "Our journey has been driven by curiosity, creativity, and a commitment to delivering solutions that create lasting value.",
];

export default function OurStory() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });
  const spineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="our-story" bgSecondary className="relative overflow-hidden">
      {/* multi-layer gradient mesh — three overlapping glows, not one flat orb */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-accent-primary/[0.08] blur-[130px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-accent-secondary/[0.07] blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-primary/[0.05] blur-[100px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Our Story
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            How It{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Started
            </span>
          </h2>
        </motion.div>

        <div ref={timelineRef} className="relative mt-16 max-w-3xl">
          {/* static track (faint) */}
          <div className="absolute bottom-0 left-[19px] top-2 w-px bg-border" />
          {/* animated gradient spine — scales in with scroll, transform-origin top */}
          <motion.div
            style={{ scaleY: spineScale }}
            className="absolute bottom-0 left-[19px] top-2 w-px origin-top bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary"
          />

          <div className="flex flex-col gap-10">
            {storyBeats.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-14"
              >
                {/* dot marker with glow */}
                <span className="absolute left-[11px] top-3 h-[19px] w-[19px] rounded-full border-2 border-accent-primary bg-bg-secondary shadow-[0_0_16px_rgba(255,138,0,0.5)]" />

                {/* card */}
                <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-primary/60 p-6 backdrop-blur-sm sm:p-8">
                  <span className="absolute -right-2 -top-4 bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text font-heading text-6xl font-bold text-transparent opacity-[0.12] sm:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="relative font-body text-base text-text-secondary sm:text-lg">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}