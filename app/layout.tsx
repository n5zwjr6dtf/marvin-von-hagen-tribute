import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marvin von Hagen tribute",
  description: "A thoughtful tribute showcase built with Next.js and React."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
