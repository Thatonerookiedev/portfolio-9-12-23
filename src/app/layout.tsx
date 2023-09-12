import '../styles/CompiledCss/index.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainWrapper from '@/wrappers/mainwrapper'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shatoria Giles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainWrapper>
          {children}
        </MainWrapper>
      </body>
    </html>
  )
}
