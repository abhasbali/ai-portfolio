"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { Download, ExternalLink, Github, Terminal } from "lucide-react";
import Link from "next/link";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
        <motion.span
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: delay },
                },
            }}
            className="inline-block"
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    variants={{
                        hidden: { opacity: 0, display: "none" },
                        visible: { opacity: 1, display: "inline-block" },
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Backgrounds */}
            <ParticleBackground />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] z-0 pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full z-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full z-0 transform translate-x-1/2 translate-y-1/2 pointer-events-none" />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] z-0 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-sm font-mono mb-8 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    SYSTEM_INITIALIZATION_COMPLETE
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
                >
                    Abhas <span className="text-gradient">Bali</span>
                </motion.h1>

                <div className="h-10 md:h-12 text-xl md:text-2xl text-slate-300 font-mono mb-6">
                    <span className="text-cyan-400">&gt;</span>{" "}
                    <TypewriterText text="AI Systems Engineer | LLM Architect | Full Stack Developer" delay={0.6} />
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-3 h-[1em] bg-cyan-400 ml-1 align-middle"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 2.5 }}
                    className="max-w-2xl text-slate-400 text-lg md:text-xl mb-12"
                >
                    Building intelligent, scalable & ethical AI systems that bridge the gap between cutting-edge research and production environments.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 2.8 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <Link href="#systems" className="group relative px-6 py-3 rounded-lg overflow-hidden bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2 neon-glow-cyan">
                        <span>Enter AI Lab</span>
                        <Terminal size={18} className="group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    </Link>

                    <Link href="#research" className="px-6 py-3 rounded-lg border border-white/10 hover:border-purple-500/50 hover:bg-purple-950/20 text-white font-medium transition-all flex items-center gap-2 glass-card hover:neon-glow-purple">
                        <ExternalLink size={18} />
                        <span>Research Work</span>
                    </Link>

                    <Link href="https://github.com/abhasbali" target="_blank" className="p-3 rounded-lg border border-white/10 hover:border-slate-500 bg-white/5 text-slate-300 hover:text-white transition-all">
                        <Github size={20} />
                    </Link>

                    <Link href="/resume.pdf" target="_blank" className="px-6 py-3 rounded-lg border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-slate-300 hover:text-cyan-400 font-medium transition-all flex items-center gap-2">
                        <Download size={18} />
                        <span>Resume</span>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-xs uppercase tracking-widest font-mono">Scroll for Systems</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-1"
                >
                    <div className="w-1 h-2 bg-slate-400 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
