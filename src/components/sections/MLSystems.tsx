"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Activity, Leaf, TrendingUp, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const stockData = [
    { time: "09:30", price: 150 }, { time: "10:00", price: 152 },
    { time: "10:30", price: 148 }, { time: "11:00", price: 155 },
    { time: "11:30", price: 154 }, { time: "12:00", price: 159 },
    { time: "12:30", price: 158 }, { time: "13:00", price: 162 },
];

const cropHealthData = [
    { index: "NDVI", value: 0.8, fill: "#22c55e" },
    { index: "EVI", value: 0.6, fill: "#3b82f6" },
    { index: "GCI", value: 0.7, fill: "#a855f7" },
    { index: "Stress", value: 0.2, fill: "#ef4444" },
];

export default function MLSystems() {
    return (
        <section id="ml-lab" className="py-24 relative overflow-hidden bg-[#0a0f24]/50 border-y border-white/5">
            {/* Glow effects */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 blur-[150px] -translate-y-1/2 rounded-full pointer-events-none z-0" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-900/10 blur-[150px] -translate-y-1/2 rounded-full pointer-events-none z-0" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col mb-16 items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-purple-400 font-mono mb-4 text-sm bg-purple-950/30 px-4 py-1.5 rounded-full border border-purple-500/20"
                    >
                        <Activity size={16} />
                        02. ML & DATALAB
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        Applied <span className="text-purple-400">Intelligence</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl text-lg"
                    >
                        Deploying predictive models, financial analytics, and computer vision systems to solve complex real-world challenges.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Main Large Card: Stock Predictor */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card border border-white/10 overflow-hidden flex flex-col group"
                    >
                        <div className="p-6 md:p-8 flex flex-col h-full bg-gradient-to-b from-white/5 to-transparent">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                                        <TrendingUp size={20} />
                                        <span className="font-mono text-sm tracking-wider">PREDICTIVE_LSTM</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        Full Stack Stock Predictor
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        End-to-end platform utilizing LSTM networks for time-series forecasting. Integrates live market data API and provides a simulated trading environment.
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Link href="https://github.com/abhasbali" target="_blank" className="p-2 bg-white/5 hover:bg-white/10 rounded border border-white/10 text-slate-300">
                                        <Github size={16} />
                                    </Link>
                                    <Link href="https://stock-trader-yap8.vercel.app/" target="_blank" className="p-2 bg-cyan-500/10 hover:bg-cyan-500/20 rounded border border-cyan-500/20 text-cyan-400">
                                        <ExternalLink size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Animated Chart UI */}
                            <div className="mt-auto h-48 w-full bg-black/40 rounded-xl border border-white/5 p-4 relative overflow-hidden">
                                <div className="absolute top-4 left-4 flex flex-col">
                                    <span className="text-xs text-slate-500 font-mono">CONFIDENCE_SCORE</span>
                                    <span className="text-cyan-400 font-bold">92.4%</span>
                                </div>
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <span className="px-2 py-0.5 text-[10px] rounded bg-green-500/20 text-green-400 border border-green-500/20 font-mono">LSTM</span>
                                    <span className="px-2 py-0.5 text-[10px] rounded bg-white/10 text-slate-300 border border-white/10 font-mono">TF</span>
                                </div>

                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={stockData} margin={{ top: 40, right: 0, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#00f3ff" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#00f3ff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <Area type="monotone" dataKey="price" stroke="#00f3ff" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={2} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#0a0f24', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                                            itemStyle={{ color: '#00f3ff' }}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-8">
                        {/* FinMate Compact Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card border border-white/10 p-6 flex flex-col md:flex-row gap-6 group hover:border-purple-500/50 transition-colors"
                        >
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                        FinMate – AI Financial Platform
                                    </h3>
                                    <Link href="https://github.com/abhasbali/finmate" target="_blank" className="p-1.5 bg-white/5 rounded border border-white/10 text-slate-300">
                                        <Github size={14} />
                                    </Link>
                                </div>
                                <p className="text-slate-400 text-sm mb-4">
                                    SaaS platform for smart budgeting and automated financial analysis. Implements ML for expense categorization and prediction.
                                </p>
                                <div className="flex gap-2 font-mono text-xs">
                                    <span className="px-2 py-1 bg-white/5 text-slate-300 rounded border border-white/10">Next.js</span>
                                    <span className="px-2 py-1 bg-white/5 text-slate-300 rounded border border-white/10">MongoDB</span>
                                    <span className="px-2 py-1 bg-white/5 text-slate-300 rounded border border-white/10">OpenAI</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Crop Health Compact Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card flex-grow border border-white/10 p-6 flex flex-col group hover:border-green-500/50 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-2 text-green-400 mb-2">
                                        <Leaf size={18} />
                                        <span className="font-mono text-sm tracking-wider">CV_HYPERSPECTRAL</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                                        AI Crop Health Detection
                                    </h3>
                                </div>
                                <Link href="https://github.com/abhasbali/Ai-crop-health" target="_blank" className="p-1.5 bg-white/5 rounded border border-white/10 text-slate-300">
                                    <Github size={14} />
                                </Link>
                            </div>
                            <p className="text-slate-400 text-sm mb-6">
                                CNN-based computer vision model detecting agricultural stress, diseases, and nutrient deficiencies from hyperspectral imagery.
                            </p>

                            {/* Data Visualization Preview */}
                            <div className="flex items-end gap-2 mt-auto h-24">
                                {cropHealthData.map((data, i) => (
                                    <div key={i} className="flex flex-col items-center flex-1 gap-2">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${data.value * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                                            className="w-full rounded-t-sm"
                                            style={{ backgroundColor: data.fill, opacity: 0.8 }}
                                        />
                                        <span className="text-[10px] font-mono text-slate-500">{data.index}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
