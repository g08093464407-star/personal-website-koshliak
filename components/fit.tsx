const goodFit = [
  "працює або планує працювати з японськими компаніями не одноразово, а на перспективу і стратегічний розвиток",
  "розуміє, що в японському бізнесі довіра будується повільно, але працює довго",
  "готовий коригувати підхід і бути адаптивним, а не лише наполягати на правильних рішеннях спираючись виключно на логіку",
  "хоче зрозуміти, чому японська сторона поводиться саме так, а не просто отримати відповідь",
  "цінує попередження про ризики так само, як і допомогу в переговорах",
]

const badFit = [
  "розглядає японський ринок як тимчасовий майданчик для швидкого скидання залишків продукції",
  "шукає швидкий вихід на японський ринок без підготовки",
  "очікує, що японська сторона має адаптуватися під ваш стиль ведення бізнесу",
  "розраховує просунути рішення тиском або наполегливістю",
  "хоче почути підтвердження своєї правоти замість реального стану речей",
]

export function Fit() {
  return (
    <section id="fit" className="py-10 md:py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-mono text-muted-foreground">06</span>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Кому я буду корисний
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* GOOD FIT */}
          <div
            className={[
              "rounded-xl border border-border p-6 bg-background",
              "transition-all duration-200",
              "hover:shadow-sm hover:-translate-y-[1px] hover:scale-[1.01]",
              "hover:bg-muted/20 hover:border-foreground/15",
            ].join(" ")}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Я буду корисний тим, хто:
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed">
              {goodFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-6 text-foreground leading-relaxed">
              Зі мною працюють тоді, коли важлива не швидкість першого кроку,
              а те, що буде після нього.
            </p>
          </div>

          {/* BAD FIT */}
          <div
            className={[
              "rounded-xl border border-border p-6 bg-muted/20",
              "transition-all duration-200",
              "hover:shadow-sm hover:-translate-y-[1px] hover:scale-[1.01]",
              "hover:bg-muted/30 hover:border-foreground/15",
            ].join(" ")}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Я не підійду тим, хто:
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed">
              {badFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
