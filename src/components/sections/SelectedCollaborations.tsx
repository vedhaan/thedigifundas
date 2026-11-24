import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { collaborations } from "@/lib/constants/collaborations";

export default function SelectedCollaborations() {
  // Duplicate the array so the marquee loops seamlessly. The CSS animation
  // moves the track by exactly -50%, which only looks continuous if the
  // content is doubled (second half is an identical copy of the first).
  const track = [...collaborations, ...collaborations];

  return (
    <Section bgSecondary>
      <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Growing Brands
            </span>{" "}
            Across Industries
          </h2>
          <p className="mt-4 font-body text-base text-text-secondary sm:text-lg">
            We&apos;ve had the opportunity to work with businesses across jewellery,
            fashion, beauty, travel, and service industries, helping them
            strengthen their digital presence, improve customer engagement, and
            achieve measurable business results.
          </p>
        </div>
      </Container>

      <div className="relative mt-14 overflow-hidden">
        {/* edge fade so logos don't hard-cut at the viewport edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg-secondary to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg-secondary to-transparent sm:w-32" />

        {/* pr matches the gap so the -50% loop point lands exactly on the
            start of the second copy, with no small jump on every cycle */}
        <div className="flex w-max animate-marquee gap-4 pr-4 sm:gap-6 sm:pr-6">
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-20 w-36 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2.5 shadow-sm sm:h-28 sm:w-56 sm:rounded-2xl sm:p-3"
            >
              <div
                className="relative h-full w-full"
                style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 640px) 144px, 224px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}