"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { categories, projects } from "@/lib/constants/projects";

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  function handleFilterChange(category: (typeof categories)[number]) {
    setActiveCategory(category);
    // reset scroll position so the filtered set starts from the beginning,
    // not wherever the previous filter's scroll happened to be
    scrollRef.current?.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
  }

  function scrollByCard(direction: "left" | "right") {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.querySelector("[data-card]")?.clientWidth ?? 360;
    container.scrollBy({ left: direction === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  }

  return (
    <Section id="work" bgSecondary>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
              Featured Work
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Selected Projects &{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="mt-4 font-body text-text-secondary">
              Every business has a unique story, challenge, and opportunity. Our
              work focuses on creating solutions that align with business goals
              while delivering measurable outcomes.
            </p>
          </div>

          {/* desktop scroll arrows */}
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              onClick={() => scrollByCard("left")}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:border-accent-primary hover:text-accent-primary"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollByCard("right")}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:border-accent-primary hover:text-accent-primary"
            >
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* category filter tabs — horizontally scrollable chip row on mobile */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2 font-heading text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "border-accent-primary bg-accent-primary text-bg-primary"
                  : "border-border text-text-secondary hover:border-accent-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Container>

      {/* horizontal scroll-snap gallery — full-bleed, not container-constrained,
          so cards can run to the viewport edge rather than stopping at 1280px */}
      <div
        ref={scrollRef}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-8 lg:px-12 [&::-webkit-scrollbar]:hidden"
      >
        {filtered.map((project) => (
          <a
            key={project.title}
            href={project.link}
            data-card
            className="group relative w-[80vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-bg-primary sm:w-[400px]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 80vw, 400px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-full bg-bg-primary/80 px-3 py-1 text-xs font-semibold text-accent-primary backdrop-blur-sm">
                {project.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg font-bold text-text-primary">
                {project.title}
              </h3>
              <p className="mt-2 font-body text-sm text-text-secondary">{project.outcome}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent-primary">
                View Project
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}