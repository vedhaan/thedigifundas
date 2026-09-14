"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faBullseye,
  faHandshake,
  faComments,
  faArrowUpRightFromSquare,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

const outcomes = [
  { icon: faEye, title: "Increase Brand Awareness" },
  { icon: faBullseye, title: "Generate Qualified Leads" },
  { icon: faHandshake, title: "Build Trust & Credibility" },
  { icon: faComments, title: "Improve Customer Engagement" },
  { icon: faArrowUpRightFromSquare, title: "Drive Website Traffic" },
  { icon: faChartLine, title: "Increase Sales Opportunities" },
];

export default function WhyDigitalMarketingSmallBusiness() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-16 sm:py-20 lg:py-24">
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
            Why Digital Marketing Matters
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-[2.6rem]">
            Your Customers Are{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Already Online
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            Today&apos;s consumers search, compare, and evaluate businesses
            online before making purchasing decisions.
          </p>
        </motion.div>

        {/* full-width outcome panel — plain, confident, grounded, no connector
            diagram needed since there's only one list here */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 w-full rounded-3xl border border-border bg-bg-primary p-8 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex items-center gap-4 bg-bg-secondary px-6 py-6 transition-colors duration-200 hover:bg-accent-primary/[0.04]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-bg-primary">
                  <FontAwesomeIcon icon={o.icon} className="h-4.5 w-4.5" />
                </span>
                <span className="font-heading text-sm font-semibold leading-snug text-text-primary sm:text-base">
                  {o.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-center font-body text-base italic leading-relaxed text-text-secondary sm:text-lg"
        >
          Businesses that consistently show up online often have a
          significant advantage over competitors.
        </motion.p>
      </Container>
    </section>
  );
}