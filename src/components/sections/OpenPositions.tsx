"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { openPositions, type OpenPosition } from "@/lib/constants/openPositions";

function PositionCard({ position, index }: { position: OpenPosition; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 180,
    damping: 18,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.07 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full overflow-hidden rounded-2xl border border-[#262626] p-7 transition-colors duration-300 hover:border-[#FF8A00]/40"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(155deg, #1c1c1c 0%, #131313 55%, #101010 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "radial-gradient(circle, rgba(255,138,0,0.35) 0%, transparent 70%)",
          }}
        />

        <div className="relative" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-start justify-between gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF8A00]/10 text-[#FF8A00] transition-colors duration-300 group-hover:bg-[#FF8A00] group-hover:text-[#0D0D0D]">
              <FontAwesomeIcon icon={position.icon} className="h-5 w-5" />
            </span>
          </div>

          <h3 className="mt-5 font-heading text-lg font-semibold text-white md:text-xl">
            {position.title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {position.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#FF8A00]/25 bg-[#FF8A00]/10 px-3 py-1 font-body text-[11px] font-medium uppercase tracking-wide text-[#FFB347]"
              >
                {tag}
              </span>
            ))}
          </div>

          <ul className="mt-5 space-y-2.5 border-t border-[#262626] pt-5">
            {position.responsibilities.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0.55, x: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                className="flex items-start gap-2.5"
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mt-1 h-3 w-3 shrink-0 text-[#FF8A00]"
                />
                <span className="font-body text-sm text-[#A3A3A3]">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white transition-colors group-hover:text-[#FF8A00]"
            >
              Apply For This Role
              <FontAwesomeIcon
                icon={faArrowRight}
                className="h-3 w-3 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function OpenPositions() {
  return (
    <Section id="open-positions">
      <div className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,0,0.55) 0%, rgba(255,138,0,0.15) 45%, rgba(255,138,0,0) 75%)",
          }}
        />

        <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-body text-sm font-semibold uppercase tracking-[0.15em] text-[#FF8A00]"
            >
              Who We're Looking For
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
            >
              Current{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                }}
              >
                Opportunities
              </span>
            </motion.h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {openPositions.map((position, i) => (
              <PositionCard key={position.title} position={position} index={i} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 text-center font-body text-sm text-[#A3A3A3]"
          >
            Don't see a role that fits?{" "}
            <a href="/contact" className="font-semibold text-[#FF8A00] hover:underline">
              Reach out anyway
            </a>
            .
          </motion.p>
        </Container>
      </div>
    </Section>
  );
}