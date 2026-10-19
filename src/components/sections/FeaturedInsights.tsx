"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { caseStudies } from "@/lib/constants/caseStudies";

export default function FeaturedInsights() {
  return (
    <Section id="featured-insights" bgSecondary className="relative overflow-hidden">
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
            Featured Insights
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Real Results,{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Real Case Studies
            </span>
          </h2>
        </motion.div>

        {/* real case study cards, sourced from caseStudies.ts, no fabricated data */}
        <div className="mx-auto mt-14 grid w-full gap-6 sm:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <motion.a
              key={cs.slug}
              href={`/work/${cs.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-primary transition-colors duration-300 hover:border-accent-primary/40"
            >
              <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-bg-secondary to-bg-primary">
                <img
                  src={cs.homepageImage.src}
                  alt={cs.homepageImage.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-bold text-text-primary transition-colors duration-200 group-hover:text-accent-primary sm:text-xl">
                  {cs.homepageTitle}
                </h3>
                <p className="mt-2.5 flex-1 font-body text-sm leading-relaxed text-text-secondary">
                  {cs.homepageSummary}
                </p>

                {/* real outcome tags, not fabricated stats */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.homepageTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-accent-primary/25 bg-accent-primary/5 px-3 py-1 font-body text-[11px] font-medium text-accent-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-1.5 border-t border-border pt-4 font-heading text-sm font-semibold text-accent-primary">
                  View Case Study
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  );
}