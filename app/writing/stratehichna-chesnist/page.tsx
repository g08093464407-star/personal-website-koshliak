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
          Стратегічна чесність як інструмент економії ресурсів
        </h1>

        <article className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            У багатьох бізнес-проєктах найбільші втрати виникають не через помилки,
            а через небажання визнати реальність на ранньому етапі. Особливо це
            помітно в роботі з японськими партнерами, де ввічливість і стриманість
            легко створюють ілюзію перспективи.
          </p>

          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <p className="text-sm font-mono text-muted-foreground mb-2">Найдорогий сценарій</p>
            <p className="text-foreground font-semibold">
              “Рухаємося далі, бо раптом воно спрацює”.
            </p>
            <p className="mt-3">
              Це звучить оптимістично. На практиці — це найдорожча форма надії:
              час іде, зустрічі відбуваються, листи пишуться, а рішення не наближається.
            </p>
          </div>

          <p className="text-foreground">
            Я не пропоную зручний сценарій. Я пропоную чесну картину.
          </p>

          <p>
            Це не завжди приємно, але майже завжди економічно виправдано. Чесна оцінка
            на старті дозволяє зрозуміти, чи має сенс рухатися далі, чи краще
            зупинитися до того, як буде витрачено занадто багато ресурсів.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Як виглядає “ілюзія перспективи” в японському контексті
          </h2>

          <p>
            Ввічливість і стриманість — це нормальний стиль комунікації. Проблема
            починається тоді, коли ці сигнали автоматично перекладаються як
            “йде прогрес”.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Процес є, але позиції немає.</li>
            <li>Зустрічі повторюються, але нових рішень не з’являється.</li>
            <li>Формулювання коректні, але конкретики стає менше, а не більше.</li>
            <li>Ви витрачаєте дедалі більше ресурсів, щоб “підтримувати динаміку”.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Що таке стратегічна чесність (і чим вона не є)
          </h2>

          <div className="rounded-xl border border-border bg-muted/40 p-6 space-y-3">
            <p>
              <span className="text-foreground font-semibold">Це не песимізм.</span>{" "}
              Це відокремлення бажаного від можливого.
            </p>
            <p>
              <span className="text-foreground font-semibold">Це не відмова від амбіцій.</span>{" "}
              Це відокремлення перспективного від формально ввічливого.
            </p>
            <p>
              <span className="text-foreground font-semibold">Це не “жорсткість”.</span>{" "}
              У японському контексті це часто сприймається як форма відповідальності, а не слабкість.
            </p>
          </div>

          <p>
            Часто клієнти приходять на етапі, коли процес уже запущено, але не рухається.
            Витрачається час, пишуться листи, проводяться зустрічі — і водночас нічого
            не змінюється. У більшості таких випадків проблема не в комунікації, а в тому,
            що перспектива була неправильно оцінена з самого початку.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-10">
            Чесна зупинка — теж результат
          </h2>

          <p>
            Чесна зупинка дозволяє зберегти ресурси, репутацію і можливість повернутися
            до розмови в іншому форматі або в інший момент.
          </p>

          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <p className="text-foreground font-semibold mb-2">Фінальний акцент</p>
            <p>
              Саме тому стратегічна чесність часто виявляється найдешевшим рішенням
              у довгостроковій перспективі.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
