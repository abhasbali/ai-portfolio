"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

type Log = { id: string; text: string; type: "system" | "input" | "success" | "error" };

export default function TerminalContact() {
    const [inputVal, setInputVal] = useState("");
    const [logs, setLogs] = useState<Log[]>([
        { id: "init1", text: "SYSTEM_SECURE_CHANNEL_INITIATED", type: "system" },
        { id: "init2", text: "HANDSHAKE_ESTABLISHED. 256-BIT_ENCRYPTION_ACTIVE.", type: "system" },
        { id: "init3", text: "TYPE YOUR MESSAGE BELOW AND PRESS ENTER TO TRANSMIT.", type: "system" },
    ]);
    const [isTransmitting, setIsTransmitting] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    const handleCommand = async (cmd: string) => {
        if (!cmd.trim()) return;

        setLogs(prev => [...prev, { id: Date.now().toString(), text: `> ${cmd}`, type: "input" }]);
        setInputVal("");
        setIsTransmitting(true);

        if (cmd.toLowerCase() === "clear") {
            setLogs([]);
            setIsTransmitting(false);
            return;
        }

        if (cmd.toLowerCase() === "help") {
            setLogs(prev => [...prev,
            { id: Date.now().toString() + "1", text: "AVAILABLE COMMANDS:", type: "system" },
            { id: Date.now().toString() + "2", text: "  help   - Show this help message", type: "system" },
            { id: Date.now().toString() + "3", text: "  clear  - Clear terminal output", type: "system" },
            { id: Date.now().toString() + "4", text: "  [text] - Send a secure message to Abhas Bali", type: "system" }
            ]);
            setIsTransmitting(false);
            return;
        }

        // Simulate sending message
        await new Promise(r => setTimeout(r, 600));
        setLogs(prev => [...prev, { id: Date.now().toString(), text: "ENCRYPTING_PAYLOAD...", type: "system" }]);

        await new Promise(r => setTimeout(r, 800));
        setLogs(prev => [...prev, { id: Date.now().toString(), text: "TRANSMITTING_THROUGH_SECURE_PROXY...", type: "system" }]);

        await new Promise(r => setTimeout(r, 1000));
        setLogs(prev => [...prev, { id: Date.now().toString(), text: "MESSAGE_DELIVERED_SUCCESSFULLY.", type: "success" }]);

        setIsTransmitting(false);
    };

    return (
        <section id="terminal" className="py-24 relative overflow-hidden bg-[#030712] border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col mb-12 items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-green-400 font-mono mb-4 text-sm bg-green-950/30 px-4 py-1.5 rounded-full border border-green-500/20"
                    >
                        <Terminal size={16} />
                        07. SECURE COMM
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        Initiate <span className="text-green-400">Connection</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="rounded-xl overflow-hidden border border-slate-700 bg-[#0a0f24] shadow-2xl shadow-green-900/10">
                        {/* Terminal Header */}
                        <div className="bg-[#1a1f36] px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-xs text-slate-400 font-mono uppercase tracking-widest">
                                bash - admin@abhas-lab ~
                            </div>
                            <div className="w-16" /> {/* Spacer for centering */}
                        </div>

                        {/* Terminal Body */}
                        <div
                            className="p-6 h-[400px] overflow-y-auto font-mono text-sm sm:text-base flex flex-col gap-2 cursor-text"
                            onClick={handleFocus}
                            ref={scrollRef}
                        >
                            {logs.map((log) => (
                                <div
                                    key={log.id}
                                    className={`
                    ${log.type === "system" ? "text-slate-400" : ""}
                    ${log.type === "input" ? "text-white" : ""}
                    ${log.type === "success" ? "text-green-400 font-bold" : ""}
                    ${log.type === "error" ? "text-red-400" : ""}
                  `}
                                >
                                    {log.text}
                                </div>
                            ))}

                            {!isTransmitting && (
                                <div className="flex items-center text-green-400 mt-2">
                                    <span className="mr-2">admin@abhas-lab:~$</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={inputVal}
                                        onChange={(e) => setInputVal(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") handleCommand(inputVal);
                                        }}
                                        className="flex-1 bg-transparent outline-none border-none text-white caret-transparent"
                                        autoFocus
                                        spellCheck={false}
                                        autoComplete="off"
                                    />
                                    {/* Blinking Cursor */}
                                    <span className="-ml-1 w-2.5 h-5 bg-green-400 animate-pulse inline-block align-middle mix-blend-difference"
                                        style={{ marginLeft: `-${inputRef.current ? Math.max(0, inputRef.current.offsetWidth - inputVal.length * 9) : 0}px` }}>
                                    </span>
                                </div>
                            )}

                            {isTransmitting && (
                                <div className="flex items-center text-green-400 mt-2">
                                    <span className="mr-2">admin@abhas-lab:~$</span>
                                    <span className="w-2.5 h-5 bg-green-400 animate-pulse inline-block align-middle" />
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
