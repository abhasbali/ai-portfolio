// Single source of truth for the site. Everything here comes from the résumé —
// edit this file, not the components, when something changes.

export const profile = {
  name: "Abhas Bali",
  role: "AI Engineer",
  org: "Havells India — Centre for Research & Innovation",
  location: "Punjab ↔ Noida, India",
  email: "abhasmlb@gmail.com",
  links: {
    github: "https://github.com/abhasbali",
    linkedin: "https://www.linkedin.com/in/abhas-bali-6805202b7/",
    resume: "/resume.pdf",
  },
};

export type FlowNode = { label: string; key?: boolean };

export type CaseStudy = {
  id: string;
  title: string;
  status: "Shipped" | "In development";
  stack: string[];
  problem: string;
  built: string;
  outcome: string;
  metric?: { value: string; unit: string; note: string };
  flow: FlowNode[][];
};

export const havells: CaseStudy[] = [
  {
    id: "H-01",
    title: "Windchill AI",
    status: "Shipped",
    stack: ["PTC Windchill", "MCP", "REST APIs", "Python", "LLMs"],
    problem:
      "Engineering data in PLM is only as useful as an engineer's patience with search filters — and duplicate parts slip in when nobody can find the original.",
    built:
      "An in-house AI layer over Windchill: engineers ask in plain language, the agent calls Windchill's REST APIs through MCP tools, and returns parts, documents and likely duplicates.",
    outcome:
      "Built in-house instead of buying an external AI product.",
    metric: { value: "₹33", unit: "lakh", note: "saved by building in-house" },
    flow: [
      [{ label: "Engineer asks" }],
      [{ label: "LLM + MCP tools", key: true }],
      [{ label: "Windchill REST" }],
      [{ label: "Part search" }, { label: "Duplicate flags" }],
    ],
  },
  {
    id: "H-02",
    title: "PCB design automation",
    status: "In development",
    stack: ["Altium Designer", "MCP", "Python", "LLMs", "Azure AI Foundry"],
    problem:
      "Schematic capture and layout are slow, rule-heavy and iterative. Every respin costs weeks.",
    built:
      "A native MCP bridge into Altium Designer so a prompt can drive component placement, routing and validation — with ERC/DRC checks and engineering-rule retrieval in the loop.",
    outcome:
      "Aimed at first-time-right boards and fewer manual design iterations.",
    flow: [
      [{ label: "Prompt" }, { label: "Design rules" }],
      [{ label: "Altium MCP bridge", key: true }],
      [{ label: "Place · Route" }],
      [{ label: "ERC / DRC" }],
    ],
  },
  {
    id: "H-03",
    title: "Validation & compliance agent",
    status: "In development",
    stack: ["Hybrid RAG", "BM25", "Vector search", "Knowledge graphs", "Reranking"],
    problem:
      "Appliance validation means reading BIS, IS and IEC standards, and the answers are often in diagrams and tables, not prose.",
    built:
      "An agent that retrieves and interprets standards, diagrams included, using hybrid retrieval (keyword, dense and graph) followed by reranking.",
    outcome:
      "Structured compliance answers with the evidence attached, so reviewers can trace every claim back to a clause.",
    flow: [
      [{ label: "Query" }],
      [{ label: "BM25" }, { label: "Vector" }, { label: "Graph" }],
      [{ label: "Rerank", key: true }],
      [{ label: "Clause + evidence" }],
    ],
  },
];

export const research = [
  {
    title: "Governance for autonomous AI agents",
    kind: "Independent research · Published",
    link: "https://ijitce.org/index.php/ijitce/article/view/1633",
    body:
      "How agents fail when they make ethical decisions on their own, studied across 10+ agent architectures, and human-in-the-loop controls designed to catch those failures before they act.",
    figures: [
      { value: "10+", label: "agent architectures studied" },
      { value: "30%", label: "target cut in unsafe actions (benchmark)" },
    ],
  },
  {
    title: "Sustainable LLM inference",
    kind: "Independent research · Oct 2025 — now",
    body:
      "Quantization, pruning and distillation for running 7B-class models locally, measured against full-precision baselines on my own hardware.",
    figures: [
      { value: "3×", label: "lower latency on 7B models" },
      { value: "~50%", label: "estimated compute cost saved" },
    ],
  },
];

export type Build = {
  name: string;
  line: string;
  result: string;
  stack: string;
  href: string;
  kind: "Live" | "Code";
};

