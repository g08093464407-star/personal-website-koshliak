import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 md:pt-24 md:pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">
          {/* LEFT (keeps previous “wide” feel) */}
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-tight text-balance">
              Успішний українсько-японський бізнес без культурних помилок
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium">
              Інтелектуальний партнер між Україною та Японією
            </p>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Веду повну комунікацію між українським та японським бізнесом, адаптуючи запити
              сторін до культурних і юридичних норм обох країн. Маю багаторічний досвід роботи
              в японських компаніях і добре розумію, як тут ухвалюють рішення — і чому «логічно»
              не завжди означає «працює».
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Обговорити запит
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                Переглянути досвід
              </Link>
            </div>
          </div>

          {/* RIGHT (narrow column so it doesn’t steal width from H1) */}
          <div className="hidden md:flex justify-end self-start pt-2">
            <Image
              src="/images/gerb.png"
              alt="Особистий герб"
              width={320}
              height={320}
              priority
              className="opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
