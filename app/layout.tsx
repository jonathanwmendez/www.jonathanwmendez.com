import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jonathan W. Mendez',
  description: 'The personal website of Jonathan Mendez',
  keywords: 'Jonathan Mendez, Jonathan W. Mendez, Jonathan, Mendez, W. Mendez, html, css, javascript, typescript, react, next.js, web development, web design, software, engineer, software engineer, developer, professional, professional musician, music, musician, brass, low brass, trombone, tenor trombone, bass trombone, tuba, euphonium, composer, arranger, educator, teacher, private lessons, private music lessons, music lessons, bootstrap,',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
