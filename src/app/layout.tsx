import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/provider/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishnavmalak.github.io"),
  title: {
    default: "Krishna | Software Engineer & Full-Stack Developer",
    template: "%s | Krishna's Portfolio",
  },
  description: "Portfolio of Krishna, a React Native Developer & Software Engineer specializing in cross-platform applications, GenAI integrations, and scalable architectures.",
  openGraph: {
    title: "Krishna | Software Engineer & Full-Stack Developer",
    description: "Portfolio of Krishna, a React Native Developer & Software Engineer specializing in cross-platform applications, GenAI integrations, and scalable architectures.",
    url: "/",
    siteName: "Krishna's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna | Software Engineer & Full-Stack Developer",
    description: "Portfolio of Krishna, a React Native Developer & Software Engineer specializing in cross-platform applications, GenAI integrations, and scalable architectures.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
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
      className={`${inter.variable} ${firaCode.variable} antialiased h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
