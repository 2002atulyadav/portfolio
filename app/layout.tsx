import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atul Yadav — Technical Lead, Backend & Distributed Systems",
  description:
    "Atul Yadav is a Technical Lead specializing in event-driven backend systems, cloud-native microservices, and distributed architecture for global enterprises.",
  openGraph: {
    title: "Atul Yadav — Technical Lead, Backend & Distributed Systems",
    description:
      "Designing and scaling event-driven backend systems and cloud-native microservices for global enterprises.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
