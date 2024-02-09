import type { Metadata } from 'next'
import { memo } from 'react'
import './normalize.css'
import './globals.css'
import Header from '@/ui/Header'
import Footer from '@/ui/Footer'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import {
  BASE_META,
  getWebsiteSchema,
  getNavigationSchema,
} from '@/utils/metadata'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: `${BASE_META.author} %s`,
    default: BASE_META.title,
  },
  description: BASE_META.description,
  openGraph: {
    type: 'website',
    url: BASE_META.siteUrl,
    siteName: BASE_META.siteName,
    title: BASE_META.title,
    description: BASE_META.description,
    images: [
      {
        url: '/icons/org.png',
        height: 630,
        width: 1200,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: BASE_META.title,
    description: BASE_META.description,
    site: BASE_META.siteUrl,
    creator: BASE_META.twitterUser,
    images: [{ url: '/icons/org.png', alt: BASE_META.title }],
  },
}

const Layout = memo(function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nextCookies = cookies()

  const colorMode =
    (nextCookies.get('theme')?.value as undefined | 'light' | 'dark') || 'dark'

  return (
    <html lang="en" data-theme={colorMode}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <>
        <body className={inter.className} suppressHydrationWarning={true}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: getWebsiteSchema() }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: getNavigationSchema() }}
          />
          <Header colorMode={colorMode} />
          {children}
          <Footer />
        </body>
      </>
    </html>
  )
})
export default Layout
