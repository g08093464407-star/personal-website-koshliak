"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Calendar, ArrowRight, MessageSquare, X } from "lucide-react"

const TO_EMAIL = "koshliak.volodymyr.office@gmail.com"

/* ---------------- helpers ---------------- */

function buildMailto({
  to,
  subject,
  body,
}: {
  to: string
  subject: string
  body: string
}) {
  const s = encodeURIComponent(subject)
  const b = encodeURIComponent(body)
  return `mailto:${to}?subject=${s}&body=${b}`
}

function formatDateTimeUA(value: string) {
  // value like "2026-01-26T17:30"
  // keep it simple and stable
  if (!value) return ""
  const [date, time] = value.split("T")
  if (!date || !time) return value
  return `${date} ${time}`
}

/* ---------------- modal ---------------- */

function Modal({
  title,
  open,
  onClose,
  children,
}: {
  title: string
  open: boolean
  onClose: () => void
  children: React.ReactNode
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

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-6 py-10"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Закрити"
      />

      <div className="relative w-full max-w-2xl rounded-2xl border border-border bg-background shadow-xl">
        <div className="flex items-start justify-between gap-6 p-6 md:p-8 border-b border-border">
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -m-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Закрити"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 md:p-8">{children}</div>
      </div>
    </div>
  )
}

/* ---------------- main component ---------------- */

