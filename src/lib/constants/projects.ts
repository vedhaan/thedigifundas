import { caseStudies } from "@/lib/constants/caseStudies";

function withLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

// Built from caseStudies.ts so the homepage can never show data that
// differs from the real case study pages.
export const projects = caseStudies.map((cs) => ({
  title: cs.homepageTitle,
  category: cs.featuredWorkCategory,
  stat: cs.homepageTags[0] ?? "",
  outcome: cs.homepageSummary,
  image: withLeadingSlash(cs.homepageImage.src),
  link: `/work/${cs.slug}`,
}));

// Built only from categories that actually have projects, so a tab can
// never lead to an empty grid.
export const categories: string[] = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];