import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const viewport = {
  themeColor: "#0a0e27",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Tadde Million - Full-Stack Developer",
  description:
    "A polished professional portfolio by Tadde Million with elegant dark-mode support and modern UI.",
  keywords: "Full-Stack Developer, Next.js, React, Node.js, Portfolio",
  authors: [{ name: "Tadde Million" }],
  creator: "Tadde Million",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tadde-portfolio.vercel.app",
    title: "Tadde Million - Full-Stack Developer",
    description:
      "Elegant portfolio by Tadde Million, optimized for dark mode and production-ready presentation.",
    siteName: "Tadde Million Portfolio",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>",
        type: "image/svg+xml",
      },
    ],
    apple: "/lumina.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
