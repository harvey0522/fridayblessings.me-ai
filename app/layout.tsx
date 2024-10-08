import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
let title = 'Friday Blessings AI Image Generator And Blogs';
let description = 'Generate your AI friday blessings in seconds';
let url = 'https://fridayblessings.me';
let ogimage = '/ogimage.png';
let sitename = 'fridayblessings.me';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
      <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-3RXVW86VCK}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3RXVW86VCK');
          `}
        </Script>
        <PlausibleProvider domain="fridayblessings.me" />
      </head>
      <body style={{ backgroundColor: '#E0F7FA', minHeight: '100vh' }} className={inter.className}>
        <Navbar />
        <main>
            {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );

}
