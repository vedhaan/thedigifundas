import {
  faPalette, faBullhorn, faPenNib, faLaptopCode, faRobot,
  faSignature, faBookOpen, faChessKnight, faFileLines, faBoxOpen, faHashtag,
  faCamera, faVideo, faPen, faLightbulb,
  faCartShopping, faBriefcase, faLayerGroup, faArrowsRotate,
  faShareNodes, faMagnifyingGlass, faEnvelope, faChartLine,
  faDiagramProject, faBrain, faComments,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

export const expertise = [
  {
    slug: "brand-identity-design",
    title: "Brand Identity & Design",
    icon: faPalette,
    heading: "We create distinctive brands that leave a lasting impact.",
    ctaPrimary: "Explore Branding",
    ctaSecondary: "View Our Work",
    image: "/expertise/brand-identity-design.png",
    services: [
      { icon: faSignature, title: "Logo Design", description: "Unique logos that represent your brand." },
      { icon: faBookOpen, title: "Brand Guidelines", description: "Consistent identity across all platforms." },
      { icon: faChessKnight, title: "Brand Strategy", description: "Positioning that drives perception." },
      { icon: faFileLines, title: "Business Collateral", description: "Professional materials that build credibility." },
      { icon: faBoxOpen, title: "Packaging Design", description: "Designs that stand out on every shelf." },
      { icon: faHashtag, title: "Social Media Kit", description: "Branded assets for digital presence." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: faBullhorn,
    heading: "Strategic marketing that drives visibility, engagement and real business results.",
    ctaPrimary: "Explore Digital Marketing",
    ctaSecondary: "View Case Studies",
    image: "/expertise/digital-marketing.png",
    services: [
      { icon: faFacebook, title: "Meta Ads", description: "High-performing campaigns." },
      { icon: faGoogle, title: "Google Ads", description: "Targeted traffic that converts." },
      { icon: faShareNodes, title: "Social Media Marketing", description: "Build brand & engagement." },
      { icon: faMagnifyingGlass, title: "SEO", description: "Rank higher & get discovered." },
      { icon: faEnvelope, title: "Email Marketing", description: "Nurture leads & boost retention." },
      { icon: faChartLine, title: "Analytics & Reporting", description: "Data-driven insights for better decisions." },
    ],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    icon: faPenNib,
    heading: "Content that builds trust, engagement, and visibility across every platform.",
    ctaPrimary: "Explore Content Services",
    ctaSecondary: "View Case Studies",
    image: "/expertise/content-creation.png",
    services: [
      { icon: faCamera, title: "Social Media Content", description: "Engaging posts that connect with your audience." },
      { icon: faVideo, title: "Reels & Short Videos", description: "Scroll-stopping reels that increase reach and engagement." },
      { icon: faPen, title: "Marketing Copywriting", description: "Words that persuade, inform and convert into customers." },
      { icon: faLightbulb, title: "Creative Direction", description: "Concepts and visuals that communicate your brand story." },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    icon: faLaptopCode,
    heading: "Modern websites designed for performance, usability, and conversions.",
    ctaPrimary: "Explore Website Solutions",
    ctaSecondary: "View Case Studies",
    image: "/expertise/website-development.png",
    services: [
      { icon: faCartShopping, title: "Ecommerce Website Development", description: "Fully functional online stores built to convert." },
      { icon: faBriefcase, title: "Business Website Development", description: "Professional sites that build credibility." },
      { icon: faLayerGroup, title: "Landing Page Design", description: "Focused pages designed for a single goal." },
      { icon: faArrowsRotate, title: "Website Redesign & Optimization", description: "Modernizing existing sites for speed and results." },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    icon: faRobot,
    heading: "Helping businesses improve efficiency through automation and intelligent systems.",
    ctaPrimary: "Explore AI Solutions",
    ctaSecondary: "View Case Studies",
    image: "/expertise/ai-solutions.png",
    services: [
      { icon: faDiagramProject, title: "AI Workflow Automation", description: "Automate repetitive tasks and save time." },
      { icon: faBrain, title: "AI-Powered Business Solutions", description: "Custom AI tools to solve real business problems." },
      { icon: faBullhorn, title: "Marketing Automation", description: "Automate campaigns and customer journeys." },
      { icon: faComments, title: "Chatbots & AI Assistants", description: "24/7 support and smart customer interactions." },
    ],
  },
];

export const expertiseStats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 6, suffix: "+", label: "Industries Served" },
  { value: 4, suffix: "+", label: "Years of Experience" },
];