import './globals.css'

export const metadata = {
  title: 'My Professional Homepage',
  description: 'Next.js and Express Monorepo with Tailwind CSS',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  charset: 'UTF-8'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="antialiased text-gray-900 bg-white">{children}</body>
    </html>
  )
}