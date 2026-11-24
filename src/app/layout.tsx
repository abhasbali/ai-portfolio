import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Big Shoulders: industrial signage face drawn on a grid; its optical-size
// axis keeps huge headlines tight. Geist + Geist Mono for reading and labels.
const display = Big_Shoulders({
  variable: "--nf-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

const sans = Geist({
  variable: "--nf-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--nf-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-portfolio-sage-seven.vercel.app"),
  title: "Abhas Bali · AI Engineer",
  description:
    "Abhas Bali builds AI agents for hardware engineering: MCP bridges into Altium and Windchill, hybrid-RAG compliance agents, and local LLM systems.",
  openGraph: {
    title: "Abhas Bali · AI Engineer",
    description: "AI agents wired into the tools hardware engineers already use.",
    images: ["/abhas.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4eee4",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
