import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google"; // ১. ফন্ট ইমপোর্ট
import "./globals.css";

// ২. ফন্ট কনফিগারেশন
const oswald = Oswald({ 
  subsets: ["latin"], 
  variable: "--font-oswald",
  weight: ["400", "500", "700"], 
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BMW M4 | Ultimate Driving Machine",
  description: "Experience the power of engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ৩. ফন্ট ভেরিয়েবল বডিতে বসানো হলো */}
      <body className={`${inter.className} ${oswald.variable} bg-black text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}