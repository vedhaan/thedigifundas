import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "The Digi Fundas | Digital Marketing Agency",
  description: "Add your real meta description here — this matters for SEO, don't leave it generic.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}