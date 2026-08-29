"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faEye, faLayerGroup, faBullseye, faBrain, faChartLine } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

const benefits = [
  { icon: faShieldHalved, title: "Build Trust & Credibility" },
  { icon: faEye, title: "Improve Brand Recognition" },
  { icon: faLayerGroup, title: "Create Consistency Across Platforms" },
  { icon: faBullseye, title: "Differentiate From Competitors" },
  { icon: faBrain, title: "Strengthen Customer Recall" },
  { icon: faChartLine, title: "Support Marketing & Sales Efforts" },
];

// Single composed "brand sheet" — one canvas, five touchpoints at consistent
// scale, laid out like a real brand guideline export. No grid-cell aspect
// ratio conflicts since this is one coherent SVG, not five separate ones.
function BrandSheetArt() {
  return (
    <svg viewBox="0 0 900 340" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="sheetGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A00" />
          <stop offset="100%" stopColor="#FFB347" />
        </linearGradient>
      </defs>

      {/* baseline the whole sheet sits on — ties all pieces together visually */}
      <line x1="40" y1="300" x2="860" y2="300" stroke="#262626" strokeWidth="1.5" />

      {/* 1 — business card, standing upright, leaning slightly */}
      <g transform="translate(40,120) rotate(-4)">
        <rect x="0" y="0" width="140" height="88" rx="8" fill="#151515" stroke="#262626" />
        <rect x="14" y="16" width="20" height="20" rx="5" fill="url(#sheetGrad)" />
        <rect x="14" y="46" width="70" height="5" rx="2.5" fill="#A3A3A3" opacity="0.5" />
        <rect x="14" y="56" width="50" height="4" rx="2" fill="#A3A3A3" opacity="0.3" />
        <rect x="14" y="70" width="40" height="4" rx="2" fill="#FF8A00" opacity="0.7" />
      </g>
      <text x="110" y="330" textAnchor="middle" fontFamily="Sora, sans-serif" fontSize="12" fill="#A3A3A3">Business Card</text>

      {/* 2 — phone with social post */}
      <g transform="translate(230,90)">
        <rect x="0" y="0" width="76" height="130" rx="16" fill="#0D0D0D" stroke="#262626" strokeWidth="2" />
        <rect x="8" y="14" width="60" height="60" rx="6" fill="url(#sheetGrad)" />
        <circle cx="38" cy="44" r="10" fill="#0D0D0D" opacity="0.15" />
        <circle cx="18" cy="90" r="6" fill="#262626" />
        <rect x="28" y="87" width="34" height="4" rx="2" fill="#A3A3A3" opacity="0.5" />
        <rect x="8" y="102" width="60" height="3.5" rx="1.75" fill="#A3A3A3" opacity="0.3" />
      </g>
      <text x="268" y="330" textAnchor="middle" fontFamily="Sora, sans-serif" fontSize="12" fill="#A3A3A3">Social Post</text>

      {/* 3 — signpost */}
      <g transform="translate(400,60)">
        <line x1="60" y1="70" x2="60" y2="160" stroke="#262626" strokeWidth="4" />
        <rect x="6" y="0" width="108" height="60" rx="8" fill="#151515" stroke="#FF8A00" strokeOpacity="0.4" />
        <rect x="20" y="16" width="28" height="28" rx="6" fill="url(#sheetGrad)" />
        <rect x="56" y="18" width="42" height="6" rx="3" fill="#A3A3A3" opacity="0.5" />
        <rect x="56" y="30" width="30" height="5" rx="2.5" fill="#A3A3A3" opacity="0.3" />
      </g>
      <text x="460" y="330" textAnchor="middle" fontFamily="Sora, sans-serif" fontSize="12" fill="#A3A3A3">Signage</text

>

      {/* 4 — packaging box */}
      <g transform="translate(590,150)">
        <path d="M0 30 L70 12 L140 30 L140 78 L70 96 L0 78 Z" fill="#151515" stroke="#262626" />
        <path d="M0 30 L70 48 L140 30" fill="none" stroke="#262626" />
        <line x1="70" y1="48" x2="70" y2="96" stroke="#262626" />
        <rect x="54" y="30" width="32" height="18" rx="4" fill="url(#sheetGrad)" />
      </g>
      <text x="660" y="330" textAnchor="middle" fontFamily="Sora, sans-serif" fontSize="12" fill="#A3A3A3">Packaging</text>

      {/* 5 — letterhead sheet */}
      <g transform="translate(770,80)">
        <rect x="0" y="0" width="90" height="120" rx="6" fill="#0D0D0D" stroke="#262626" />
        <rect x="12" y="14" width="18" height="18" rx="4" fill="url(#sheetGrad)" />
        <rect x="36" y="18" width="40" height="5" rx="2.5" fill="#A3A3A3" opacity="0.5" />
        <line x1="12" y1="42" x2="78" y2="42" stroke="#262626" />
        <rect x="12" y="52" width="66" height="3.5" rx="1.75" fill="#A3A3A3" opacity="0.25" />
        <rect x="12" y="61" width="56" height="3.5" rx="1.75" fill="#A3A3A3" opacity="0.25" />
        <rect x="12" y="70" width="46" height="3.5" rx="1.75" fill="#A3A3A3" opacity="0.25" />
      </g>
      <text x="815" y="330" textAnchor="middle" fontFamily="Sora, sans-serif" fontSize="12" fill="#A3A3A3">Letterhead</text>

      {/* connector dots on the baseline under each piece — ties composition together */}
      {[110, 268, 460, 660, 815].map((x) => (
        <circle key={x} cx={x} cy="300" r="3" fill="#FF8A00" opacity="0.6" />
      ))}
    </svg>
  );
}

export default function WhyBranding() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-16 sm:py-20 lg:py-24">
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
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Why Branding & Design Matters
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-[2.6rem]">
            Your Brand Is{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              More Than A Logo
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            Your visual identity influences how customers perceive your
            business.
          </p>
        </motion.div>

        {/* single full-width brand sheet illustration */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto mt-14 w-full overflow-hidden rounded-2xl border border-border bg-bg-primary p-6 sm:p-10"
        >
          <span className="mb-4 block font-heading text-xs font-semibold uppercase tracking-widest text-accent-primary/60">
            One Identity, Every Touchpoint
          </span>
          <BrandSheetArt />
        </motion.div>

        {/* benefits — full-width row beneath the sheet, not competing for space with it */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3 rounded-xl border border-border bg-bg-primary p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                <FontAwesomeIcon icon={b.icon} className="h-3.5 w-3.5" />
              </span>
              <span className="font-heading text-xs font-semibold leading-snug text-text-primary sm:text-sm">
                {b.title}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mx-auto mt-8 max-w-xl text-center font-body text-sm text-text-secondary sm:text-base"
        >
          Every design element should contribute to a stronger and more
          memorable brand experience.
        </motion.p>
      </Container>
    </section>
  );
}