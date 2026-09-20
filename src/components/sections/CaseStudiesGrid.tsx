"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faImage } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { caseStudies } from "@/lib/constants/caseStudies";

// Deterministic size pattern, not random — scales as more real
// case studies are added without breaking the layout math.
const sizePattern = [
  { colSpan: "lg:col-span-7", rowSpan: "lg:row-span-2", aspect: "aspect-[4/5]" },
  { colSpan: "lg:col-span-5", rowSpan: "lg:row-span-1", aspect: "aspect-[4/3]" },
];

function normalizeImagePath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
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

        <div className="mt-16 grid grid-cols-1 gap-6 lg:auto-rows-[180px] lg:grid-cols-12">
          {caseStudies.map((study, i) => {
            const size = sizePattern[i % sizePattern.length];
            const imageSrc = normalizeImagePath(study.homepageImage.src);

            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border border-[#262626] bg-[#151515] ${size.colSpan} ${size.rowSpan}`}
              >
                <Link href={`/work/${study.slug}`} className="block h-full">
                  <div
                    className={`relative w-full overflow-hidden ${size.aspect} lg:h-full lg:aspect-auto`}
                  >
                    <img
                      src={imageSrc}
                      alt={study.homepageTitle}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = "flex";
                      }}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    {/* Fallback, hidden by default, shown via onError above */}
                    <div
                      style={{ display: "none" }}
                      className="absolute inset-0 flex-col items-center justify-center gap-3 bg-[#1a1a1a] text-[#4d4d4d]"
                    >
                      <FontAwesomeIcon icon={faImage} className="h-8 w-8" />
                      <span className="font-body text-xs">
                        Project image coming soon
                      </span>
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent opacity-90" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    {study.homepageTags && study.homepageTags.length > 0 && (
                      <div className="mb-3 flex flex-wrap gap-2">
                        {study.homepageTags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#FF8A00]/30 bg-[#0D0D0D]/80 px-3 py-1 font-body text-[11px] font-medium uppercase tracking-wide text-[#FFB347]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="font-heading text-xl font-semibold text-white md:text-2xl">
                      {study.homepageTitle}
                    </h3>

                    <p className="mt-2 line-clamp-2 font-body text-sm text-[#A3A3A3]">
                      {study.homepageSummary}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 font-body text-sm font-medium text-white transition-colors group-hover:text-[#FF8A00]">
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
          })}
        </div>
      </Container>
    </Section>
  );
}