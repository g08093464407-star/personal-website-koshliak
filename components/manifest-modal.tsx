"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

type ManifestModalProps = {
  open: boolean
  onClose: () => void
}

const principles = [
  {
    title: "Реальність важливіша за очікування",
    text: "Я працюю з тим, що є насправді, а не з тим, як хотілося б, щоб було. Чесна картина ситуації на старті завжди цінніша за виправлення помилок пізніше.",
  },
  {
    title: "Процес важливіший за швидкість",
    text: "У японському бізнесі стійкість і послідовність мають більшу вагу, ніж поспіх. Я зосереджуюся на побудові коректного процесу, який працює в довгостроковій перспективі.",
  },
  {
    title: "Ризики потрібно зменшувати заздалегідь",
    text: "Моя робота полягає не в тому, щоб розв’язувати конфлікти, а в тому, щоб вони не виникали. Я допомагаю побачити загрози ще до того, як вони стануть проблемами.",
  },
  {
    title: "Довіра формується діями",
    text: "Я не створюю завищених очікувань і не даю обіцянок, які не можу контролювати. Послідовність і відповідальність важать більше за правильні слова.",
  },
  {
    title: "Кожна сторона має зберігати гідність",
    text: "Переговори — це не боротьба за перемогу. Це пошук рішення, у якому всі сторони зберігають репутацію і можливість рухатися далі разом.",
  },
  {
    title: "Вчасно зупинитися — теж професійне рішення",
    text: "Якщо я бачу, що співпраця або формат взаємодії не має перспектив, я говорю про це прямо. Це дозволяє не витрачати ресурси даремно.",
  },
  {
    title: "Я відповідаю за якість свого внеску",
    text: "Моя роль — дати сторонам ясність і розуміння ситуації. Остаточні рішення ухвалюють вони, але я відповідаю за те, щоб ці рішення були усвідомленими.",
  },
]

export function ManifestModal({ open, onClose }: ManifestModalProps) {
  const [mounted, setMounted] = useState(false)

  // Перевірка монтажу компонента для уникнення помилок SSR в Next.js
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open || !mounted) return null

  // Використовуємо Portal для рендеру в body
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop (Задній фон) - тепер окремо від контенту для стабільності кліків */}
      <div
        className="absolute inset-0 bg-background/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative flex flex-col w-full max-w-3xl max-h-[90vh] rounded-2xl border border-border bg-background shadow-2xl overflow-hidden transform transition-all">
        
        {/* Header - фіксований зверху */}
        <div className="flex items-start justify-between gap-6 p-6 border-b border-border bg-background shrink-0">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Маніфест</p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mt-1">
              Принципи інтелектуального партнерства
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Закрити"
          >
            <X className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>

        {/* Content - область зі скролом */}
        <div className="p-6 md:p-8 overflow-y-auto overflow-x-hidden flex-1">
          <ol className="space-y-6">
            {principles.map((p, idx) => (
              <li key={p.title} className="group rounded-xl border border-border p-5 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-sm font-mono text-primary font-bold mt-0.5">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-2 text-sm md:text-base">
                      {p.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Footer - фіксований знизу */}
        <div className="p-4 md:p-6 border-t border-border bg-background flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-foreground px-8 py-3 text-sm font-semibold text-background transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring active:scale-95"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
