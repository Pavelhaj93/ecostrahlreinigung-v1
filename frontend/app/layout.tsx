import './globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata} from 'next'
import Header from '@/app/components/Header'
import {industry} from './fonts'
import Footer from './components/Footer'
import FooterSection from './components/FooterSection'

export const metadata: Metadata = {
  title: 'Ecostrahlreinigung - Mobile Reinigungsservices in Bayern',
  description:
    'Professionelle Trockeneisreinigung, Laserreinigung und Sandstrahlen in Bayern. Mobile und umweltfreundliche Reinigungsdienstleistungen.',
  keywords: [
    'Trockeneisreinigung',
    'Laserreinigung',
    'Sandstrahlen',
    'Bayern',
    'Reinigung',
    'Mobile Reinigung',
  ],
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" className={`${industry.variable} bg-white text-black`}>
      <body className={industry.className}>
        <Header />
        <main>{children}</main>
        <FooterSection />
        <SpeedInsights />
      </body>
    </html>
  )
}
