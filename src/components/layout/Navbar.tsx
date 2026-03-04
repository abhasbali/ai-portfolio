"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Blocks, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Systems", icon: Cpu, href: "#systems" },
    { name: "ML Lab", icon: Database, href: "#ml-lab" },
    { name: "Research", icon: Blocks, href: "#research" },
    { name: "Terminal", icon: Terminal, href: "#terminal" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-[#030712]/80 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group relative flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:neon-glow-cyan transition-all duration-500 overflow-hidden">
                        <span className="text-cyan-400 font-bold text-xl tracking-tighter">AB</span>
                    </div>
                    <span className="font-bold text-lg hidden sm:block tracking-wide">
                        SYS_<span className="text-cyan-400">ENG</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={idx}
                                href={item.href}
                                className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                            >
                                <Icon size={16} className="group-hover:text-cyan-400 transition-colors" />
                                <span className="uppercase tracking-wider">{item.name}</span>
                            </Link>
                        );
                    })}

                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span className="text-xs text-cyan-400 uppercase tracking-widest font-mono">
                            Online
                        </span>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 w-full bg-[#0a0f24]/95 backdrop-blur-lg border-b border-white/10 border-t py-4 px-6 flex flex-col gap-4 shadow-2xl"
                >
                    {navItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={idx}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-cyan-400 p-2 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                <Icon size={18} />
                                <span className="uppercase tracking-wider">{item.name}</span>
                            </Link>
                        );
                    })}
                </motion.div>
            )}
        </header>
    );
}
