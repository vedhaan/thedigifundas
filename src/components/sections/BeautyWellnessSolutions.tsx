"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareNodes,
  faCamera,
  faBullseye,
  faMagnifyingGlass,
  faBriefcase,
  faPalette,
  faArrowRight,
  faCheck,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const stages = [
  {
    icon: faShareNodes,
    title: "Social Media Marketing",
    intro: "Build a strong presence through engaging and visually appealing content.",
    listLabel: "Services Include:",
    items: ["Instagram Marketing", "Content Planning", "Reels Strategy", "Social Media Management", "Community Engagement"],
    href: "/services/social-media-marketing",
  },
  {
    icon: faCamera,
    title: "Content Creation",
    intro: "Content plays a major role in customer decision-making.",
    listLabel: "Services Include:",
    items: ["Before & After Content", "Educational Content", "Reels & Short Videos", "Product Showcase Content", "Brand Storytelling"],
    href: null,
  },
  {
    icon: faBullseye,
    title: "Meta Ads Management",
    intro: "Reach potential customers through targeted Facebook and Instagram advertising.",
    listLabel: "Services Include:",
    items: ["Lead Generation Campaigns", "Appointment Booking Campaigns", "Brand Awareness Campaigns", "Retargeting Campaigns", "Promotional Campaigns"],
    href: "/services/meta-ads-management",
  },
  {
    icon: faMagnifyingGlass,
    title: "Google Ads Management",
    intro: "Capture high-intent customers actively searching for beauty and wellness services.",
    listLabel: "Services Include:",
    items: ["Search Ads", "Local Advertising", "Remarketing Campaigns", "Lead Generation Campaigns"],
    href: "/services/google-ads-management",
  },
  {
    icon: faBriefcase,
    title: "Website Development",
    intro: "Create websites that strengthen credibility and encourage bookings.",
    listLabel: "Services Include:",
    items: ["Beauty Brand Websites", "Salon Websites", "Wellness Clinic Websites", "Ecommerce Websites", "Landing Pages"],
    href: "/services/business-website-development",
  },
  {
    icon: faPalette,
    title: "Branding & Design",
    intro: "Create a professional visual identity that reflects your brand values.",
    listLabel: "Services Include:",
    items: ["Logo Design", "Brand Identity Design", "Service Brochures", "Company Profiles", "Marketing Collateral"],
    href: "/services/branding-design",
  },
];

export default function BeautyWellnessSolutions() {
  return (
    <Section id="beauty-wellness-solutions" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-[26rem] w-[26rem] rounded-full bg-accent-secondary/[0.07] blur-[150px]" />
        <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-accent-primary/[0.06] blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-secondary/[0.04] blur-[130px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(var(--color-border) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 25%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 25%, transparent 100%)",
        }}
      />

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Our Solutions For Beauty & Wellness Brands
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Marketing Solutions Designed{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              For Beauty Businesses
            </span>
          </h2>
        </motion.div>

        {/* 6 stages, evenly divides 3-col grid */}
        <div className="mx-auto mt-14 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-secondary p-7 transition-colors duration-300 hover:border-accent-primary/40"
            >
              <span className="pointer-events-none absolute -right-2 -top-5 select-none font-heading text-7xl font-bold text-accent-primary/[0.06] transition-colors duration-300 group-hover:text-accent-primary/[0.1]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg shadow-accent-primary/20">
                <FontAwesomeIcon icon={stage.icon} className="h-4.5 w-4.5" />
              </span>

              <h3 className="relative mt-5 font-heading text-lg font-bold text-text-primary">
                {stage.title}
              </h3>
              <p className="relative mt-2.5 font-body text-sm text-text-secondary">{stage.intro}</p>

              <div className="relative mt-5 flex-1 border-t border-border pt-4">
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent-primary">
                  {stage.listLabel}
                </span>
                <ul className="mt-3 flex flex-col gap-2">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheck} className="h-3 w-3 shrink-0 text-accent-primary" />
                      <span className="font-body text-sm text-text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* real link to the full dedicated service page, where it exists */}
              {stage.href && (
                <a
                  href={stage.href}
                  className="relative mt-5 flex items-center gap-1.5 border-t border-border pt-4 font-heading text-xs font-semibold text-accent-primary transition-colors duration-200 hover:text-accent-secondary"
                >
                  Learn More About This Service
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-2.5 w-2.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}