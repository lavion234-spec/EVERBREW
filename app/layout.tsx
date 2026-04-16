import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import { CartDrawer } from '@/components/layout/CartDrawer'
import { FloatingContact } from '@/components/layout/FloatingContact'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ibm',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070707',
}

export const metadata: Metadata = {
  title: {
    default: 'EVERBREW — Cerveja Artesanal Extrema | Santos/SP',
    template: '%s | EVERBREW',
  },
  description:
    'Cervejaria artesanal de Santos, SP. Cervejas hop-forward de intensidade extrema. Juicy IPA, Double IPA, Imperial Sour e muito mais. Entre para o EverClub e economize até 40%.',
  keywords: [
    'cerveja artesanal',
    'IPA',
    'Juicy IPA',
    'cervejaria Santos',
    'craft beer Brasil',
    'EverClub',
    'EverCoins',
    'cerveja hop-forward',
    'Everbrew',
  ],
  authors: [{ name: 'Cervejaria Everbrew', url: 'https://www.everbrew.com.br' }],
  creator: 'Cervejaria Everbrew',
  metadataBase: new URL('https://www.everbrew.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.everbrew.com.br',
    title: 'EVERBREW — Cerveja Artesanal Extrema',
    description:
      'Cervejaria artesanal de Santos, SP. Cervejas hop-forward de intensidade extrema. Entre para o EverClub.',
    siteName: 'Everbrew',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVERBREW — Cerveja Artesanal Extrema',
    description: 'Cerveja hop-forward de intensidade extrema. Santos/SP · Since 2017.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-void text-bone font-body antialiased">
        <CartDrawer />
        <FloatingContact />
        {children}
      </body>
    </html>
  )
}
