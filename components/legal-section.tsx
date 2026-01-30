"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

type ModalType = null | "ethics" | "privacy"

export function LegalSection() {
  const [open, setOpen] = useState<ModalType>(null)

  return (
    <>
      <section className="px-6 py-14 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border p-6 bg-muted/10">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Юридично-етичні застереження
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Межі відповідальності, відсутність гарантій, конфіденційність, конфлікт інтересів і формат взаємодії.
              </p>
              <button
                type="button"
                onClick={() => setOpen("ethics")}
                className="text-sm underline text-muted-foreground hover:text-foreground transition-colors"
              >
                Читати повністю
              </button>
            </div>

            <div className="rounded-xl border border-border p-6 bg-muted/10">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Політика конфіденційності та умови використання
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Регулятивний статус ресурсу, умови використання, відповідальність, конфіденційність та захист інтелектуальних активів.
              </p>
              <button
                type="button"
                onClick={() => setOpen("privacy")}
                className="text-sm underline text-muted-foreground hover:text-foreground transition-colors"
              >
                Читати повністю
              </button>
            </div>
          </div>
        </div>
      </section>

      <LegalModal open={open} onClose={() => setOpen(null)} />
    </>
  )
}

function LegalModal({
  open,
  onClose,
}: {
  open: ModalType
  onClose: () => void
}) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open) return null

  const title =
    open === "ethics"
      ? "Юридично-етичні застереження"
      : "Політика конфіденційності та умови використання"

  return (
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center px-6 py-10"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Закрити модальне вікно"
      />

      <div className="relative w-full max-w-3xl rounded-2xl border border-border bg-background shadow-xl">
        <div className="flex items-start justify-between gap-6 p-6 md:p-8 border-b border-border">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="p-2 -m-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Закрити"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[70vh] overflow-auto text-sm leading-relaxed text-muted-foreground">
          {open === "privacy" ? <PrivacyContent /> : <EthicsContent />}
        </div>

        <div className="p-6 md:p-8 border-t border-border flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium
                       text-foreground transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  )
}

/* ======================== CONTENT (AS-IS) ======================== */

function PrivacyContent() {
  return (
    <div className="space-y-5">
      <h3 className="text-foreground font-semibold">
        Політика конфіденційності та умови використання
      </h3>

      <div className="space-y-3">
        <p className="text-foreground font-medium">1. Преамбула та регулятивний статус</p>
        <p>
          Даний веб-ресурс функціонує виключно як інформаційний майданчик і не становить собою публічну оферту або інший вид зобов&apos;язального правочину.
          Використання контенту сайту є фактичним акцептуванням умов даної детермінації у повному обсязі у межах чинного законодавства.
          Власник зберігає за собою ексклюзивну прерогативу вносити односторонні зміни до цього документа без жодної попередньої диспозиції.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-foreground font-medium">2. Кваліфікація та верифікація контенту</p>
        <p>
          Усі аналітичні матеріали та дескрипції методологій мають виключно декларативний характер і не можуть бути кваліфіковані як:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>юридична або професійна експертиза;</li>
          <li>фінансова предикція чи інвестиційна настанова;</li>
          <li>
            гарантована пропозиція щодо результативності майбутніх кейсів.
            Будь-яка імплементація отриманих відомостей здійснюється користувачем на засадах повної автономії та персональної відповідальності.
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <p className="text-foreground font-medium">3. Екзонерація та лімітація відповідальності</p>
        <p>
          Власник ресурсу дезавуює будь-яку каузальну відповідальність за прямі чи опосередковані збитки, включаючи ерозію ділової репутації чи фінансову дефіцитність.
          Власник ресурсу не пропонує жодних гарантій щодо безперервності сервісу або абсолютизації актуальності даних.
          Взаємодія з третіми особами на основі контенту сайту є сферою вашої особистої дискреції.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-foreground font-medium">4. Регламентація конфіденційності</p>
        <p>
          Обробка даних здійснюється виключно в межах пре-контрактної оцінки перспективності запиту.
          Власник ресурсу не гарантує абсолютну цілісність даних під час транзиту через глобальну мережу, проте забезпечує внутрішню протекцію від несанкціонованої проліферації інформації.
          Службова комунікація підлягає архівуванню з метою внутрішньої валідації облікових процесів.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-foreground font-medium">5. Безумовне право на відмову та конфлікт інтересів</p>
        <p>
          Власник зберігає за собою право на одностороннє припинення комунікації без надання будь-якої аргументації чи обґрунтування.
          Виявлення конфлікту інтересів або етичної амбівалентності є підставою для негайної термінації будь-яких переддоговірних відносин.
          Наявність діалогу не детермінує виникнення правових зобов&apos;язань до моменту підписання фінального договору.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-foreground font-medium">6. Захист інтелектуальних активів</p>
        <p>
          Усі структурні елементи, вербальні формулювання та авторські концепції є об&apos;єктами виключних прав власності.
          Будь-яка репродукція чи несанкціоноване поширення контенту тягне за собою юридичні санкції згідно з чинними нормами законодавства.
          Право на комерційну експлуатацію матеріалів належить виключно власнику ресурсу.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-foreground font-medium">7. Прикінцеві положення</p>
        <p>
          Перебування на даному ресурсі засвідчує ваше беззастережне погодження з наведеною політикою.
          У разі виникнення будь-яких когнітивних заперечень щодо пунктів цього документа, користувач зобов&apos;язаний негайно припинити доступ до сайту.
        </p>
      </div>
    </div>
  )
}

function EthicsContent() {
  return (
    <div className="space-y-5">
      <h3 className="text-foreground font-semibold">Юридично-етичні застереження</h3>

      <div className="space-y-2">
        <p className="text-foreground font-medium">Межі відповідальності</p>
        <p>
          Моя робота полягає в аналітичному, комунікаційному та стратегічному супроводі.
          Я не приймаю рішень замість сторін і не можу гарантувати конкретний результат переговорів.
          Остаточні рішення, а також відповідальність за їх реалізацію, завжди залишаються за сторонами співпраці.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-foreground font-medium">Відсутність гарантій результату</p>
        <p>
          У японському бізнесі на процес ухвалення рішень впливає багато факторів, більшість з яких перебувають поза зоною прямого контролю.
          Тому жодні домовленості, прогнози чи оцінки не можуть розглядатися як гарантія позитивного результату.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-foreground font-medium">Конфіденційність</p>
        <p>
          Уся інформація, отримана в межах співпраці, розглядається як конфіденційна.
          Я не передаю дані третім особам і не використовую матеріали клієнта без попередньої згоди.
          Збереження довіри є обов’язковою умовою моєї роботи.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-foreground font-medium">Конфлікт інтересів</p>
        <p>
          Я залишаю за собою право відмовитися від співпраці у випадку потенційного конфлікту інтересів або ситуації, що може зашкодити будь-якій зі сторін.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-foreground font-medium">Формат взаємодії</p>
        <p>
          Умови співпраці, обсяг робіт і фінансові питання узгоджуються індивідуально до початку роботи.
          Я не працюю без чітко визначених рамок і взаємного розуміння очікувань.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-foreground font-medium">Підсумок</p>
        <p>
          Ці застереження існують не для обмеження співпраці, а для того, щоб вона залишалася прозорою, професійною та передбачуваною для всіх сторін.
        </p>
      </div>
    </div>
  )
}
