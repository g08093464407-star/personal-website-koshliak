"use client"

import { useEffect, useRef, useState } from "react"

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const [topOffset, setTopOffset] = useState(0)

  const rafRef = useRef<number | null>(null)
  const lastProgressRef = useRef<number>(-1)

  useEffect(() => {
    const headerEl = document.querySelector("header") as HTMLElement | null

    const measureHeader = () => {
      if (!headerEl) {
        setTopOffset(0)
        return
      }
      const rect = headerEl.getBoundingClientRect()
      setTopOffset(Math.round(rect.height))
    }

    measureHeader()

    let ro: ResizeObserver | null = null
    if (headerEl && "ResizeObserver" in window) {
      ro = new ResizeObserver(() => measureHeader())
      ro.observe(headerEl)
    } else {
      window.addEventListener("resize", measureHeader)
    }

    return () => {
      if (ro) ro.disconnect()
      else window.removeEventListener("resize", measureHeader)
    }
  }, [])

  useEffect(() => {
    const calcProgress = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY || doc.scrollTop
      const scrollHeight = doc.scrollHeight
      const clientHeight = doc.clientHeight

      const maxScroll = Math.max(1, scrollHeight - clientHeight)
      const p = clamp(scrollTop / maxScroll, 0, 1)

      const rounded = Math.round(p * 10000) / 10000
      if (rounded !== lastProgressRef.current) {
        lastProgressRef.current = rounded
        setProgress(rounded)
      }
    }

    const onScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        calcProgress()
      })
    }

    calcProgress()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      className="fixed left-0 right-0 z-[60] h-[2px] bg-transparent"
      style={{ top: topOffset }}
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-foreground transition-[transform] duration-75"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
