import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Shahariar Azim Aksad — Developer & AI Automation Builder',
  description:
    'Portfolio of Shahariar Azim Aksad — developer and AI automation builder based in Bangladesh.',
icons: {
  icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/icon.png`,
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

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shahariar Azim Aksad',
  url: 'https://aksadio.github.io/Shahariar-Azim-Aksad/',
  image: 'https://aksadio.github.io/Shahariar-Azim-Aksad/AboutPhoto.png',
  jobTitle: 'Developer & AI Automation Builder',
  description:
    'Shahariar Azim Aksad is a self-taught developer and AI automation builder based in Bangladesh.',
  knowsAbout: [
    'Python',
    'AI Automation',
    'Artificial Intelligence',
    'Web Development',
    'Software Development',
    'Prompt Engineering',
    'APIs',
    'No-code Automation',
  ],
  sameAs: [
    'https://github.com/Aksadio',
    'https://www.linkedin.com/in/shahariar-azim-aksad-69aaaa3b8/',
    'https://www.instagram.com/aksad.dev.io/',
    'https://x.com/Aksad_0',
    'https://t.me/Aksad_dev_io',
    'https://www.kaggle.com/shahariarazimaksad',
    'https://profile.edx.org/u/Aksadio',
    'https://www.credential.net/profile/shahariarazimaksad43941/wallet',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark">
      <head>
        <meta name="google-site-verification" content="SecYoPnqmizup0fdYZx9KHIj2z1R48W7V0E2Rvpv2kI" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

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
