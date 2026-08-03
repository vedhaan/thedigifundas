"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowUpRightFromSquare,
  faShieldHalved,
  faBullseye,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

// widths represent cumulative compounding effect — each benefit builds on
// the last, so the bar grows, not arbitrary decoration
const benefits = [
  { icon: faEye, title: "Improve Organic Visibility", width: 46 },
  { icon: faArrowUpRightFromSquare, title: "Generate Website Traffic", width: 58 },
  { icon: faShieldHalved, title: "Build Brand Authority", width: 70 },
  { icon: faBullseye, title: "Support Lead Generation", width: 84 },
  { icon: faHandshake, title: "Increase Customer Trust", width: 100 },
];

export default function ContentMarketingBenefits() {
  return (
    <Section id="content-marketing-benefits" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
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
            Benefits Of Content Marketing
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Compounding{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Results Over Time
            </span>
          </h2>
        </motion.div>

        {/* growing bar chart — each benefit builds on the last, fills real space */}
        <div className="mx-auto mt-14 flex max-w-4xl flex-col gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <motion.div
                initial={{ width: "8%" }}
                whileInView={{ width: `${b.width}%` }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: i * 0.1 + 0.15, ease: "easeOut" }}
                className="group flex min-w-fit items-center gap-4 rounded-xl border border-accent-primary/20 bg-gradient-to-r from-accent-primary/15 to-accent-secondary/10 py-4 pl-5 pr-6 transition-colors duration-300 hover:border-accent-primary/50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-primary text-accent-primary">
                  <FontAwesomeIcon icon={b.icon} className="h-4 w-4" />
                </span>
                <span className="whitespace-nowrap font-heading text-sm font-bold text-text-primary sm:text-base lg:text-lg">
                  {b.title}
                </span>
                <span className="ml-auto shrink-0 font-heading text-xs font-bold text-accent-primary/50">
                  0{i + 1}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-10 max-w-xl text-center font-body text-sm text-text-secondary sm:text-base"
        >
          Each stage builds on the last — visibility earns traffic, traffic
          earns authority, authority earns trust.
        </motion.p>
      </Container>
    </Section>
  );
}