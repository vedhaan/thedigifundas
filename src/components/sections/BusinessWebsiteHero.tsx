"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faUser,
  faEnvelope,
  faMessage,
  faPaperPlane,
  faStar,
  faShieldHalved,
  faClock,
  faLocationDot,
  faBriefcase,
  faChartLine,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const fields = [
  { icon: faUser, label: "Full Name", value: "Rohan Mehta" },
  { icon: faEnvelope, label: "Email Address", value: "rohan@example.com" },
  { icon: faMessage, label: "Message", value: "I'd like to know more..." },
];

const trustBadges = [
  { icon: faShieldHalved, label: "Certified Experts" },
  { icon: faClock, label: "Fast Response" },
  { icon: faLocationDot, label: "Local Support" },
];

const services = [
  { icon: faBriefcase, label: "Consulting" },
  { icon: faChartLine, label: "Strategy" },
  { icon: faHandshake, label: "Support" },
];

const navItems = ["Home", "About", "Services", "Contact"];

const FILL_INTERVAL_MS = 900;

export default function BusinessWebsiteHero() {
  const [filledCount, setFilledCount] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (filledCount >= fields.length) return;
    const timeout = setTimeout(() => {
      setFilledCount((c) => c + 1);
    }, FILL_INTERVAL_MS);
    return () => clearTimeout(timeout);
  }, [filledCount]);

  useEffect(() => {
    if (filledCount === fields.length && !sent) {
      const timeout = setTimeout(() => setSent(true), 500);
      return () => clearTimeout(timeout);
    }
  }, [filledCount, sent]);

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
              Business Website Development Services
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              Professional Business Websites Designed To{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Build Trust & Generate Enquiries
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                At The Digi Fundas, we design and develop modern business
                websites that combine aesthetics, functionality, speed, and
                user experience to help businesses establish a strong digital
                presence and support long-term growth.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Book A Consultation
              </Button>
              <Button href="/work" variant="secondary">
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* enhanced business homepage mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: "460px" }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-[110px]" />

            <div
              style={{ position: "relative", width: "100%", maxWidth: "100%", overflow: "hidden", boxSizing: "border-box" }}
              className="rounded-2xl border border-border bg-bg-secondary shadow-2xl"
            >
              {/* browser chrome */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400/70" />
                <span className="ml-2 flex-1 truncate rounded-full bg-bg-primary px-3 py-1 font-body text-[11px] text-text-secondary">
                  yourbusiness.com
                </span>
              </div>

              {/* mini nav bar — makes it read as a real site, not just a form */}
              <div className="flex items-center gap-4 border-b border-border px-5 py-2.5 sm:px-6">
                {navItems.map((item, i) => (
                  <span
                    key={item}
                    className={`font-body text-[11px] font-medium ${
                      i === 0 ? "text-accent-primary" : "text-text-secondary"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }} className="p-5 sm:p-6">
                {/* homepage header — trust signals */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-sm font-bold text-text-primary sm:text-base">
                      Your Business Name
                    </h3>
                    <div className="mt-1 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="h-2.5 w-2.5 text-accent-primary" />
                      ))}
                      <span className="ml-1 font-body text-[10px] text-text-secondary">
                        Trusted by 200+ clients
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full bg-accent-primary/10 px-2.5 py-1 font-body text-[10px] font-semibold text-accent-primary">
                    Est. 2018
                  </span>
                </div>

                {/* hero image block — now filled with content instead of empty gray */}
                <div className="relative mt-4 flex h-20 w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-border bg-gradient-to-br from-bg-primary to-bg-secondary sm:h-24">
                  <p className="font-heading text-xs font-bold text-text-primary sm:text-sm">
                    Solutions Built Around Your Business
                  </p>
                  <p className="mt-1 font-body text-[10px] text-text-secondary">
                    Consulting · Strategy · Support
                  </p>
                </div>

                {/* trust badge row */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {trustBadges.map((badge) => (
                    <div
                      key={badge.label}
                      className="flex flex-col items-center gap-1 rounded-lg border border-border bg-bg-primary px-2 py-2.5"
                    >
                      <FontAwesomeIcon icon={badge.icon} className="h-3 w-3 text-accent-primary" />
                      <span className="text-center font-body text-[9px] leading-tight text-text-secondary">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* compact services strip */}
                <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-border bg-bg-primary px-3 py-2.5">
                  {services.map((service, i) => (
                    <div key={service.label} className="flex flex-1 items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                        <FontAwesomeIcon icon={service.icon} className="h-2.5 w-2.5" />
                      </span>
                      <span className="truncate font-body text-[10px] text-text-secondary">
                        {service.label}
                      </span>
                      {i < services.length - 1 && (
                        <span className="ml-auto h-4 w-px shrink-0 bg-border" aria-hidden />
                      )}
                    </div>
                  ))}
                </div>

                {/* live enquiry form */}
                <div className="mt-3 rounded-xl border border-border bg-bg-primary p-4">
                  <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Get In Touch
                  </p>

                  <AnimatePresence mode="wait">
                    {!sent ? (
                      <motion.div
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-2.5"
                      >
                        {fields.map((field, i) => {
                          const filled = i < filledCount;
                          return (
                            <div
                              key={field.label}
                              style={{ minWidth: 0, overflow: "hidden" }}
                              className="flex items-center gap-3 rounded-lg border border-border bg-bg-secondary px-3 py-2.5"
                            >
                              <FontAwesomeIcon
                                icon={field.icon}
                                className={`h-3 w-3 shrink-0 transition-colors duration-300 ${
                                  filled ? "text-accent-primary" : "text-text-secondary/40"
                                }`}
                              />
                              <span
                                style={{ minWidth: 0, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}
                                className={`flex-1 font-body text-xs transition-colors duration-300 ${
                                  filled ? "text-text-primary" : "text-text-secondary/40"
                                }`}
                              >
                                {filled ? field.value : field.label}
                              </span>
                              {filled && (
                                <FontAwesomeIcon icon={faCircleCheck} className="h-3 w-3 shrink-0 text-accent-primary" />
                              )}
                            </div>
                          );
                        })}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center gap-2 py-4 text-center"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                          <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
                        </span>
                        <p className="font-heading text-sm font-semibold text-text-primary">
                          Enquiry Sent
                        </p>
                        <p className="font-body text-[11px] text-text-secondary">
                          We&apos;ll be in touch shortly.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}