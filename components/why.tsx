"use client"

import { useState } from "react"

const sections = [
  {
    title: "Розуміння архітектури ухвалення рішень",
    paragraphs: [
      "У японському діловому середовищі рішення рідко ухвалюються безпосередньо за столом переговорів. Я допомагаю клієнтам орієнтуватися в невидимій структурі компанії:",
    ],
    bullets: [
      "ідентифікувати реальні центри впливу, які не фігурують в офіційному протоколі;",
      "розуміти динаміку внутрішніх погоджень, щоб відрізняти моменти, коли наполегливість доречна, від тих, коли вона може зашкодити репутації;",
      "уникати стратегічних пауз, що виникають через хибне трактування ієрархії та процесів ухвалення рішень.",
    ],
    footer:
      "Це дозволяє працювати не з припущеннями, а з реальною конфігурацією впливу.",
  },
  {
    title: "Дешифрування контексту та прихованих сенсів",
    paragraphs: [
      "Японська комунікація значною мірою будується на тому, що залишається між рядками. Часто саме невисловлене має більшу вагу, ніж формально озвучене.",
      "Моя експертиза дозволяє:",
    ],
    bullets: [
      "відрізняти ввічливу відмову від справжнього зацікавлення, яке подається у стриманій формі;",
      "коректно тлумачити мовчання — як прояв поваги або потребу у внутрішньому аналізі, а не як втрату інтересу;",
      "перетворювати обтічні формулювання на зрозумілі орієнтири для подальших дій.",
    ],
    footer: "У результаті комунікація перестає бути інтуїтивною і стає усвідомленою.",
  },
  {
    title: "Пріоритет стратегічної чесності",
    paragraphs: [
      "Я пропоную не зручний сценарій, а об’єктивний виклад реальності. Це дає змогу ухвалювати рішення на основі фактів, а не очікувань:",
    ],
    bullets: [
      "ви отримуєте неупереджену оцінку перспектив проєкту без спроб прикрасити дійсність;",
      "фокус зміщується на мінімізацію ризиків — що в японській бізнес-культурі є однією з найвищих форм відповідальності;",
      "ресурси заощаджуються завдяки вчасному припиненню ініціатив, які не мають життєздатної перспективи.",
    ],
    footer: "Чесність на ранньому етапі завжди дешевша за кризове втручання пізніше.",
  },
  {
    title: "Синхронізація двох ділових культур",
    paragraphs: [
      "Маючи досвід роботи всередині обох систем, я забезпечую їхню узгоджену взаємодію. Йдеться не про компроміс заради компромісу, а про створення робочого простору для досягнення спільних цілей.",
      "Я добре розумію внутрішню логіку японських компаній і водночас поділяю українську орієнтованість на результат. Моє завдання — зробити так, щоб сторони не просто обмінювалися словами, а справді доходили спільного розуміння.",
    ],
  },
]

export function WhyPartnership() {
  const [open, setOpen] = useState(false)

  return (
    <section id="why" className="py-10 md:py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm font-mono text-muted-foreground">04</span>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Чому обирають інтелектуальне партнерство
          </h2>
        </div>

        <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 max-w-2xl">
          Знання мови та тривалий досвід життя в Японії — це лише базовий інструментарій.
          Моя роль як партнера стає критичною тоді, коли стандартні бізнес-моделі
          стикаються з японською специфікою і потребують глибокої адаптації, а не
          поверхневих рішень.
        </p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium
                     text-foreground transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
          aria-expanded={open}
          aria-controls="why-content"
        >
          {open ? "Згорнути" : "Читати повністю"}
        </button>

        {open ? (
          <div id="why-content" className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {s.title}
                </h3>

                {s.paragraphs?.map((p) => (
                  <p key={p} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}

                {s.bullets?.length ? (
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                {s.footer ? (
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {s.footer}
                  </p>
                ) : null}
              </div>
            ))}

            <div className="pt-10 border-t border-border max-w-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Підсумок
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Співпраця зі мною — це інвестиція у сталість ділових відносин. Ми
                працюємо над тим, щоб кожне ухвалене рішення ставало фундаментом для
                довгострокового партнерства, яке не потребуватиме виправлень чи
                кризового втручання в майбутньому.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
