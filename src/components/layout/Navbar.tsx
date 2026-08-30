"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { navLinks, services } from "@/lib/constants/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
    const pathname = usePathname();
    const isHome = pathname === "/";

    // split once here — this was missing from the previous message,
    // causing the ReferenceError
    const flatServices = services.filter((s) => !s.children);
    const digitalMarketingItem = services.find((s) => s.children);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isTransparent = isHome && !scrolled;

    useEffect(() => {
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
                                src="/logo.png"
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
                                    <div className="w-[560px] overflow-hidden rounded-2xl border border-border bg-bg-secondary shadow-xl">
                                        <div className="grid grid-cols-[1fr_180px]">
                                            {/* main services column */}
                                            <div className="p-6">
                                                <Link
                                                    href="/services"
                                                    className="mb-2 block rounded-lg border-b border-border px-4 pb-4 pt-1 font-heading text-sm font-bold text-accent-primary hover:text-accent-secondary transition-colors"
                                                >
                                                    All Services →
                                                </Link>
                                                <div className="grid grid-cols-2 gap-1">
                                                    {flatServices.map((service) => (
                                                        <Link
                                                            key={service.href}
                                                            href={service.href!}
                                                            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-text-secondary hover:bg-bg-primary hover:text-accent-primary transition-colors"
                                                        >
                                                            <FontAwesomeIcon icon={service.icon} className="h-3.5 w-3.5 shrink-0 opacity-60" />
                                                            {service.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Digital Marketing — distinct sidebar column */}
                                            {digitalMarketingItem?.children && (
                                                <div className="flex flex-col gap-1 border-l border-border bg-bg-primary/40 p-4">
                                                    <span className="mb-1 px-2 font-heading text-[10px] font-bold uppercase tracking-widest text-accent-primary">
                                                        Digital Marketing
                                                    </span>
                                                    {digitalMarketingItem.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="group/item flex flex-col gap-0.5 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-bg-secondary"
                                                        >
                                                            <span className="flex items-center gap-2 text-xs font-semibold text-text-primary group-hover/item:text-accent-primary">
                                                                <FontAwesomeIcon icon={child.icon} className="h-3 w-3 shrink-0" />
                                                                {child.shortLabel}
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
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
                            className="fixed right-0 top-0 z-[70] flex h-full w-[85%] max-w-sm flex-col border-l border-border bg-bg-secondary lg:hidden"
                        >
                            <div className="flex shrink-0 items-center justify-between p-6 border-b border-border">
                                <span className="font-heading font-semibold text-text-primary">Menu</span>
                                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                                    <X size={28} className="text-text-primary" />
                                </button>
                            </div>

                            <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-6">
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
                                                {flatServices.map((service) => (
                                                    <Link
                                                        key={service.href}
                                                        href={service.href!}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block py-2 text-sm text-text-secondary"
                                                    >
                                                        {service.label}
                                                    </Link>
                                                ))}

                                                {digitalMarketingItem?.children && (
                                                    <div>
                                                        <button
                                                            onClick={() =>
                                                                setMobileSubOpen((v) =>
                                                                    v === digitalMarketingItem.label ? null : digitalMarketingItem.label
                                                                )
                                                            }
                                                            className="flex w-full items-center justify-between py-2 text-sm font-semibold text-text-primary"
                                                        >
                                                            {digitalMarketingItem.label}
                                                            <ChevronDown
                                                                size={16}
                                                                className={`transition-transform ${
                                                                    mobileSubOpen === digitalMarketingItem.label ? "rotate-180" : ""
                                                                }`}
                                                            />
                                                        </button>
                                                        <AnimatePresence>
                                                            {mobileSubOpen === digitalMarketingItem.label && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="overflow-hidden pl-4"
                                                                >
                                                                    {digitalMarketingItem.children.map((child) => (
                                                                        <Link
                                                                            key={child.href}
                                                                            href={child.href}
                                                                            onClick={() => setMobileOpen(false)}
                                                                            className="block py-2 text-sm text-text-secondary"
                                                                        >
                                                                            {child.label}
                                                                        </Link>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                )}
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