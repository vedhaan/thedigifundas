import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AboutFinalCta() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in srgb, var(--color-accent-primary) 55%, black), color-mix(in srgb, var(--color-accent-secondary) 55%, black))",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />

      <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
            Let&apos;s Create The Next Growth Story Together
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-body text-base text-white/80 sm:text-lg">
            Whether you&apos;re launching a new business, refining your brand,
            or looking to improve your marketing performance, we&apos;re ready
            to help you move forward with confidence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Book A Strategy Call
            </Button>
            <a
              href="/work"
              className="font-heading text-sm font-semibold text-text-primary underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white sm:text-base"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}