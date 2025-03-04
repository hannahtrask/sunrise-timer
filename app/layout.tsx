import type { Metadata } from "next";
import { Copse } from 'next/font/google'
import "./globals.css";
import React from "react";


const copse = Copse({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Sunrise Timer :)",
  description: "A NextJS app that will tell you when the sun comes up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${copse.className}`}>
        {children}
      </body>
    </html>
  );
}
