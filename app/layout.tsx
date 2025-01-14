import './globals.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#4379FF',
};

export const metadata = {
  title: 'ByeDispute Blog | Stripe Chargeback Protection',
  description: 'Learn how to prevent chargebacks, how to accept payments online, and keep your Stripe account in good standing',
  applicationName: 'ByeDispute',
  authors: [{ name: 'Jean-Baptiste BERRY' }],
  creator: 'Jean-Baptiste BERRY',
  publisher: 'Jean-Baptiste BERRY',
  keywords: 'ByeDispute',
  openGraph: {
    title: 'ByeDispute',
    description: 'Prevent disputes before they happen. The best Stripe chargeback protection tool.',
    url: 'https://byedispute.com/">',
    site_name: 'ByeDispute',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@marc_louvion',  // Remplacez par le nom d'utilisateur Twitter réel
    title: 'ByeDispute',
    description: 'Prevent disputes before they happen. The best Stripe chargeback protection tool.',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="light" className="__className_73f86d">
      <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"/>
      <link rel="icon" href="/icon.png" type="image/png" sizes="1000x1000"/>
      <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" sizes="180x180"/>
      <link rel="canonical" href="https://byedispute.com/blog" />
      </head>
      <body>{children}</body>
    </html>
  );
}