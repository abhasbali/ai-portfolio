import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhas Bali | AI Systems Engineer",
  description: "Futuristic AI Lab themed portfolio for Abhas Bali, an AI Systems Engineer specializing in LLM architectures, AI agents, Retrieval-Augmented Generation, and production-grade ML systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-[#030712] text-slate-200 selection:bg-cyan-500/30 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
