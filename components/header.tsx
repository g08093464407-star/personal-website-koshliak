"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const SECTION_IDS = ["about", "work", "services", "writing", "contact"] as const
type SectionId = (typeof SECTION_IDS)[number]

function isSectionId(value: unknown): value is SectionId {
  return typeof value === "string" && (SECTION_IDS as readonly string[]).includes(value)
}

type NavLink =
  | { href: `/#${SectionId}`; label: string; id: SectionId }
  | { href: "/faq"; label: "FAQ" }

const navLinks: NavLink[] = [
  { href: "/#about", label: "Про мене", id: "about" },
  { href: "/#work", label: "Досвід", id: "work" },
  { href: "/#services", label: "Напрями роботи", id: "services" },
  { href: "/#writing", label: "Аналітика", id: "writing" },
  { href: "/#contact", label: "Контакт", id: "contact" },
  { href: "/faq", label: "FAQ" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)

  const lockUntil = useRef<number>(0)

  useEffect(() => {
    // --- 1) Section scroll-spy (ALWAYS ON) ---
    const sectionEls = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sectionEls.length) return

    const ratios = new Map<string, number>()

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (Date.now() < lockUntil.current) return

        for (const entry of entries) {
          const id = entry.target.id
          if (!id) continue

          if (entry.isIntersecting) ratios.set(id, entry.intersectionRatio)
          else ratios.delete(id)
        }

        let bestId: SectionId | null = null
        let bestRatio = 0

        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio && isSectionId(id)) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (bestId) setActiveSection(bestId)
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.2, 0.4, 0.6],
      }
    )

    sectionEls.forEach((el) => sectionObserver.observe(el))

    // --- 2) Hero reset (OPTIONAL) ---
    // If you add id="hero" to the Hero root element, highlight will be cleared at the top.
    const heroEl = document.getElementById("hero")
    let heroObserver: IntersectionObserver | null = null

    if (heroEl) {
      heroObserver = new IntersectionObserver(
        ([entry]) => {
          // When user is clearly in Hero, no nav item should be active.
          if (entry.isIntersecting) {
            setActiveSection(null)
          }
        },
        {
          threshold: 0.6,
        }
      )

      heroObserver.observe(heroEl)
    }

    // optional: set from hash on load
    const hash = window.location.hash.replace("#", "")
    if (isSectionId(hash)) setActiveSection(hash)

    return () => {
      sectionObserver.disconnect()
      if (heroObserver) heroObserver.disconnect()
    }
  }, [])

  const handleAnchorClick = (id: SectionId) => {
    lockUntil.current = Date.now() + 700
    setActiveSection(id)

    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-foreground tracking-tight">
          Koshliak Volodymyr
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = "id" in link && activeSection === link.id

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if ("id" in link && window.location.pathname === "/") {
                    e.preventDefault()
                    handleAnchorClick(link.id)
                  }
                }}
                className={`relative text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}

                {"id" in link && (
                  <span
                    className={`absolute -bottom-2 left-0 h-[1px] w-full bg-foreground transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile: Crest + Burger */}
        <div className="md:hidden flex items-center gap-2 -mr-2">
          <Link
            href="/#hero"
            aria-label="На початок"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center"
          >
            <Image
              src="/images/gerb1.png"
              alt="Герб"
              width={54}
              height={54}
              priority
              className="opacity-90"
            />
          </Link>

          <button
            type="button"
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  if ("id" in link && window.location.pathname === "/") {
                    e.preventDefault()
                    handleAnchorClick(link.id)
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
