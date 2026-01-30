"use client"

import { useState } from "react"
import { ManifestModal } from "@/components/manifest-modal"

export function ManifestCTA() {
  const [open, setOpen] = useState(false)

  return (
    <section id="manifest" className="px-6 py-8 md:py-10">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-border p-6 md:p-8 bg-muted/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-mono text-muted-foreground">Маніфест</p>
            <p className="text-base md:text-lg text-foreground leading-relaxed mt-2">
              Принципи, за якими я працюю
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium
                       text-foreground transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Відкрити маніфест
          </button>
        </div>
      </div>

      <ManifestModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
