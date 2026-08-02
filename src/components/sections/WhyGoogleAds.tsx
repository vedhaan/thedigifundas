"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserCheck,
  faArrowUpRightFromSquare,
  faCartShopping,
  faEye,
  faBullseye,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const benefits = [
  {
    icon: faUserCheck,
    title: "Generate Qualified Leads",
    url: "thedigifundas.com › lead-generation",
    desc: "Connect with prospects actively searching for your services.",
  },
  {
    icon: faArrowUpRightFromSquare,
    title: "Increase Website Traffic",
    url: "thedigifundas.com › traffic-campaigns",
    desc: "Drive consistent, high-intent visitors to your site.",
  },
  {
    icon: faCartShopping,
    title: "Drive Online Sales",
    url: "thedigifundas.com › ecommerce-ads",
    desc: "Turn search intent into completed purchases.",
  },
  {
    icon: faEye,
    title: "Improve Brand Visibility",
    url: "thedigifundas.com › brand-visibility",
    desc: "Appear consistently wherever your audience searches.",
  },
  {
    icon: faBullseye,
    title: "Reach High-Intent Audiences",
    url: "thedigifundas.com › audience-targeting",
    desc: "Target people ready to act, not just browse.",
  },
  {
    icon: faBolt,
    title: "Achieve Faster Results",
    url: "thedigifundas.com › fast-results",
    desc: "Paid search delivers visibility from day one.",
  },
];

export default function WhyGoogleAds() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        {/* centered intro — no split, single column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Why Google Ads?
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-[2.6rem]">
            Reach Customers When{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              They&apos;re Ready To Take Action
            </span>
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            Unlike many marketing channels, Google Ads allows businesses to
            appear in front of people actively searching for products and
            services.
          </p>
        </motion.div>

        {/* full-width SERP-dominance mockup — six benefits as stacked ad results */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto mt-14 w-full max-w-4xl"
        >
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-primary/8 to-accent-secondary/5 blur-2xl" />

          <div className="overflow-hidden rounded-2xl border border-border bg-bg-primary shadow-2xl">
            {/* fake search bar header */}
            <div className="flex items-center gap-3 border-b border-border px-5 py-4 sm:px-8">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="h-3.5 w-3.5 shrink-0 text-text-secondary" />
              <span className="font-body text-sm text-text-secondary sm:text-base">
                digital marketing services near me
              </span>
              <span className="ml-auto hidden font-body text-[11px] text-text-secondary/50 sm:inline">
                About 4,20,00,000 results
              </span>
            </div>

            {/* stacked ad results — the "dominating the SERP" visual */}
            <div className="flex flex-col">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="group border-b border-border px-5 py-5 transition-colors duration-200 last:border-b-0 hover:bg-accent-primary/[0.03] sm:px-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary transition-colors duration-200 group-hover:bg-accent-primary group-hover:text-bg-primary">
                      <FontAwesomeIcon icon={b.icon} className="h-4 w-4" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded border border-accent-primary/40 px-1.5 py-0.5 font-body text-[10px] font-semibold uppercase text-accent-primary">
                          Ad
                        </span>
                        <span className="truncate font-body text-xs text-text-secondary">
                          {b.url}
                        </span>
                      </div>
                      <h3 className="mt-1 font-body text-base font-medium leading-snug text-accent-secondary transition-colors duration-200 group-hover:underline sm:text-lg">
                        {b.title}
                      </h3>
                      <p className="mt-1 font-body text-xs leading-relaxed text-text-secondary sm:text-sm">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* closing line + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-7 text-center"
        >
          <p className="font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            When managed effectively, Google Ads can become one of the most
            profitable customer acquisition channels for your business.
          </p>
          <Button href="/contact" variant="primary">
            Book A Strategy Call
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}