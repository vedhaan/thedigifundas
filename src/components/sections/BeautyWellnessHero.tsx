"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSpa, faCalendarCheck, faLeaf } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const services = [
  { icon: faSpa, name: "Signature Facial", duration: "60 min" },
  { icon: faLeaf, name: "Aromatherapy Massage", duration: "45 min" },
];

const BOOKED_TARGET = 128;
const TICK_INTERVAL_MS = 30;

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = Math.ceil(target / 35);
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setValue(current);
      if (current >= target) clearInterval(interval);
    }, TICK_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [start, target]);
  return value;
}

export default function BeautyWellnessHero() {
  const [inView, setInView] = useState(false);
  const booked = useCountUp(BOOKED_TARGET, inView);

  return (
    <section
      style={{ overflowX: "hidden", position: "relative", width: "100%" }}
      className="bg-bg-primary py-16 sm:py-20 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(255,138,0,0.10) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,179,71,0.08) 0%, transparent 50%), linear-gradient(180deg, #0D0D0D 0%, #141414 55%, #0D0D0D 100%)",
          }}
        />
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
              Digital Marketing For Beauty & Wellness Brands
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              Helping Beauty & Wellness Brands{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Build Trust, Attract Customers & Grow Consistently
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                At The Digi Fundas, we help beauty and wellness businesses
                strengthen their digital presence through branding, content
                creation, social media marketing, paid advertising, and
                website development designed to attract customers and
                support long-term growth.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Book A Strategy Call
              </Button>
              <Button href="/work" variant="secondary">
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* spa/salon booking mockup — soft glow aesthetic, appointment-driven,
              genuinely evokes beauty & wellness rather than a generic social post */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            onViewportEnter={() => setInView(true)}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: "420px" }}
          >
            {/* softer, warmer glow than other pages — evokes a "glow" skincare feel */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-secondary/25 via-accent-primary/15 to-accent-secondary/10 blur-[100px]" />

            <div
              style={{ position: "relative", width: "100%", maxWidth: "100%", overflow: "hidden", boxSizing: "border-box" }}
              className="rounded-[2rem] border border-border bg-bg-secondary shadow-2xl"
            >
              {/* soft gradient "glow" banner, replaces flat gray placeholder */}
              <div className="relative flex h-28 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-accent-primary/20 via-accent-secondary/10 to-transparent sm:h-32">
                <div
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(255,179,71,0.4) 0%, transparent 60%)",
                  }}
                />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-bg-primary/80 text-accent-primary shadow-lg">
                  <FontAwesomeIcon icon={faSpa} className="h-6 w-6" />
                </span>
                <p className="relative mt-2 font-heading text-xs font-semibold uppercase tracking-widest text-text-primary">
                  Serenity Spa & Wellness
                </p>
              </div>

              <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }} className="p-5 sm:p-6">
                {/* rating row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="h-3 w-3 text-accent-primary" />
                    ))}
                    <span className="ml-1 font-body text-xs text-text-secondary">4.9 (156)</span>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-accent-primary/10 px-2.5 py-1 font-body text-[10px] font-semibold text-accent-primary">
                    <FontAwesomeIcon icon={faCalendarCheck} className="h-2.5 w-2.5" />
                    {booked} Booked This Month
                  </span>
                </div>

                {/* service list — soft rounded rows */}
                <div className="mt-4 flex flex-col gap-2.5">
                  {services.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-bg-primary px-4 py-3"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                        <FontAwesomeIcon icon={s.icon} className="h-3.5 w-3.5" />
                      </span>
                      <div style={{ minWidth: 0, overflow: "hidden" }} className="flex-1">
                        <p
                          style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}
                          className="font-heading text-sm font-semibold text-text-primary"
                        >
                          {s.name}
                        </p>
                        <p className="font-body text-xs text-text-secondary">{s.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* booking CTA within the mockup */}
                <div className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-3 font-heading text-sm font-semibold text-bg-primary">
                  <FontAwesomeIcon icon={faCalendarCheck} className="h-3.5 w-3.5" />
                  Book Appointment
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}