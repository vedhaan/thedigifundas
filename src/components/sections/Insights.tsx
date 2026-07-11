import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { insights } from "@/lib/constants/insights";

export default function Insights() {
  const featured = insights.find((i) => i.featured) ?? insights[0];
  const rest = insights.filter((i) => i !== featured);

  return (
    <Section id="insights" className="relative overflow-hidden">
      {/* background grid — subtle, fades toward edges so it reads as texture, not a UI grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-accent-primary/10 blur-[140px]" />

      <Container className="relative">
        <div className="max-w-2xl">
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
            Insights
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Insights, Ideas &{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Industry Perspectives
            </span>
          </h2>
          <p className="mt-4 font-body text-text-secondary sm:text-lg">
            Explore practical marketing insights, branding strategies, business
            growth tips, and industry trends designed to help businesses make
            informed decisions and stay ahead in a rapidly changing digital
            landscape.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Featured — large card, left */}
          <a href={featured.link} className="group block">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-bg-primary/80 px-3 py-1 font-heading text-xs font-semibold text-accent-primary backdrop-blur-sm">
                {featured.category}
              </span>
            </div>
            <div className="mt-6">
              <span className="font-body text-xs text-text-secondary">{featured.date}</span>
              <h3 className="mt-2 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 font-body text-text-secondary">{featured.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent-primary transition-colors group-hover:text-accent-secondary">
                Read Article
                <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
              </span>
            </div>
          </a>

          {/* Secondary — 2 smaller cards, stacked right, now with clamped one-liner */}
          <div className="flex flex-col gap-8">
            {rest.map((post) => (
              <a key={post.title} href={post.link} className="group flex gap-5">
                <div className="relative aspect-[4/3] w-32 shrink-0 overflow-hidden rounded-xl border border-border sm:w-40">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="160px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-bold leading-snug text-text-primary sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 font-body text-xs text-text-secondary sm:text-sm">
                    {post.excerpt}
                  </p>
                  <span className="mt-2 font-body text-xs text-text-secondary">{post.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/insights" variant="secondary">
            View All Insights
          </Button>
        </div>
      </Container>
    </Section>
  );
}