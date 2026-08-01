"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const benefits = [
  {
    num: "01",
    title: "Generate Qualified Leads",
    desc: "Precision targeting that puts your offer in front of people ready to act.",
  },
  {
    num: "02",
    title: "Increase Brand Awareness",
    desc: "Consistent visibility across Facebook and Instagram feeds and stories.",
  },
  {
    num: "03",
    title: "Drive Website Traffic",
    desc: "Ad creative engineered to move people from scroll to click.",
  },
  {
    num: "04",
    title: "Boost Online Sales",
    desc: "Conversion-focused funnels that turn attention into revenue.",
  },
  {
    num: "05",
    title: "Retarget Interested Audiences",
    desc: "Bring back visitors who showed interest but didn't convert yet.",
  },
  {
    num: "06",
    title: "Scale Marketing Efforts Efficiently",
    desc: "Budget allocation and optimization that grows with your business.",
  },
];

export default function WhyMetaAds() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-accent-primary/[0.05] blur-[160px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
            Why Meta Ads
          </span>
          <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[2.5rem]">
            Reach the right audience{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              at the right time.
            </span>
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            Meta&apos;s advertising platforms provide businesses with
            powerful opportunities to connect with potential customers
            through highly targeted campaigns.
          </p>
        </motion.div>

        {/* full-width list — three-column row grid on large screens instead of
            a narrow centered column, so the row actually uses the container width */}
        <div className="mt-16 lg:mt-20">
          {benefits.map((b, i) => (
            <motion.div
              key={b.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-3 border-t border-border py-8 first:border-t-0 first:pt-0 sm:gap-x-10 sm:py-10 lg:grid-cols-[100px_1fr_minmax(0,360px)] lg:items-center lg:gap-x-12"
            >
              <span className="w-16 shrink-0 select-none font-heading text-5xl font-bold leading-none text-accent-primary/25 transition-colors duration-500 group-hover:text-accent-primary/70 sm:w-20 sm:text-6xl lg:w-auto lg:text-7xl">
                {b.num}
              </span>

              <h3 className="font-heading text-xl font-semibold text-text-primary transition-colors duration-300 group-hover:text-accent-primary sm:text-2xl lg:text-[1.6rem]">
                {b.title}
              </h3>

              {/* description moves into its own column on large screens,
                  filling the width instead of hiding under the title */}
              <p className="col-span-2 font-body text-sm text-text-secondary sm:text-base lg:col-span-1 lg:text-right">
                {b.desc}
              </p>

              <span className="absolute right-0 top-1/2 h-0 w-px -translate-y-1/2 bg-accent-primary transition-all duration-300 group-hover:h-full" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-14 flex max-w-4xl flex-col items-center gap-8 border-t border-border pt-10 text-center"
        >
          <p className="font-body text-base italic leading-relaxed text-text-secondary sm:text-xl">
            With the right strategy, Meta Ads can become one of the most
            effective customer acquisition channels for your business.
          </p>
          <Button href="/contact" variant="primary">
            Book A Strategy Call
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}