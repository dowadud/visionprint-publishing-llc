"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"

const services = [
  {
    icon: "✍️",
    title: "Book Writing",
    description:
      "Professional ghostwriters who capture your authentic voice and transform your ideas into a compelling manuscript.",
    tag: "Most Popular",
  },
  {
    icon: "📖",
    title: "Book Publishing",
    description:
      "Seamless publishing across all major platforms — Amazon, Barnes & Noble, Apple Books, and 40+ global distributors.",
  },
  {
    icon: "📣",
    title: "Book Marketing",
    description:
      "Strategic campaigns that get your book noticed. Launch plans, ARC distribution, review generation, and ad management.",
    tag: "High Demand",
  },
  {
    icon: "🎙️",
    title: "Audiobook Production",
    description:
      "Professional narration and studio-quality production that brings your story to life for a growing audience of listeners.",
  },
  {
    icon: "✅",
    title: "Book Editing",
    description:
      "Meticulous developmental, copy, and line editing that elevates your manuscript without losing your unique voice.",
  },
  {
    icon: "🖨️",
    title: "Book Printing",
    description:
      "Premium quality printing for physical copies — hardcover, paperback, and large print, with worldwide fulfillment.",
  },
  {
    icon: "🎨",
    title: "Book Design",
    description:
      "Award-worthy cover and interior design that captures the essence of your story and commands attention on any shelf.",
  },
  {
    icon: "🖌️",
    title: "Illustration",
    description:
      "Custom artwork for children's books, graphic novels, and chapter illustrations that bring your vision to life.",
  },
  {
    icon: "📝",
    title: "Article Writing",
    description:
      "Compelling content and thought leadership pieces that position you as an authority in your genre or niche.",
  },
  {
    icon: "💻",
    title: "Web Content Writing",
    description:
      "Engaging copy for your author website, landing pages, and email sequences that convert visitors into readers.",
  },
  {
    icon: "🎬",
    title: "Book Video Trailer",
    description:
      "Cinematic book trailers that showcase your story's world and drive pre-orders across social media platforms.",
  },
  {
    icon: "🌐",
    title: "Web Design & SEO",
    description:
      "A powerful digital presence built to rank, convert, and grow your author platform and book sales organically.",
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] mb-5">
            Every Service Your Book Needs
          </h2>
          <p className="text-[#888] text-lg max-w-2xl mx-auto">
            From the first word to the final sale — we&apos;re the only publishing partner you&apos;ll ever need.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#c9a84c]/40 hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer"
            >
              {service.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold bg-[#c9a84c]/15 text-[#c9a84c] px-2 py-1 rounded-full tracking-wide">
                  {service.tag}
                </span>
              )}
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="font-display text-lg text-[#f5f0e8] mb-2 group-hover:text-[#c9a84c] transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">{service.description}</p>
              <div className="mt-5 flex items-center gap-1.5 text-[#c9a84c] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
