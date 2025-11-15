import './globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata} from 'next'
import Header from '@/app/components/Header'
import {industry} from './fonts'
import FooterSection from './components/FooterSection'
import {SanityLive} from '@/sanity/lib/live'
import {VisualEditing} from 'next-sanity'
import DraftModeToast from './components/DraftModeToast'
import {draftMode} from 'next/headers'
import {Toaster} from 'sonner'
import {handleError} from './client-utils'

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

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const {isEnabled: isDraftMode} = await draftMode()

  return (
    <html lang="de" className={`${industry.variable} bg-white text-black`}>
      <body className={industry.className}>
        <Header />
        <main>{children}</main>
        <FooterSection />
        <SpeedInsights />
        <Toaster />
        {isDraftMode && (
          <>
            <DraftModeToast />
            {/*  Enable Visual Editing, only to be rendered when Draft Mode is enabled */}
            <VisualEditing />
          </>
        )}
        {/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
        <SanityLive onError={handleError} />
      </body>
    </html>
  )
}
