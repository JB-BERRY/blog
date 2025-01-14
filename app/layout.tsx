import './globals.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'ShipFast',
  description: 'Shipping Simplified',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="light" className="__className_73f86d">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}