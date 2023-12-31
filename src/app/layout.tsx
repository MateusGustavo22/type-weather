import './globals.css'
import type { Metadata } from 'next'

import { Nunito } from 'next/font/google'

const nunito = Nunito({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Type Weather',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} bg-base-gray-900`}>
        <div className="m-auto  flex max-w-[1400px] flex-col items-center bg-base-gray-900 pb-6">
          {children}
        </div>
      </body>
    </html>
  )
}
