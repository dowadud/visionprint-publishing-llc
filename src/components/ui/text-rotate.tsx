"use client"

import { useEffect, useState, useCallback } from "react"
import { AnimatePresence, motion, type Transition } from "framer-motion"

interface TextRotateProps {
  texts: string[]
  rotationInterval?: number
  staggerDuration?: number
  staggerFrom?: "first" | "last" | "center" | "random"
  transition?: Transition
  mainClassName?: string
  elementLevelClassName?: string
  splitBy?: "chars" | "words"
}

function deterministicDelay(seed: string, i: number, total: number, staggerDuration: number): number {
  let hash = 0
  for (let n = 0; n < seed.length; n += 1) hash = (hash * 31 + seed.charCodeAt(n)) % 997
  return (((hash + i * 37) % Math.max(total, 1)) / Math.max(total, 1)) * staggerDuration * total
}

export function TextRotate({
  texts,
  rotationInterval = 3000,
  staggerDuration = 0.03,
  staggerFrom = "first",
  transition,
  mainClassName,
  elementLevelClassName,
  splitBy = "chars",
}: TextRotateProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % texts.length)
  }, [texts.length])

  useEffect(() => {
    const interval = setInterval(next, rotationInterval)
    return () => clearInterval(interval)
  }, [rotationInterval, next])

  const currentText = texts[currentIndex]
  const units = splitBy === "chars" ? currentText.split("") : currentText.split(" ")

  function getDelay(i: number, total: number): number {
    if (staggerFrom === "first") return i * staggerDuration
    if (staggerFrom === "last") return (total - 1 - i) * staggerDuration
    if (staggerFrom === "center") {
      const center = (total - 1) / 2
      return Math.abs(i - center) * staggerDuration
    }
    return deterministicDelay(currentText, i, total, staggerDuration)
  }

  return (
    <span className={mainClassName}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={currentIndex} className="inline-flex" aria-label={currentText}>
          {units.map((unit, i) => (
            <motion.span
              key={i}
              className={elementLevelClassName}
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ ...transition, delay: getDelay(i, units.length) }}
            >
              {unit === " " ? " " : unit}
              {splitBy === "words" && i < units.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
