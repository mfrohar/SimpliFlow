import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: {
    default: "SimpliFlow Consulting | Simplify. Automate. Grow.",
    template: "%s | SimpliFlow Consulting",
  },
  description:
    "SimpliFlow Consulting helps businesses grow with expert web design, process automation, and digital marketing services. Simplify your operations and accelerate your growth.",
  keywords: [
    "consulting",
    "web design",
    "process automation",
    "digital marketing",
    "business consulting",
    "SimpliFlow",
  ],
  authors: [{ name: "SimpliFlow Consulting" }],
  creator: "SimpliFlow Consulting",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simpliflow.com",
    siteName: "SimpliFlow Consulting",
    title: "SimpliFlow Consulting | Simplify. Automate. Grow.",
    description:
      "Expert web design, process automation, and digital marketing to help your business scale faster.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SimpliFlow Consulting",
    description:
      "Expert web design, process automation, and digital marketing services.",
    creator: "@simpliflow",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
