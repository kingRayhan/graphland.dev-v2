import "./globals.css";

import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Graphland - Custom Solutions",
  description:
    "Custom solutions for websites, mobile apps, and desktop applications. Crafted with precision.",
  openGraph: {
    siteName: "Graphland",
    phoneNumbers: ["+8801836980760"],
    emails: ["contact@graphland.dev"],
    images: [{ url: "/og.png" }],
  },
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
        <meta name="theme-color" content="#dff948" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
        {/* <SmoothCursor /> */}
      </body>
    </html>
  );
}
