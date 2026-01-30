import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ManifestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Заголовок */}
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Маніфест
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Принципи інтелектуального партнерства
          </p>

          {/* Контент */}
          <div className="mt-12 space-y-10 text-base md:text-lg leading-relaxed">
            <ManifestPoint
              number="01"
              title="Реальність важливіша за очікування"
            >
              Я працюю з тим, що є насправді, а не з тим, як хотілося б, щоб було.
              Чесна картина ситуації на старті завжди цінніша за виправлення
              помилок пізніше.
            </ManifestPoint>

            <ManifestPoint
              number="02"
              title="Процес важливіший за швидкість"
            >
              У японському бізнесі стійкість і послідовність мають більшу вагу,
              ніж поспіх. Я зосереджуюся на побудові коректного процесу, який
              працює в довгостроковій перспективі.
            </ManifestPoint>

            <ManifestPoint
              number="03"
              title="Ризики потрібно зменшувати заздалегідь"
            >
              Моя робота полягає не в тому, щоб розв’язувати конфлікти, а в тому,
              щоб вони не виникали. Я допомагаю побачити загрози ще до того, як
              вони стануть проблемами.
            </ManifestPoint>

            <ManifestPoint
              number="04"
              title="Довіра формується діями"
            >
              Я не створюю завищених очікувань і не даю обіцянок, які не можу
              контролювати. Послідовність і відповідальність важать більше за
              правильні слова.
            </ManifestPoint>

            <ManifestPoint
              number="05"
              title="Кожна сторона має зберігати гідність"
            >
              Переговори — це не боротьба за перемогу. Це пошук рішення, у якому
              всі сторони зберігають репутацію і можливість рухатися далі разом.
            </ManifestPoint>

            <ManifestPoint
              number="06"
              title="Вчасно зупинитися — теж професійне рішення"
            >
              Якщо я бачу, що співпраця або формат взаємодії не має перспектив, я
              говорю про це прямо. Це дозволяє не витрачати ресурси даремно.
            </ManifestPoint>

            <ManifestPoint
              number="07"
              title="Я відповідаю за якість свого внеску"
            >
              Моя роль — дати сторонам ясність і розуміння ситуації. Остаточні
              рішення ухвалюють вони, але я відповідаю за те, щоб ці рішення були
              усвідомленими.
            </ManifestPoint>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

/* ================= Helper ================= */

function ManifestPoint({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="flex items-baseline gap-4">
        <span className="text-sm text-muted-foreground tracking-widest">
          {number}
        </span>
        <h2 className="text-xl md:text-2xl font-medium tracking-tight">
          {title}
        </h2>
      </div>

      <p className="mt-3 text-muted-foreground">
        {children}
      </p>
    </section>
  )
}
