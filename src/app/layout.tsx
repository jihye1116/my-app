import Header from '@/app/common/Header'
import './globals.css'
import Footer from '@/app/common/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  )
}
