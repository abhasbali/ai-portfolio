"use client";

import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Target } from "lucide-react";

// Radar Chart Data
const radarData = [
    { subject: 'AI / ML', A: 95, fullMark: 100 },
    { subject: 'LLM Engineering', A: 90, fullMark: 100 },
    { subject: 'Backend Systems', A: 85, fullMark: 100 },
    { subject: 'DevOps & Cloud', A: 80, fullMark: 100 },
    { subject: 'Programming', A: 92, fullMark: 100 },
];

const skillCategories = [
    {
        name: "Programming",
        color: "bg-cyan-500",
        skills: [
            { name: "Python", level: 95 },
            { name: "C++ / C", level: 85 },
            { name: "JavaScript / TypeScript", level: 88 },
            { name: "Java", level: 80 }
        ]
    },
    {
        name: "AI / Machine Learning",
        color: "bg-purple-500",
        skills: [
            { name: "TensorFlow / PyTorch", level: 92 },
            { name: "Computer Vision (OpenCV)", level: 85 },
            { name: "NLP Pipelines", level: 90 },
            { name: "Predictive Modeling", level: 88 }
        ]
    },
    {
        name: "LLM Engineering",
        color: "bg-indigo-500",
        skills: [
            { name: "RAG / Graph-RAG", level: 95 },
            { name: "LangChain / LlamaIndex", level: 90 },
            { name: "Prompt Engineering", level: 92 },
            { name: "Local Inference (Ollama)", level: 85 }
        ]
    },
    {
        name: "Backend & Systems",
        color: "bg-blue-500",
        skills: [
            { name: "FastAPI / Flask", level: 92 },
            { name: "Node.js / Express", level: 85 },
            { name: "Vector DBs (Pinecone, Chroma)", level: 90 },
            { name: "SQL & NoSQL", level: 88 }
        ]
    },
    {
        name: "DevOps & Cloud",
        color: "bg-green-500",
        skills: [
            { name: "Docker / Containerization", level: 85 },
            { name: "AWS Services", level: 80 },
            { name: "CI / CD Pipelines", level: 82 },
            { name: "Linux / OS", level: 88 }
        ]
    }
];

export default function SkillsMatrix() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0a0f24]/30 border-y border-white/5">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none z-0" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col mb-16 items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-cyan-400 font-mono mb-4 text-sm bg-cyan-950/30 px-4 py-1.5 rounded-full border border-cyan-500/20"
                    >
                        <Target size={16} />
                        04. CAPABILITY MATRIX
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        System <span className="text-cyan-400">Expertise</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Radar Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 aspect-square max-w-[500px] relative glass-card p-4 flex items-center justify-center border-cyan-500/20 shadow-[0_0_30px_rgba(0,243,255,0.05)]"
                    >
                        <div className="absolute top-4 left-4 text-xs font-mono text-cyan-500 animate-pulse">
                            ANALYZING_METRICS...
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12, fontFamily: 'monospace' }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#030712', borderColor: 'rgba(0,243,255,0.3)', color: '#fff' }}
                                    itemStyle={{ color: '#00f3ff' }}
                                />
                                <Radar name="Abhas Bali" dataKey="A" stroke="#00f3ff" fill="#00f3ff" fillOpacity={0.2} strokeWidth={2} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Proficiency Bars */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col gap-3"
                            >
                                <h3 className="text-white font-bold tracking-wider uppercase text-sm">{category.name}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {category.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="w-full">
                                            <div className="flex justify-between items-end mb-1">
                                                <span className="text-slate-400 text-xs font-mono">{skill.name}</span>
                                                <span className="text-slate-500 text-[10px] font-mono">{skill.level}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                                                    className={`h-full ${category.color} shadow-[0_0_10px_currentColor]`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
