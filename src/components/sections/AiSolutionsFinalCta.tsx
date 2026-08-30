"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AiSolutionsFinalCta() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,138,0,0.12) 0%, transparent 55%), linear-gradient(180deg, #0D0D0D 0%, #141414 60%, #0D0D0D 100%)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/[0.05] blur-[180px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(var(--color-border) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <motion.div
        animate={{ x: ["-30%", "130%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,138,0,0.06) 50%, transparent 100%)",
        }}
      />

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
        >
          <h2 className="font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-[2.6rem]">
            Ready To Explore{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              AI-Powered Growth?
            </span>
          </h2>

          <p className="font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            Let&apos;s identify opportunities where AI and automation can
            help your business improve efficiency, enhance customer
            experiences, and support long-term growth.
          </p>

          <Button href="/contact" variant="primary">
            Schedule A Consultation
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}