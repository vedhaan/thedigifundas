"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const panels = [
    { top: "8%", left: "10%", width: "220px", height: "140px", rotate: -6, delay: 0, duration: 5 },
    { top: "38%", left: "42%", width: "180px", height: "180px", rotate: 4, delay: 0.4, duration: 6 },
    { top: "18%", left: "58%", width: "160px", height: "110px", rotate: 8, delay: 0.8, duration: 4.5 },
    { top: "62%", left: "18%", width: "150px", height: "150px", rotate: -3, delay: 1.2, duration: 5.5 },
];

export default function ServicesHero() {
    return (
        <section className="relative overflow-hidden bg-bg-primary py-16 sm:py-20 lg:py-20">
            <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left: copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
                            Our Services
                        </span>
                        <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.25rem]">
                            Solutions Designed To Help{" "}
                            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                                Businesses Grow
                            </span>{" "}
                            With Confidence
                        </h1>

                        <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
                            <p>
                                Every business has unique goals, challenges, and opportunities.
                                At The Digi Fundas, we offer integrated solutions across
                                marketing, design, content creation, website development, and
                                AI automation to help businesses strengthen their brand
                                presence, improve visibility, and achieve measurable growth.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button href="/contact" variant="primary">
                                View Services
                            </Button>
                            <Button href="/work" variant="secondary">
                                Book a Strategy Call
                            </Button>
                        </div>

                    </motion.div>

                    {/* Right: floating glass panel illusion */}
                    <div className="relative hidden h-[420px] lg:block xl:h-[480px]">
                        {/* ambient glow behind the panels for depth */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10 blur-[100px]" />

                        {panels.map((panel, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: [0, -14, 0],
                                }}
                                transition={{
                                    opacity: { duration: 0.6, delay: i * 0.15 },
                                    scale: { duration: 0.6, delay: i * 0.15 },
                                    y: {
                                        duration: panel.duration,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: panel.delay,
                                    },
                                }}
                                style={{
                                    position: "absolute",
                                    top: panel.top,
                                    left: panel.left,
                                    width: panel.width,
                                    height: panel.height,
                                    rotate: `${panel.rotate}deg`,
                                }}
                                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl"
                            >
                                {/* inner gradient sheen for glass effect */}
                                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile fallback — simple static gradient panel instead of the floating illusion */}
                    <div className="relative h-56 overflow-hidden rounded-3xl border border-border lg:hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-bg-secondary to-accent-secondary/10" />
                    </div>
                </div>
            </Container>
        </section>
    );
}