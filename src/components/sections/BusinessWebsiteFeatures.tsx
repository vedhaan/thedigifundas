"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faMessage,
  faMagnifyingGlassChart,
  faNewspaper,
  faChartLine,
  faGaugeHigh,
  faShieldHalved,
  faShareNodes,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const features = [
  { icon: faMobileScreen, title: "Mobile Responsive Design" },
  { icon: faMessage, title: "Contact Forms" },
  { icon: faWhatsapp, title: "WhatsApp Integration" },
  { icon: faMagnifyingGlassChart, title: "SEO Setup" },
  { icon: faNewspaper, title: "Blog Functionality" },
  { icon: faChartLine, title: "Google Analytics Integration" },
  { icon: faGaugeHigh, title: "Speed Optimization" },
  { icon: faShieldHalved, title: "Security Configuration" },
  { icon: faShareNodes, title: "Social Media Integration" },
  { icon: faBullseye, title: "Lead Capture Forms" },
];

export default function BusinessWebsiteFeatures() {
  return (
    <Section id="business-website-features" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/[0.03] blur-[180px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(var(--color-border) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 25%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 25%, transparent 100%)",
        }}
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
            Website Features
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Standard Features{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Included
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-bg-primary p-5 transition-colors duration-300 hover:border-accent-primary/40 sm:p-6"
            >
              <span className="pointer-events-none absolute -right-2 -top-4 select-none font-heading text-6xl font-bold text-accent-primary/[0.05] transition-colors duration-300 group-hover:text-accent-primary/[0.1]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg shadow-accent-primary/20">
                <FontAwesomeIcon icon={feature.icon} className="h-4.5 w-4.5" />
              </span>

              <h3 className="relative mt-4 font-heading text-sm font-bold leading-snug text-text-primary sm:text-base">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}