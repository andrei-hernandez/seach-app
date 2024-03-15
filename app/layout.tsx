import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './styles/globals.sass'
import React from 'react'
import { Providers } from '@/app/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Indexed Search Examples',
  description: 'A collection of examples of indexed search'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
