import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Article() {
  return (
    <main className="py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#writing"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад до аналітики
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Типові помилки в роботі з Японією
        </h1>

        <article className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Більшість проблем у співпраці з японськими компаніями виникають не
            через слабкий продукт або погані наміри. Причина зазвичай інша —
            хибні уявлення про те, як тут насправді працює бізнес.
          </p>

          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <p className="text-foreground font-semibold">
              Найнебезпечніше те, що ці помилки не виглядають критичними одразу.
            </p>
            <p className="mt-3">
              Вони накопичуються — і зрештою призводять до ситуації, де «все було
              ввічливо», але нічого не відбулося.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Помилка №1: плутати ввічливість із зацікавленням
          </h2>

          <p>
            Коректна комунікація не означає готовність рухатися далі. Часто це
            просто безпечний спосіб не сказати «ні» прямо.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Помилка №2: намагатися прискорити процес
          </h2>

          <p>
            Поспіх у японському бізнесі майже завжди сприймається як ризик, а не
            як ефективність. Часті нагадування і тиск на дедлайни швидше
            заморожують процес, ніж рухають його вперед.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Помилка №3: орієнтуватися на формальні ролі
          </h2>

          <p>
            Контактна особа не завжди є носієм реального впливу. Ключові фігури
            можуть залишатися невидимими, але саме вони формують позицію.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Помилка №4: вважати логіку універсальною
          </h2>

          <p>
            Те, що виглядає очевидним і вигідним ззовні, може бути неприйнятним
            через репутаційні або внутрішні ризики, які не проговорюються прямо.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Помилка №5: трактувати мовчання як байдужість
          </h2>

          <p>
            Мовчання може означати аналіз, паузу або завершення процесу. Помилка —
            не відрізняти ці стани й діяти навмання.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Помилка №6: не бути готовим зупинитися
          </h2>

          <p>
            Бажання домовитися за будь-яку ціну створює дисбаланс ще до початку
            переговорів. Японська сторона дуже чутлива до залежності й страху
            втратити можливість.
          </p>

          <div className="rounded-xl border border-border bg-muted/40 p-6 mt-10">
            <p className="text-foreground font-semibold mb-2">Підсумок</p>
            <p>
              Моя задача — побачити ці ризики до того, як вони стануть проблемами,
              і допомогти клієнту не витрачати ресурси там, де результат уже
              фактично визначений.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
