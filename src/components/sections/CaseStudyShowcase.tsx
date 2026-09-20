"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import type { CaseStudy } from "@/lib/constants/caseStudies";

export default function CaseStudyShowcase({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Section id="showcase" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent-primary/[0.05] blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-secondary/[0.05] blur-[130px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid w-full items-center gap-10 overflow-hidden rounded-3xl border border-border bg-bg-primary lg:grid-cols-[1.3fr_1fr] lg:gap-0"
        >
          {/* image — real spec: 1920 × 1080px (16:9). Placeholder shown
              until a real approved creative is added via showcaseImage. */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-bg-secondary to-bg-primary lg:aspect-auto lg:h-full lg:min-h-[380px]">
            {caseStudy.showcaseImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={caseStudy.showcaseImage.src}
                alt={caseStudy.showcaseImage.alt}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                <FontAwesomeIcon icon={faImage} className="h-9 w-9 text-text-secondary/20" />
                <p className="font-body text-xs text-text-secondary/50">
                  Campaign creative — 1920 × 1080px
                </p>
              </div>
            )}
            {/* subtle gradient edge, blends the image into the text panel on desktop */}
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-r from-transparent to-bg-primary lg:block" />
          </div>

          {/* text panel */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <FontAwesomeIcon icon={faQuoteLeft} className="h-6 w-6 text-accent-primary/25" />
            <p className="mt-4 font-heading text-xl font-bold leading-snug text-text-primary sm:text-2xl">
              {caseStudy.detailHeroTitle}
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary sm:text-base">
              {caseStudy.overview.split(".")[0]}.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.homepageTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent-primary/25 bg-accent-primary/5 px-3 py-1 font-body text-[11px] font-medium text-accent-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}