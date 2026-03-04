import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#030712] pt-12 pb-8 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[100px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg tracking-wide">
                            SYS_<span className="text-cyan-400">ENG</span>
                        </span>
                        <span className="text-slate-500 text-sm ml-2">v2.0.0</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link
                            href="mailto:abhasmlb@gmail.com"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            <Mail size={20} />
                        </Link>
                        <Link
                            href="https://github.com/abhasbali"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-purple-400 transition-colors"
                        >
                            <Github size={20} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/abhas-bali-6805202b7/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
                    <p>© {new Date().getFullYear()} Abhas Bali. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        SYSTEMS ONLINE AND NOMINAL
                    </div>
                </div>
            </div>
        </footer>
    );
}
