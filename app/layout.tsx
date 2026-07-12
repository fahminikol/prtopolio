import type React from "react"
import type { Metadata } from "next"
import { League_Spartan } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import NoiseOverlay from "@/components/noise-overlay"
import VibePlayer from "@/components/vibe-player"
import "./globals.css"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-league-spartan",
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Muhammad Fahmi Avattar | Front-end Engineer | Web Developer & UI/UX Designer in Bandar Lampung",
    template: "%s | Muhammad Fahmi Avattar"
  },
  description:
    "Transforming complex problems into elegant web experiences. Explore the portfolio of Muhammad Fahmi Avattar, a Front-end Engineer | Web Developer based in Lampung Barat, Indonesia.",
  keywords: [
    "Muhammad Fahmi Avattar", 
    "Who is Muhammad Fahmi Avattar",
    "Muhammad Fahmi", 
    "Avattar", 
    "Muhammad Fahmi Avattar Portfolio", 
    "Portofolio Muhammad Fahmi Avattar Universitas Teknokrat Indonesia",
    "Fahmi lambar",
    "UI/UX Designer Indonesia", 
    "Frontend Developer Indonesia",
    "Frontend Engineer", 
    "Web Developer Bandar Lampung",
    "Frontend Developer Bandar Lampung",
    "Frontend Engineer Bandar Lampung",
    "Software Engineer Bandar Lampung",
    "Programmer Bandar Lampung",
    "UI/UX Designer Bandar lampung",
    "React Ecosystem Developer",
    "Interactive Web Design",
    "Next.js Developer"
  ],
  authors: [{ name: "Muhammad Fahmi Avattar", url: "https://fahmi.my.id" }],
  creator: "Muhammad Fahmi Avattar",
  publisher: "Muhammad Fahmi Avattar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fahmi.my.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://fahmi.my.id",
    title: "Muhammad Fahmi Avattar | Front-end Engineer in Bandar Lampung",
    description:
      "Transforming complex problems into elegant web experiences. Explore the portfolio of Muhammad Fahmi Avattar, a Front-end Engineer based in Bandar Lampung blending the React ecosystem with immersive design.",
    siteName: "Muhammad Fahmi Avattar Portfolio",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Fahmi Avattar - Frontend Engineer & UI/UX Designer',
      },
    ],
    firstName: "Gusti",
    lastName: "Fahmi Avattar",
    username: "Fahmi",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Fahmi Avattar | Front-end Engineer & UI/UX Designer",
    description: "Transforming complex problems into elegant web experiences. Explore the portfolio of Muhammad Fahmi Avattar.",
    images: ['/og-image.png'],
    creator: '@3Br4n',
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "VaPDMhXb57mnJ9x602y0gB3nvsWj1IFntRvYYI3vasc",
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a1918',
}

import { Toaster } from 'sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://fahmi.my.id",
                "name": "Muhammad Fahmi Avattar Portfolio",
                "description": "Portfolio of Muhammad Fahmi Avattar, a Front-end Engineer and UI/UX Designer.",
                "publisher": {
                  "@type": "Person",
                  "name": "Muhammad Fahmi Avattar"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "dateCreated": "2024-01-01T00:00:00+07:00",
                "dateModified": new Date().toISOString(),
                "mainEntity": {
                  "@type": "Person",
                  name: "Muhammad Fahmi Avattar",
                  url: "https://fahmi.my.id",
                  jobTitle: "Front-end Developer | Web Developer | UI/UX Designer",
                  image: "https://fahmi.my.id/saya-versi-ai.png",
                  sameAs: [
                    "#", 
                    "#/",
                    "https://www.instagram.com/fahmi.vntg?igsh=ZHEyaWZnNmVkM2R1/"
                  ],
                  description:
                    "Muhammad Fahmi Avattar is a passionate Front-end Developer and UI/UX Designer specializing in building immersive web applications with the React ecosystem and modern web technologies.",
                  knowsAbout: [
                    "UI/UX Design",
                    "Front-end Development",
                    "React Ecosystem",
                    "Next.js",
                    "React Native Expo",
                    "AstroJs",
                    "Angular",
                    "TypeScript",
                    "Tailwind CSS",
                    "Creative Coding",
                    "GSAP Animation",
                    "Web Developer"
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Bandar Lampung",
                    addressRegion: "East Java",
                    addressCountry: "Indonesia"
                  }
                }
              }
            ]),
          }}
        />
      </head>
      <body className={`${leagueSpartan.variable} font-sans antialiased`}>
        <NoiseOverlay />
        <VibePlayer />
        {children}
        <Toaster position="top-center" richColors theme="dark" />
        <Analytics />
      </body>
    </html>
  )
}
