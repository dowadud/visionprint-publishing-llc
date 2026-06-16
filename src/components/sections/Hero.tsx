"use client"

import { motion, LayoutGroup } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"

const COMPANY = "VISIONPRINT PUBLISHING"

const floatingImages = [
  {
    url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
    alt: "Shelf of published books",
    className: "top-[12%] left-[2%] md:top-[20%] md:left-[4%] w-20 h-14 sm:w-28 sm:h-20 md:w-36 md:h-24 lg:w-40 lg:h-28 -rotate-[4deg]",
    delay: 0.4,
  },
  {
    url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
    alt: "Hardcover book",
    className: "top-[0%] left-[8%] md:top-[5%] md:left-[10%] w-36 h-28 sm:w-44 sm:h-32 md:w-52 md:h-40 lg:w-60 lg:h-44 -rotate-12",
    delay: 0.6,
  },
  {
    url: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=800&auto=format&fit=crop",
    alt: "Stack of books",
    className: "top-[82%] left-[4%] md:top-[72%] md:left-[6%] w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 -rotate-[5deg]",
    delay: 0.8,
  },
  {
    url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
    alt: "Open book on a desk",
    className: "top-[0%] left-[84%] md:top-[3%] md:left-[80%] w-36 h-32 sm:w-44 sm:h-40 md:w-56 md:h-48 rotate-[7deg]",
    delay: 1.0,
  },
  {
    url: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
    alt: "Writing desk with manuscript",
    className: "top-[72%] left-[80%] md:top-[62%] md:left-[80%] w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rotate-[18deg]",
    delay: 1.2,
  },
]

const rotatingWords = [
  "Published.",
  "Bestselling.",
  "Legendary.",
  "Celebrated.",
  "Timeless.",
  "Unforgettable.",
  "Powerful.",
]

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-[120px]" />
      </div>

      {/* Floating book images */}
      {floatingImages.map((img) => (
        <motion.div
          key={img.alt}
          className={`absolute ${img.className} pointer-events-none`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: img.delay, duration: 0.7, ease: "easeOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.url}
            alt={img.alt}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </motion.div>
      ))}

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
        <motion.p
          className="text-[#c9a84c] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {COMPANY}
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Your Story Deserves to Be
        </motion.h1>

        <LayoutGroup>
          <motion.div
            layout
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <TextRotate
              texts={rotatingWords}
              mainClassName="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#c9a84c] overflow-hidden pb-2 leading-[1.05] tracking-tight italic"
              staggerDuration={0.03}
              staggerFrom="last"
              rotationInterval={2800}
              transition={{ type: "spring", damping: 28, stiffness: 380 }}
            />
          </motion.div>
        </LayoutGroup>

        <motion.p
          className="text-[#888] text-base sm:text-lg md:text-xl max-w-xl mt-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          From first draft to global shelves — we handle everything so your manuscript becomes the book it was always meant to be.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a0a0a] font-semibold px-8 py-4 rounded-full text-sm sm:text-base hover:bg-[#e8c97a] transition-colors duration-200 shadow-lg shadow-[#c9a84c]/20"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            Start Your Publishing Journey
          </motion.a>
          <motion.a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-[#2a2a2a] text-[#f5f0e8] font-semibold px-8 py-4 rounded-full text-sm sm:text-base hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            View Services
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-[#c9a84c]/60 to-transparent mx-auto"
            animate={{ scaleY: [1, 0.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
