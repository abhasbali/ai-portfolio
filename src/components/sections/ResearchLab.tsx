"use client";

import { motion } from "framer-motion";
import { BookOpen, RefreshCw, Cpu, BrainCircuit, Users, Leaf } from "lucide-react";

export default function ResearchLab() {
    return (
        <section id="research" className="py-24 relative overflow-hidden bg-[#030712]">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] pointer-events-none opacity-50 z-0" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col mb-16 items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="flex items-center gap-2 text-indigo-400 font-mono mb-4 text-sm bg-indigo-950/30 px-4 py-1.5 rounded-full border border-indigo-500/20"
                    >
                        <BookOpen size={16} />
                        03. RESEARCH DIVISION
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        Advanced <span className="text-indigo-400">Research</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl text-lg"
                    >
                        Exploring the frontiers of AI agent governance, ethical systems design, and sustainable optimization strategies for foundation models.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Research Paper 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="bg-[#fafafa] dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-8 relative overflow-hidden group shadow-lg"
                    >
                        {/* Fold aesthetic corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#030712] to-transparent z-10" />

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                                <BrainCircuit size={24} />
                            </div>
                            <div>
                                <span className="text-xs uppercase tracking-widest text-slate-500 font-mono font-bold mb-1 block">Whitepaper Draft</span>
                                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">AI Agent Governance</h3>
                            </div>
                        </div>

                        <p className="text-slate-400 leading-relaxed text-sm mb-8 font-serif">
                            "As autonomous agentic systems move from rigid scripts to fluid multi-hop reasoning, strict deterministic guardrails become inadequate. This research proposes a dynamic context-aware governance framework."
                        </p>

                        {/* Human in the loop diagram */}
                        <div className="bg-slate-950 p-6 rounded-xl border border-white/5 relative mb-6">
                            <span className="absolute top-2 left-3 text-[10px] text-slate-600 font-mono">FIG 1. HUMAN-IN-THE-LOOP CONTROL</span>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 rounded-full border border-indigo-500/50 flex items-center justify-center bg-indigo-500/10 text-indigo-400">
                                        <Cpu size={20} />
                                    </div>
                                    <span className="text-[10px] text-slate-400 font-mono">AGENT</span>
                                </div>

                                <div className="flex-1 px-4 flex flex-col items-center relative">
                                    <div className="w-full h-px bg-slate-700 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-slate-900 border border-slate-700 rounded text-slate-300">
                                            <RefreshCw size={14} className="animate-spin-slow" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 rounded-full border border-green-500/50 flex items-center justify-center bg-green-500/10 text-green-400">
                                        <Users size={20} />
                                    </div>
                                    <span className="text-[10px] text-slate-400 font-mono">OVERSEER</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 border-t border-slate-800 pt-6">
                            <div className="flex-1">
                                <h4 className="text-slate-300 text-xs font-bold uppercase mb-2">Key Highlights</h4>
                                <ul className="text-slate-500 text-sm space-y-2 list-disc list-inside">
                                    <li>Ethical decision gating</li>
                                    <li>Policy adherence graphs</li>
                                    <li>Real-time human escalation</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Research Paper 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#fafafa] dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-8 relative overflow-hidden group shadow-lg"
                    >
                        {/* Fold aesthetic corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#030712] to-transparent z-10" />

                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-green-500/10 text-green-400 rounded-lg">
                                <Leaf size={24} />
                            </div>
                            <div>
                                <span className="text-xs uppercase tracking-widest text-slate-500 font-mono font-bold mb-1 block">Optimization Protocol</span>
                                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-green-400 transition-colors">Sustainable LLM Opt.</h3>
                            </div>
                        </div>

                        <p className="text-slate-400 leading-relaxed text-sm mb-8 font-serif">
                            "The exponential growth in parameter counts correlates directly with carbon emissions. We investigate Green AI methodologies focusing on sparse activation and efficient local inference techniques to reduce inference footprint by up to 40%."
                        </p>

                        <div className="bg-slate-950 p-6 rounded-xl border border-white/5 relative mb-6">
                            <span className="absolute top-2 left-3 text-[10px] text-slate-600 font-mono">ENERGY OPTIMIZATION METRICS</span>
                            <div className="mt-6 flex flex-col gap-4">
                                <div>
                                    <div className="flex justify-between text-xs text-slate-400 mb-1 font-mono">
                                        <span>Dense Inference</span>
                                        <span>100% Watts</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <div className="bg-red-500/80 w-full h-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs text-slate-400 mb-1 font-mono">
                                        <span>Sparse + Quantized</span>
                                        <span className="text-green-400">42% Watts</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <div className="bg-green-500 w-[42%] h-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 border-t border-slate-800 pt-6">
                            <div className="flex-1">
                                <h4 className="text-slate-300 text-xs font-bold uppercase mb-2">Methodologies</h4>
                                <ul className="text-slate-500 text-sm space-y-2 list-disc list-inside">
                                    <li>INT4 QLoRA Quantization</li>
                                    <li>Semantic Routing</li>
                                    <li>Prompt caching techniques</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
