"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faBagShopping,
  faBullhorn,
  faLocationArrow,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const campaigns = [
  { icon: faUserPlus, title: "Lead Generation Campaigns" },
  { icon: faBagShopping, title: "Ecommerce Sales Campaigns" },
  { icon: faBullhorn, title: "Brand Awareness Campaigns" },
  { icon: faLocationArrow, title: "Traffic Campaigns" },
  { icon: faRotate, title: "Remarketing Campaigns" },
];

function Pill({ icon, title }: { icon: typeof faUserPlus; title: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-full border border-border bg-bg-primary px-6 py-3.5 transition-colors duration-300 hover:border-accent-primary/50">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary">
        <FontAwesomeIcon icon={icon} className="h-3.5 w-3.5" />
      </span>
      <span className="whitespace-nowrap font-heading text-base font-semibold text-text-primary sm:text-lg">
        {title}
      </span>
    </div>
  );
}

export default function MetaAdsCampaignTypes() {
  const row = [...campaigns, ...campaigns];

  return (
    <Section id="meta-ads-campaign-types" bgSecondary className="relative overflow-hidden">
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
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Campaign Types We Manage
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Meta{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Advertising Solutions
            </span>
          </h2>
        </motion.div>

        {/* MOBILE / TABLET — separate, simpler code path per project convention.
            Labeled rows with colored accent dot, matching the reference's
            category-row + pill visual language. No animation, no overflow risk. */}
        <div className="mx-auto mt-12 flex max-w-md flex-col gap-3 lg:hidden">
          {campaigns.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-3 rounded-xl border border-border bg-bg-primary px-4 py-3.5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bg-secondary text-accent-primary">
                <FontAwesomeIcon icon={c.icon} className="h-3.5 w-3.5" />
              </span>
              <span className="font-heading text-sm font-semibold text-text-primary">
                {c.title}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* DESKTOP marquee only — lg and above */}
      <div
        className="relative mt-14 hidden overflow-hidden lg:block"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex w-max gap-4 px-2">
          {row.map((c, i) => (
            <Pill key={`${c.title}-${i}`} icon={c.icon} title={c.title} />
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: meta-ads-marquee 26s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes meta-ads-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </Section>
  );
}