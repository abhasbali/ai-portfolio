"use client";

import { motion } from "framer-motion";
import { Activity, GitCommit, GitPullRequest, Code2, Trophy, TerminalSquare, ServerCog } from "lucide-react";
import { useEffect, useState } from "react";

// Mock commit data for the heatmap
const generateHeatmap = () => {
    const days = [];
    for (let i = 0; i < 365; i++) {
        const activityLevel = Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0;
        days.push(activityLevel);
    }
    return days;
};

const metrics = [
    { label: "TOTAL REPOSITORIES", value: 42, icon: TerminalSquare, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { label: "RECENT COMMITS", value: "1,204+", icon: GitCommit, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { label: "LEETCODE SOLVED", value: 100, icon: Code2, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { label: "HACKATHONS WON", value: 3, icon: Trophy, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
];

export default function Dashboard() {
    const [heatmap, setHeatmap] = useState<number[]>([]);
    const [activeUsers, setActiveUsers] = useState(1);

    useEffect(() => {
        setHeatmap(generateHeatmap());

        // Simulate active system users
        const interval = setInterval(() => {
            setActiveUsers(Math.floor(Math.random() * 10) + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getColor = (level: number) => {
        switch (level) {
            case 0: return "bg-white/5";
            case 1: return "bg-cyan-900/40";
            case 2: return "bg-cyan-700/60";
            case 3: return "bg-cyan-500/80";
            case 4: return "bg-cyan-400";
            default: return "bg-white/5";
        }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-[#030712] border-y border-white/5 border-dashed">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDAsMjQzLDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] pointer-events-none z-0" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-cyan-400 font-mono mb-4 text-sm"
                    >
                        <ServerCog size={16} />
                        05. TELEMETRY
                    </motion.div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
                        >
                            System <span className="text-cyan-400">Activity</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 px-4 py-2 bg-black/50 border border-white/10 rounded-lg font-mono text-sm inline-flex w-fit"
                        >
                            <div className="flex items-center gap-2 text-slate-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                SYSTEM STATUS:
                            </div>
                            <span className="text-green-400">OPTIMAL</span>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`glass-card p-6 border ${metric.border} flex flex-col gap-4 group relative overflow-hidden`}
                            >
                                <div className={`absolute -right-4 -top-4 w-24 h-24 ${metric.bg} rounded-full blur-2xl group-hover:bg-opacity-80 transition-all`} />
                                <div className="flex items-center justify-between z-10">
                                    <div className={`p-2 rounded-lg ${metric.bg} ${metric.color}`}>
                                        <Icon size={20} />
                                    </div>
                                    <GitPullRequest size={16} className="text-slate-600" />
                                </div>
                                <div className="z-10">
                                    <h4 className="text-slate-500 text-xs font-mono mb-1 tracking-wider">{metric.label}</h4>
                                    <div className={`text-4xl font-bold ${metric.color}`}>{metric.value}</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Heatmap Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="glass-card p-6 md:p-8 border border-white/10"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <Activity size={18} className="text-cyan-400" />
                            Contribution Graph
                        </h3>
                        <div className="text-xs font-mono text-slate-500 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded border border-white/5">
                            <span>LIVE_SESSIONS: {activeUsers}</span>
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto pb-4">
                        <div className="inline-flex flex-col gap-1 min-w-max">
                            {[0, 1, 2, 3, 4, 5, 6].map(dayOfWeek => (
                                <div key={dayOfWeek} className="flex gap-1">
                                    {heatmap
                                        .filter((_, i) => i % 7 === dayOfWeek)
                                        .map((level, weekIdx) => (
                                            <div
                                                key={weekIdx}
                                                className={`w-3 h-3 rounded-sm ${getColor(level)} hover:ring-1 hover:ring-white transition-all cursor-crosshair`}
                                            />
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 mt-4 text-xs font-mono text-slate-500">
                        <span>Less</span>
                        <div className="flex gap-1">
                            {[0, 1, 2, 3, 4].map(level => (
                                <div key={level} className={`w-3 h-3 rounded-sm ${getColor(level)}`} />
                            ))}
                        </div>
                        <span>More</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
