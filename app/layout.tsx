import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rahul | Portfolio',
  description: 'Portfolio created by Rahul Arora',
  icons: '/logo/white.png',
  openGraph: {
    type: 'website',
    siteName: 'Personal Portfolio',
    title: 'Portfolio',
    url: 'https://asset.cloudinary.com/da1qp92zl/57ba5bfa494bb32d3cf53e1f473360be',
    description: 'Personalised Portfolio created by Developer Rahul Arora',
  },
  alternates: {
    canonical: 'https://Rahul.snapbit.in'
  },
  twitter: {
    creator: '@UjjvalP06',
    images: 'https://asset.cloudinary.com/da1qp92zl/57ba5bfa494bb32d3cf53e1f473360be',
    site: '@site',
    title: 'Rahul | Portfolio',
    description: 'Personalised Portfolio created by Developer Rahul Arora',
    card: 'summary_large_image',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
