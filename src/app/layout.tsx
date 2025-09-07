import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GlobalRise - Study Abroad Consultancy",
  description: "Your Global Journey Starts Here - Elevate Beyond Limits. Expert guidance for international education, university admissions, visa assistance, and study abroad programs.",
  keywords: "study abroad, international education, university admissions, visa assistance, scholarships, education consultancy, UK, USA, Australia, Germany",
  authors: [{ name: "GlobalRise" }],
  openGraph: {
    title: "GlobalRise - Study Abroad Consultancy",
    description: "Your Global Journey Starts Here - Elevate Beyond Limits. Expert guidance for international education.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
