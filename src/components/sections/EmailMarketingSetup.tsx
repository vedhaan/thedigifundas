"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping,
  faMagnet,
  faCartArrowDown,
  faBullhorn,
  faRocket,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const templates = [
  { icon: faHandsHelping, label: "Welcome Series" },
  { icon: faMagnet, label: "Lead Magnet Automation" },
  { icon: faCartArrowDown, label: "Abandoned Cart Sequences" },
  { icon: faBullhorn, label: "Promotional Campaigns" },
  { icon: faRocket, label: "Product Launch Campaigns" },
  { icon: faHeart, label: "Customer Retention Workflows" },
];

export default function EmailMarketingSetup() {
  return (
    <Section id="email-marketing-setup" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            What We Can Set Up
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Email Automations{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Built For Your Business
            </span>
          </h2>
        </motion.div>

        {/* "New Campaign" template picker — ties into the hero's inbox theme */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-14 w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-bg-primary shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-8">
            <span className="font-heading text-sm font-bold text-text-primary">
              New Campaign
            </span>
            <span className="font-body text-xs text-text-secondary">
              Choose a template
            </span>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex cursor-default items-center gap-3 bg-bg-primary p-5 transition-colors duration-200 hover:bg-accent-primary/[0.04] sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-bg-primary">
                  <FontAwesomeIcon icon={t.icon} className="h-4 w-4" />
                </span>
                <span className="font-body text-sm font-medium text-text-primary sm:text-base">
                  {t.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}