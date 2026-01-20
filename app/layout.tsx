import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
}); 

export const metadata: Metadata = {
  title: "HMI Medical",
  description: "Hmi medical website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${montserrat.variable} antialiased bg-surface font-montserrat`}
      >
      {children}
      </body>
    </html>
  );
}
