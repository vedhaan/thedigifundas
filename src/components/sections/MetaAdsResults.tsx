"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faStamp } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const outcomes = [
  {
    text: "17X ROAS achieved through strategic advertising campaigns.",
    highlight: "17X ROAS",
  },
  {
    text: "Improved website orders through conversion-focused campaign management.",
    highlight: null,
  },
  {
    text: "Audience growth & customer acquisition across multiple industries.",
    highlight: null,
  },
  {
    text: "Data-driven campaign optimization behind every decision.",
    highlight: null,
  },
];

const caseStudies = [
  { src: "/results/ecommerce-case-study.jpg", alt: "Ecommerce campaign case study", tag: "Ecommerce" },
  { src: "/results/leadgen-case-study.jpg", alt: "Lead generation campaign case study", tag: "Lead Generation" },
];

const monoStyle = { fontFamily: "ui-monospace, monospace" };

export default function MetaAdsResults() {
  return (
    <Section id="meta-ads-results" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
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
            Results That Matter
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Focused On{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Business Outcomes
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-border bg-bg-primary"
        >
          {/* corner brackets — reinforces the "document" framing without floating over content */}
          <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-accent-primary/30" aria-hidden />
          <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-accent-primary/30" aria-hidden />
          <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-accent-primary/30" aria-hidden />
          <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-accent-primary/30" aria-hidden />

          {/* header row — stamp now lives here in real flow, not floated over the ledger */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-5 sm:px-10 sm:py-6">
            <div>
              <p
                className="font-heading text-xs font-semibold uppercase tracking-widest text-accent-primary"
                style={monoStyle}
              >
                Campaign Outcomes Report
              </p>
              <p className="mt-1 font-body text-xs text-text-secondary">
                The Digi Fundas — Meta Ads Management
              </p>
            </div>

            {/* verified badge — inline seal, not absolutely positioned */}
            <div className="flex shrink-0 -rotate-6 items-center gap-2 rounded-full border-2 border-accent-primary/40 bg-accent-primary/5 px-4 py-2">
              <FontAwesomeIcon icon={faStamp} className="h-3.5 w-3.5 text-accent-primary" />
              <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-accent-primary">
                Verified Results
              </span>
            </div>
          </div>

          <div className="px-6 py-2 sm:px-10">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.text}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex items-start gap-4 border-b border-border py-6 transition-colors duration-300 last:border-b-0 hover:bg-accent-primary/[0.02] sm:items-center"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 font-heading text-[10px] font-bold text-accent-primary/50 transition-colors duration-300 group-hover:bg-accent-primary group-hover:text-bg-primary">
                  <FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4" />
                </span>
                <p className="font-body text-base leading-relaxed text-text-primary sm:text-lg">
                  {o.highlight ? (
                    <>
                      <span className="font-heading font-bold text-accent-primary">
                        {o.highlight}
                      </span>{" "}
                      {o.text.replace(o.highlight, "").replace(/^\s+/, "")}
                    </>
                  ) : (
                    o.text
                  )}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-border bg-bg-secondary px-6 py-6 sm:flex-row sm:items-center sm:px-10">
            <p className="font-body text-sm text-text-secondary">
              Ready to see results like these for your business?
            </p>
            <Button href="/contact" variant="primary">
              Book A Strategy Call
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}