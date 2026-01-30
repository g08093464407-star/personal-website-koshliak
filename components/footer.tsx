"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter, X } from "lucide-react"

/* ================= LINKS ================= */

const navLinks: Array<{ href: string; label: string }> = [
  { href: "/#about", label: "Про мене" },
  { href: "/#work", label: "Досвід" },
  { href: "/#services", label: "Напрями роботи" },
  { href: "/#why", label: "Чому інтелектуальне партнерство" },
  { href: "/format", label: "Формат співпраці" },
  { href: "/#fit", label: "Кому я буду корисний" },
  { href: "/#writing", label: "Аналітика" },
  { href: "/manifest", label: "Маніфест" },
  { href: "/#contact", label: "Контакт" },
  { href: "/faq", label: "FAQ" },
]

const socialLinks: Array<{
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}> = [
  {
    href: "https://www.linkedin.com/in/volodymyr-koshliak-b790383a9/",
    label: "LinkedIn",
    icon: Linkedin,
  },
]

/* ================= FOOTER ================= */

export function Footer() {
  const [open, setOpen] = useState<null | "ethics" | "privacy">(null)

  return (
    <>
      <footer className="py-12 md:py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <Link href="/" className="text-lg font-semibold text-foreground">
                Koshliak Volodymyr
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Інтелектуальний партнер між Україною та Японією
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-2 items-center">
              {navLinks.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setOpen("ethics")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Юридично-етичні застереження
              </button>

              <button
                type="button"
                onClick={() => setOpen("privacy")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Політика конфіденційності
              </button>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Індивідуальна професійна діяльність. Усі права
              захищені.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {open ? <LegalModal type={open} onClose={() => setOpen(null)} /> : null}
    </>
  )
}

/* ================= MODAL ================= */

function LegalModal(props: { type: "ethics" | "privacy"; onClose: () => void }) {
  const { type, onClose } = props

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center px-6 py-10">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-3xl rounded-2xl border border-border bg-background shadow-xl">
        <div className="flex items-start justify-between p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">
            {type === "ethics"
              ? "Юридично-етичні застереження"
              : "Політика конфіденційності та умови використання"}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Закрити"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-auto text-sm leading-relaxed text-muted-foreground space-y-4">
          {type === "ethics" ? <EthicsContent /> : <PrivacyContent />}
        </div>
      </div>
    </div>
  )
}

/* ================= CONTENT (AS-IS) ================= */

function EthicsContent() {
  return (
    <>
      <p>
        <strong>Межі відповідальності</strong>
        <br />
        Моя робота полягає в аналітичному, комунікаційному та стратегічному супроводі. Я не
        приймаю рішень замість сторін і не можу гарантувати конкретний результат переговорів.
        Остаточні рішення, а також відповідальність за їх реалізацію, завжди залишаються за
        сторонами співпраці.
      </p>

      <p>
        <strong>Відсутність гарантій результату</strong>
        <br />
        У японському бізнесі на процес ухвалення рішень впливає багато факторів, більшість з
        яких перебувають поза зоною прямого контролю. Тому жодні домовленості, прогнози чи
        оцінки не можуть розглядатися як гарантія позитивного результату.
      </p>

      <p>
        <strong>Конфіденційність</strong>
        <br />
        Уся інформація, отримана в межах співпраці, розглядається як конфіденційна. Я не
        передаю дані третім особам і не використовую матеріали клієнта без попередньої згоди.
        Збереження довіри є обов’язковою умовою моєї роботи.
      </p>

      <p>
        <strong>Конфлікт інтересів</strong>
        <br />
        Я залишаю за собою право відмовитися від співпраці у випадку потенційного конфлікту
        інтересів або ситуації, що може зашкодити будь-якій зі сторін.
      </p>

      <p>
        <strong>Формат взаємодії</strong>
        <br />
        Умови співпраці, обсяг робіт і фінансові питання узгоджуються індивідуально до початку
        роботи. Я не працюю без чітко визначених рамок і взаємного розуміння очікувань.
      </p>

      <p>
        <strong>Підсумок</strong>
        <br />
        Ці застереження існують не для обмеження співпраці, а для того, щоб вона залишалася
        прозорою, професійною та передбачуваною для всіх сторін.
      </p>
    </>
  )
}

function PrivacyContent() {
  return (
    <>
      <p className="text-foreground font-semibold">
        Політика конфіденційності та умови використання
      </p>

      <p>
        <strong>1. Преамбула та регулятивний статус</strong>
        <br />
        Даний веб-ресурс функціонує виключно як інформаційний майданчик і не становить собою
        публічну оферту або інший вид зобов&apos;язального правочину. Використання контенту
        сайту є фактичним акцептуванням умов даної детермінації у повному обсязі у межах
        чинного законодавства. Власник зберігає за собою ексклюзивну прерогативу вносити
        односторонні зміни до цього документа без жодної попередньої диспозиції.
      </p>

      <p>
        <strong>2. Кваліфікація та верифікація контенту</strong>
        <br />
        Усі аналітичні матеріали та дескрипції методологій мають виключно декларативний
        характер і не можуть бути кваліфіковані як:
        <br />• юридична або професійна експертиза;
        <br />• фінансова предикція чи інвестиційна настанова;
        <br />• гарантована пропозиція щодо результативності майбутніх кейсів. Будь-яка
        імплементація отриманих відомостей здійснюється користувачем на засадах повної
        автономії та персональної відповідальності.
      </p>

      <p>
        <strong>3. Екзонерація та лімітація відповідальності</strong>
        <br />
        Власник ресурсу дезавуює будь-яку каузальну відповідальність за прямі чи опосередковані
        збитки, включаючи ерозію ділової репутації чи фінансову дефіцитність. Власник ресурсу
        не пропонує жодних гарантій щодо безперервності сервісу або абсолютизації актуальності
        даних. Взаємодія з третіми особами на основі контенту сайту є сферою вашої особистої
        дискреції.
      </p>

      <p>
        <strong>4. Регламентація конфіденційності</strong>
        <br />
        Обробка даних здійснюється виключно в межах пре-контрактної оцінки перспективності
        запиту. Власник ресурсу не гарантує абсолютну цілісність даних під час транзиту через
        глобальну мережу, проте забезпечує внутрішню протекцію від несанкціонованої
        проліферації інформації. Службова комунікація підлягає архівуванню з метою внутрішньої
        валідації облікових процесів.
      </p>

      <p>
        <strong>5. Безумовне право на відмову та конфлікт інтересів</strong>
        <br />
        Власник зберігає за собою право на одностороннє припинення комунікації без надання
        будь-якої аргументації чи обґрунтування. Виявлення конфлікту інтересів або етичної
        амбівалентності є підставою для негайної термінації будь-яких переддоговірних відносин.
        Наявність діалогу не детермінує виникнення правових зобов&apos;язань до моменту
        підписання фінального договору.
      </p>

      <p>
        <strong>6. Захист інтелектуальних активів</strong>
        <br />
        Усі структурні елементи, вербальні формулювання та авторські концепції є об&apos;єктами
        виключних прав власності. Будь-яка репродукція чи несанкціоноване поширення контенту
        тягне за собою юридичні санкції згідно з чинними нормами законодавства. Право на
        комерційну експлуатацію матеріалів належить виключно власнику ресурсу.
      </p>

      <p>
        <strong>7. Прикінцеві положення</strong>
        <br />
        Перебування на даному ресурсі засвідчує ваше беззастережне погодження з наведеною
        політикою. У разі виникнення будь-яких когнітивних заперечень щодо пунктів цього
        документа, користувач зобов&apos;язаний негайно припинити доступ до сайту.
      </p>
    </>
  )
}
