import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-10 md:py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm font-mono text-muted-foreground">01</span>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Про мене
          </h2>
        </div>

        {/* MOBILE PHOTO */}
        <div className="md:hidden mb-8 flex justify-center">
          <div className="relative w-40 aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/2026-01-28 12.17.25.jpg"
              alt="Фото"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          {/* DESKTOP PHOTO */}
          <div className="hidden md:block">
            <div className="sticky top-32">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/2026-01-28 12.17.25.jpg"
                  alt="Фото"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Вже багато років працюю на перетині українського та японського бізнес-контекстів, де мова, культура і спосіб мислення мають не менше значення, ніж цифри чи умови контракту. Моє завдання стратегічне і полягає в тому, щоб сторони не просто досягли короткострокових домовленостей, а справді зрозуміли одна одну для побудови довгострокових і надійних відносин.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Оскільки живу і працюю в Японії багато років, маю досвід роботи в японських компаніях і щоденно перебуваю всередині місцевого ділового середовища. Це дає мені цілісне розуміння принципів, за якими тут ухвалюються рішення, формується довіра та оцінюються партнери.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              У роботі між Японією та Україною я ваш інтелектуальний партнер, який допомагає адаптувати запити, аргументи та очікування сторін до реальності обох ринків. Саме в цьому зазвичай і лежить різниця між формально правильним підходом і тим, що насправді працює.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
