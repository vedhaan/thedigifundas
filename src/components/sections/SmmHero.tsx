"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faChartLine, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import NetworkScene from "@/components/three/NetworkScene";


// PLACEHOLDER — replace with real figures once client confirms.
const stats = [
  { icon: faUsers, value: 50, suffix: "+", label: "Brands Managed" },
  { icon: faChartLine, value: 2.5, suffix: "X", label: "Avg. Engagement Growth" },
  { icon: faBullhorn, value: 500, suffix: "+", label: "Campaigns Delivered" },
];

export default function SmmHero() {

  return (
    <section className="relative overflow-hidden bg-bg-primary py-16 sm:py-20 lg:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
              Social Media Marketing Services
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              Social Media Marketing That{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Builds Brands & Drives Business Growth
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                Social media is more than just posting content. It&apos;s
                about building meaningful connections, creating brand
                awareness, engaging the right audience, and turning attention
                into business opportunities.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Book A Strategy Call
              </Button>
              <Button href="/work" variant="secondary">
                View Our Work
              </Button>
            </div>

            {/* trust-stat row, matching the pattern from Hero.tsx */}
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg-secondary border border-border text-accent-primary">
                    <FontAwesomeIcon icon={stat.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-heading text-2xl font-bold leading-none text-text-primary sm:text-3xl">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 max-w-[160px] font-body text-xs text-text-secondary sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3D network scene with ambient glow behind it */}
          <div className="relative h-[320px] sm:h-[380px] lg:h-[480px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-[110px]" />
            <NetworkScene />
          </div>
        </div>
      </Container>
    </section>
  );
}