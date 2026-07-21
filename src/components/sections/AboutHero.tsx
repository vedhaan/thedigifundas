import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-bg-primary pb-20 pt-16 sm:pb-28 sm:pt-20">
      {/* ambient gradient background — off-center, not symmetric, so it feels less like a stock template glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent-primary/10 to-accent-secondary/5 blur-[130px]" />
      </div>

      <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            About The Digi Fundas
          </span>

          {/* heading with glow — the glow sits behind/beside the text, not as a separate decorative shape */}
          <div className="relative mt-4">
            <div className="pointer-events-none absolute -inset-x-10 -inset-y-6 rounded-full bg-accent-primary/20 blur-[80px]" />
            <h1 className="relative font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
              Building Brands Through{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Strategy, Creativity & Digital Innovation
              </span>
            </h1>
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 font-body text-base text-text-secondary sm:text-lg">
            <p>
              The Digi Fundas was founded with a simple belief — every
              business deserves a strong brand presence, meaningful customer
              connections, and marketing that contributes to real business
              growth.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}