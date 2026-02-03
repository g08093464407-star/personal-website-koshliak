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

  // 🔑 SEO Title (Україна + переговори + Японія)
  title:
    "Переговори з японським бізнесом без культурних помилок | Volodymyr Koshliak",

  // 📝 SEO Description (сенс збережено, структура під Google)
  description:
    "Консультант з переговорів з японським бізнесом. Супроводжую українсько-японські бізнес-взаємодії, допомагаючи уникати культурних і комунікаційних помилок між Україною та Японією.",

  authors: [{ name: "Volodymyr Koshliak" }],
  creator: "Volodymyr Koshliak",
  publisher: "Volodymyr Koshliak",

  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    title:
      "Переговори з японським бізнесом без культурних помилок | Volodymyr Koshliak",
    description:
      "Супровід переговорів і бізнес-комунікації між Україною та Японією. Допомога українським компаніям у роботі з японськими партнерами.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Volodymyr Koshliak",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Україна ↔ Японія — переговори без культурних помилок",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Переговори з японським бізнесом без культурних помилок | Volodymyr Koshliak",
    description:
      "Консультації та супровід переговорів з японськими компаніями для українського бізнесу.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
