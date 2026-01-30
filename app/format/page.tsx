import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function FormatPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-mono text-muted-foreground">Формат</span>
            <h1 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Формат співпраці
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
            Формат співпраці
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Я не продаю універсальні рішення і не працюю за шаблонами. Кожна співпраця починається з
              розуміння реального запиту — і так само завершується, коли досягнуто чіткий результат.
            </p>

            <div className="space-y-3">
              <p className="text-foreground font-semibold">1. Початкова розмова</p>
              <p>Ми починаємо з короткої розмови, під час якої я з’ясовую:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>хто є сторонами взаємодії</li>
                <li>на якому етапі перебуває ідея або проєкт</li>
                <li>яку саме задачу потрібно вирішити</li>
                <li>що вже пробували і що не спрацювало</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-foreground font-semibold">2. Формування підходу</p>
              <p>Після первинної розмови я пропоную формат подальшої роботи. Це може бути:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>підготовка до переговорів</li>
                <li>супровід комунікації з японською стороною</li>
                <li>аналіз позицій і ризиків</li>
                <li>корекція аргументації та подачі</li>
                <li>або поєднання кількох форматів</li>
              </ul>

              <p>Я одразу окреслюю:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>що саме я беру на себе</li>
                <li>де проходить межа відповідальності</li>
                <li>який результат є реалістичним</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-foreground font-semibold">3. Робота в процесі</p>
              <p>У роботі я дію як інтелектуальний посередник, а не передавач слів:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>пояснюю логіку рішень японської сторони</li>
                <li>попереджаю про культурні та комунікаційні пастки</li>
                <li>допомагаю адаптувати позицію без втрати суті</li>
                <li>фіксую, де мовчання означає «ні», а де — «потрібен час»</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-foreground font-semibold">4. Завершення або продовження</p>
              <p>Співпраця завершується тоді, коли:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>досягнуто домовленості</li>
                <li>або стало зрозуміло, що співпраця не має сенсу</li>
                <li>або сторонам потрібен інший формат взаємодії</li>
              </ul>

              <p>
                У японському бізнесі вміння вчасно зупинитися інколи важливіше, ніж наполягати далі. Я про це говорю прямо.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-foreground font-semibold">Що важливо знати одразу</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>я не працюю як просто перекладач</li>
                <li>я не продаю «вихід на японський ринок за місяць»</li>
                <li>я не підміняю собою вашу команду</li>
              </ul>
              <p>
                Я працюю там, де необхідна міжкультурна координація з відповідним мисленням, а не просто знання мови.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium
                           text-foreground transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Перейти до контакту
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
