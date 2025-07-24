import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Rockfield Tennis Club',
    default:
      'Rockfield Tennis Club - Premier Tennis Club in Ireland',
  },
  description:
    'Rockfield Tennis Club was established in 1983 and we are a local community club that prides ourselves on our open and friendly atmosphere. We are a multi-surface facility offering artificial clay courts, astro and hard courts.',
  icons: {
    icon: [
      {
        url: process.env.NODE_ENV === 'production' ? '/rockfield-tennis-club-website/favicon.ico' : '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: process.env.NODE_ENV === 'production' ? '/rockfield-tennis-club-website/RockfieldLogo.webp' : '/RockfieldLogo.webp',
        type: 'image/webp',
      },
    ],
    shortcut: [
      {
        url: process.env.NODE_ENV === 'production' ? '/rockfield-tennis-club-website/favicon.ico' : '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    apple: [
      {
        url: process.env.NODE_ENV === 'production' ? '/rockfield-tennis-club-website/RockfieldLogo.webp' : '/RockfieldLogo.webp',
        type: 'image/webp',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
