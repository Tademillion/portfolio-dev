import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Tadde Million | Full-Stack & Enterprise Systems Engineer",
  description:
    "Professional portfolio of Tadde Million — Full-Stack Software Developer & Enterprise Systems Engineer specializing in scalable web applications, enterprise ERP systems, and mission-critical fintech integrations (ESL, Ethiopian Airlines, NBE, SantimPay).",
  keywords: [
    "Full-Stack Developer",
    "Enterprise ERP Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    ".NET Core",
    "SQL Server",
    "WSO2 API Manager",
    "Fintech Integrations",
    "Docker",
    "Linux",
    "Tadde Million",
    "Portfolio",
  ],
  authors: [{ name: "Tadde Million" }],
  creator: "Tadde Million",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tadde-portfolio.vercel.app",
    title: "Tadde Million | Full-Stack & Enterprise Systems Engineer",
    description:
      "Professional portfolio of Tadde Million — Full-Stack Software Developer & Enterprise Systems Engineer specializing in scalable web applications, enterprise ERP systems, and mission-critical fintech integrations.",
    siteName: "Tadde Million Portfolio",
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg",
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
      className={`${plusJakarta.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary min-h-screen transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
