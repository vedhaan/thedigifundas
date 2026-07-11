import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { approach } from "@/lib/constants/approach";

export default function WhyUs() {
  return (
    <Section id="why-us" className="relative overflow-hidden">
      {/* background depth — same blur-orb language as ImpactNumbers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-accent-primary/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/10 blur-[120px]" />
      </div>

      <Container className="relative">
        <div className="max-w-2xl">
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Why Businesses Work With Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Our{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Approach
            </span>
          </h2>
        </div>

        <div className="mt-14 border-t border-border">
          {approach.map((item) => (
            <div
              key={item.number}
              className="group relative grid grid-cols-[auto_1fr] items-start gap-6 border-b border-border py-10 pl-6 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[140px_1fr] sm:gap-10 sm:py-12 sm:pl-8"
            >
              {/* accent bar — scales in on hover */}
              <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-accent-primary to-accent-secondary transition-transform duration-300 group-hover:scale-y-100" />

              <span className="bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text font-heading text-5xl font-bold leading-none text-transparent opacity-45 transition-opacity duration-300 group-hover:opacity-70 sm:text-7xl">
                {item.number}
              </span>

              <div>
                <h3 className="font-heading text-xl font-bold text-text-primary sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl font-body text-text-secondary sm:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}