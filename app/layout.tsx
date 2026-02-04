import React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // 🎯 Гібридний SEO-title: перекладач + переговори + експертність
  title:
    "Японський перекладач для бізнес-переговорів | Консультант з комунікації — Володимир Кошляк",

  // 🧠 Гібридний description: ловить пошук і пояснює рівень
  description:
    "Японський перекладач для бізнес-переговорів і консультант з міжкультурної комунікації. Супроводжую переговори з японськими компаніями, допомагаючи українському бізнесу уникати мовних і культурних помилок.",

  authors: [{ name: "Володимир Кошляк" }],
  creator: "Володимир Кошляк",
  publisher: "Володимир Кошляк",

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    google: "dwOom22JIus2FwpnqKf04DhmwFC7PprQ6NRBtx0SgXY",
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    title:
      "Японський перекладач для бізнес-переговорів | Консультант — Володимир Кошляк",
    description:
      "Супровід переговорів і бізнес-комунікації між Україною та Японією. Переклад, контекст і культурна точність у роботі з японськими партнерами.",
    url: SITE_URL,
    siteName: "Володимир Кошляк",
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
      "Японський перекладач для бізнес-переговорів | Консультант — Володимир Кошляк",
    description:
      "Переклад і супровід бізнес-переговорів з японськими компаніями для українського бізнесу.",
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
  const postalAddress = {
    "@type": "PostalAddress",
    addressLocality: "Toyota",
    addressRegion: "Aichi",
    addressCountry: "Japan",
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}#person`,
        name: "Володимир Кошляк",
        url: SITE_URL,
        image: "https://v.koshliak.com/images/2026-01-28%2012.17.25.jpg",
        email: "koshliak.volodymyr.office@gmail.com",
        sameAs: ["https://www.linkedin.com/in/volodymyr-koshliak-b790383a9/"],
        jobTitle:
          "Японський перекладач для бізнес-переговорів / консультант з комунікації",
        knowsAbout: [
          "японсько-український переклад",
          "бізнес-переговори з японськими компаніями",
          "бізнес-комунікація з Японією",
          "японська бізнес-культура",
          "міжкультурна комунікація",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}#service`,
        name: "Супровід переговорів з японським бізнесом",
        url: SITE_URL,
        image: "https://v.koshliak.com/images/2026-01-28%2012.17.25.jpg",
        email: "koshliak.volodymyr.office@gmail.com",
        address: postalAddress,
        areaServed: {
          "@type": "Country",
          name: "Україна",
        },
        provider: {
          "@id": `${SITE_URL}#person`,
        },
        serviceType: [
          "Японський перекладач для бізнес-переговорів",
          "Супровід переговорів з японським бізнесом",
          "Бізнес-комунікація з Японією",
        ],
        availableLanguage: ["uk", "ja", "en"],
        location: {
          "@type": "Place",
          name: "Toyota, Aichi, Japan",
          address: postalAddress,
        },
      },
    ],
  }

  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  )
}
