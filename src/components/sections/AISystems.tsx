"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Layers, Cpu, Server, Shield } from "lucide-react";
import Link from "next/link";

const aiProjects = [
    {
        id: "career-coach",
        title: "AI Career Coach",
        description: "LLM-powered career guidance system with emotion-aware responses and resume feedback.",
        badges: ["Next.js", "OpenAI", "Flask", "TailwindCSS", "Transformers"],
        github: "https://github.com/abhasbali",
        demo: "https://ai-carrer-coach-qz6t.vercel.app/",
        details: {
            problem: "Traditional career counseling is expensive, generic, and not always accessible or scalable.",
            architecture: "Next.js frontend communicating with a scalable Flask backend api, utilizing OpenAI for conversational logic and local Transformers for emotion detection. Vercel for edge deployment.",
            stack: "React, Node backend logic via Next Auth, Flask microservices, HuggingFace Transformers, OpenAI GPT-4 API.",
            scalability: "Stateless microservice architecture deployed on Vercel Edge functions for high concurrency.",
        }
    },
    {
        id: "legal-analyzer",
        title: "AI Legal Document Analyzer",
        description: "Extracts & summarizes key clauses, detects risks, and ensures compliance using NLP.",
        badges: ["Flask", "LangChain", "OpenAI API", "Pinecone", "React"],
        github: "https://github.com/abhasbali/ai-legal-document",
        demo: "#",
        details: {
            problem: "Legal document review is incredibly time-consuming, expensive, and prone to human oversight.",
            architecture: "Document ingestion pipeline chunks text, generates embeddings, stores in Pinecone. LangChain handles retrieval and orchestration of OpenAI calls. React frontend displays highlighted document clauses.",
            stack: "Pinecone Vector DB, LangChain, OpenAI Embeddings & Chat Completion, Flask, React SPA.",
            scalability: "Vector database ensures $O(1)$ fast retrieval regardless of corpus size. Asynchronous chunking pipelines allow scaling for massive documents.",
        }
    },
    {
        id: "sql-agent",
        title: "Custom SQL Agent",
        description: "LLM-powered agent converting natural language queries into executable SQL statements via Qwen/Ollama.",
        badges: ["LangChain", "Qwen", "Ollama", "SQL", "FastAPI"],
        github: "https://github.com/abhasbali/custom-sql-agent",
        demo: "#",
        details: {
            problem: "Non-technical stakeholders struggle to query databases directly, creating bottlenecks for engineering teams.",
            architecture: "Locally hosted Qwen model managed by Ollama serves as reasoning engine. LangChain agents with SQL Database Toolkit generate, validate, and execute queries against the DB.",
            stack: "FastAPI inference layer, Ollama local inference, LangChain ReAct agent paradigm, specific SQL dialect connector.",
            scalability: "Local execution via Ollama removes API cost scaling. Agent guardrails prevent unsafe query execution (DROP, DELETE).",
        }
    },
    {
        id: "rag-chatbot",
        title: "RAG & Graph-RAG Chatbot",
        description: "Advanced chatbot using hybrid RAG and Graph-RAG architectures running on locally hosted Qwen models.",
        badges: ["LangChain", "Qwen", "Ollama", "Knowledge Graphs"],
        github: "https://github.com/abhasbali/RAG-and-GRAG-Based-chatbot",
        demo: "#",
        details: {
            problem: "Standard document RAG struggles with complex multi-hop reasoning across conceptually linked documents.",
            architecture: "Dual retrieval system combining dense vector search with structured knowledge graph traversal. Results are synthesized by long-context local LLM.",
            stack: "ChromaDB/Pinecone (Vectors), Neo4j/NetworkX (Graph), LangChain, local LLM orchestration.",
            scalability: "Graph retrieval caching and semantic routing optimize expensive multi-hop retrieval paths.",
        }
    }
];

export default function AISystems() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="systems" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-[#030712] z-0" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-900/10 blur-[150px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="flex items-center gap-2 text-cyan-400 font-mono mb-4 text-sm"
                    >
                        <span className="w-8 h-px bg-cyan-500/50" />
                        01. CORE INFRASTRUCTURE
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        AI Systems <span className="text-cyan-400">Division</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl text-lg"
                    >
                        Production-grade LLM architectures implementing RAG, agentic workflows, and safe local inference for scalable solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {aiProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card group border ${expandedId === project.id ? "border-cyan-500/50 shadow-[0_0_30px_rgba(0,243,255,0.15)]" : "border-white/10 hover:border-white/30"} overflow-hidden transition-all duration-300`}
                        >
                            <div className="p-6 md:p-8 relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.badges.map((badge, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-slate-300 rounded-md">
                                            {badge}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="p-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-lg border border-white/5 transition-colors"
                                        >
                                            <Github size={18} />
                                        </Link>
                                        {project.demo !== "#" && (
                                            <Link
                                                href={project.demo}
                                                target="_blank"
                                                className="p-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/20 transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                            </Link>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => toggleExpand(project.id)}
                                        className="flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        <span>{expandedId === project.id ? "SYSTEM_FOLD" : "SYSTEM_EXPAND"}</span>
                                        <motion.div
                                            animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={16} />
                                        </motion.div>
                                    </button>
                                </div>
                            </div>

                            {/* Expandable Details */}
                            <AnimatePresence>
                                {expandedId === project.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-black/40 border-t border-white/5"
                                    >
                                        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-3">
                                                    <Layers className="text-purple-400 mt-1" size={18} />
                                                    <div>
                                                        <h4 className="text-white font-medium mb-1">Architecture Overview</h4>
                                                        <p className="text-slate-400 text-sm leading-relaxed">{project.details.architecture}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <Server className="text-cyan-400 mt-1" size={18} />
                                                    <div>
                                                        <h4 className="text-white font-medium mb-1">AI/LLM Stack</h4>
                                                        <p className="text-slate-400 text-sm leading-relaxed">{project.details.stack}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex items-start gap-3">
                                                    <Cpu className="text-cyan-400 mt-1" size={18} />
                                                    <div>
                                                        <h4 className="text-white font-medium mb-1">Problem Statement</h4>
                                                        <p className="text-slate-400 text-sm leading-relaxed">{project.details.problem}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <Shield className="text-purple-400 mt-1" size={18} />
                                                    <div>
                                                        <h4 className="text-white font-medium mb-1">Scalability & Security</h4>
                                                        <p className="text-slate-400 text-sm leading-relaxed">{project.details.scalability}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
