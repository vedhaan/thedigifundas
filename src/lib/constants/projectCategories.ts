import {
  faPalette,
  faChartLine,
  faPenNib,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ProjectCategory = {
  title: string;
  description: string;
  icon: IconDefinition;
  items: string[];
};

export const projectCategories: ProjectCategory[] = [
  {
    title: "Branding & Design",
    description:
      "Creating memorable visual identities and brand assets that help businesses stand out.",
    icon: faPalette,
    items: [
      "Logo Design",
      "Company Profiles",
      "Catalogues & Brochures",
      "Event & Exhibition Designs",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Helping businesses increase visibility, generate leads, and improve performance.",
    icon: faChartLine,
    items: [
      "Social Media Marketing",
      "Meta Ads Campaigns",
      "Google Ads Campaigns",
      "Content Marketing Strategies",
    ],
  },
  {
    title: "Content Creation",
    description:
      "Building content that captures attention and strengthens brand communication.",
    icon: faPenNib,
    items: ["Reels & Video Content", "Social Media Creatives", "Campaign Content"],
  },
  {
    title: "Website Development",
    description:
      "Creating digital experiences that combine functionality, aesthetics, and performance.",
    icon: faCode,
    items: ["Ecommerce Websites", "Business Websites", "Landing Pages"],
  },
];