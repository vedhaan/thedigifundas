"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import CountUp from "@/components/ui/CountUp";
import { expertise, expertiseStats } from "@/lib/constants/expertise";

export default function Expertise() {
  const [selected, setSelected] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const active = expertise[selected];

  return (
    <Section id="expertise" bgSecondary>
      <Container className="!max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Our Expertise
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Solutions Designed Around{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
          <p className="mt-4 font-body text-text-secondary sm:text-lg">
            From strategy and branding to performance marketing and AI
            solutions, we build solutions that help businesses grow, scale and
            lead.
          </p>
        </div>

        {/* ---------- Desktop: sidebar + rich content panel ---------- */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-[300px_1fr] lg:gap-8">
          <div className="flex flex-col gap-2">
            {expertise.map((item, i) => (
              <button
                key={item.slug}
                onClick={() => setSelected(i)}
                className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors ${
                  selected === i
                    ? "border-accent-primary bg-bg-primary"
                    : "border-border bg-bg-primary/40 hover:border-accent-primary/50"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                    selected === i
                      ? "border-accent-primary text-accent-primary"
                      : "border-border text-text-secondary"
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                </span>
                <span
                  className={`font-heading text-sm font-semibold ${
                    selected === i ? "text-text-primary" : "text-text-secondary"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid gap-8 rounded-2xl border border-border bg-bg-primary p-8 xl:grid-cols-[1.15fr_0.85fr] xl:p-10"
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-text-primary xl:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-md font-body text-text-secondary">{active.heading}</p>
                <div className="mt-4 h-1 w-12 rounded-full bg-accent-primary" />

                <span className="mt-6 block font-heading text-sm font-semibold text-accent-primary">
                  Services Include:
                </span>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {active.services.map((service) => (
                    <div
                      key={service.title}
                      className="rounded-xl border border-border bg-bg-secondary p-4"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                        <FontAwesomeIcon icon={service.icon} className="h-3.5 w-3.5" />
                      </span>
                      <h4 className="mt-3 font-heading text-sm font-bold text-text-primary">
                        {service.title}
                      </h4>
                      <p className="mt-1 font-body text-xs text-text-secondary">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <Link
                    href={`/services/${active.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-accent-primary px-6 py-3 font-heading text-sm font-semibold text-bg-primary transition-colors hover:bg-accent-secondary"
                  >
                    {active.ctaPrimary}
                    <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/work"
                    className="font-heading text-sm font-semibold text-text-secondary underline decoration-border underline-offset-4 transition-colors hover:text-accent-primary hover:decoration-accent-primary"
                  >
                    {active.ctaSecondary}
                  </Link>
                </div>
              </div>

              {/* Right: client-supplied mockup image */}
              <div className="relative hidden min-h-[280px] xl:block">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-2xl" />
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={active.image}
                    alt={`${active.title} preview`}
                    fill
                    sizes="480px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---------- Mobile: accordion, simplified ---------- */}
        <div className="mt-10 flex flex-col gap-3 lg:hidden">
          {expertise.map((item, i) => {
            const isOpen = expandedMobile === i;
            return (
              <div key={item.slug} className="rounded-xl bg-bg-primary/60">
                <button
                  onClick={() => setExpandedMobile(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 rounded-xl px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-secondary border border-border text-accent-primary">
                      <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                    </span>
                    <span className="font-heading text-sm font-semibold text-text-primary">
                      {item.title}
                    </span>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`h-4 w-4 shrink-0 text-text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5">
                        <p className="text-sm text-text-secondary">{item.heading}</p>
                        <div className="mt-4 grid grid-cols-2 gap-2.5">
                          {item.services.map((service) => (
                            <div key={service.title} className="rounded-lg border border-border bg-bg-secondary p-3">
                              <FontAwesomeIcon icon={service.icon} className="h-3.5 w-3.5 text-accent-primary" />
                              <h4 className="mt-2 font-heading text-xs font-bold text-text-primary">{service.title}</h4>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={`/services/${item.slug}`}
                          className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent-primary"
                        >
                          {item.ctaPrimary}
                          <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ---------- Bottom stats bar ---------- */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
          {expertiseStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 font-body text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}