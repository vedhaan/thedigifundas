"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const faqs = [
    {
        question: "Do you offer customized service packages?",
        answer:
            "Yes. Every business has different requirements, and our solutions are tailored accordingly.",
    },
    {
        question: "Can I hire The Digi Fundas for a single service?",
        answer:
            "Absolutely. You can engage us for individual services or comprehensive growth solutions.",
    },
    {
        question: "Do you work with startups?",
        answer: "Yes. We work with startups, small businesses, and established brands.",
    },
    {
        question: "How do I get started?",
        answer:
            "Simply schedule a consultation, and we'll discuss your goals and recommend the most suitable approach.",
    },
];

// decorative floating conversation-themed shapes, desktop only
const floatingElements = [
    { icon: faComment, top: "6%", left: "4%", size: "h-16 w-16", duration: 5, delay: 0, color: "primary" },
    { icon: faCommentDots, top: "26%", left: "10%", size: "h-11 w-11", duration: 6, delay: 0.5, color: "secondary" },
    { icon: faComment, top: "50%", left: "2%", size: "h-20 w-20", duration: 4.5, delay: 1, color: "primary" },
    { icon: faCommentDots, top: "74%", left: "8%", size: "h-12 w-12", duration: 5.5, delay: 1.5, color: "secondary" },
    { icon: faComment, top: "90%", left: "14%", size: "h-9 w-9", duration: 5, delay: 2, color: "primary" },
    { icon: faComment, top: "10%", right: "4%", size: "h-18 w-18", duration: 5.2, delay: 0.3, color: "secondary" },
    { icon: faCommentDots, top: "34%", right: "10%", size: "h-12 w-12", duration: 6.2, delay: 0.8, color: "primary" },
    { icon: faComment, top: "58%", right: "2%", size: "h-16 w-16", duration: 4.8, delay: 1.3, color: "secondary" },
    { icon: faCommentDots, top: "80%", right: "12%", size: "h-14 w-14", duration: 5.8, delay: 1.8, color: "primary" },
    { icon: faComment, top: "94%", right: "6%", size: "h-10 w-10", duration: 5.4, delay: 2.2, color: "secondary" },
];

export default function FAQ() {
    return (
        <Section id="faq" bgSecondary className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent-primary/[0.06] blur-[140px]" />
                <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[130px]" />
            </div>

            {/* floating conversation-themed shapes — fill the side margins, desktop only */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
                {floatingElements.map((el, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        style={{ position: "absolute", top: el.top, left: el.left, right: el.right }}
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
                            transition={{
                                duration: el.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: el.delay,
                            }}
                        >
                            <FontAwesomeIcon
                                icon={el.icon}
                                className={`${el.size} ${el.color === "primary" ? "text-accent-primary/25" : "text-accent-secondary/25"
                                    }`}
                            />
                        </motion.div>
                    </motion.div>
                ))}
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
                        FAQs
                    </span>
                    <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                        Frequently Asked{" "}
                        <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                </motion.div>

                <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-8">
                    {faqs.map((faq, i) => (
                        <div key={i} className="flex flex-col gap-3">
                            {/* Question — visitor, right-aligned */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex items-end justify-end gap-3"
                            >
                                <div className="max-w-[80%] rounded-2xl rounded-br-sm border border-border bg-bg-primary px-5 py-3.5">
                                    <p className="font-body text-sm text-text-primary sm:text-base">
                                        {faq.question}
                                    </p>
                                </div>
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-bg-primary text-text-secondary">
                                    <FontAwesomeIcon icon={faUser} className="h-3.5 w-3.5" />
                                </span>
                            </motion.div>

                            {/* Answer — The Digi Fundas, left-aligned */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.4, delay: i * 0.1 + 0.25 }}
                                className="flex items-end gap-3"
                            >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary font-heading text-xs font-bold text-bg-primary">
                                    DF
                                </span>
                                <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-gradient-to-br from-accent-primary to-accent-secondary px-5 py-3.5">
                                    <p className="font-body text-sm font-medium text-bg-primary sm:text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}