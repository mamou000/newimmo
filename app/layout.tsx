import './globals.css';

export const metadata = {
  title: 'NewImmo',
  description: 'Application immobilière nouvelle génération',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}