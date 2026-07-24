"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { navLinks, services } from "@/lib/constants/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Transparent only makes sense on home page, at the top, over Hero.
    const isTransparent = isHome && !scrolled;

    useEffect(() => {
        // lock body scroll when mobile panel is open
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isTransparent
                    ? "bg-transparent border-b border-transparent"
                    : "bg-bg-primary border-b border-border"
                    }`}
            >
                <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
                    <nav className="flex items-center justify-between py-4">
                        <Link href="/" className="relative h-11 w-30 shrink-0">
                            <Image
                                src="/icon.png"
                                alt="The Digi Fundas"
                                fill
                                sizes="260px"
                                className="object-contain object-left"
                                priority
                            />
                        </Link>

                        {/* Desktop links */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) =>
                                link.label === "Home" ? null : (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="font-heading text-sm font-semibold text-text-primary hover:text-accent-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}

                            {/* Services mega menu trigger */}
                            <div className="group relative">
                                <button className="flex items-center gap-1 font-heading text-sm font-semibold text-text-primary hover:text-accent-primary transition-colors">
                                    Services
                                    <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                                </button>

                                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                                    <div className="rounded-2xl border border-border bg-bg-secondary p-6 shadow-xl w-[480px]">
                                        <Link
                                            href="/services"
                                            className="mb-2 block rounded-lg border-b border-border px-4 pb-4 pt-1 font-heading text-sm font-bold text-accent-primary hover:text-accent-secondary transition-colors"
                                        >
                                            All Services →
                                        </Link>
                                        <div className="grid grid-cols-2 gap-2">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.href}
                                                    href={service.href}
                                                    className="rounded-lg px-4 py-3 text-sm text-text-secondary hover:bg-bg-primary hover:text-accent-primary transition-colors"
                                                >
                                                    {service.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side: CTA (desktop) + hamburger (all sizes) */}
                        <div className="flex items-center gap-4">
                            <Button href="/contact" variant="primary" className="w-full hidden sm:inline-flex">
                                Contact
                            </Button>
                            <button
                                onClick={() => setMobileOpen(true)}
                                aria-label="Open menu"
                                className="text-text-primary w-full lg:hidden"
                            >
                                <Menu size={28} />
                            </button>
                        </div>
                    </nav>
                </Container>
            </header>

            {/* Mobile slide-in panel */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 z-[60] bg-black/60 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-bg-secondary border-l border-border lg:hidden"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <span className="font-heading font-semibold text-text-primary">Menu</span>
                                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                                    <X size={28} className="text-text-primary" />
                                </button>
                            </div>

                            <div className="flex flex-col p-6 gap-2 overflow-y-auto">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="py-3 font-heading text-lg font-semibold text-text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                {/* Services accordion */}
                                <div>
                                    <button
                                        onClick={() => setMobileServicesOpen((v) => !v)}
                                        className="flex w-full items-center justify-between py-3 font-heading text-lg font-semibold text-text-primary"
                                    >
                                        Services
                                        <ChevronDown
                                            size={20}
                                            className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {mobileServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden pl-4"
                                            >
                                                <Link
                                                    href="/services"
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block border-b border-border py-2 pb-3 text-sm font-bold text-accent-primary"
                                                >
                                                    All Services →
                                                </Link>
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.href}
                                                        href={service.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block py-2 text-sm text-text-secondary"
                                                    >
                                                        {service.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Button href="/contact" variant="primary" className="mt-4 w-full">
                                    Contact
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}