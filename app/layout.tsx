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

  title:
    "Переговори з японським бізнесом без культурних помилок | Володимир Кошляк",

  description:
    "Консультант з переговорів з японським бізнесом. Супроводжую українсько-японські бізнес-взаємодії, допомагаючи уникати культурних і комунікаційних помилок між Україною та Японією.",

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
      "Переговори з японським бізнесом без культурних помилок | Володимир Кошляк",
    description:
      "Супровід переговорів і бізнес-комунікації між Україною та Японією. Допомога українським компаніям у роботі з японськими партнерами.",
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
      "Переговори з японським бізнесом без культурних помилок | Володимир Кошляк",
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
        jobTitle: "Консультант з переговорів з японським бізнесом",
        knowsAbout: [
          "переговори з японським бізнесом",
          "бізнес-комунікація з Японією",
          "японська бізнес-культура",
          "міжкультурна комунікація",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Independent consultant",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}#service`,
        name: "Супровід переговорів з японським бізнесом",
        url: SITE_URL,
        image: "https://v.koshliak.com/images/2026-01-28%2012.17.25.jpg",
        email: "koshliak.volodymyr.office@gmail.com",
        areaServed: {
          "@type": "Country",
          name: "Україна",
        },
        provider: {
          "@id": `${SITE_URL}#person`,
        },
        serviceType: [
          "Супровід переговорів з японським бізнесом",
          "Бізнес-комунікація з Японією",
        ],
        availableLanguage: ["uk", "ja", "en"],
        location: {
          "@type": "Place",
          name: "Toyota, Aichi, Japan",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Toyota",
            addressRegion: "Aichi",
            addressCountry: "Japan",
          },
        },
      },
    ],
  }

  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
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
