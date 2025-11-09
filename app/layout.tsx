import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { clsx } from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bhanu Reddy.M | Portfolio',
  description: 'Portfolio of Bhanu Reddy.M — Generative AI & Secure Distributed Systems',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={clsx(inter.className, 'bg-neutral-950 text-neutral-100 antialiased')}>{children}</body>
    </html>
  )
}
