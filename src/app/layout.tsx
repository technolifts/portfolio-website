// src/app/layout.tsx
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WelcomeAnimation from '@/components/WelcomeAnimation'
import '@/styles/globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryan Carroll - Security & Software Engineer',
  description: 'Personal portfolio showcasing projects, experience, and thoughts on security and software engineering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-200`}>
        <WelcomeAnimation />
        <Header />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          {children}
          <SpeedInsights />
        </div>
        <Footer />
      </body>
    </html>
  )
}
