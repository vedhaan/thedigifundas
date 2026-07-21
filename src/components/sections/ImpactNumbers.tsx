import CountUp from "@/components/ui/CountUp";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { impactStats } from "@/lib/constants/impactStats";

export default function ImpactNumbers() {
  const featured = impactStats.find((s) => s.featured)!;
  const rest = impactStats.filter((s) => !s.featured);

  return (
    <Section id="impact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/10 blur-[140px]" />
        <div className="absolute -right-40 top-0 h-72 w-72 rounded-full bg-accent-secondary/10 blur-[100px]" />
      </div>

     <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="max-w-xl">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Results That Reflect Our{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Commitment
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-accent-primary" />
        </div>

        {/* ---------- Desktop: one featured stat + 3 smaller ---------- */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-[1.1fr_1px_1fr] lg:gap-12">
          {/* Featured stat */}
          <div className="flex flex-col justify-center rounded-3xl border border-border bg-bg-secondary p-12">
            <div className="font-heading text-7xl font-bold leading-none text-accent-primary xl:text-8xl">
              <CountUp end={featured.value} suffix={featured.suffix} />
            </div>
            <div className="mt-4 font-heading text-2xl font-semibold text-text-primary">
              {featured.label}
            </div>
            <p className="mt-3 max-w-sm font-body text-text-secondary">
              {featured.description}
            </p>
          </div>

          <div className="bg-border" />

          {/* 3 smaller stats, stacked */}
          <div className="flex flex-col justify-center gap-8 py-4">
            {rest.map((stat, i) => (
              <div
                key={stat.label}
                className={`pb-8 ${i !== rest.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="font-heading text-4xl font-bold leading-none text-text-primary">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 font-heading text-base font-semibold text-accent-secondary">
                  {stat.label}
                </div>
                <p className="mt-2 max-w-md font-body text-sm text-text-secondary">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Mobile: 2x2 grid, number + label only (matches reference) ---------- */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:hidden">
          {impactStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-4xl font-bold leading-none text-accent-primary">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 font-body text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}