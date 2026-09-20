"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { freelanceCategories, type FreelanceCategory } from "@/lib/constants/freelanceCategories";

export default function FreelanceCollaborations() {
  return (
    <Section>
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-10 h-[460px] w-[460px] rounded-full opacity-20 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,138,0,0) 70%)",
          }}
        />

        <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-body text-sm font-semibold uppercase tracking-[0.15em] text-[#FF8A00]"
            >
              Freelance Collaborations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
            >
              Work With Us{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                }}
              >
                As A Freelancer
              </span>
            </motion.h2>
          </div>

          {/* Desktop — bento grid */}
          <div
            className="mt-16 hidden lg:grid lg:gap-4"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(3, 160px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}
              className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-[#FF8A00]/30 p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(155deg, rgba(255,138,0,0.18) 0%, #151515 60%)",
                }}
              />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8A00] text-[#0D0D0D]">
                  <FontAwesomeIcon icon={faUserGroup} className="h-5 w-5" />
                </span>
                <p className="mt-5 font-body text-base leading-relaxed text-white md:text-lg">
                  We regularly collaborate with talented freelancers across
                  these disciplines. If you're interested in freelance
                  opportunities, we'd love to connect.
                </p>
                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#FF8A00] hover:underline"
                >
                  Let's Connect
                  <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
                </a>
              </div>
            </motion.div>

            <BentoTile category={freelanceCategories[0]} gridArea="1 / 3 / 2 / 4" delay={0.1} />
            <BentoTile category={freelanceCategories[1]} gridArea="1 / 4 / 3 / 5" delay={0.15} tall />
            <BentoTile category={freelanceCategories[2]} gridArea="2 / 3 / 3 / 4" delay={0.2} />
            <BentoTile category={freelanceCategories[3]} gridArea="3 / 1 / 4 / 2" delay={0.25} />
            <BentoTile category={freelanceCategories[4]} gridArea="3 / 2 / 4 / 4" delay={0.3} wide />
            <BentoTile category={freelanceCategories[5]} gridArea="3 / 4 / 4 / 5" delay={0.35} />
          </div>

          {/* Mobile/tablet */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-[#FF8A00]/30 p-7 sm:col-span-2"
              style={{
                background:
                  "linear-gradient(155deg, rgba(255,138,0,0.18) 0%, #151515 60%)",
              }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8A00] text-[#0D0D0D]">
                <FontAwesomeIcon icon={faUserGroup} className="h-5 w-5" />
              </span>
              <p className="mt-4 font-body text-base leading-relaxed text-white">
                We regularly collaborate with talented freelancers across
                these disciplines. If you're interested in freelance
                opportunities, we'd love to connect.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#FF8A00] hover:underline"
              >
                Let's Connect
                <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
              </a>
            </motion.div>

            {freelanceCategories.map((category, i) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="rounded-2xl border border-[#262626] bg-[#151515] p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF8A00]/10 text-[#FF8A00]">
                  <FontAwesomeIcon icon={category.icon} className="h-4.5 w-4.5" />
                </span>
                <p className="mt-4 font-body text-sm font-semibold text-white">
                  {category.label}
                </p>
                <p className="mt-1.5 font-body text-xs leading-relaxed text-[#A3A3A3]">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}

function BentoTile({
  category,
  gridArea,
  delay,
  wide = false,
  tall = false,
}: {
  category: FreelanceCategory;
  gridArea: string;
  delay: number;
  wide?: boolean;
  tall?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      style={{ gridArea }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#262626] bg-[#151515] p-5 transition-colors duration-300 hover:border-[#FF8A00]/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(255,138,0,0.4) 0%, transparent 70%)",
        }}
      />
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#FF8A00]/10 text-[#FF8A00] transition-colors duration-300 group-hover:bg-[#FF8A00] group-hover:text-[#0D0D0D]">
        <FontAwesomeIcon icon={category.icon} className="h-4.5 w-4.5" />
      </span>
      <div className="relative">
        <p className={`font-body font-semibold text-white ${wide ? "text-base" : "text-sm"}`}>
          {category.label}
        </p>
        <p
          className={`mt-1.5 font-body text-xs leading-relaxed text-[#A3A3A3] ${
            tall ? "" : "line-clamp-2"
          }`}
        >
          {category.description}
        </p>
      </div>
    </motion.div>
  );
}