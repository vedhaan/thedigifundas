"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faShareNodes,
  faChartLine,
  faPalette,
  faBriefcase,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const categories = [
  {
    icon: faBullseye,
    title: "Digital Marketing",
    desc: "Strategies to improve visibility, generate leads, and grow online.",
    examples: [
      "How Digital Marketing Helps Small Businesses Grow",
      "Common Marketing Mistakes Businesses Make",
      "Digital Marketing Trends Businesses Should Watch",
    ],
  },
  {
    icon: faShareNodes,
    title: "Social Media Marketing",
    desc: "Content and engagement strategies for social media success.",
    examples: [
      "Instagram Growth Strategies For Brands",
      "How To Create Content That Drives Engagement",
      "Reels Marketing Best Practices",
    ],
  },
  {
    icon: faChartLine,
    title: "Paid Advertising",
    desc: "Meta Ads and Google Ads insights.",
    examples: [
      "Meta Ads vs Google Ads: Which Is Better?",
      "How To Improve Advertising ROI",
      "Common Facebook Ads Mistakes",
    ],
  },
  {
    icon: faPalette,
    title: "Branding & Design",
    desc: "Building memorable brands through strategic design.",
    examples: [
      "Why Branding Matters For Business Growth",
      "How To Build A Strong Visual Identity",
      "Elements Of Effective Brand Design",
    ],
  },
  {
    icon: faBriefcase,
    title: "Website Development",
    desc: "Creating digital experiences that convert.",
    examples: [
      "What Makes A High-Converting Website?",
      "Ecommerce Website Best Practices",
      "Website Design Trends Businesses Should Know",
    ],
  },
  {
    icon: faRobot,
    title: "AI & Automation",
    desc: "Helping businesses leverage emerging technology.",
    examples: [
      "AI Tools Every Business Should Know",
      "Marketing Automation Explained",
      "How AI Is Changing Business Operations",
    ],
  },
];

export default function BlogCategories() {
  return (
    <Section id="blog-categories" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Blog Categories
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Explore By{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Topic
            </span>
          </h2>
        </motion.div>

        {/* 6 categories, each showing its own real example titles */}
        <div className="mx-auto mt-14 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-secondary p-7 transition-colors duration-300 hover:border-accent-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg shadow-accent-primary/20">
                <FontAwesomeIcon icon={cat.icon} className="h-4.5 w-4.5" />
              </span>

              <h3 className="mt-5 font-heading text-lg font-bold text-text-primary">
                {cat.title}
              </h3>
              <p className="mt-2 font-body text-sm text-text-secondary">{cat.desc}</p>

              <div className="mt-5 flex-1 border-t border-border pt-4">
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent-primary">
                  Example Topics:
                </span>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {cat.examples.map((ex) => (
                    <li
                      key={ex}
                      className="font-body text-sm leading-snug text-text-primary/80 transition-colors duration-200 group-hover:text-text-primary"
                    >
                      • {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}