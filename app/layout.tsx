import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NewImmo - Immobilier Nouvelle Génération',
  description: 'Découvrez une nouvelle approche de l\'immobilier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <div className="grid-bg min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}