import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Import your components
import Navbar from "@/src/components/sections/Navbar"
import Footer from "@/src/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Athens Pizza | 0% Maida Multigrain Crust",
  description: "Experience the ultimate pizza revolution with our signature zero maida multigrain crust and unique shapes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 2. Add Navbar at the top */}
        <Navbar />
        
        {/* 3. 'flex-grow' ensures the main content pushes the footer down */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 4. Add Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}