"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const ContactShape = dynamic(() => import("@/components/three/ContactShape"), {
  ssr: false,
});

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-16 sm:py-20 lg:py-20">
      {/* ambient background gradient — layered, drifting slowly for subtle life */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 20%, color-mix(in srgb, var(--color-accent-primary) 12%, transparent), transparent 60%), radial-gradient(ellipse 50% 60% at 80% 70%, color-mix(in srgb, var(--color-accent-secondary) 10%, transparent), transparent 65%)",
          }}
        />
        <motion.div
          animate={{ x: [0, 50, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-accent-primary/[0.08] blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent-secondary/[0.07] blur-[140px]"
        />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
              Contact Us
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.25rem]">
              Let&apos;s Talk About Your{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Growth Goals
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>Every successful project begins with a conversation.
                Whether you&apos;re looking to strengthen your brand, improve
                your marketing performance, generate more leads, launch a new
                website, or explore AI-powered solutions, we&apos;re here to
                help.
                Let&apos;s discuss your goals and explore how The Digi Fundas
                can support your business growth.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Book a Strategy Call
              </Button>
              <Button href="/work" variant="secondary">
                Explore Our Work
              </Button>
            </div>
          </motion.div>

          {/* Right: real 3D, WebGL-rendered */}
          <div className="hidden h-[340px] items-center justify-center lg:flex">
            <div className="h-[340px] w-[340px]">
              <ContactShape />
            </div>
          </div>

          {/* Mobile: no WebGL attempt, simple static fallback */}
          <div className="flex h-48 items-center justify-center lg:hidden">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary opacity-80 blur-sm" />
          </div>
        </div>
      </Container>
    </section>
  );
}