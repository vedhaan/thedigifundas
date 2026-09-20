import {
  faHashtag,
  faChartLine,
  faPalette,
  faVideo,
  faCode,
  faPenNib,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type OpenPosition = {
  title: string;
  icon: IconDefinition;
  tags: string[];
  responsibilities: string[];
};

// Same for all 7 roles, per confirmed info — both employment types
// offered, both work modes offered, no specific location named.
const commonTags = ["Full-Time / Part-Time", "Remote / Onsite"];

export const openPositions: OpenPosition[] = [
  {
    title: "Social Media Executive",
    icon: faHashtag,
    tags: commonTags,
    responsibilities: [
      "Manage social media accounts",
      "Schedule and publish content",
      "Monitor engagement",
      "Support content planning",
    ],
  },
  {
    title: "Performance Marketing Specialist",
    icon: faChartLine,
    tags: commonTags,
    responsibilities: [
      "Manage Meta Ads campaigns",
      "Manage Google Ads campaigns",
      "Campaign optimization",
      "Reporting and analytics",
    ],
  },
  {
    title: "Graphic Designer",
    icon: faPalette,
    tags: commonTags,
    responsibilities: [
      "Social media creatives",
      "Branding projects",
      "Brochure & catalogue design",
      "Marketing materials",
    ],
  },
  {
    title: "Video Editor",
    icon: faVideo,
    tags: commonTags,
    responsibilities: [
      "Reels editing",
      "Promotional videos",
      "Motion graphics",
      "Short-form content creation",
    ],
  },
  {
    title: "Website Developer",
    icon: faCode,
    tags: commonTags,
    responsibilities: [
      "Next.js websites",
      "Ecommerce websites",
      "Landing pages",
      "Website optimization",
    ],
  },
  {
    title: "Content Writer",
    icon: faPenNib,
    tags: commonTags,
    responsibilities: [
      "Website content",
      "SEO blogs",
      "Social media copy",
      "Marketing communication",
    ],
  },
  {
    title: "AI & Automation Specialist",
    icon: faRobot,
    tags: commonTags,
    responsibilities: [
      "AI workflows",
      "Marketing automation",
      "Process optimization",
      "AI implementation",
    ],
  },
];