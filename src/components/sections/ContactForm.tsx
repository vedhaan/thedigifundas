"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck, faClock, faUserGroup, faRocket, faUser, faEnvelope,
    faPhone, faBuilding, faComment, faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const services = ["Digital Marketing", "Brand Identity & Design", "Content Creation", "Website Development", "AI Solutions", "Not Sure Yet"];
const budgetRanges = ["Under ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000+", "Prefer Not To Say"];
const steps = [
    { icon: faCheck, title: "We review your details", description: "Our team looks at your goals and requirements within 24 hours." },
    { icon: faUserGroup, title: "We schedule a call", description: "A short consultation to understand your business and challenges in more depth." },
    { icon: faRocket, title: "We propose a plan", description: "A tailored approach and next steps, specific to your business." },
];

type Status = "idle" | "submitting" | "success" | "error";

function IconInput({
    id, name, type = "text", label, icon, required = false,
}: { id: string; name: string; type?: string; label: string; icon: typeof faUser; required?: boolean }) {
    return (
        <div className="group relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary transition-colors group-focus-within:text-accent-primary">
                <FontAwesomeIcon icon={icon} className="h-4 w-4" />
            </span>
            <input
                id={id} name={name} type={type} required={required} placeholder=" "
                className="peer w-full rounded-xl border border-border bg-bg-secondary py-3.5 pl-11 pr-4 font-body text-text-primary outline-none transition-all duration-200 focus:border-accent-primary focus:shadow-[0_0_0_3px_rgba(255,138,0,0.1)]"
            />
            <label htmlFor={id} className="pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 font-body text-text-secondary transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:translate-y-0 peer-focus:rounded bg-bg-secondary peer-focus:bg-bg-secondary peer-focus:px-1.5 peer-focus:text-xs peer-focus:text-accent-primary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:rounded peer-[:not(:placeholder-shown)]:bg-bg-secondary peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:text-xs">
                {label}
            </label>
        </div>
    );
}

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");
        const form = e.currentTarget;
        const data = new FormData(form);
        try {
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST", body: data, headers: { Accept: "application/json" },
            });
            if (response.ok) { setStatus("success"); form.reset(); } else { setStatus("error"); }
        } catch { setStatus("error"); }
    }

    return (
        <Section id="contact-form" bgSecondary className="relative overflow-hidden">
            {/* richer layered background: mesh wash + drifting blobs */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-70"
                    style={{
                        background:
                            "radial-gradient(ellipse 55% 45% at 15% 15%, color-mix(in srgb, var(--color-accent-primary) 10%, transparent), transparent 60%), radial-gradient(ellipse 50% 55% at 90% 85%, color-mix(in srgb, var(--color-accent-secondary) 9%, transparent), transparent 65%)",
                    }}
                />
                <motion.div animate={{ x: [0, 50, -20, 0], y: [0, -30, 20, 0] }} transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-accent-primary/[0.07] blur-[150px]" />
                <motion.div animate={{ x: [0, -40, 30, 0], y: [0, 40, -20, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent-secondary/[0.06] blur-[140px]" />
            </div>

            <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    {/* Left: sticky trust panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-between"
                    >
                        <div>
                            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">Get Started</span>
                            <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                                Tell Us About <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Your Project</span>
                            </h2>
                            <p className="mt-4 font-body text-text-secondary sm:text-lg">
                                Fill out the form and our team will get in touch to understand your requirements and discuss the next steps.
                            </p>

                            <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8">
                                {steps.map((step) => (
                                    <div key={step.title} className="group flex gap-4">
                                        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 text-accent-primary transition-transform duration-300 group-hover:scale-110">
                                            <FontAwesomeIcon icon={step.icon} className="h-4 w-4" />
                                        </span>
                                        <div>
                                            <h3 className="font-heading text-sm font-bold text-text-primary">{step.title}</h3>
                                            <p className="mt-1 font-body text-sm text-text-secondary">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/[0.06] to-transparent px-5 py-4">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                                <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                            </span>
                            <span className="font-body text-sm text-text-secondary">We typically respond within <span className="font-semibold text-text-primary">24 hours</span>.</span>
                        </div>
                    </motion.div>

                    {/* Right: form, gradient-border card */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="relative rounded-3xl p-[1px]" style={{ background: "linear-gradient(135deg, var(--color-border), var(--color-border))" }}>
                        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-primary/40 via-transparent to-accent-secondary/40 opacity-50" />
                        <div className="relative rounded-3xl bg-bg-primary/80 p-8 backdrop-blur-xl sm:p-10">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
                                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }} className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-[0_0_40px_rgba(255,138,0,0.4)]">
                                            <FontAwesomeIcon icon={faCircleCheck} className="h-9 w-9" />
                                        </motion.span>
                                        <h3 className="mt-6 font-heading text-2xl font-bold text-text-primary">Message Sent</h3>
                                        <p className="mt-2 max-w-sm font-body text-text-secondary">We&apos;ve received your details and will be in touch within 24 hours.</p>
                                        <button onClick={() => setStatus("idle")} className="mt-6 font-heading text-sm font-semibold text-accent-primary hover:text-accent-secondary">Send another message</button>
                                    </motion.div>
                                ) : (
                                    <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-8">
                                        <div>
                                            <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-secondary">Your Details</span>
                                            <div className="mt-4 grid gap-5 sm:grid-cols-2">
                                                <IconInput id="name" name="name" label="Full Name" icon={faUser} required />
                                                <IconInput id="email" name="email" type="email" label="Email Address" icon={faEnvelope} required />
                                                <IconInput id="phone" name="phone" type="tel" label="Phone Number" icon={faPhone} required />
                                                <IconInput id="company" name="company" label="Company Name" icon={faBuilding} />
                                            </div>
                                        </div>

                                        <div>
                                            <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-secondary">Project Details</span>
                                            <div className="mt-4 flex flex-col gap-5">
                                                <div className="grid gap-5 sm:grid-cols-2">
                                                    <select id="service" name="service" required defaultValue="" className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3.5 font-body text-text-primary outline-none transition-all focus:border-accent-primary focus:shadow-[0_0_0_3px_rgba(255,138,0,0.1)]">
                                                        <option value="" disabled>Service Interested In</option>
                                                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                                                    </select>
                                                    <select id="budget" name="budget" defaultValue="" className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3.5 font-body text-text-primary outline-none transition-all focus:border-accent-primary focus:shadow-[0_0_0_3px_rgba(255,138,0,0.1)]">
                                                        <option value="" disabled>Monthly Marketing Budget</option>
                                                        {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                                                    </select>
                                                </div>

                                                <div className="group relative">
                                                    <span className="pointer-events-none absolute left-4 top-4 text-text-secondary transition-colors group-focus-within:text-accent-primary">
                                                        <FontAwesomeIcon icon={faComment} className="h-4 w-4" />
                                                    </span>
                                                    <textarea id="details" name="details" rows={5} required placeholder=" " className="peer w-full rounded-xl border border-border bg-bg-secondary py-3.5 pl-11 pr-4 font-body text-text-primary outline-none transition-all focus:border-accent-primary focus:shadow-[0_0_0_3px_rgba(255,138,0,0.1)]" />
                                                    <label htmlFor="details" className="pointer-events-none absolute left-11 top-4 font-body text-text-secondary transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:rounded peer-focus:bg-bg-secondary peer-focus:px-1.5 peer-focus:text-xs peer-focus:text-accent-primary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:rounded peer-[:not(:placeholder-shown)]:bg-bg-secondary peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:text-xs">
                                                        Tell us about your goals, timeline, and project details
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <button type="submit" disabled={status === "submitting"} className="group relative w-full overflow-hidden rounded-full bg-accent-primary px-8 py-4 font-heading text-base font-semibold text-bg-primary transition-all hover:shadow-[0_10px_30px_-8px_rgba(255,138,0,0.5)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                                                <span className="relative">{status === "submitting" ? "Sending..." : "Schedule A Consultation"}</span>
                                            </button>
                                            {status === "error" && <p className="mt-4 font-body text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>}
                                        </div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}