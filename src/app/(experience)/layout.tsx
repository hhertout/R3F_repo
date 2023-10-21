import type { Metadata } from 'next'
import { ReactNode, StrictMode } from 'react'

export const metadata: Metadata = {
  title: '3D experience',
  description: 'React three fiber experience',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div id="canvas-container" style={{ height: '100vh', width: '100vw' }}>
          <StrictMode>{children}</StrictMode>
        </div>
      </body>
    </html>
  )
}
