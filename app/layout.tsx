import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Subhadip Bera - CSE AI Student & Developer',
  description: 'Portfolio of Subhadip Bera, CSE AI student at RCCIIT Kolkata, showcasing AI projects and web development skills',
  keywords: 'AI student, machine learning, web developer, React, Python, CSE, RCCIIT',
  authors: [{ name: 'Subhadip Bera' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}