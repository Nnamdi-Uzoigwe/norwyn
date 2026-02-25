import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Norwyn Solution | Investment Fraud Recovery Specialists",
  description:
    "Norwyn Solution provides a single, coordinated solution for cryptocurrency tracing, legal action, freezing orders, and asset recovery - guiding fraud victims every step of the way.",
  keywords: [
    "asset recovery",
    "cryptocurrency tracing",
    "investment fraud recovery",
    "forex scam recovery",
    "freezing orders",
  ],
  openGraph: {
    title: "Norwyn Solution | Investment Fraud Recovery Specialists",
    description:
      "Norwyn Solutions provides a single, coordinated solution for cryptocurrency tracing, legal action, freezing orders, and asset recovery - guiding fraud victims every step of the way.",
    url: "https://norwyn.vercel.app", // 👈 replace with your actual URL
    siteName: "Norwyn Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Norwyn Solution | Investment Fraud Recovery Specialists",
    description:
      "Norwyn Solution provides a single, coordinated solution for cryptocurrency tracing, legal action, freezing orders, and asset recovery - guiding fraud victims every step of the way.",
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
        className={`${inter.variable} ${jost.variable} font-sans antialiased mt-20 lg:mt-24 overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <BackToTop /> 
        <Footer />
      </body>
    </html>
  );
}