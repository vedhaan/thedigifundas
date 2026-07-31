"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const EMAIL = "sales@thedigifundas.com";
const WHATSAPP_NUMBER = "919978941293";
const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/thedigifundas", icon: faInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/the-digi-fundas/", icon: faLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/people/The-Digi-Fundas/61563916225190/", icon: faFacebook },
];

function TiltCard({
  children, className = "", baseRotate = 0,
}: { children: React.ReactNode; className?: string; baseRotate?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hoverTransform, setHoverTransform] = useState("");

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHoverTransform(`rotate(0deg) perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale(1.03)`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setHoverTransform("")}
      style={{
        transform: hoverTransform || `rotate(${baseRotate}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`group relative rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-bg-secondary to-bg-primary shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {children}
    </div>
  );
}

export default function OtherWaysToConnect() {
  return (
    <Section id="other-ways" bgSecondary className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-accent-primary/[0.06] blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-accent-secondary/[0.05] blur-[150px]" />
      </div>

      {/* oversized background word, filling vertical negative space */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none whitespace-nowrap font-heading text-[16vw] font-bold leading-none text-white/[0.025]">
          REACH OUT
        </span>
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Prefer Something Faster?
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Other Ways To{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mt-4 font-body text-text-secondary">
            Some conversations don&apos;t need a form. Reach out however&apos;s easiest for you.
          </p>
        </motion.div>

        {/* Full-width spread composition with connecting path */}
        <div className="relative mx-auto mt-24 hidden lg:block" style={{ height: "440px" }}>
          {/* dashed connecting path — SVG, spans full width, connects all three cards */}
          <svg viewBox="0 0 1200 440" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <motion.path
              d="M 220 340 C 400 200, 480 120, 600 100 C 720 80, 800 200, 980 320"
              fill="none"
              stroke="url(#connectGradient)"
              strokeWidth="2"
              strokeDasharray="2 10"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="connectGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-accent-primary)" stopOpacity="0.5" />
                <stop offset="50%" stopColor="var(--color-accent-secondary)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--color-accent-primary)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Email — far left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-0 left-0 z-10 w-[300px]"
          >
            <TiltCard baseRotate={2.5} className="p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg shadow-accent-primary/20">
                <FontAwesomeIcon icon={faEnvelope} className="h-4.5 w-4.5 text-bg-primary" />
              </span>
              <h3 className="relative mt-5 font-heading text-lg font-bold text-text-primary">
                Prefer email?
              </h3>
              <p className="relative mt-2 font-body text-sm text-text-secondary">
                For project briefs, proposals, or anything worth writing down properly.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="relative mt-4 inline-block font-heading text-sm font-semibold text-accent-primary transition-colors hover:text-accent-secondary"
              >
                {EMAIL}
              </a>
            </TiltCard>
          </motion.div>

          {/* WhatsApp — center, elevated, the primary card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="absolute left-1/2 top-0 z-20 w-[380px] -translate-x-1/2"
          >
            <TiltCard baseRotate={-1.5} className="p-8 sm:p-10">
              <div className="relative flex items-start justify-between">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] shadow-[0_10px_25px_-6px_rgba(37,211,102,0.5)]">
                  <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 text-white" />
                </span>
                <span className="mt-1 rounded-full border border-white/10 px-3 py-1 font-body text-[11px] font-medium text-text-secondary">
                  Usually replies in minutes
                </span>
              </div>
              <h3 className="relative mt-6 font-heading text-2xl font-bold text-text-primary">
                Say hello on WhatsApp
              </h3>
              <p className="relative mt-2 font-body text-sm text-text-secondary sm:text-base">
                Got a quick question, or just want to talk it through before
                filling out a form? This is the fastest way to reach us.
              </p>
            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-heading text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
                Start a Chat
              </a>
            </TiltCard>
          </motion.div>

          {/* Social — far right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-4 right-0 z-10 w-[300px]"
          >
            <TiltCard baseRotate={-2.5} className="p-7">
              <h3 className="relative font-heading text-lg font-bold text-text-primary">
                Follow along
              </h3>
              <p className="relative mt-2 font-body text-sm text-text-secondary">
                See our latest work, behind-the-scenes, and client stories.
              </p>
              <div className="relative mt-5 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-text-secondary transition-all hover:border-accent-primary hover:text-accent-primary hover:-translate-y-0.5"
                  >
                    <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Mobile: clean stacked cards, no absolute positioning, no path, no tilt */}
        <div className="mt-16 flex flex-col gap-6 lg:hidden">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
            <TiltCard className="p-8">
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] shadow-[0_10px_25px_-6px_rgba(37,211,102,0.5)]">
                  <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6 text-white" />
                </span>
                <span className="mt-1 rounded-full border border-white/10 px-3 py-1 font-body text-[11px] font-medium text-text-secondary">Replies in minutes</span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-text-primary">Say hello on WhatsApp</h3>
              <p className="mt-2 font-body text-sm text-text-secondary">Got a quick question, or just want to talk it through before filling out a form?</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-heading text-sm font-semibold text-white">
                <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" /> Start a Chat
              </a>
            </TiltCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <TiltCard className="p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg shadow-accent-primary/20">
                <FontAwesomeIcon icon={faEnvelope} className="h-4.5 w-4.5 text-bg-primary" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-text-primary">Prefer email?</h3>
              <p className="mt-2 font-body text-sm text-text-secondary">For project briefs, proposals, or anything worth writing down properly.</p>
              <a href={`mailto:${EMAIL}`} className="mt-4 inline-block font-heading text-sm font-semibold text-accent-primary">{EMAIL}</a>
            </TiltCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <TiltCard className="p-7">
              <h3 className="font-heading text-lg font-bold text-text-primary">Follow along</h3>
              <p className="mt-2 font-body text-sm text-text-secondary">See our latest work, behind-the-scenes, and client stories.</p>
              <div className="mt-5 flex gap-3">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-text-secondary">
                    <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}