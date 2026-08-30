export type ServiceItem = {
  label: string;
  href?: string;
  icon: IconDefinition;
  children?: { label: string; shortLabel: string; href: string; icon: IconDefinition }[];
};

import {
  faShareNodes, faCartShopping, faBriefcase, faRobot, faBullseye,
  faMagnifyingGlass, faEnvelopeOpenText, faPenNib, faPalette,
  faSpa, faShirt, faStore,
} from "@fortawesome/free-solid-svg-icons";

export const services: ServiceItem[] = [
  { label: "Social Media Marketing", href: "/services/social-media-marketing", icon: faShareNodes },
  { label: "E-commerce Website", href: "/services/ecommerce-website-development", icon: faCartShopping },
  { label: "Business Website", href: "/services/business-website-development", icon: faBriefcase },
  { label: "AI Solutions", href: "/services/ai-solutions", icon: faRobot },
  { label: "Meta Ads Management", href: "/services/meta-ads-management", icon: faBullseye },
  { label: "Google Ads Management", href: "/services/google-ads-management", icon: faMagnifyingGlass },
  { label: "Email Marketing", href: "/services/email-marketing", icon: faEnvelopeOpenText },
  { label: "Content Marketing", href: "/services/content-marketing", icon: faPenNib },
  { label: "Branding Design", href: "/services/branding-design", icon: faPalette },
  {
    label: "Digital Marketing",
    icon: faBullseye,
    children: [
      { label: "For Beauty & Wellness Brands", shortLabel: "Beauty & Wellness", href: "/services/digital-marketing/beauty-wellness", icon: faSpa },
      { label: "For Fashion Brands", shortLabel: "Fashion", href: "/services/digital-marketing/fashion", icon: faShirt },
      { label: "For Small Businesses", shortLabel: "Small Business", href: "/services/digital-marketing/small-business", icon: faStore },
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Career", href: "/career" },
];