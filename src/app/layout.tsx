import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'UniPath — Apply to University in One Click',
  description: 'South Africa free AI-powered career guidance and university application platform for Grade 12 learners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: '12px',
              background: '#1e3a5f',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}
