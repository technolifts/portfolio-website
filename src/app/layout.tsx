import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'

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
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}