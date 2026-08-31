"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCamera,
  faPlay,
  faStar,
  faScaleBalanced,
  faGlobe,
  faEye,
  faCommentDots,
  faCalendarCheck,
  faHandshake,
  faHeart,
  faChartLine,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

const behaviors = [
  { icon: faMagnifyingGlass, label: "Search On Google" },
  { icon: faCamera, label: "Browse Instagram" },
  { icon: faPlay, label: "Watch Reels" },
  { icon: faStar, label: "Read Reviews" },
  { icon: faScaleBalanced, label: "Compare Brands" },
  { icon: faGlobe, label: "Visit Websites" },
];

const outcomes = [
  { icon: faEye, label: "Increase Brand Awareness" },
  { icon: faCommentDots, label: "Generate More Enquiries" },
  { icon: faCalendarCheck, label: "Improve Appointment Bookings" },
  { icon: faHandshake, label: "Build Customer Trust" },
  { icon: faHeart, label: "Strengthen Customer Loyalty" },
  { icon: faChartLine, label: "Increase Product Sales" },
];

export default function WhyDigitalMarketingBeauty() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full bg-accent-secondary/[0.08] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-primary/[0.06] blur-[140px]" />
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
            Why Digital Marketing Is Essential
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-[2.6rem]">
            Your Customers Are{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Searching Online
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            Before booking an appointment or purchasing a product, potential
            customers often research first.
          </p>
        </motion.div>

        {/* journey panel — full width, research behaviors flow into outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mt-14 w-full overflow-hidden rounded-3xl border border-border bg-bg-primary p-8 sm:p-10 lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
            {/* left — what customers do */}
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-text-secondary/60">
                Before They Book
              </span>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {behaviors.map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-bg-secondary px-3 py-3"
                  >
                    <FontAwesomeIcon icon={b.icon} className="h-3.5 w-3.5 shrink-0 text-text-secondary" />
                    <span className="font-body text-xs leading-tight text-text-secondary sm:text-[13px]">
                      {b.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* center — directional flow, soft glow, no connector-line risk */}
            <div className="flex items-center justify-center py-2 lg:flex-col lg:py-0">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg shadow-accent-primary/30 lg:rotate-0">
                <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5" />
              </div>
            </div>

            {/* right — what you gain */}
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent-primary">
                What You Gain
              </span>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {outcomes.map((o, i) => (
                  <motion.div
                    key={o.label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.07 + 0.15 }}
                    className="flex items-center gap-2.5 rounded-xl border border-accent-primary/20 bg-accent-primary/5 px-3 py-3"
                  >
                    <FontAwesomeIcon icon={o.icon} className="h-3.5 w-3.5 shrink-0 text-accent-primary" />
                    <span className="font-body text-xs font-medium leading-tight text-text-primary sm:text-[13px]">
                      {o.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-center font-body text-base italic leading-relaxed text-text-secondary sm:text-lg"
        >
          The businesses that consistently educate, engage, and inspire their
          audience are often the businesses that grow.
        </motion.p>
      </Container>
    </section>
  );
}