export const builds: Build[] = [
  {
    name: "Custom SQL Agent",
    line: "Natural language to SQL, with guardrails that block injection and destructive queries.",
    result: "92% execution success",
    stack: "LangChain · Qwen · Ollama · FastAPI",
    href: "https://github.com/abhasbali/custom-sql-agent",
    kind: "Code",
  },
  {
    name: "RAG + Graph-RAG chatbot",
    line: "Dense vector search plus a knowledge graph, served by local Qwen models.",
    result: "+35% factual accuracy · <500 ms retrieval",
    stack: "LangChain · Qwen · Ollama · KG",
    href: "https://github.com/abhasbali/RAG-and-GRAG-Based-chatbot",
    kind: "Code",
  },
  {
    name: "Multi-agent collaboration",
    line: "Coordinator–worker and peer-to-peer agent setups for task decomposition.",
    result: "~30% more efficient than single agent",
    stack: "LangChain · FastAPI · Ollama",
    href: "https://github.com/abhasbali/Multi-agent-collaboration-setups",
    kind: "Code",
  },
  {
    name: "Stock trader & predictor",
    line: "Virtual trading on live market data, with an LSTM forecasting the next day.",
    result: "65% directional accuracy",
    stack: "Flask · React · TensorFlow · Chart.js",
    href: "https://stock-trader-yap8.vercel.app/",
    kind: "Live",
  },
  {
    name: "AI Career Coach",
    line: "Résumé feedback, mock interviews and emotion-aware guidance.",
    result: "Hours → <10 s feedback",
    stack: "Next.js · OpenAI · Flask · HF",
    href: "https://ai-carrer-coach-qz6t.vercel.app/",
    kind: "Live",
  },
  {
    name: "Health Insight Agent",
    line: "RAG over medical knowledge for contextual answers about symptoms and data.",
    result: "Domain retrieval, fewer hallucinations",
    stack: "LangChain · RAG · Vector DB",
    href: "https://health-insight-agent-yywkdbrys34maten3hgj65.streamlit.app/",
    kind: "Live",
  },
  {
    name: "Crop health from hyperspectral imagery",
    line: "CNN that classifies crop stress, disease and nutrient deficiency.",
    result: "89% test accuracy",
    stack: "TensorFlow · OpenCV · Streamlit",
    href: "https://github.com/abhasbali/Ai-crop-health",
    kind: "Code",
  },
  {
    name: "AI Report Generator",
    line: "Turns raw data into structured analytical reports on local LLMs.",
    result: "Hours → <2 min · $0 per report",
    stack: "Flask · LangChain · Qwen · Docker",
    href: "https://github.com/abhasbali/ai-report-generator",
    kind: "Code",
  },
];

// Pin-out: what goes into the chip (left) and what comes out (right).
export const pinsIn = ["Python", "LLMs", "MCP", "RAG / Graph-RAG", "LangChain", "FastAPI", "React / Next.js", "Docker"];
export const pinsOut = ["CAD agents", "PLM search", "Compliance Q&A", "SQL agents", "Multi-agent systems", "Local inference", "Full-stack apps", "Research"];

export const spec: { param: string; value: string }[] = [
  { param: "Languages", value: "Python, Java, C++, C, JavaScript" },
  { param: "AI / ML", value: "LLMs, MCP, RAG, Graph-RAG, multi-agent systems, NLP, CNN, LSTM, LangChain, Ollama, TensorFlow, OpenCV, scikit-learn, HF Transformers" },
  { param: "Engineering & cloud", value: "Altium Designer, PTC Windchill, Azure AI Foundry, AWS, Docker, Firebase, Vercel, Linux, CI/CD" },
  { param: "Web & APIs", value: "React, Next.js, Node.js, Express, Django, Flask, FastAPI, Tailwind, REST" },
  { param: "Data", value: "PostgreSQL, MySQL, MongoDB, SQLite, Pinecone" },
];

export const achievements = [
  { what: "Winner", where: "Samsung Innovation Campus Hackathon" },
  { what: "Top 5", where: "Tech Xcelerate Hackathon, BITS Pilani" },
  { what: "Top 5", where: "Economic Times Gen AI Hackathon" },
  { what: "Rank 10", where: "CAD 2.0 Hackathon" },
  { what: "Rank 132", where: "GeeksforGeeks DSA contest · 20,000+ entrants" },
  { what: "5★", where: "HackerRank, Python and C++" },
];

export const certifications = [
  { name: "Machine Learning Specialization", by: "DeepLearning.AI · Andrew Ng", href: "https://coursera.org/share/ec77e3fa1581ecf68388901c8d546d20" },
  { name: "AWS Certified Cloud Practitioner", by: "Amazon Web Services", href: "https://drive.google.com/file/d/1XKtdXWBeVnyLf9aaL5YrsM1C9GYnmEvp/view?usp=sharing" },
  { name: "OCI 2025 AI Foundations Associate", by: "Oracle", href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=148397354A7AC9AD80321943C25619AA847C7FCE04210904FEE4BB383CD22A1A" },
  { name: "OCI 2025 Foundations Associate", by: "Oracle", href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3E2EE66F7F2A1B8DF81E24F86119B6A8EEDA188829AD26F75B57E31A4C9B1EA1" },
  { name: "Data Structures & Algorithms", by: "UC San Diego", href: "https://coursera.org/share/609a99ddb747ecb5d69d662a837e7bd2" },
  { name: "Introduction to Machine Learning", by: "NPTEL · IIT Kharagpur", href: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs149/Course/NPTEL25CS149S13330506209177904.pdf" },
];

export const education = [
  { school: "SRM Institute of Science and Technology", what: "B.Tech, Computer Science", when: "2023 — now", score: "CGPA 9.50 / 10" },
  { school: "Sarvottam Academy", what: "Class XII, PCM + CS", when: "2023", score: "85.54%" },
];
