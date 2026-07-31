"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faPalette, faCode, faRobot, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const serviceCategories = [
    {
        icon: faBullhorn,
        title: "Digital Marketing",
        tagline: "Reach the right audience and turn attention into measurable growth.",
        items: ["Social Media Marketing", "Meta Ads", "Google Ads", "Email Marketing", "Content Marketing"],
        size: "lg" as const,
    },
    {
        icon: faPalette,
        title: "Design & Branding",
        items: ["Logo Design", "Company Profiles", "Catalogues & Brochures", "Branding Assets"],
        size: "sm" as const,
    },
    {
        icon: faCode,
        title: "Website Development",
        items: ["Ecommerce Websites", "Business Websites", "Landing Pages"],
        size: "sm" as const,
    },
    {
        icon: faRobot,
        title: "AI Solutions",
        tagline: "Automate the repetitive work so your team can focus on growth.",
        items: ["AI Automation", "Marketing Automation", "Business Productivity Solutions"],
        size: "lg" as const,
    },
];

export default function ServicesWeHelpWith() {
    return (
        <Section id="services-help" className="relative overflow-hidden">
            {/* layered mesh background — distinct from ContactForm above, more subtle */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-50"
                    style={{
                        background:
                            "radial-gradient(ellipse 50% 40% at 20% 10%, color-mix(in srgb, var(--color-accent-primary) 8%, transparent), transparent 60%), radial-gradient(ellipse 45% 50% at 85% 90%, color-mix(in srgb, var(--color-accent-secondary) 7%, transparent), transparent 65%)",
                    }}
                />
            </div>

            <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
                        What We Offer
                    </span>
                    <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                        Services We Can{" "}
                        <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                            Help You With
                        </span>
                    </h2>
                </motion.div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2">
                    {serviceCategories.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-20px_rgba(255,138,0,0.25)] ${category.size === "lg" ? "sm:col-span-2" : ""
                                }`}
                            style={{ background: "linear-gradient(var(--color-border), var(--color-border))" }}
                        >
                            {/* gradient border reveal on hover */}
                            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-primary to-accent-secondary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className={`relative h-full rounded-3xl bg-bg-secondary/80 backdrop-blur-xl ${category.size === "lg" ? "p-8 sm:p-10" : "p-8"}`}>
                                {/* oversized index letter, background texture */}
                                <span className="pointer-events-none absolute -right-2 -top-6 select-none font-heading text-[7rem] font-bold leading-none text-text-secondary/[0.04] transition-colors duration-500 group-hover:text-accent-primary/[0.08] sm:text-[9rem]">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <div className="relative">
                                    {category.size === "lg" ? (
                                        // Large cards: two-column internal split, left = icon/title/tagline, right = tags in a contained block
                                        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                                            <div>
                                                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg shadow-accent-primary/20">
                                                    <FontAwesomeIcon icon={category.icon} className="h-5 w-5" />
                                                </span>
                                                <h3 className="mt-6 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                                                    {category.title}
                                                </h3>
                                                {category.tagline && (
                                                    <p className="mt-3 max-w-sm font-body text-sm text-text-secondary sm:text-base">
                                                        {category.tagline}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap content-start gap-2.5 lg:border-l lg:border-white/10 lg:pl-8">
                                                {category.items.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 font-body text-sm font-medium text-text-secondary transition-colors duration-300 group-hover:border-accent-primary/30 group-hover:text-text-primary"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        // Small cards: unchanged single-column layout
                                        <>
                                            <div className="flex items-start justify-between">
                                                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-lg shadow-accent-primary/20">
                                                    <FontAwesomeIcon icon={category.icon} className="h-5 w-5" />
                                                </span>
                                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:border-accent-primary group-hover:text-accent-primary sm:-translate-x-2">
                                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3.5 w-3.5" />
                                                </span>
                                            </div>

                                            <h3 className="mt-6 font-heading text-xl font-bold text-text-primary">
                                                {category.title}
                                            </h3>

                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {category.items.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-body text-xs font-medium text-text-secondary transition-colors duration-300 group-hover:border-accent-primary/30 group-hover:text-text-primary sm:text-sm"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}