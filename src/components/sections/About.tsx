import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faCompass,
  faPalette,
  faPenNib,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const pillars = [
  { icon: faCompass, title: "Clear Direction" },
  { icon: faPalette, title: "Consistent Branding" },
  { icon: faPenNib, title: "Content & Advertising" },
  { icon: faGears, title: "Digital Platforms & Data" },
];

export default function About() {
  return (
    <Section id="about">
      <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: heading + copy */}
          <div>
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
              About The Digi Fundas
            </span>

            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
              More Than Marketing. A{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Strategic Growth Partner
              </span>
              .
            </h2>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                Businesses today need more than isolated marketing activities.
                They need a clear direction, consistent branding, engaging
                content, effective advertising, and digital platforms that
                support growth.
              </p>
              <p>
                The Digi Fundas was created to help businesses navigate this
                journey with confidence. By combining creativity, strategy,
                technology, and data-driven decision-making, we help brands
                build visibility, credibility, and sustainable growth.
              </p>
            </div>
          </div>

          {/* Right: quote callout card, same glow treatment as Hero's image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10 blur-2xl" />
            <div className="relative rounded-3xl border border-border bg-bg-secondary p-12 sm:p-10">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-3xl text-accent-primary/40"
              />
              <p className="mt-6 font-heading text-2xl font-semibold leading-snug text-text-primary sm:text-3xl">
                Whether you&apos;re launching a new venture, strengthening an
                existing brand, or scaling your business, our focus remains
                the same —{" "}
                <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  creating solutions that deliver meaningful impact.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Compact pillar row */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-8 border-t border-border pt-10 sm:gap-x-14">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex items-center gap-3">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-bg-secondary border border-border text-accent-primary">
                <FontAwesomeIcon icon={pillar.icon} className="h-6 w-6 text-xl" />
              </span>
              <span className="font-heading text-sm font-semibold text-text-primary sm:text-xl">
                {pillar.title}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}