export function Contact() {
  // Quick message accordion
  const [quickOpen, setQuickOpen] = useState(false)

  // Quick message fields
  const [qmEmail, setQmEmail] = useState("")
  const [qmName, setQmName] = useState("")
  const [qmMessage, setQmMessage] = useState("")
  const [qmStatus, setQmStatus] = useState<null | "success" | "error">(null)

  // Schedule modal
  const [scheduleOpen, setScheduleOpen] = useState(false)
  const [schName, setSchName] = useState("")
  const [schEmail, setSchEmail] = useState("")
  const [schDateTime, setSchDateTime] = useState("")
  const [schNotes, setSchNotes] = useState("")
  const [schStatus, setSchStatus] = useState<null | "success" | "error">(null)

  const emailHelper = "Для першого контакту та уточнення запиту"
  const calendarHelper = "Коротка ознайомча розмова, без зобов’язань"

  const quickMailto = useMemo(() => {
    const subject = "Швидке повідомлення"
    const body =
      `Ім’я: ${qmName || "-"}\n` +
      `Email: ${qmEmail || "-"}\n\n` +
      `Коротко про ваш запит:\n${qmMessage || "-"}\n`
    return buildMailto({ to: TO_EMAIL, subject, body })
  }, [qmEmail, qmName, qmMessage])

  const scheduleMailto = useMemo(() => {
    const subject = "Домовитися про розмову"
    const body =
      `Ім’я: ${schName || "-"}\n` +
      `Email: ${schEmail || "-"}\n` +
      `Запропонована дата і час: ${formatDateTimeUA(schDateTime) || "-"}\n\n` +
      `Коментар (за потреби):\n${schNotes || "-"}\n`
    return buildMailto({ to: TO_EMAIL, subject, body })
  }, [schName, schEmail, schDateTime, schNotes])

  function handleQuickSubmit() {
    setQmStatus(null)
    const ok = qmEmail.trim() && qmName.trim() && qmMessage.trim()
    if (!ok) {
      setQmStatus("error")
      return
    }
    try {
      window.location.href = quickMailto
      setQmStatus("success")
    } catch {
      setQmStatus("error")
    }
  }

  function handleScheduleSubmit() {
    setSchStatus(null)
    const ok = schEmail.trim() && schName.trim() && schDateTime.trim()
    if (!ok) {
      setSchStatus("error")
      return
    }
    try {
      window.location.href = scheduleMailto
      setSchStatus("success")
    } catch {
      setSchStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="py-10 md:py-16 px-6 border-t border-border overflow-x-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm font-mono text-muted-foreground">📞</span>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Обговорити запит
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* LEFT */}
          <div className="relative min-w-0">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
              Як зі мною зв’язатися
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed min-w-0">
              <p>
                Перший контакт — це спосіб зрозуміти, чи має сенс подальша розмова. Якщо у вас є
                конкретний запит, коротко опишіть ситуацію: з ким ви плануєте взаємодіяти в Японії,
                на якому етапі перебуває проєкт і що саме викликає труднощі або сумніви.
              </p>
            </div>

            {/* IMAGE (smaller, no border, no crop) */}
            <div className="hidden md:block mt-20">
              <Image
                src="/images/123.png"
                alt=""
                width={440}
                height={335}
                className="rounded-xl grayscale opacity-70"
                priority={false}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 sm:space-y-6 min-w-0">
            {/* Email */}
            <Link
              href={`mailto:${TO_EMAIL}`}
              className="w-full max-w-full overflow-hidden flex items-center gap-3 sm:gap-4 p-3 sm:p-5 border border-border rounded-lg hover:bg-secondary transition-colors group"
            >
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-muted transition-colors">
                <Mail className="h-5 w-5 text-foreground" />
              </div>

              <div className="min-w-0 flex-1 overflow-hidden">
                <p className="font-medium text-foreground">Написати на пошту</p>

                {/* email: allow wrapping; prevent iOS flex overflow */}
                <p className="text-sm text-muted-foreground break-all">
                  {TO_EMAIL}
                </p>

                <p className="text-xs text-muted-foreground mt-1">
                  {emailHelper}
                </p>
              </div>

              <ArrowRight className="shrink-0 h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>

            {/* Schedule -> opens modal with date/time */}
            <button
              type="button"
              onClick={() => {
                setSchStatus(null)
                setScheduleOpen(true)
              }}
              className="w-full max-w-full overflow-hidden text-left flex items-center gap-3 sm:gap-4 p-3 sm:p-5 border border-border rounded-lg hover:bg-secondary transition-colors group"
            >
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-muted transition-colors">
                <Calendar className="h-5 w-5 text-foreground" />
              </div>

              <div className="min-w-0 flex-1 overflow-hidden">
                <p className="font-medium text-foreground">
                  Домовитися про розмову
                </p>
                <p className="text-sm text-muted-foreground break-words">
                  (приблизно 30 хвилин)
                </p>
                <p className="text-xs text-muted-foreground mt-1 break-words">
                  {calendarHelper}
                </p>
              </div>

              <ArrowRight className="shrink-0 h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>

            {/* Quick message -> accordion */}
            <div className="border border-border rounded-lg overflow-hidden w-full max-w-full">
              <button
                type="button"
                onClick={() => {
                  setQmStatus(null)
                  setQuickOpen((v) => !v)
                }}
                className="w-full max-w-full overflow-hidden flex items-center gap-3 sm:gap-4 p-3 sm:p-5 hover:bg-secondary transition-colors group"
              >
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-muted transition-colors">
                  <MessageSquare className="h-5 w-5 text-foreground" />
                </div>

                <div className="min-w-0 flex-1 overflow-hidden">
                  <p className="font-medium text-foreground">
                    Швидке повідомлення
                  </p>
                  <p className="text-sm text-muted-foreground break-words">
                    {quickOpen ? "Згорнути форму" : "Розгорнути форму"}
                  </p>
                </div>

                <ArrowRight
                  className={`shrink-0 h-5 w-5 text-muted-foreground group-hover:text-foreground transition-transform ${
                    quickOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              {quickOpen && (
                <div className="p-3 sm:p-5 border-t border-border bg-background w-full max-w-full overflow-hidden">
                  <div className="space-y-4 min-w-0">
                    <div className="min-w-0">
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Email
                      </label>
                      <p className="text-xs text-muted-foreground mb-2 break-words">
                        {emailHelper}
                      </p>
                      <input
                        value={qmEmail}
                        onChange={(e) => setQmEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full max-w-full min-w-0 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Як я можу до вас звертатись?
                      </label>
                      <input
                        value={qmName}
                        onChange={(e) => setQmName(e.target.value)}
                        placeholder="Ім’я або ім’я та прізвище"
                        className="w-full max-w-full min-w-0 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Message
                      </label>
                      <p className="text-xs text-muted-foreground mb-2 break-words">
                        Коротко про ваш запит
                      </p>
                      <textarea
                        value={qmMessage}
                        onChange={(e) => setQmMessage(e.target.value)}
                        placeholder="З ким планується взаємодія в Японії, на якому етапі перебуває проєкт і що саме викликає складнощі"
                        rows={4}
                        className="w-full max-w-full min-w-0 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleQuickSubmit}
                      className="w-full inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      Надіслати запит
                    </button>

                    {qmStatus === "success" && (
                      <p className="text-sm text-muted-foreground break-words">
                        Дякую. Я ознайомлюся з вашим запитом і відповім найближчим часом.
                      </p>
                    )}

                    {qmStatus === "error" && (
                      <p className="text-sm text-muted-foreground break-words">
                        Повідомлення не було надіслано. Спробуйте ще раз. Дякую.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Location */}
            <div className="pt-6 border-t border-border min-w-0">
              <p className="text-sm text-muted-foreground mb-3">
                Локація
              </p>
              <p className="text-foreground break-words">
                Japan, Aichi Pref., Toyota
              </p>
              <p className="text-muted-foreground text-sm mt-1 break-words">
                Фокус: Україна ↔ Японія
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Modal */}
      <Modal
        title="Домовитися про розмову"
        open={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
      >
        <div className="space-y-4 min-w-0">
          <p className="text-sm text-muted-foreground break-words">
            {calendarHelper}
          </p>

          <div className="min-w-0">
            <label className="block text-sm font-medium text-foreground mb-1">
              Email
            </label>
            <p className="text-xs text-muted-foreground mb-2 break-words">
              {emailHelper}
            </p>
            <input
              value={schEmail}
              onChange={(e) => setSchEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full max-w-full min-w-0 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="min-w-0">
            <label className="block text-sm font-medium text-foreground mb-1">
              Як я можу до вас звертатись?
            </label>
            <input
              value={schName}
              onChange={(e) => setSchName(e.target.value)}
              placeholder="Ім’я або ім’я та прізвище"
              className="w-full max-w-full min-w-0 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="min-w-0">
            <label className="block text-sm font-medium text-foreground mb-1">
              Оберіть дату і час
            </label>
            <input
              type="datetime-local"
              value={schDateTime}
              onChange={(e) => setSchDateTime(e.target.value)}
              className="w-full max-w-full min-w-0 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="min-w-0">
            <label className="block text-sm font-medium text-foreground mb-1">
              Коротко про ваш запит (опційно)
            </label>
            <textarea
              value={schNotes}
              onChange={(e) => setSchNotes(e.target.value)}
              placeholder="З ким планується взаємодія в Японії, на якому етапі перебуває проєкт і що саме викликає складнощі"
              rows={4}
              className="w-full max-w-full min-w-0 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <button
            type="button"
            onClick={handleScheduleSubmit}
            className="w-full inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Надіслати запит
          </button>

          {schStatus === "success" && (
            <p className="text-sm text-muted-foreground break-words">
              Дякую. Я ознайомлюся з вашим запитом і відповім найближчим часом.
            </p>
          )}

          {schStatus === "error" && (
            <p className="text-sm text-muted-foreground break-words">
              Повідомлення не було надіслано. Спробуйте ще раз. Дякую.
            </p>
          )}
        </div>
      </Modal>
    </section>
  )
}
