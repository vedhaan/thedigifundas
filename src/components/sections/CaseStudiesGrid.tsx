"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faImage } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { caseStudies } from "@/lib/constants/caseStudies";

function normalizeImagePath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

type CaseStudy = (typeof caseStudies)[number];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // onError can fire before hydration on SSR'd <img> and get missed.
  // This catches images that already failed by the time React mounts.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-[#262626] bg-[#151515] transition-colors hover:border-[#FF8A00]/40"
    >
      <Link href={`/work/${study.slug}`} className="flex h-full flex-col">
        {/* Image: native 4:3, never cropped, no text on top of it */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
          {failed ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#4d4d4d]">
              <FontAwesomeIcon icon={faImage} className="h-8 w-8" />
              <span className="font-body text-xs">Project image coming soon</span>
            </div>
          ) : (
            <img
              ref={imgRef}
              src={normalizeImagePath(study.homepageImage.src)}
              alt={study.homepageImage.alt}
              onError={() => setFailed(true)}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          )}
        </div>

        {/* Content: separate from the image, so nothing collides */}
        <div className="flex flex-1 flex-col p-6 md:p-7">
          {study.homepageTags && study.homepageTags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {study.homepageTags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-3 py-1 font-body text-[11px] font-medium uppercase tracking-wide text-[#FFB347]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-heading text-xl font-semibold text-white md:text-2xl">
            {study.homepageTitle}
          </h3>

          <p className="mt-2 line-clamp-3 font-body text-sm text-[#A3A3A3]">
            {study.homepageSummary}
          </p>

          <span className="mt-auto inline-flex items-center gap-2 pt-5 font-body text-sm font-medium text-white transition-colors group-hover:text-[#FF8A00]">
            View Case Study
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudiesGrid() {
  return (
    <Section id="case-studies">
      <Container className="!max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Selected Collaborations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-body text-base leading-relaxed text-[#A3A3A3] md:text-lg"
          >
            From branding and content creation to performance marketing and
            website development, we partner with businesses to create
            solutions tailored to their goals.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}