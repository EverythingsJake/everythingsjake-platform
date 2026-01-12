import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const whitePalmer = localFont({
  src: "./fonts/White-Palmer.otf",
  variable: "--font-white-palmer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Everythings Jake — DevOps Platform Demo",
  description:
    "Production-style DevOps platform demonstrating CI/CD with GitHub Actions, Docker, Traefik reverse proxy, automated deployments, and uptime monitoring.",
  openGraph: {
    title: "Everythings Jake — DevOps Platform Demo",
    description:
      "Live DevOps portfolio showcasing CI/CD pipelines, reverse proxy + TLS, health checks, and monitoring.",
    url: "https://everythingsjake.net",
    siteName: "Everythings Jake",
    images: [
      {
        url: "/logo-128-full.png",
        width: 128,
        height: 128,
        alt: "Everythings Jake logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={whitePalmer.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
