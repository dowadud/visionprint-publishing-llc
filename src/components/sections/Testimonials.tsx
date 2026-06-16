"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote:
      "I needed a book as a flagship for my consultancy, not a bestseller. They asked one brilliant question: 'Who do you want this book to recruit?' That changed everything. The final product doesn't just sit on shelves — it works 24/7 as my most eloquent salesperson. Highest-ROI investment I've made.",
    name: "David Loise",
    role: "Leadership Consultant",
    genre: "Business",
  },
  {
    quote:
      "After my wife passed, I wrote to heal. I never intended to publish, but when I sent it over, they treated my raw personal story with reverence and strength. They gave my memories the dignity of a legacy. I'll be forever grateful.",
    name: "Robert Trevor",
    role: "Memoir Author",
    genre: "Memoir",
  },
  {
    quote:
      "I was a mess of Post-Its and self-doubt. My strategist became my story's guardian angel — she saw the epic in my messy draft that I couldn't. When I held the printed copy, I didn't just cry. I felt like a warrior who'd finally come home.",
    name: "Mira K.",
    role: "Debut Fantasy Author",
    genre: "Fantasy",
  },
  {
    quote:
      "The marketing team got my children's book onto the shelves of three regional chains within the first month. The cover design alone doubled my online conversion rate compared to my self-published version. Extraordinary results.",
    name: "Sandra Okafor",
    role: "Children's Book Author",
    genre: "Children's",
  },
  {
    quote:
      "Their audiobook team paired me with the perfect narrator — someone who actually read the manuscript before auditions. The final production quality rivals Big Five publishers. Pre-orders exceeded every expectation.",
    name: "James Whitfield",
    role: "Thriller Author",
    genre: "Thriller",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1)
      setIndex(next)
    },
    [index]
  )

  useEffect(() => {
    const t = setInterval(() => {
      goTo((index + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(t)
  }, [index, goTo])

  const t = testimonials[index]

  return (
    <section id="testimonials" className="py-24 lg:py-32 px-6 lg:px-8 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Voices from the Fellowship
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">
            Where Manuscripts Become Legacies
          </h2>
        </motion.div>

        <div className="relative min-h-[280px] flex flex-col items-center justify-center">
          {/* Big quote mark */}
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-display text-[120px] leading-none text-[#c9a84c]/8 select-none pointer-events-none">
            &ldquo;
          </span>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-[#c0b8a8] text-lg sm:text-xl lg:text-2xl leading-relaxed font-display italic max-w-3xl mx-auto mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[#f5f0e8] font-semibold">{t.name}</p>
                <p className="text-[#666] text-sm">{t.role}</p>
                <span className="mt-1 text-[10px] font-semibold bg-[#c9a84c]/10 text-[#c9a84c] px-2.5 py-1 rounded-full tracking-wide uppercase">
                  {t.genre}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#c9a84c] w-8" : "bg-[#2a2a2a] w-4 hover:bg-[#3a3a3a]"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
