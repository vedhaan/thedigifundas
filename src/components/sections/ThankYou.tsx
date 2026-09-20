"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faPhone,
  faHandshake,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const nextSteps = [
  { icon: faEnvelopeOpenText, title: "We Review" },
  { icon: faPhone, title: "We Connect" },
  { icon: faHandshake, title: "We Begin" },
];

const confettiBits = [
  { x: -60, y: -70, rotate: -20, color: "#FF8A00", delay: 0 },
  { x: 50, y: -80, rotate: 15, color: "#FFB347", delay: 0.03 },
  { x: -80, y: -20, rotate: 40, color: "#FFB347", delay: 0.06 },
  { x: 70, y: -30, rotate: -35, color: "#FF8A00", delay: 0.09 },
  { x: -30, y: -90, rotate: 10, color: "#FF8A00", delay: 0.12 },
  { x: 30, y: -95, rotate: -10, color: "#FFB347", delay: 0.15 },
];

export default function ThankYou() {
  const [submittedOn, setSubmittedOn] = useState<string | null>(null);

  useEffect(() => {
    setSubmittedOn(
      new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    );
  }, []);

  return (
    <Section>
      <div className="relative flex min-h-[85svh] items-center overflow-hidden py-14 sm:py-12 lg:py-15">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-25 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,138,0,0) 70%)",
          }}
        />

        <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
          <div className="mx-auto max-w-2xl text-center">
            {/* Stamp */}
            <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
              <motion.span
                initial={{ scale: 0.6, opacity: 0.8 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="absolute h-16 w-16 rounded-full border-2 border-[#FF8A00]"
              />
              {confettiBits.map((bit, i) => (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
                  animate={{
                    x: bit.x,
                    y: bit.y,
                    opacity: [0, 1, 0],
                    rotate: bit.rotate,
                  }}
                  transition={{ duration: 0.7, delay: 0.3 + bit.delay, ease: "easeOut" }}
                  className="absolute h-1.5 w-2.5 rounded-sm"
                  style={{ backgroundColor: bit.color }}
                />
              ))}
              <motion.div
                initial={{ scale: 2, opacity: 0, rotate: -12 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.45, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#FF8A00] bg-[#FF8A00]/10"
              >
                <svg viewBox="0 0 52 52" className="h-7 w-7">
                  <motion.path
                    fill="none"
                    stroke="#FF8A00"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 27l7 7 17-17"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-3 font-body text-xs uppercase tracking-[0.15em] text-[#A3A3A3]"
            >
              {submittedOn ? `Enquiry Confirmed — ${submittedOn}` : "Enquiry Confirmed"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-4 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl"
            >
              Thank You For{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                }}
              >
                Reaching Out
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.72 }}
              className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-[#A3A3A3] md:text-base"
            >
              We've received your enquiry and appreciate your interest in
              working with The Digi Fundas. Our team will review your
              requirements and get in touch with you shortly. In the
              meantime, feel free to explore our services, case studies, and
              latest insights to learn more about how we help businesses grow
              through strategic marketing, creative design, website
              development, and AI-powered solutions.
            </motion.p>

            {/* Horizontal step flow */}
            <div className="relative mx-auto mt-9 max-w-md">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-[#FF8A00]/40 to-transparent"
              />
              <div className="relative grid grid-cols-3 gap-2">
                {nextSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.85 + i * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FF8A00] bg-[#0D0D0D] text-[#FF8A00]">
                      <FontAwesomeIcon icon={step.icon} className="h-4 w-4" />
                    </span>
                    <span className="mt-2 font-body text-xs font-medium text-white">
                      {step.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.15 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
            >
              <Button href="/work" variant="primary">
                View Our Work
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-3.5 w-3.5" />
              </Button>
              <Button href="/services" variant="secondary">
                Explore Services
              </Button>
              <Button href="/insights" variant="secondary">
                Read Insights
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="mx-auto mt-8 max-w-md font-body text-sm italic text-[#A3A3A3]"
            >
              Looking forward to learning more about your business and
              helping you achieve your growth goals.
            </motion.p>
          </div>
        </Container>
      </div>
    </Section>
  );
}