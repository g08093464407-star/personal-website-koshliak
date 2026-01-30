const services = [
  {
    title: "Побудова партнерства між українським і японським бізнесом",
    description:
      "Початковий і критично важливий етап, на якому формується основа майбутньої співпраці. Я допомагаю вибудувати партнерство з урахуванням японської ієрархії, внутрішніх ролей і реального порядку ухвалення рішень, щоб взаємодія не завершилась на формальних розмовах.",
  },
  {
    title: "Комунікація та супровід переговорів",
    description:
      "Робота з формулюваннями, тоном і таймінгом у переговорах з японськими партнерами. Я адаптую пропозиції та аргументи, супроводжую переговори й допомагаю уникати культурних непорозумінь без втрати репутації жодної зі сторін.",
  },
  {
    title: "Перевірка взаємодії після домовленостей",
    description:
      "Контроль і корекція взаємодії після підписання домовленостей. Я перевіряю листи, презентації та матеріали, допомагаю врахувати неформальні правила японського бізнес-середовища та зміцнити робочі відносини на практиці.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-10 md:py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm font-mono text-muted-foreground">03</span>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Напрями роботи
          </h2>
        </div>

        <p className="text-lg md:text-xl text-foreground leading-relaxed mb-12 max-w-2xl">
          Моя діяльність виходить за межі стандартного консалтингу, пропонуючи
          всебічний супровід на всіх етапах. Я фокусуюся на подоланні когнітивного
          дисонансу між західною бізнес-логікою та японськими управлінськими
          парадигмами, забезпечуючи не просто формальну присутність, а реальну
          інтеграцію в ділове середовище.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-background p-6 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
