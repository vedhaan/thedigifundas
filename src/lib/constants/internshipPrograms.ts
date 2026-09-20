import {
  faChartLine,
  faPalette,
  faVideo,
  faPenNib,
  faCode,
  faRobot,
  faBriefcase,
  faGraduationCap,
  faFolderOpen,
  faHandshake,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type InternshipCategory = {
  label: string;
  icon: IconDefinition;
};

export type InternshipBenefit = {
  label: string;
  icon: IconDefinition;
};

export const internshipCategories: InternshipCategory[] = [
  { label: "Digital Marketing", icon: faChartLine },
  { label: "Graphic Design", icon: faPalette },
  { label: "Video Editing", icon: faVideo },
  { label: "Content Writing", icon: faPenNib },
  { label: "Website Development", icon: faCode },
  { label: "AI & Automation", icon: faRobot },
];

export const internshipBenefits: InternshipBenefit[] = [
  { label: "Real client projects", icon: faBriefcase },
  { label: "Practical learning experience", icon: faGraduationCap },
  { label: "Portfolio development", icon: faFolderOpen },
  { label: "Mentorship & guidance", icon: faHandshake },
  { label: "Certificate of completion", icon: faCertificate },
];