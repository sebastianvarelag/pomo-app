import "./globals.css";
import { KoHo } from 'next/font/google'
import type { Metadata, Viewport } from "next";
import { StoreProvider } from "@/redux/StoreProvider";


export const metadata: Metadata = {
  title: "PomoApp",
  description: "Pomo timer for focusing",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

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
    <StoreProvider>  
      <html lang="en">
        <body className={koho.className}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
