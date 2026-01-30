import React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),

  title: "Успішний українсько-японський бізнес без культурних помилок",
  description:
    "Супроводжую українсько-японські бізнес-взаємодії, допомагаючи сторонам уникати культурних і комунікаційних помилок. Працюю на стику мов, контекстів і бізнес-рішень між Україною та Японією.",
  generator: "v0.app",

  openGraph: {
    type: "website",
    locale: "uk_UA",
    title: "Успішний українсько-японський бізнес без культурних помилок",
    description:
      "Супроводжую українсько-японські бізнес-взаємодії, допомагаючи сторонам уникати культурних і комунікаційних помилок.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Україна ↔ Японія — консультації без культурних помилок",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Успішний українсько-японський бізнес без культурних помилок",
    description:
      "Супроводжую українсько-японські бізнес-взаємодії, допомагаючи сторонам уникати культурних і комунікаційних помилок.",
    images: ["/og.png"],
  },

  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  )
}
