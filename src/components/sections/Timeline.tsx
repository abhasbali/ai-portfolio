"use client";

import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, Trophy, BadgeCheck, Code, Waypoints } from "lucide-react";
import Link from "next/link";

const timelineEvents = [
    {
        title: "Tech Xcelerate - Top 5",
        organization: "BITS Pilani",
        date: "2024",
        description: "Secured top 5 position for an innovative AI solution among nationwide participants.",
        icon: Trophy,
        color: "text-yellow-400",
        glow: "shadow-[0_0_15px_rgba(250,204,21,0.5)]",
        link: "#",
    },
    {
        title: "CAD 2.0 Hackathon",
        organization: "National Level",
        date: "2024",
        description: "Secured 10th place in a highly competitive collaborative coding project building AI utilities.",
        icon: Code,
        color: "text-cyan-400",
        glow: "shadow-[0_0_15px_rgba(0,243,255,0.5)]",
        link: "#",
    },
    {
        title: "Global Rank 132",
        organization: "GeeksforGeeks DSA Contest",
        date: "2024",
        description: "Ranked 132 globally among 20,000+ participants in advanced Data Structures & Algorithms contest.",
        icon: Star,
        color: "text-purple-400",
        glow: "shadow-[0_0_15px_rgba(188,19,254,0.5)]",
        link: "#",
    },
    {
        title: "AWS Certified Cloud Practitioner",
        organization: "Amazon Web Services",
        date: "2024",
        description: "Certified in core AWS cloud infrastructure, security compliance, and deployment strategies.",
        icon: ShieldCheck,
        color: "text-orange-400",
        glow: "shadow-[0_0_15px_rgba(251,146,60,0.5)]",
        link: "https://drive.google.com/file/d/1XKtdXWBeVnyLf9aaL5YrsM1C9GYnmEvp/view",
    },
    {
        title: "Oracle Cloud Certified Foundations",
        organization: "Oracle",
        date: "2024",
        description: "Dual certifications: Cloud Infrastructure 2024 and Data Management 2024 Associate.",
        icon: BadgeCheck,
        color: "text-red-400",
        glow: "shadow-[0_0_15px_rgba(248,113,113,0.5)]",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3E2EE66F7F2A1B8DF81E24F86119B6A8EEDA188829AD26F75B57E31A4C9B1EA1",
    },
    {
        title: "Machine Learning Specialization",
        organization: "Coursera (Andrew Ng)",
        date: "2023",
        description: "Completed comprehensive training in ML logic, neural networks, and anomaly detection.",
        icon: Award,
        color: "text-blue-400",
        glow: "shadow-[0_0_15px_rgba(96,165,250,0.5)]",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WGN2NHZ9YX82",
    }
];

export default function Timeline() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#030712]">
            {/* Visual background routing lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent z-0 hidden md:block" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col mb-16 items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-slate-300 font-mono mb-4 text-sm bg-white/5 px-4 py-1.5 rounded-full border border-white/10"
                    >
                        <Waypoints size={16} />
                        06. CAREER MILESTONES
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white"
                    >
                        Achievements & <span className="text-cyan-400">Certifications</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-purple-500/0 z-0" />

                    <div className="flex flex-col gap-12">
                        {timelineEvents.map((event, idx) => {
                            const Icon = event.icon;
                            const isEven = idx % 2 === 0;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? "md:flex-row-reverse" : ""}`}
                                >
                                    <div className="hidden md:block w-5/12" />

                                    {/* Center Node */}
                                    <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 rounded-full bg-[#0a0f24] border-2 border-cyan-500/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                                        <Icon size={24} className={event.color} />
                                        {/* Pulsing ring */}
                                        <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping opacity-20" />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-[calc(100%-80px)] md:w-5/12 ml-auto md:ml-0 ${isEven ? "md:mr-auto" : "md:ml-auto"}`}>
                                        <div className={`glass-card p-6 border border-white/10 hover:border-cyan-500/30 transition-all group ${event.glow}`}>
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 w-fit">
                                                    {event.date}
                                                </span>
                                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                                    {event.organization}
                                                </span>
                                            </div>

                                            <h3 className={`text-xl font-bold mb-2 group-hover:${event.color} transition-colors text-white break-words`}>
                                                {event.title}
                                            </h3>

                                            <p className="text-slate-400 text-sm mb-4">
                                                {event.description}
                                            </p>

                                            {event.link !== "#" && (
                                                <Link
                                                    href={event.link}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                                                >
                                                    [VERIFY_CREDENTIAL]
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
