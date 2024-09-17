import "./globals.css";
import { KoHo } from 'next/font/google'
import type { Metadata } from "next";
import { StoreProvider } from "@/redux/StoreProvider";


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
    <StoreProvider>  
      <html lang="en" className={koho.className}>
        <body>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
