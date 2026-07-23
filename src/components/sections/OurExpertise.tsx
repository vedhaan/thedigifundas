"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { expertiseServices } from "@/lib/constants/expertiseServices";

export default function OurExpertise() {
  return (
    <Section id="expertise" bgSecondary className="relative overflow-hidden">
      {/* slow-drifting gradient wash spanning the full section, not repeated per-block */}
      <motion.div
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/4 top-0 h-[36rem] w-[36rem] rounded-full bg-accent-primary/[0.06] blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, -50, 40, 0], y: [0, 50, -20, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-1/4 h-[32rem] w-[32rem] rounded-full bg-accent-secondary/[0.05] blur-[140px]"
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
            Our Expertise
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold text-text-primary sm:text-4xl">
            Strategic Solutions For{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 flex flex-col gap-20 sm:gap-24">
          {expertiseServices.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="grid gap-10 border-t border-border pt-12 lg:grid-cols-2 lg:gap-16"
              >
                {/* Overview + CTA column */}
                <div className={reversed ? "lg:order-2" : ""}>
                  <span className="font-heading text-6xl font-bold text-accent-primary/20 sm:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 font-body text-base text-text-secondary sm:text-lg">
                    {service.overview}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent-primary transition-colors hover:text-accent-secondary sm:text-base"
                  >
                    {service.cta}
                    <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Services list column — gradient border reveal + lift on hover */}
                <div className={reversed ? "lg:order-1" : ""}>
                  <div className="group relative rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(255,138,0,0.2)]">
                    {/* base border */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(var(--color-border), var(--color-border))",
                      }}
                    />
                    {/* gradient border reveal on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative rounded-2xl bg-bg-primary p-8 sm:p-10">
                      <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-secondary">
                        What&apos;s Included
                      </span>
                      <ul className="mt-5 flex flex-col gap-3">
                        {service.services.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors duration-200 hover:bg-white/[0.03]"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary transition-colors duration-200 group-hover:bg-accent-primary group-hover:text-bg-primary">
                              <FontAwesomeIcon icon={faCheck} className="h-3 w-3" />
                            </span>
                            <span className="font-body text-sm text-text-primary sm:text-base">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}