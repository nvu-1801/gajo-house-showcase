import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Lora } from 'next/font/google';
import './globals.css';
import './catalogue-ui.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "GAJO'S HOUSE — Editorial Room Catalogue 2026",
  description: "Khám phá 9 phòng nghỉ mang phong cách mộc mạc, bình yên tại GAJO'S HOUSE, Gia Lai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${playfair.variable} ${montserrat.variable} ${lora.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
