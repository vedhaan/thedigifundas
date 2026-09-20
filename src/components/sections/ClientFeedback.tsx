"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { videoTestimonials, writtenTestimonials } from "@/lib/constants/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`h-3.5 w-3.5 ${
            i <= rating ? "text-[#FF8A00]" : "text-white/15"
          }`}
        />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ClientFeedback() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <Section bgSecondary>
      <Container className="!max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-body text-sm font-semibold uppercase tracking-[0.15em] text-[#FF8A00]"
          >
            Client Feedback
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            What Clients Say{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)",
              }}
            >
              About Working With Us
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-body text-base leading-relaxed text-[#A3A3A3] md:text-lg"
          >
            Strong partnerships are built on trust, communication, and
            results. We are grateful for the opportunity to support
            businesses on their growth journey and help bring their vision to
            life.
          </motion.p>
        </div>

        {/* Video testimonials */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videoTestimonials.map((video, i) => {
            const isPlaying = activeVideo === i && !!video.videoUrl;
            const isClickable = !!video.videoUrl;

            return (
              <motion.div
                key={`${video.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={isClickable ? { y: -6 } : undefined}
                className={`group overflow-hidden rounded-2xl border bg-[#1a1a1a] transition-shadow duration-300 ${
                  isClickable
                    ? "border-[#262626] hover:border-[#FF8A00]/40 hover:shadow-[0_20px_40px_-15px_rgba(255,138,0,0.25)]"
                    : "border-[#262626]"
                }`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  {isPlaying ? (
                    <video
                      src={video.videoUrl ?? undefined}
                      controls
                      autoPlay
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => video.videoUrl && setActiveVideo(i)}
                      disabled={!isClickable}
                      className="relative h-full w-full disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.name}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.opacity = "0";
                        }}
                        className={`h-full w-full object-cover transition-transform duration-500 ${
                          isClickable ? "group-hover:scale-110" : ""
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-black/40 transition-colors duration-300 ${
                          isClickable ? "group-hover:bg-black/25" : ""
                        }`}
                      />
                      <span className="absolute inset-0 flex items-center justify-center">
                        {isClickable ? (
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF8A00] text-[#0D0D0D] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110">
                            <FontAwesomeIcon icon={faPlay} className="h-5 w-5" />
                          </span>
                        ) : (
                          <span className="rounded-full border border-white/20 bg-black/60 px-4 py-2 font-body text-xs text-white/70">
                            Coming Soon
                          </span>
                        )}
                      </span>
                    </button>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-heading text-sm font-semibold text-white">
                    {video.name}
                  </p>
                  <p className="mt-0.5 font-body text-xs text-[#A3A3A3]">
                    {video.company}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Written testimonials */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {writtenTestimonials.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              tabIndex={0}
              className="group flex h-full flex-col rounded-2xl border border-[#262626] bg-[#1a1a1a] p-6 transition-colors duration-300 hover:border-[#FF8A00]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
            >
              <div className="flex items-start justify-between">
                <StarRating rating={t.rating} />
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="h-6 w-6 text-[#FF8A00]/15 transition-colors duration-300 group-hover:text-[#FF8A00]/30"
                />
              </div>

              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-white">
                "{t.quote}"
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-[#262626] pt-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF8A00]/10 font-body text-xs font-semibold text-[#FF8A00]">
                  {getInitials(t.name)}
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold text-white">
                    {t.name}
                  </p>
                  <p className="mt-0.5 font-body text-xs text-[#A3A3A3]">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}