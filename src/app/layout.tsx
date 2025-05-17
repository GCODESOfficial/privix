import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Privix — Private & Secure EVM Blockchain",
  description:
    "Privix is an EVM-compatible blockchain designed to prioritise privacy, security, and anonymity within a unified ecosystem. Explore a new era of secure decentralized finance.",
  keywords: [
    "Privix",
    "EVM blockchain",
    "privacy blockchain",
    "secure smart contracts",
    "anonymous DeFi",
    "decentralized privacy",
  ],
  authors: [{ name: "Privix", url: "https://privix.co" }],
  metadataBase: new URL("https://privix.co"),
  openGraph: {
    title: "Privix — Private & Secure EVM Blockchain",
    description:
      "Privix is an EVM-compatible blockchain designed to prioritise privacy, security, and anonymity within a unified ecosystem. Explore a new era of secure decentralized finance.",
    url: "https://privix.co",
    siteName: "Privix",
    images: [
      {
        url: "/images/Metadata.png",
        width: 1200,
        height: 630,
        alt: "Privix Blockchain Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privix — Private & Secure EVM Blockchain",
    description:
      "Privix is an EVM-compatible blockchain designed to prioritise privacy, security, and anonymity within a unified ecosystem.",
    images: ["/images/Metadata.png"],
    creator: "@cdsspace", // optional
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
"max-image-preview": "large",
"max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
