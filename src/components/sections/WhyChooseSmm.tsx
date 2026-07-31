"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faPenNib, faComments, faChartLine } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const pillars = [
  {
    icon: faSliders,
    title: "Customized Strategies",
    desc: "Every business receives a tailored marketing plan.",
    bg: "linear-gradient(135deg, #FF8A00, #7A3E00)",
  },
  {
    icon: faPenNib,
    title: "Creative Content",
    desc: "Content designed to capture attention and encourage engagement.",
    bg: "linear-gradient(135deg, #151515, #2b1a08)",
  },
  {
    icon: faComments,
    title: "Consistent Communication",
    desc: "Transparent reporting and ongoing collaboration.",
    bg: "linear-gradient(135deg, #FFB347, #8a5a10)",
  },
  {
    icon: faChartLine,
    title: "Growth-Focused Execution",
    desc: "Strategies built around measurable business objectives.",
    bg: "linear-gradient(135deg, #0D0D0D, #1f1208)",
  },
];

export default function WhyChooseSmm() {
  return (
    <Section id="why-choose-smm" className="relative overflow-hidden">
      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Why Choose The Digi Fundas
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            A Strategic Approach To{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Social Media Growth
            </span>
          </h2>
        </motion.div>

        {/* Interlocking diagonal panels — full-bleed color blocks, no card shape */}
        <div className="relative mt-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
              style={{ marginTop: i === 0 ? 0 : "-1.75rem", zIndex: pillars.length - i }}
            >
              <div
                className={`relative overflow-hidden py-10 pl-10 pr-8 sm:py-12 sm:pl-16 sm:pr-12 ${
                  i % 2 === 0 ? "-skew-y-2" : "skew-y-2"
                }`}
                style={{ background: pillar.bg }}
              >
                {/* counter-skewed content so text stays perfectly level */}
                <div className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 ${i % 2 === 0 ? "skew-y-2" : "-skew-y-2"}`}>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                    <FontAwesomeIcon icon={pillar.icon} className="h-6 w-6" />
                  </span>

                  <div>
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-bold text-white sm:text-2xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 max-w-md font-body text-sm text-white/75 sm:text-base">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}