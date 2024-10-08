import type { Metadata } from "next";
import './globals.css'
import { ReactNode } from "react";
import { Roboto_Flex as Roboto, Bai_Jamjuree as Baijamjuree, } from 'next/font/google';

const roboto = Roboto({subsets: ['latin'], variable: '--font-roboto'})

const baiJamjuree = Baijamjuree({
  subsets: ['latin'],
  variable: '--font-baiJamjuree',
  weight: '700'
})

export const metadata: Metadata = {
  title: 'Space Time',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript'
}

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
