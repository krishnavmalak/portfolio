import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
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
  title: "Krishna | Software Engineer & Full-Stack Developer",
  description: "Portfolio of Krishna, a React Native Developer & Software Engineer specializing in cross-platform applications, GenAI integrations, and scalable architectures.",
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
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
