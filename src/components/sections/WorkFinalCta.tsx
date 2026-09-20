"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function WorkFinalCta() {
  return (
    <Section>
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,179,71,0.2) 45%, rgba(255,138,0,0) 75%)",
          }}
        />

        <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl rounded-3xl border border-[#262626] bg-[#151515] px-8 py-14 text-center md:px-16 md:py-20"
          >
            <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              Let's Create{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
                }}
              >
                The Next Success Story
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg font-body text-base leading-relaxed text-[#A3A3A3] md:text-lg">
              Whether you're looking to strengthen your brand, improve your
              marketing performance, or build a stronger digital presence,
              we're ready to help.
            </p>

            <div className="mt-9">
              <Button href="/contact" variant="primary">
                Start Your Project
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </div>
    </Section>
  );
}