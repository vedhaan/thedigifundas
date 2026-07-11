"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { categories, projects } from "@/lib/constants/projects";

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <Section id="work" bgSecondary>
      <Container>
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

        {/* category filter tabs */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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

        {/* image-led grid, stat badge on image, copy below */}
        <div className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <a key={project.title} href={project.link} className="group block">
              <div className="relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* stat badge overlaps the image's bottom edge — requires consistent 4:3 crops */}
                <div className="absolute -bottom-5 left-6 rounded-full border border-border bg-bg-primary px-4 py-2 shadow-lg">
                  <span className="font-heading text-sm font-bold text-accent-primary">
                    {project.stat}
                  </span>
                </div>
              </div>

              <div className="mt-8 px-1">
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  {project.category}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 font-body text-sm text-text-secondary">
                  {project.outcome}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent-primary transition-colors group-hover:text-accent-secondary">
                  View Case Study
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button href="/work" variant="secondary">
            View All Case Studies
          </Button>
        </div>
      </Container>
    </Section>
  );
}