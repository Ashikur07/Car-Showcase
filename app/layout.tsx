import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google"; // তোমার ফন্ট ইমপোর্ট
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; // 🔥 ইমপোর্ট করো

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BMW M4 | Ultimate Driving Machine",
  description: "Experience the sheer driving pleasure of the BMW M4 Competition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable} bg-[#0a0a0a] text-white overflow-x-hidden`}>
        
        {/* 🔥 পুরো বডিকে SmoothScroll এর ভেতর ঢুকিয়ে দাও */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
        
      </body>
    </html>
  );
}