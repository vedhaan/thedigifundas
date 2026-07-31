"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faPaperPlane, faBookmark } from "@fortawesome/free-solid-svg-icons";

const bursts = [
  { icon: faHeart, color: "#FF8A00", startX: 60, delay: 0, duration: 3.2 },
  { icon: faHeart, color: "#FFB347", startX: 40, delay: 1.1, duration: 2.8 },
  { icon: faComment, color: "#FF8A00", startX: 70, delay: 2, duration: 3 },
  { icon: faHeart, color: "#FFB347", startX: 50, delay: 0.6, duration: 3.4 },
];

export default function NetworkScene() {
  return (
    <div className="relative flex h-[380px] items-center justify-center sm:h-[440px] lg:h-[480px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-secondary/10 blur-[110px]" />

      <div className="relative z-10" style={{ perspective: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover="hover"
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="group relative w-[220px] cursor-pointer sm:w-[250px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Flip + pop sequence, driven together */}
          <motion.div
            variants={{
              hover: {
                rotateY: 360,
                rotateZ: 0,
                scale: [1, 1, 1.06, 1],
                transition: {
                  rotateY: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
                  rotateZ: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
                  scale: { duration: 0.85, times: [0, 0.7, 0.85, 1], ease: "easeOut" },
                },
              },
            }}
            initial={{ rotateZ: -3, rotateY: 0, scale: 1 }}
            className="relative overflow-hidden rounded-[2.2rem] border-[6px] border-bg-secondary bg-bg-primary shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-bg-secondary" />

            <div className="overflow-hidden rounded-[1.7rem]">
              <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
                <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary" />
                <div className="h-2 w-16 rounded-full bg-white/10" />
              </div>

              <div className="relative aspect-square w-full bg-gradient-to-br from-accent-primary/30 via-bg-secondary to-accent-secondary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FontAwesomeIcon icon={faHeart} className="h-10 w-10 text-white/10" />
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <div className="flex items-center gap-3 text-text-primary">
                  <FontAwesomeIcon icon={faHeart} className="h-4 w-4" style={{ color: "#FF8A00" }} />
                  <FontAwesomeIcon icon={faComment} className="h-4 w-4" />
                  <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
                </div>
                <FontAwesomeIcon icon={faBookmark} className="h-4 w-4 text-text-primary" />
              </div>

              <div className="px-3 pb-3">
                <span className="font-heading text-xs font-bold text-text-primary">12,438 likes</span>
              </div>
            </div>

            {/* diagonal shine — top-left to bottom-right, sized larger than the card so the diagonal sweep fully clears it */}
            <motion.div
              variants={{
                hover: {
                  x: ["-120%", "120%"],
                  y: ["-120%", "120%"],
                },
              }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="pointer-events-none absolute -inset-1/2 z-20"
              style={{
                width: "60%",
                height: "220%",
                rotate: "35deg",
                background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.4) 55%, transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {bursts.map((burst, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0, x: `${burst.startX}%`, scale: 0.6 }}
          animate={{ opacity: [0, 1, 1, 0], y: -220, scale: [0.6, 1, 1, 0.8] }}
          transition={{
            duration: burst.duration,
            repeat: Infinity,
            delay: burst.delay,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute bottom-1/3 z-20"
          style={{ left: 0 }}
        >
          <FontAwesomeIcon icon={burst.icon} className="h-6 w-6 drop-shadow-lg" style={{ color: burst.color }} />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.4 },
          x: { duration: 0.6, delay: 0.4 },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute right-2 top-8 z-20 rounded-2xl border border-white/10 bg-bg-secondary/90 px-4 py-3 shadow-xl backdrop-blur-md sm:right-6"
      >
        <div className="font-heading text-lg font-bold text-text-primary">+2.5K</div>
        <div className="font-body text-[10px] text-text-secondary">Reach today</div>
      </motion.div>
    </div>
  );
}