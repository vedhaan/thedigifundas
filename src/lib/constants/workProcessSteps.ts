import {
  faMagnifyingGlass,
  faRoute,
  faRocket,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type WorkProcessStep = {
  title: string;
  description: string;
  icon: IconDefinition;
};

export const workProcessSteps: WorkProcessStep[] = [
  {
    title: "Understand",
    description: "Learning about your business, audience, and goals.",
    icon: faMagnifyingGlass,
  },
  {
    title: "Strategize",
    description: "Creating a roadmap tailored to your objectives.",
    icon: faRoute,
  },
  {
    title: "Execute",
    description: "Implementing campaigns, content, and digital solutions.",
    icon: faRocket,
  },
  {
    title: "Optimize",
    description: "Continuously improving performance through insights and data.",
    icon: faArrowTrendUp,
  },
];