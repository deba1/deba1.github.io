import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Debashish Sarker | Senior Developer",
  description:
    "Professional portfolio of Debashish Sarker, Senior Developer specializing in ASP.NET Core, NestJS, Next.js, and scalable full-stack web applications.",
  keywords: [
    "Debashish Sarker",
    "Software Engineer",
    "Senior Developer",
    "Optimizely",
    "ASP.NET Core",
    "Next.js",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Debashish Sarker" }],
  creator: "Debashish Sarker",
  metadataBase: new URL("https://deba1.github.io"),

  // Open Graph (Facebook, LinkedIn, Discord)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deba1.github.io",
    title: "Debashish Sarker | Senior Developer",
    description:
      "Explore the professional experience, core technical competencies, and peer-reviewed payment ecosystem research of Debashish Sarker.",
    siteName: "Debashish Sarker Portfolio",
    images: [
      {
        url: "/og-image.png", // Paths matching public static assets folder
        width: 1200,
        height: 630,
        alt: "Debashish Sarker Professional Portfolio Preview",
      },
    ],
  },

  // X / Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Debashish Sarker | Senior Developer",
    description:
      "Full-stack developer portfolio showcasing enterprise system architecture and decentralized engineering systems.",
    images: ["/og-image.png"],
  },

  // Robots indexing instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
