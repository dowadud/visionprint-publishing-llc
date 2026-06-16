"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 4800, suffix: "+", label: "Books Published" },
  { value: 97, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Years in Publishing" },
  { value: 320, suffix: "+", label: "Bestseller Launches" },
]

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1800
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="stats" className="py-20 lg:py-28 px-6 lg:px-8 border-y border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-center text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Forged in the Fires of Victory
        </motion.p>
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#2a2a2a]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center lg:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#c9a84c] font-bold mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
              </p>
              <p className="text-[#666] text-sm tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
