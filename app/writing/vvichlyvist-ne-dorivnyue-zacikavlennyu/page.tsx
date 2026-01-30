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
          Чому ввічливість не дорівнює зацікавленню
        </h1>

        <article className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Одна з найпоширеніших пасток у роботі з японськими компаніями —
            сприймати ввічливість як сигнал інтересу. Тон коректний, формулювання
            м’які, жодних різких «ні». З європейської або української перспективи
            це часто виглядає як позитивна динаміка.
          </p>

          <p className="text-foreground">
            Насправді — не обов’язково.
          </p>

          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <p className="text-sm font-mono text-muted-foreground mb-2">
              Ключова особливість
            </p>
            <p className="text-foreground font-semibold">
              Японська ділова мова існує не для фіксації позиції, а для збереження
              відносин.
            </p>
            <p className="mt-3">
              Саме тому вона дозволяє завершити розмову коректно, не створюючи
              конфлікту і не беручи на себе зобов’язань.
            </p>
          </div>

          <p>
            Фраза «ми подумаємо» може означати різні речі. В одному випадку — це
            справжня пауза для внутрішнього обговорення. В іншому — фінальна
            відповідь, яка більше не потребує продовження.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Де виникає самообман
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Мовчання трактується як «ще не встигли відповісти».</li>
            <li>Коректна реакція сприймається як «їм цікаво, просто вони стримані».</li>
            <li>Відсутність негативу читається як позитив.</li>
          </ul>

          <p>
            У результаті компанія інвестує час, ресурси й енергію в процес, який
            уже фактично завершився — але без чіткої крапки.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Як читати ситуацію правильно
          </h2>

          <p>
            Розуміння японської комунікації починається не з перекладу слів, а з
            вміння читати межі: хто говорить, у який момент, після яких
            аргументів і з якою подальшою поведінкою.
          </p>

          <div className="rounded-xl border border-border bg-muted/40 p-6">
            <p>
              <span className="text-foreground font-semibold">
                Питання не в тому, що сказали.
              </span>{" "}
              Питання в тому, чи залишився простір для наступного кроку.
            </p>
          </div>

          <p>
            Саме ця уважність дозволяє не наполягати зайвого, не будувати стратегію
            на хибних сигналах і зберігати гідність з обох сторін.
          </p>
        </article>
      </div>
    </main>
  )
}
