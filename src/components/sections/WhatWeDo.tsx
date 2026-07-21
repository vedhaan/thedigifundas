"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { services } from "@/lib/constants/services";

export default function WhatWeDo() {
  return (
    <Section id="what-we-do">
      <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            What We Do
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Helping Businesses Grow Through{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Integrated Solutions
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 border-t border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-border py-8 transition-colors hover:bg-white/[0.02] sm:gap-10 sm:py-10"
              >
                <span className="font-heading text-2xl font-bold text-text-secondary/40 sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-heading text-lg font-bold text-text-primary transition-colors group-hover:text-accent-primary sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-text-secondary sm:text-base">
                    {service.description}
                  </p>
                  <p className="mt-1 hidden font-body text-sm text-text-secondary/70 sm:block">
                    {service.expanded}
                  </p>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300 group-hover:border-accent-primary group-hover:bg-accent-primary group-hover:text-bg-primary">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}