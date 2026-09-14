"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faCircleCheck,
  faSpinner,
  faLightbulb,
  faChartLine,
  faBullhorn,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

type Status = "idle" | "submitting" | "success" | "error";

const perks = [
  { icon: faLightbulb, label: "Practical marketing tips you can use right away" },
  { icon: faChartLine, label: "Real case studies and campaign breakdowns" },
  { icon: faBullhorn, label: "Early access to new guides and resources" },
];

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // TODO: wire to a real endpoint — same AJAX pattern as ContactForm.
      const res = await fetch("https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="newsletter" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(var(--color-border) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 25%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 25%, transparent 100%)",
        }}
      />

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-bg-primary"
        >
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            {/* left — value proposition, not just a headline */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg shadow-accent-primary/20">
                <FontAwesomeIcon icon={faEnvelopeOpenText} className="h-5 w-5" />
              </span>

              <h2 className="mt-5 font-heading text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                Stay{" "}
                <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  Updated
                </span>
              </h2>
              <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                Receive marketing insights, business growth tips, and
                industry updates directly in your inbox.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {perks.map((perk) => (
                  <div key={perk.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                      <FontAwesomeIcon icon={perk.icon} className="h-3 w-3" />
                    </span>
                    <span className="font-body text-sm text-text-secondary">{perk.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* right — form card, visually distinct panel */}
            <div className="flex flex-col justify-center border-t border-border bg-bg-secondary p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-accent-primary/30 bg-accent-primary/5 px-6 py-8 text-center"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/15 text-accent-primary">
                      <FontAwesomeIcon icon={faCircleCheck} className="h-5 w-5" />
                    </span>
                    <p className="font-heading text-base font-bold text-text-primary">
                      You&apos;re subscribed
                    </p>
                    <p className="font-body text-sm text-text-secondary">
                      Thanks for joining — check your inbox for a confirmation.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-3"
                  >
                    <div>
                      <label htmlFor="newsletter-name" className="mb-1.5 block font-body text-xs font-medium text-text-secondary">
                        Name
                      </label>
                      <input
                        id="newsletter-name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-border bg-bg-primary px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-primary/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="newsletter-email" className="mb-1.5 block font-body text-xs font-medium text-text-secondary">
                        Email Address
                      </label>
                      <input
                        id="newsletter-email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-border bg-bg-primary px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-primary/50 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="mt-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3.5 font-heading text-sm font-semibold text-bg-primary transition-opacity duration-200 disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <FontAwesomeIcon icon={faSpinner} className="h-3.5 w-3.5 animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        "Subscribe"
                      )}
                    </button>

                    {status === "error" && (
                      <p className="font-body text-xs text-red-400">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <p className="mt-1 flex items-center gap-1.5 font-body text-[11px] text-text-secondary/60">
                      <FontAwesomeIcon icon={faShieldHalved} className="h-2.5 w-2.5" />
                      No spam. Unsubscribe anytime.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}