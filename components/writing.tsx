import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const articles = [
  {
    title: "Типові помилки в роботі з Японією",
    date: "Аналітика",
    summary:
      "Шість причин, чому «все було ввічливо», але співпраця не зрушила з місця: поспіх, хибне трактування мовчання, ставка на формальні ролі та інші пастки.",
    href: "/writing/typovi-pomylky",
  },
  {
    title: "Чому ввічливість не дорівнює зацікавленню",
    date: "Комунікація",
    summary:
      "Як читати японські формулювання без самообману: де «ми подумаємо» означає паузу, а де — акуратну відмову, яку не скажуть прямо.",
    href: "/writing/vvichlyvist-ne-dorivnyue-zacikavlennyu",
  },
  {
    title: "Архітектура ухвалення рішень у японських компаніях",
    date: "Практика",
    summary:
      "Рішення рідко приймають «за столом». Важливо знати, де насправді формується позиція, хто погоджує ризики і як не говорити «не туди».",
    href: "writing/arkhitektura-uhvalennya-rishen",
  },
  {
    title: "Стратегічна чесність як інструмент економії ресурсів",
    date: "Принципи",
    summary:
      "Я не пропоную зручний сценарій — я пропоную реальність. Чесна оцінка на старті часто дешевша за «кризове втручання» після.",
    href: "/writing/stratehichna-chesnist",
  },
]

export function Writing() {
  return (
    <section id="writing" className="py-10 md:py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-mono text-muted-foreground">07</span>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Аналітика
          </h2>
        </div>

        <p className="text-lg md:text-xl text-foreground leading-relaxed mb-12 max-w-2xl">
          Короткі тексти про роботу з Японією: логіку ухвалення рішень, типові помилки в комунікації та те, що зазвичай лишається “між рядками” у міжнародному бізнесі.
        </p>

        <div className="space-y-0">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="group block py-6 border-b border-border first:border-t hover:bg-secondary/50 transition-colors -mx-4 px-4 md:-mx-6 md:px-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-muted-foreground font-mono">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.summary}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
