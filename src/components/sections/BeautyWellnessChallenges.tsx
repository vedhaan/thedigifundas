"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faCalendarXmark,
  faCommentSlash,
  faPeopleGroup,
  faLaptop,
  faArrowRight,
  faEye,
  faCalendarCheck,
  faHeart,
  faTrophy,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const challenges = [
  {
    problemIcon: faEyeSlash,
    problem: "Low Visibility",
    solutionIcon: faEye,
    solution: "Helping businesses reach new audiences through strategic marketing.",
  },
  {
    problemIcon: faCalendarXmark,
    problem: "Inconsistent Bookings",
    solutionIcon: faCalendarCheck,
    solution: "Building customer acquisition systems that support consistent enquiries.",
  },
  {
    problemIcon: faCommentSlash,
    problem: "Weak Social Media Engagement",
    solutionIcon: faHeart,
    solution: "Creating content strategies that encourage interaction and trust.",
  },
  {
    problemIcon: faPeopleGroup,
    problem: "Strong Competition",
    solutionIcon: faTrophy,
    solution: "Developing positioning strategies that help brands stand out.",
  },
  {
    problemIcon: faLaptop,
    problem: "Poor Website Performance",
    solutionIcon: faGaugeHigh,
    solution: "Improving customer journeys and conversion opportunities.",
  },
];

export default function BeautyWellnessChallenges() {
  return (
    <Section id="beauty-wellness-challenges" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
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
            Common Challenges We Help Solve
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Challenges Beauty &{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Wellness Brands Face
            </span>
          </h2>
        </motion.div>

        {/* before/after split cards — full width, 5 items */}
        <div className="mx-auto mt-14 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {challenges.map((c, i) => (
            <motion.div
              key={c.problem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-primary transition-colors duration-300 hover:border-accent-primary/40"
            >
              {/* problem — muted, struck-through visual weight */}
              <div className="flex flex-col items-center gap-2 border-b border-dashed border-border px-4 py-5 text-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-secondary text-text-secondary/60">
                  <FontAwesomeIcon icon={c.problemIcon} className="h-3.5 w-3.5" />
                </span>
                <span className="font-heading text-xs font-semibold text-text-secondary/70 line-through decoration-text-secondary/30">
                  {c.problem}
                </span>
              </div>

              {/* transition arrow */}
              <div className="flex justify-center py-1.5">
                <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 rotate-90 text-accent-primary/50" />
              </div>

              {/* solution — full color, resolved */}
              <div className="flex flex-1 flex-col items-center gap-2 px-4 pb-6 pt-1 text-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-bg-primary">
                  <FontAwesomeIcon icon={c.solutionIcon} className="h-3.5 w-3.5" />
                </span>
                <p className="font-body text-xs leading-relaxed text-text-primary">
                  {c.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}