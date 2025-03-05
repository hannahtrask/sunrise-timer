import type { Metadata } from 'next'
import React from 'react'
import { Providers } from '@/app/providers/indesx'
import { fonts } from '@/app/fonts'

export const metadata: Metadata = {
  title: 'Sunrise Timer :)',
  description: 'A NextJS app that will tell you when the sun comes up.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fonts.copse.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
