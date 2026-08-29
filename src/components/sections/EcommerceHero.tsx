"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartShopping,
  faBagShopping,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function EcommerceHero() {
  const [cartCount, setCartCount] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <section
      style={{ overflowX: "hidden", position: "relative", width: "100%" }}
      className="bg-bg-primary py-16 sm:py-20 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(255,138,0,0.10) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,179,71,0.08) 0%, transparent 50%), linear-gradient(180deg, #0D0D0D 0%, #141414 55%, #0D0D0D 100%)",
          }}
        />
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-primary/[0.06] blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-secondary/[0.05] blur-[140px]" />
      </div>

      <Container className="relative !max-w-[1280px] 2xl:!max-w-[1600px]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-primary">
              Ecommerce Website Development Services
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[3.1rem]">
              Ecommerce Websites Designed To{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Convert Visitors Into Customers
              </span>
            </h1>

            <div className="mt-6 space-y-4 font-body text-base text-text-secondary sm:text-lg">
              <p>
                At The Digi Fundas, we design and develop ecommerce websites
                that combine aesthetics, functionality, speed, and
                conversion-focused user experiences to help businesses grow
                online.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Book A Consultation
              </Button>
              <Button href="/work" variant="secondary">
                View Ecommerce Projects
              </Button>
            </div>
          </motion.div>

          {/* live product card mockup — the actual product of ecommerce dev */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: "440px" }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-[110px]" />

            <div
              style={{ position: "relative", width: "100%", maxWidth: "100%", overflow: "hidden", boxSizing: "border-box" }}
              className="rounded-2xl border border-border bg-bg-secondary shadow-2xl"
            >
              {/* storefront header bar with live cart */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Your Store
                </span>
                <div className="relative flex items-center gap-2 rounded-full border border-border bg-bg-primary px-3 py-1.5">
                  <FontAwesomeIcon icon={faCartShopping} className="h-3.5 w-3.5 text-accent-primary" />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={cartCount}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="font-body text-xs font-semibold text-text-primary"
                    >
                      {cartCount}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }} className="p-5 sm:p-6">
                {/* product image placeholder */}
                <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-bg-primary sm:h-48">
                  <FontAwesomeIcon icon={faBagShopping} className="h-12 w-12 text-accent-primary/20" />
                  <span className="absolute left-3 top-3 rounded-full bg-accent-primary px-2.5 py-1 font-heading text-[10px] font-bold text-bg-primary">
                    New
                  </span>
                </div>

                {/* product info */}
                <div className="mt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="h-3 w-3 text-accent-primary" />
                    ))}
                    <span className="ml-1 font-body text-[11px] text-text-secondary">(128)</span>
                  </div>
                  <h3 className="mt-2 font-heading text-base font-bold text-text-primary sm:text-lg">
                    Signature Product Name
                  </h3>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-heading text-xl font-bold text-accent-primary sm:text-2xl">
                      ₹2,499
                    </span>
                    <span className="font-body text-sm text-text-secondary line-through">
                      ₹3,199
                    </span>
                  </div>
                </div>

                {/* add to cart — real interaction */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  style={{ width: "100%", boxSizing: "border-box" }}
                  className="group relative mt-5 flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3.5 font-heading text-sm font-semibold text-bg-primary transition-transform duration-200 active:scale-[0.98]"
                >
                  <AnimatePresence mode="wait">
                    {justAdded ? (
                      <motion.span
                        key="added"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <FontAwesomeIcon icon={faCheck} className="h-3.5 w-3.5" />
                        Added To Cart
                      </motion.span>
                    ) : (
                      <motion.span
                        key="add"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <FontAwesomeIcon icon={faCartShopping} className="h-3.5 w-3.5" />
                        Add To Cart
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}