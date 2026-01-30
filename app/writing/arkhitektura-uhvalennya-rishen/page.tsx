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
          Архітектура ухвалення рішень у японських компаніях
        </h1>

        <article className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Одна з ключових помилок у переговорах з японськими компаніями — уявлення,
            що рішення ухвалюються там, де ведеться розмова. За столом переговорів
            часто відбувається не ухвалення рішень, а перевірка безпечності позиції.
          </p>

          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <p className="text-sm font-mono text-muted-foreground mb-2">Міф vs реальність</p>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-foreground">Міф:</span> «Зараз
                поясню — і вони скажуть “так”».
              </p>
              <p>
                <span className="font-semibold text-foreground">Реальність:</span>{" "}
                «Зараз перевіримо, чи не створює це внутрішніх ризиків — і чи взагалі
                це можна безпечно винести на погодження».
              </p>
            </div>
          </div>

          <p>
            У японських організаціях рішення формуються поступово, через внутрішні
            погодження, консультації та оцінку ризиків. Людина, яка веде переговори,
            може не мати повноважень ні сказати «так», ні сказати «ні». Її роль —
            зібрати інформацію, перевірити логіку аргументів і зрозуміти, чи не
            створює запропонований сценарій внутрішніх загроз.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Три питання, які вирішують більше, ніж “сильні аргументи”
          </h2>

          <p>
            Саме тому важливо знати не лише з ким ви говорите, а й де насправді
            формується позиція. Без відповідей на ці питання навіть найсильніші
            аргументи можуть бути спрямовані «не туди».
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Хто відповідатиме за наслідки?</li>
            <li>Хто нестиме репутаційний ризик?</li>
            <li>Хто буде змушений пояснювати це рішення всередині компанії?</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Чому “логічно” не завжди означає “прийнятно”
          </h2>

          <p>
            Ще одна особливість — японські компанії значно більше зосереджені на
            запобіганні проблемам, ніж на досягненні швидкої вигоди. Якщо пропозиція
            виглядає логічною, але створює внутрішній дискомфорт або потенційні
            ускладнення, її, швидше за все, не підтримають — навіть якщо про це ніколи
            не скажуть прямо.
          </p>

          <div className="rounded-xl border border-border bg-muted/40 p-6">
            <p className="text-foreground font-semibold mb-2">
              Практичний висновок
            </p>
            <p>
              Розуміння архітектури ухвалення рішень дозволяє говорити іншою мовою:
              не переконувати, а знімати ризики; не тиснути, а показувати безпечний
              шлях; не чекати швидкої відповіді, а правильно читати динаміку процесу.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
