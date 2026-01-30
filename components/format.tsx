"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type Step = {
  number: string
  title: string
  paragraphs?: string[]
  items?: string[]
  extraTitle?: string
  extraItems?: string[]
  note?: string
}

const steps: Step[] = [
  {
    number: "01",
    title: "Початкова розмова",
    paragraphs: ["Ми починаємо з короткої розмови, під час якої я з’ясовую:"],
    items: [
      "хто є сторонами взаємодії",
      "на якому етапі перебуває ідея або проєкт",
      "яку саме задачу потрібно вирішити",
      "що вже пробували і що не спрацювало",
    ],
  },
  {
    number: "02",
    title: "Формування підходу",
    paragraphs: [
      "Після первинної розмови я пропоную формат подальшої роботи. Це може бути:",
    ],
    items: [
      "підготовка до переговорів",
      "супровід комунікації з японською стороною",
      "аналіз позицій і ризиків",
      "корекція аргументації та подачі",
      "або поєднання кількох форматів",
    ],
    extraTitle: "Я одразу окреслюю:",
    extraItems: [
      "що саме я беру на себе",
      "де проходить межа відповідальності",
      "який результат є реалістичним",
    ],
  },
  {
    number: "03",
    title: "Робота в процесі",
    paragraphs: [
      "У роботі я дію як інтелектуальний посередник, а не передавач слів:",
    ],
    items: [
      "пояснюю логіку рішень японської сторони",
      "попереджаю про культурні та комунікаційні пастки",
      "допомагаю адаптувати позицію без втрати суті",
      "фіксую, де мовчання означає «ні», а де — «потрібен час»",
    ],
  },
  {
    number: "04",
    title: "Завершення або продовження",
    paragraphs: ["Співпраця завершується тоді, коли:"],
    items: [
      "досягнуто домовленості",
      "або стало зрозуміло, що співпраця не має сенсу",
      "або сторонам потрібен інший формат взаємодії",
    ],
    note:
      "У японському бізнесі вміння вчасно зупинитися інколи важливіше, ніж наполягати далі. Я про це говорю прямо.",
  },
]

const important = [
  "я не працюю як просто перекладач",
  "я не продаю «вихід на японський ринок за місяць»",
  "я не підміняю собою вашу команду",
]

export function Format() {
  const [openStep, setOpenStep] = useState<string | null>(null)

  const toggle = (key: string) => {
    setOpenStep((prev) => (prev === key ? null : key))
  }

  return (
    <section id="format" className="py-10 md:py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm font-mono text-muted-foreground">05</span>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Формат співпраці
          </h2>
        </div>

        <p className="text-lg md:text-xl text-foreground leading-relaxed mb-12 max-w-2xl">
          Я не продаю універсальні рішення і не працюю за шаблонами. Кожна співпраця
          починається з розуміння реального запиту — і так само завершується, коли
          досягнуто чіткий результат.
        </p>

        <div className="space-y-6">
          {steps.map((step) => {
            const isOpen = openStep === step.number

            return (
              <div
                key={step.number}
                className={[
                  "rounded-xl border bg-background p-6 transition-all",
                  isOpen
                    ? "border-foreground/15 bg-muted/30 shadow-sm"
                    : "border-border hover:bg-muted/20 hover:shadow-sm hover:-translate-y-[1px]",
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm font-mono text-muted-foreground mt-1">
                    {step.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>

                    <button
                      type="button"
                      onClick={() => toggle(step.number)}
                      className={[
                        "mt-3 inline-flex items-center gap-2 text-sm transition-colors",
                        "text-muted-foreground hover:text-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      ].join(" ")}
                      aria-expanded={isOpen}
                      aria-controls={`format-step-${step.number}`}
                    >
                      {isOpen ? "Згорнути" : "Показати деталі"}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {isOpen && (
                  <div id={`format-step-${step.number}`} className="mt-6">
                    {step.paragraphs?.map((p) => (
                      <p
                        key={p}
                        className="text-muted-foreground leading-relaxed mb-4"
                      >
                        {p}
                      </p>
                    ))}

                    {step.items?.length ? (
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                        {step.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}

                    {step.extraTitle ? (
                      <p className="text-muted-foreground leading-relaxed mt-6 mb-4">
                        {step.extraTitle}
                      </p>
                    ) : null}

                    {step.extraItems?.length ? (
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                        {step.extraItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}

                    {step.note ? (
                      <p className="text-foreground leading-relaxed mt-6">
                        {step.note}
                      </p>
                    ) : null}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Що важливо знати одразу
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            {important.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="text-muted-foreground leading-relaxed mt-6 max-w-2xl">
            Я працюю там, де необхідна міжкультурна координація з відповідним
            мисленням, а не просто знання мови.
          </p>
        </div>
      </div>
    </section>
  )
}
