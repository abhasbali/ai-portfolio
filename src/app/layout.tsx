import type { Metadata, Viewport } from "next";
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--nf-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const sans = IBM_Plex_Sans({
  variable: "--nf-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--nf-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
  themeColor: "#efebe2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
