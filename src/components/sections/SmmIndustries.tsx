"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faShirt, faSpa, faHandshake, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const industries = [
  {
    id: "01",
    label: "Jewellery Brands",
    icon: faGem,
    desc: "Building visual storytelling strategies that showcase products and strengthen brand identity.",
    angle: "135deg",
    offset: "translate-y-0",
  },
  {
    id: "02",
    label: "Fashion & Clothing Brands",
    icon: faShirt,
    desc: "Creating content that drives engagement, brand awareness, and online sales.",
    angle: "160deg",
    offset: "lg:translate-y-6",
  },
  {
    id: "03",
    label: "Beauty & Wellness Businesses",
    icon: faSpa,
    desc: "Helping brands connect with customers through educational and promotional content.",
    angle: "110deg",
    offset: "translate-y-0",
  },
  {
    id: "04",
    label: "Service-Based Businesses",
    icon: faHandshake,
    desc: "Generating visibility and trust through strategic content marketing.",
    angle: "150deg",
    offset: "lg:translate-y-6",
  },
  {
    id: "05",
    label: "Ecommerce Brands",
    icon: faCartShopping,
    desc: "Supporting customer acquisition and retention through social media marketing.",
    angle: "120deg",
    offset: "translate-y-0",
  },
];

export default function SmmIndustries() {
  return (
    <Section id="smm-industries" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 translate-x-1/2 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
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
            Industries We Serve
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Helping Businesses Across{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Multiple Industries
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative ${industry.offset}`}
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* distinct-angle gradient top border per card */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(${industry.angle}, var(--color-accent-primary), var(--color-accent-secondary))`,
                  }}
                />

                <div className="p-6">
                  <span className="font-heading text-3xl font-bold text-text-secondary/15 transition-colors duration-300 group-hover:text-accent-primary/25">
                    {industry.id}
                  </span>

                  <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-primary group-hover:text-bg-primary">
                    <FontAwesomeIcon icon={industry.icon} className="h-4.5 w-4.5" />
                  </span>

                  <h3 className="mt-4 font-heading text-base font-bold leading-snug text-text-primary">
                    {industry.label}
                  </h3>
                  <p className="mt-2.5 font-body text-xs leading-relaxed text-text-secondary">
                    {industry.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}