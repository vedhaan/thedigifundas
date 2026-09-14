"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faBriefcase,
  faChartLine,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const principles = [
  {
    icon: faLightbulb,
    title: "Actionable Advice",
    desc: "Practical steps you can apply to your business right away, not just theory.",
  },
  {
    icon: faBriefcase,
    title: "Real-World Examples",
    desc: "Grounded in actual campaigns, projects, and client results.",
  },
  {
    icon: faChartLine,
    title: "Industry Insights",
    desc: "Perspectives shaped by hands-on experience across marketing, branding, and development.",
  },
  {
    icon: faSeedling,
    title: "Business Growth Strategies",
    desc: "Written to help businesses make smarter decisions and grow, not just fill a content calendar.",
  },
];

export default function FeaturedResources() {
  return (
    <Section id="featured-resources" className="relative overflow-hidden">
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
            Featured Resources
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Practical Strategies For{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
        </motion.div>

        {/* content standards panel — what every article here delivers */}
        <div className="mx-auto mt-14 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-secondary p-6 text-center transition-colors duration-300 hover:border-accent-primary/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-bg-primary">
                <FontAwesomeIcon icon={p.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-base font-bold text-text-primary">
                {p.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}