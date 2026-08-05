import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Byrapuneni | Data & AI Professional",
  description:
    "Portfolio of Rahul Byrapuneni — data analytics, data engineering, business intelligence, and AI-enabled solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
