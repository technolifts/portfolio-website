// src/app/layout.tsx
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WelcomeAnimation from '@/components/WelcomeAnimation'
import ParticleBackground from '@/components/ParticleBackground'
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
      <body className={`${inter.className} text-gray-200 bg-black`}>
        <WelcomeAnimation />
        <ParticleBackground />
        <Header />
        <div className="min-h-screen animated-gradient">
          {children}
          <SpeedInsights />
        </div>
        <Footer />
      </body>
    </html>
  )
}
