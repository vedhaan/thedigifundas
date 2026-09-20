import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CareersFinalCta() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in srgb, var(--color-accent-primary) 55%, black), color-mix(in srgb, var(--color-accent-secondary) 55%, black))",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
            Let's Build The Future Together
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base text-white/80 sm:text-lg">
            Whether you're looking for a full-time role, internship, or
            freelance opportunity, we're always excited to connect with
            passionate individuals who want to create meaningful work and
            contribute to business growth.
          </p>

          <div className="mt-10">
            <Button href="#apply" variant="primary" className="w-full sm:w-auto">
              Apply Today
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}