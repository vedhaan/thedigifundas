"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

const destinations = [
  { label: "Homepage", href: "/", index: "01" },
  { label: "Services", href: "/services", index: "02" },
  { label: "Contact", href: "/contact", index: "03" },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-bg-primary">
      {/* full-bleed ghost numeral — the unifying background plane, not a foreground graphic */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span
          className="select-none bg-gradient-to-b from-accent-primary/[0.09] to-accent-secondary/[0.03] bg-clip-text font-heading font-bold leading-none text-transparent"
          style={{ fontSize: "clamp(16rem, 42vw, 44rem)" }}
        >
          404
        </span>
      </div>

      <div className="pointer-events-none absolute -left-32 top-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-primary/[0.06] blur-[160px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent-secondary/[0.05] blur-[150px]" />

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-accent-primary">
              Error 404
            </span>
            <h1 className="mt-5 font-heading text-3xl font-bold leading-[1.15] text-text-primary sm:text-4xl lg:text-5xl">
              Looks Like You&apos;ve Taken A Wrong Turn
            </h1>
            <p className="mt-5 max-w-md font-body text-text-secondary sm:text-lg">
              The page you&apos;re looking for may have been moved, renamed,
              or no longer exists. Let&apos;s help you find what you&apos;re
              looking for.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 max-w-md border-t border-border"
          >
            {destinations.map((dest) => (
              <Link
                key={dest.href}
                href={dest.href}
                className="group flex min-h-[44px] items-center justify-between border-b border-border py-5 transition-colors focus-visible:outline-none"
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-heading text-xs font-semibold text-text-secondary/40 transition-colors group-hover:text-accent-primary group-focus-visible:text-accent-primary">
                    {dest.index}
                  </span>
                  <span className="font-heading text-lg font-bold text-text-primary transition-colors group-hover:text-accent-primary group-focus-visible:text-accent-primary sm:text-xl">
                    {dest.label}
                  </span>
                </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="h-4 w-4 -translate-x-2 text-text-secondary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent-primary group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:text-accent-primary group-focus-visible:opacity-100"
                />
              </Link>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-14 font-heading text-xs font-medium uppercase tracking-[0.2em] text-text-secondary/50"
          >
            Building Brands That Get Seen, Remembered &amp; Chosen.
          </motion.p>
        </div>
      </Container>
    </main>
  );
}