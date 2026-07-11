"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { videoTestimonials, writtenTestimonials } from "@/lib/constants/testimonials";

function WrittenCard({ t }: { t: (typeof writtenTestimonials)[number] }) {
  return (
    <div className="rounded-2xl border border-border bg-bg-primary p-8">
            <div className="flex items-center justify-between">
                <FontAwesomeIcon icon={faQuoteLeft} className="h-6 w-6 text-accent-primary/40" />
                <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className={`h-3.5 w-3.5 ${i < t.rating ? "text-accent-primary" : "text-border"
                                }`}
                        />
                    ))}
                </div>
            </div>
            <p className="mt-5 font-body text-text-secondary">{t.quote}</p>
            <div className="mt-6 border-t border-border pt-4">
                <div className="font-heading text-sm font-bold text-text-primary">{t.name}</div>
                <div className="mt-0.5 font-body text-xs text-text-secondary">{t.role}</div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    function handleVideoClick(videoUrl: string | null, name: string) {
        if (!videoUrl) {
            console.warn(`No video source set yet for testimonial: ${name}`);
            return;
        }
        // TODO: open video modal / player using videoUrl
    }

    return (
        <Section id="testimonials" bgSecondary className="relative overflow-hidden">
            {/* background depth — consistent with WhyUs / ImpactNumbers */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-accent-primary/10 blur-[140px]" />
                <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-accent-secondary/10 blur-[120px]" />
            </div>

            <Container className="relative">
                <div className="max-w-2xl">
                    <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
                        Testimonials
                    </span>
                    <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                        What Our{" "}
                        <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="mt-4 font-body text-text-secondary sm:text-lg">
                        The trust our clients place in us is built through collaboration,
                        transparency, and results. From increasing brand visibility to
                        generating leads and improving conversions, we&apos;re proud to be
                        part of their growth journey.
                    </p>
                </div>

                {/* ---------- Video testimonials — horizontal scroll-snap ---------- */}
                <div className="relative mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {videoTestimonials.map((video) => (
                        <button
                            key={video.name}
                            onClick={() => handleVideoClick(video.videoUrl, video.name)}
                            className="group relative aspect-[9/16] w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border sm:w-[260px]"
                        >
                            <Image
                                src={video.thumbnail}
                                alt={video.name}
                                fill
                                sizes="260px"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/10 to-transparent" />
                            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent-primary/90 text-bg-primary transition-transform duration-300 group-hover:scale-110">
                                <FontAwesomeIcon icon={faPlay} className="ml-1 h-5 w-5" />
                            </span>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                                <div className="font-heading text-sm font-bold text-text-primary">
                                    {video.name}
                                </div>
                                <div className="mt-0.5 font-body text-xs text-text-secondary">
                                    {video.company}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>


                {/* ---------- Written testimonials — marquee on desktop, static stack on mobile ---------- */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {writtenTestimonials.map((t) => (
                        <WrittenCard key={t.name} t={t} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}