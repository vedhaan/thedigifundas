"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const bioParagraphs = [
  "Charanjeet Kaur is the founder of The Digi Fundas and a Digital Marketing Strategist passionate about helping businesses grow through thoughtful branding, effective marketing, and innovative digital solutions.",
  "With hands-on experience across social media marketing, paid advertising, content strategy, branding, website development, and business consulting, she works closely with businesses to understand their challenges and identify opportunities for growth.",
  "Her approach combines creativity with strategy, ensuring that every initiative contributes to meaningful business outcomes rather than simply increasing activity metrics.",
  "Today, The Digi Fundas continues to support businesses that want to build stronger brands, improve visibility, and create sustainable growth in an increasingly competitive marketplace.",
];

export default function MeetFounder() {
  return (
    <Section id="founder" className="relative overflow-hidden">
      {/* ambient depth, consistent with OurStory's mesh but toned down — this section shouldn't compete with the photo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.07] blur-[130px]" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[110px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            The Face Behind The Vision
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Meet{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Charanjeet Kaur
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Photo — sticky on desktop so it stays visible while bio scrolls */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10 blur-2xl" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border">
                <Image
                  src="/founder.jpg"
                  alt="Charanjeet Kaur, Founder of The Digi Fundas"
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                />
              </div>

              {/* floating credential card, overlapping the bottom edge of the photo */}
              <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-border bg-bg-secondary/90 p-5 shadow-xl backdrop-blur-md">
                <div className="font-heading text-sm font-bold text-text-primary">
                  Charanjeet Kaur
                </div>
                <div className="mt-0.5 font-body text-xs text-text-secondary">
                  Founder & Digital Marketing Strategist
                </div>
                <div className="mt-3 flex gap-3 border-t border-border pt-3">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent-primary hover:text-accent-primary"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent-primary hover:text-accent-primary"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio content */}
          <div className="mt-4 flex flex-col gap-6 lg:mt-0">
            {bioParagraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="font-body text-base leading-relaxed text-text-secondary sm:text-lg"
              >
                {text}
              </motion.p>
            ))}

            {/* signature-style closing accent */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 flex items-center gap-4 border-t border-border pt-6"
            >
              <span className="font-heading text-2xl italic text-accent-primary">
                Charanjeet Kaur
              </span>
              <span className="font-body text-sm text-text-secondary">
                Founder, The Digi Fundas
              </span>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}