import type { Metadata } from "next";
import "./globals.css";
import { KoHo } from 'next/font/google'

export const metadata: Metadata = {
  title: "PomoApp",
  description: "Pomo timer for focusing",
};

const koho = KoHo({
  weight: "200",
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={koho.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
