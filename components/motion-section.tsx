"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

export function MotionSection({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26, filter: "blur(2px)" }}
whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{
        once: true,
        amount: 0.12, // ✅ стартує раніше (було ~0.25)
        margin: "0px 0px -120px 0px", // ✅ ще трохи раніше (триггер до нижнього краю)
      }}
      transition={{
        duration: 1.0, // ✅ довше і плавніше (було ~0.75)
        delay: 0.03,   // ✅ майже без паузи, щоб не було “порожнього”
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
