import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'AKSAD',
  description:
    'Portfolio of Shahariar Azim Aksad — developer and AI automation builder.',
  icons: {
    icon: '/icon.png',
  },
}

const themeBootstrap = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark">
      <head>
        <meta name="google-site-verification" content="RCGti8KqrdMB-rFoGLOlpAXyg9eD7MDu7JccXZsHUrc" />
        <script
          dangerouslySetInnerHTML={{ __html: themeBootstrap }}
        />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
