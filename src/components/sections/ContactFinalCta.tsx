"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ContactFinalCta() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in srgb, var(--color-accent-primary) 55%, black), color-mix(in srgb, var(--color-accent-secondary) 55%, black))",
      }}
    >
      {/* grid pattern, masked to fade toward edges so it reads as texture, not a flat overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* slow diagonal light sweep — the "alive" element */}
      <motion.div
        animate={{ x: ["-30%", "130%"] }}
        transition={{ duration: 8, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-4xl">
            Ready To Build Something Remarkable?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base text-white/80 sm:text-lg">
            Whether you&apos;re launching a new brand, scaling your marketing
            efforts, or building a stronger digital presence, let&apos;s
            create a strategy that helps your business move forward with
            confidence.
          </p>

          <div className="mt-10">
            <Button href="/contact#contact-form" variant="primary" className="w-full sm:w-auto">
              Book A Strategy Call
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}