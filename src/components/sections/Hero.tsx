import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faVideo, faAward } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import ParticleBackground from "@/components/ui/ParticleBackground";

const stats = [
  { icon: faChartLine, value: 17, suffix: "X", label: "ROAS Achieved" },
  { icon: faVideo, value: 300, suffix: "K+", label: "Organic Reel Views Generated" },
  { icon: faAward, value: 3, suffix: "+", label: "Years of Industry Experience" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-primary pt-12 pb-20  sm:pt-16 sm:pb-28">
      <ParticleBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
              Building Brands That Get{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Seen, Remembered & Chosen
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-body text-base text-text-secondary sm:text-lg">
              We help businesses build meaningful connections through creative
              branding, performance-driven marketing, and AI-powered digital
              experiences designed for long-term growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Book a Strategy Call
              </Button>
              <Button href="/work" variant="secondary">
                Explore Our Work
              </Button>
            </div>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg-secondary border border-border text-accent-primary">
                    <FontAwesomeIcon icon={stat.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-heading text-2xl font-bold leading-none text-text-primary sm:text-3xl">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 max-w-[160px] font-body text-xs text-text-secondary sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: founder image */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border">
              <Image
                src="/founder.jpg"
                alt="Founder of The Digi Fundas"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}