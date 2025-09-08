import "./globals.css";

import type { Metadata } from "next";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Graphland - Custom Solutions",
  description:
    "Custom solutions for websites, mobile apps, and desktop applications. Crafted with precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
