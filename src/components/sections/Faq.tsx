"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "Do you offer payment plans or flexible pricing?",
    a: "Yes — we offer flexible payment plans tailored to your budget. During your free consultation we'll discuss options that work for your financial situation. No hidden fees, just transparent pricing with full flexibility.",
  },
  {
    q: "How quickly can you start working on my project?",
    a: "Most projects begin within 3–5 business days of contract signing. Rush services are available for faster turnaround. We'll provide a detailed timeline during your consultation so you always know what to expect.",
  },
  {
    q: "Will I retain all rights to my work?",
    a: "Absolutely. You retain 100% ownership of your manuscript, book, and all content we create for you. We never take royalties or ongoing percentages. Your work is yours — always.",
  },
  {
    q: "What experience does your team have?",
    a: "Our team includes publishing industry veterans with decades of combined experience. We've worked with major publishers, created bestselling covers, and launched successful campaigns for hundreds of authors across every genre.",
  },
  {
    q: "How do you ensure the book sounds like me?",
    a: "Every project starts with an in-depth discovery call where our ghostwriters study your speech patterns, writing samples, and story vision. We then submit chapter drafts for your review — revisions continue until every word feels authentically yours.",
  },
  {
    q: "Which publishing platforms do you distribute to?",
    a: "We distribute to Amazon KDP, Barnes & Noble Press, Apple Books, Kobo, Google Play Books, IngramSpark (for print), and 40+ international retailers — giving your book global reach from day one.",
  },
  {
    q: "How often will I hear from you during my project?",
    a: "You'll have a dedicated project manager as your single point of contact. Expect regular updates at key milestones and responses within 24 hours on business days. We keep you informed every step of the way.",
  },
]

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#2a2a2a]">
      <button
        className="flex items-start justify-between w-full py-5 text-left gap-4"
        onClick={onToggle}
      >
        <span className="text-[#f5f0e8] font-medium text-base sm:text-lg">{q}</span>
        <motion.span
          className="shrink-0 mt-0.5 w-6 h-6 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#c9a84c]"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#888] text-sm sm:text-base leading-relaxed pb-5 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Got Questions?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
