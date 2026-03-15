import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Dary Family",
  description: "Welcome to the Dary family website.",
  openGraph: {
    title: "Dary Family",
    description: "Welcome to the Dary family website.",
    url: "https://dary.family",
    type: "website",
    images: [
      {
        url: "https://dary.family/family-funny-picture-ghibli-inspired-white-bg.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
