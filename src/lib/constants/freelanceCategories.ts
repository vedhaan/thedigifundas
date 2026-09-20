import {
  faPalette,
  faVideo,
  faCode,
  faPenNib,
  faChartLine,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type FreelanceCategory = {
  label: string;
  description: string;
  icon: IconDefinition;
};

export const freelanceCategories: FreelanceCategory[] = [
  {
    label: "Graphic Design",
    description: "Branding, social creatives, and marketing materials.",
    icon: faPalette,
  },
  {
    label: "Video Editing",
    description: "Reels, promotional videos, and motion graphics.",
    icon: faVideo,
  },
  {
    label: "Website Development",
    description: "Next.js, ecommerce, and landing page builds.",
    icon: faCode,
  },
  {
    label: "Content Writing",
    description: "SEO blogs, website copy, and social captions.",
    icon: faPenNib,
  },
  {
    label: "Performance Marketing",
    description: "Meta Ads and Google Ads campaign execution.",
    icon: faChartLine,
  },
  {
    label: "SEO",
    description: "On-page, technical, and content-driven optimisation.",
    icon: faMagnifyingGlassChart,
  },
];