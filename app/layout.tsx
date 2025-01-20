import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal Kasotiya | Full Stack Software Engineer Portfolio",
  description: `Explore the portfolio of Vishal Kasotiya, 
  a dedicated Full Stack Software Engineer, showcasing expertise in building dynamic and scalable web applications. Crafted with Next.js.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}   ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
