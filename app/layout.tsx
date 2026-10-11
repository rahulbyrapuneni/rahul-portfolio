
import type { Metadata } from "next";
import "./globals.css";

// ---SEO METADATA---
export const metadata: Metadata = {
  metadataBase: new URL(
    "https://rahul-portfolio-phi-azure.vercel.app"
  ),

  title:
    "Rahul Byrapuneni | Data & Analytics Professional | BHSim",

  description:
    "Explore Rahul Byrapuneni's portfolio featuring data analytics, SQL, Snowflake, Power BI, AI-assisted projects, and BHSim, an open-source Python library for synthetic behavioral health data.",

  keywords: [
    "Rahul Byrapuneni",
    "BHSim",
    "BHSim Python",
    "BHSim Python library",
    "Synthetic behavioral health data",
    "Data Analytics",
    "SQL",
    "Power BI",
    "Snowflake",
    "Data Engineering",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Rahul Byrapuneni | Data, Analytics & BHSim",
    description:
      "Data analytics, AI-assisted projects, and BHSim, an open-source Python library for synthetic behavioral health operations.",
    url: "/",
    siteName: "Rahul Byrapuneni Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ---ROOT LAYOUT---
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
