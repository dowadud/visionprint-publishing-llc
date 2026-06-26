"use client"

import { motion } from "framer-motion"

const COMPANY = "VISIONPRINT PUBLISHING"

export function Cta() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-36 px-6 lg:px-8 relative overflow-hidden border-t border-[#2a2a2a]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c9a84c]/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {COMPANY}
        </motion.p>

        <motion.h2
          className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#f5f0e8] leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Your Manuscript Is a{" "}
          <span className="text-[#c9a84c] italic">Dragon-Slaying Sword.</span>
        </motion.h2>

        <motion.p
          className="text-[#888] text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Stop leaving it in the scabbard. Every day it sits unpublished is a day readers miss the story
          they needed. Take command of your legacy — your free consultation is one click away.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="tel:+18004845485"
            className="inline-flex items-center justify-center gap-2.5 bg-[#c9a84c] text-[#0a0a0a] font-bold px-10 py-5 rounded-full text-base hover:bg-[#e8c97a] transition-colors duration-200 shadow-lg shadow-[#c9a84c]/25"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call for Free Consultation
          </motion.a>
          <motion.a
            href="mailto:support@visionprintpublishingllc.com"
            className="inline-flex items-center justify-center gap-2.5 border border-[#c9a84c]/40 text-[#c9a84c] font-bold px-10 py-5 rounded-full text-base hover:border-[#c9a84c] hover:bg-[#c9a84c]/5 transition-all duration-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            Email Us
          </motion.a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 text-[#555] text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {["100% Rights Retained", "No Hidden Fees", "Dedicated Project Manager", "Money-Back Guarantee"].map(
            (item) => (
              <span key={item} className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
