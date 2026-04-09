import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Topchoice Forwarders",
  description: "Trucking Service Company",
  openGraph: {
    title: "Topchoice Forwarders",
    description: "Reliable trucking services from Manila to Lucena City",
    url: "https://topchoice-indol.vercel.app",
    siteName: "Topchoice Forwarders",
    images: [
      {
        url: "/screen_1.png", // put this in /public
        width: 1200,
        height: 630,
        alt: "Topchoice Forwarders",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
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
              <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
