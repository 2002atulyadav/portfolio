// All site content lives here. Edit this file to update the portfolio —
// the components read from these typed objects.

export const profile = {
  name: { first: "Atul", last: "Yadav" },
  role: "Senior Software Engineer · Backend & AI Workflows",
  tagline:
    "Designing, building and scaling distributed backend systems and AI-powered workflows — cloud-native microservices, event-driven pipelines, and agentic automation — for global enterprises.",
  location: "Pune, India",
  openToWork: true,
  email: "atuljnv02@gmail.com",
  links: {
    github: "https://github.com/2002atulyadav",
    linkedin: "https://linkedin.com/in/atulyadav2002",
    twitter: "https://x.com/yAtulX",
  },
  photo: "/atul.jpg",
};

export const stats = [
  { num: "10M+", label: "API requests / yr", sub: "Spring Boot & FastAPI" },
  { num: "35%", label: "Lower p99 latency", sub: "Redis caching layer" },
  { num: "65%", label: "Faster deployments", sub: "CI/CD automation" },
  { num: "4–6", label: "Engineers mentored", sub: "As Technical Lead" },
];

export const about = [
  "At KPIT Technologies, I lead backend and platform engineering for global automotive enterprises — Mercedes-Benz, BMW, and Ford — turning proofs of concept into production systems that hold up at scale.",
  "My work centers on event-driven architecture: Kafka pipelines, Redis caching, large database migrations, and observability. I care about latency, fault tolerance, and the kind of system design that stays stable under real traffic. Before this I trained at IIT (BHU) Varanasi, where competitive programming sharpened how I think about problems.",
];

export const education = {
  school: "Indian Institute of Technology (BHU)",
  degree: "Bachelor of Technology — Varanasi, India",
  cgpa: "CGPA 8.8 / 10",
  years: "2019 – 2023",
  notes: [
    "Built a strong foundation in data structures, algorithms, operating systems, and large-scale system design.",
    "Samsung Star Scholar; ranked among the top competitive programmers on Codeforces, CodeChef, and LeetCode.",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Systems",
    "Computer Networks",
    "System Design",
    "OOP",
  ],
};

export const schoolEducation = [
  {
    school: "Jawahar Navodaya Vidyalaya",
    level: "Intermediate (Class XII)",
    location: "Kottayam, Kerala",
    score: "88.60%",
    board: "CBSE",
  },
  {
    school: "Jawahar Navodaya Vidyalaya",
    level: "High School (Class X)",
    location: "Bhadohi, Uttar Pradesh",
    score: "10 CGPA",
    board: "CBSE",
  },
];

export type Job = {
  company: string;
  role: string;
  meta: string[];
  current?: boolean;
  bullets: string[];
  tech: string[];
};

export const jobs: Job[] = [
  {
    company: "KPIT Technologies",
    role: "Senior Software Engineer",
    meta: ["Oct 2025 – Present", "Pune, India"],
    current: true,
    bullets: [
      "Architected a task orchestration engine running 30+ concurrent tasks with priority scheduling, queueing, polling, and graceful cancellation — unifying AI-driven automation, CI/CD agents, and human workflows.",
      "Redesigned the end-to-end job execution pipeline across 6 microservices — normalized license & resource profiles at upload time (eliminating repeated DB lookups at queue time), introduced atomic batch admission with TTL reservations, partial scheduling with saga-pattern compensation, and a centralized status-mapping table; reduced scheduling overhead by removing per-pipeline config parsing from the hot path.",
      "Built a batch license admission engine backed by a reservation ledger: groups pipelines by license-profile hash, computes max-runnable count via floor(available / required) under SERIALIZABLE isolation, and holds locks with a configurable TTL — replacing a single-pipeline lock model that degraded linearly under queue depth.",
      "Designed a resource capacity admission layer (Python / FastAPI) with a batch-resource-check endpoint that evaluates CPU & RAM headroom across Kubernetes clusters with per-pipeline safety buffers, writes atomic resource reservations, and drives a 60 s reconciliation watchdog that self-heals expired or orphaned holds without operator intervention.",
      "Led database normalization and a large-scale migration across 10+ core tables with zero data loss, improving query performance by 30–40%.",
      "Implemented Redis caching across 5+ high-traffic services, cutting p99 latency ~35% and database load 40%+.",
      "Designed partition-based throttling for Kafka consumers processing ~30k events/day, stabilizing throughput at peak.",
      "Built Grafana dashboards and DLQ alerts across 20+ critical metrics, halving mean time to detect incidents.",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Kubernetes", "Grafana", "LangChain", "LangGraph", "RAG", "System Design"],
  },
  {
    company: "KPIT Technologies",
    role: "Software Engineer 2",
    meta: ["Oct 2024 – Sep 2025", "Pune, India"],
    bullets: [
      "Forward-deployed engineer for Mercedes-Benz, BMW, and Ford, converting 3+ POCs into long-term enterprise deployments.",
      "Built high-performance backend services in Spring Boot and FastAPI handling 10M+ API requests annually.",
      "Designed a centralized hardware-management platform (Python/FastAPI) for 1,000+ ECUs across EU, US, APAC, and ASIA — with staged OTA rollouts, parallel test-campaign execution, async telemetry ingestion, and Artifactory-backed result publishing.",
      "Integrated Kafka async messaging across 5+ microservices for higher throughput and fault tolerance.",
      "Optimized secure access via Apache Guacamole, reducing login latency by 85%.",
    ],
    tech: ["Java", "Spring Boot", "Python", "FastAPI", "PostgreSQL", "Redis", "Kafka", "Apache Guacamole"],
  },
  {
    company: "KPIT Technologies",
    role: "Software Engineer 1",
    meta: ["Jun 2023 – Aug 2024", "Pune, India"],
    bullets: [
      "Led a unified portal managing 1,000+ cloud and on-prem environments globally.",
      "Contributed to 8+ microservices for secure provisioning, monitoring, and orchestration of virtual test environments.",
      "Implemented distributed locking and multi-region workflows for reliability under high concurrency.",
      "Automated CI/CD with GitLab CI/CD, Docker, and Kubernetes, cutting deployment time by 65%.",
    ],
    tech: ["Java", "Docker", "Kubernetes", "GitLab CI/CD", "Distributed Systems"],
  },
  {
    company: "KPIT Technologies",
    role: "Software Engineer Intern · Remote",
    meta: ["May 2022 – Jul 2022"],
    bullets: [
      "Contributed to a microservices-based SaaS platform focused on backend performance and fault tolerance.",
      "Built REST APIs and inter-service communication to improve throughput and reduce latency.",
    ],
    tech: ["REST APIs", "Microservices", "Backend"],
  },
];

export type DiagramRow = { nodes: { label: string; hl?: boolean }[]; arrow?: string };
export type Project = {
  kind: string;
  title: string;
  description: string;
  metrics: string[];
  tech: string[];
  context: string;
  diagramLabel: string;
  diagram: DiagramRow[];
  media?: string;
};

export const projects: Project[] = [
  {
    kind: "Distributed Workflow System · Agentic AI",
    title: "Task Orchestration Engine",
    description:
      "An agentic control plane: a lead files a ticket in JIRA, an analyzer agent splits it into a task DAG, and specialized coding agents run in parallel on an Azure cluster. CI/CD pipelines and ephemeral human-review workbenches slot in as steps, all admitted by a P1/P2/P3 priority queue on a single Run. Status, reports, and artifact events stream over Kafka; generated artifacts are published to GitLab/GitHub and an Artifactory (S3/Nexus), with LangChain monitoring the agent workflows end to end.",
    metrics: ["30+ concurrent tasks", "priority queue · DAG", "Kafka event streaming"],
    tech: ["Java", "Spring Boot", "Python", "FastAPI", "Kafka", "Redis", "PostgreSQL", "Azure", "LangChain"],
    context: "Enterprise · KPIT",
    media: "/orchestration-flow.svg",
    diagramLabel: "Orchestration control plane",
    diagram: [
      { nodes: [{ label: "AI Automation" }, { label: "CI/CD Agents" }, { label: "Human Tasks" }] },
      { nodes: [{ label: "↓" }], arrow: "down" },
      { nodes: [{ label: "Priority Scheduler", hl: true }, { label: "→" }, { label: "Queue" }, { label: "→" }, { label: "Workers ×30+" }] },
      { nodes: [{ label: "↓" }], arrow: "down" },
      { nodes: [{ label: "Redis State" }, { label: "→" }, { label: "Poll / Cancel" }] },
    ],
  },
  {
    kind: "Enterprise Platform · IoT at Scale",
    title: "Global Hardware Manager",
    description:
      "A centralized device-management platform — think AWS IoT for automotive HIL — built entirely in Python/FastAPI. The control plane exposes a device registry, live health monitoring, staged OTA rollouts (canary → fleet with health-gated promotion), and a parallel test-campaign engine. Lightweight HIL agents run on desktop machines wired to real ECUs across EU, US, APAC, and ASIA. Devices stream telemetry asynchronously via async FastAPI I/O; test results are persisted to PostgreSQL and published as reports to Artifactory (S3/Nexus). Redis caches registry and health-state lookups to keep the real-time dashboard responsive under 1,000+ concurrent device streams. Secure remote access to hardware nodes is routed through Apache Guacamole — latency cut 85% after connection-pool optimization.",
    metrics: ["1,000+ devices", "4-region fleet", "85% lower access latency"],
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kafka", "S3 · Nexus", "Apache Guacamole", "WebSocket"],
    context: "Enterprise · KPIT",
    media: "/hardware-manager-flow.svg",
    diagramLabel: "Multi-region platform",
    diagram: [
      { nodes: [{ label: "1,000+ Devices" }] },
      { nodes: [{ label: "↓" }], arrow: "down" },
      { nodes: [{ label: "API Gateway", hl: true }, { label: "→" }, { label: "Provisioning" }] },
      { nodes: [{ label: "Monitoring" }, { label: "→" }, { label: "Guacamole Access" }] },
      { nodes: [{ label: "↓" }], arrow: "down" },
      { nodes: [{ label: "Region · EU" }, { label: "Region · US" }, { label: "Region · APAC" }] },
    ],
  },
  {
    kind: "Event-Driven Backend · Observability",
    title: "Kafka Pipeline & Observability",
    description:
      "A production event-streaming backbone wiring 5+ microservices (Spring Boot + FastAPI) across an automotive platform. Partition-based throttling with lag-monitored backpressure keeps ~30k daily events stable through peak traffic without dropping messages. A Redis caching layer sits in front of hot-path lookups, cutting p99 latency 35%. Failed messages route to a DLQ with automated alerting; Prometheus scrapes broker and consumer-group metrics into Grafana dashboards (20+ panels) for live lag, throughput and error tracking. Splunk aggregates service logs for correlation — together cutting incident detection time by 50%.",
    metrics: ["~30k events / day", "35% lower p99", "50% faster detection"],
    tech: ["Java", "Spring Boot", "Python", "FastAPI", "Kafka", "Redis", "Prometheus", "Grafana", "Splunk"],
    context: "Enterprise · KPIT",
    media: "/kafka-observability-flow.svg",
    diagramLabel: "Event pipeline & observability",
    diagram: [
      { nodes: [{ label: "Producers" }, { label: "→" }, { label: "Kafka · partitions", hl: true }, { label: "→" }, { label: "Consumers" }] },
      { nodes: [{ label: "↓" }], arrow: "down" },
      { nodes: [{ label: "Redis Cache" }, { label: "·" }, { label: "DLQ Alerts" }] },
      { nodes: [{ label: "Prometheus" }, { label: "→" }, { label: "Grafana · 20+ metrics" }] },
    ],
  },
];

export const sideProjects = [
  {
    kind: "Open Source · Full Stack",
    title: "Corporate Voting Platform",
    description:
      "A corporate voting system split into separate frontend and backend services for secure ballots and result tallying.",
    tag: "React",
    repo: "https://github.com/2002atulyadav/voting_platform_backend",
  },
  {
    kind: "Open Source · Web",
    title: "Election Portal",
    description:
      "A web portal for configuring and running elections end-to-end, with candidate and voter management.",
    tag: "JavaScript",
    repo: "https://github.com/2002atulyadav/electionPortal",
  },
];

export const skillGroups = [
  { name: "Backend", color: "#BE4A2B", items: ["Java", "Spring Boot", "Hibernate", "Python", "FastAPI", "Flask", "REST APIs"] },
  { name: "AI & LLM Workflows", color: "#1A7A6E", items: ["LangChain", "LangGraph", "RAG", "Vector Databases", "AI Agents", "GitHub Copilot", "Cursor", "Prompt Engineering"] },
  { name: "Distributed Systems", color: "#3F8F5B", items: ["Kafka", "Event-Driven Architecture", "Concurrency Control", "Distributed Locking", "Throttling"] },
  { name: "Scheduling & Admission", color: "#8B5CF6", items: ["Priority Queues", "Batch Admission", "TTL Reservations", "Saga Compensation", "Resource Reservation"] },
  { name: "Databases & Caching", color: "#D8A23B", items: ["PostgreSQL", "MongoDB", "Redis", "Schema Design", "Query Optimization", "DB Migration"] },
  { name: "Cloud & DevOps", color: "#5B6DC4", items: ["AWS", "GCP", "Kubernetes", "Docker", "GitLab CI/CD", "Jenkins"] },
  { name: "Observability", color: "#A45BC4", items: ["Prometheus", "Grafana", "Splunk", "DLQ Monitoring", "Alerting"] },
  { name: "Core", color: "#BE4A2B", items: ["System Design", "Scalability", "High Availability", "Fault Tolerance", "API Design", "DSA"] },
];

export const languages = ["Java", "Python", "C++", "SQL"];

export const achievements = [
  { big: "1548", title: "Codeforces — Specialist", sub: "Max rating" },
  { big: "#37", title: "Codeforces Round 799", sub: "of 20,000+ participants" },
  { big: "1843", title: "CodeChef — 4★", sub: "Max rating" },
  { big: "#30", title: "CodeChef Starters 11", sub: "Global, of 8,000+" },
  { big: "4.2%", title: "LeetCode — Top percentile", sub: "Max rating 1875" },
  { big: "99.68", title: "JEE Mains 2019 percentile", sub: "among 1M+ candidates" },
  { big: "★", title: "Samsung Star Scholar", sub: "Top JNV student · JEE Mains 2019" },
  { big: "Top", title: "Performer — multi-year", sub: "Company & org-level awards" },
];

export const competitiveProfiles = [
  { name: "Codeforces", detail: "Specialist 1548", url: "https://codeforces.com/profile/ojes_yadav" },
  { name: "CodeChef", detail: "4★ 1843", url: "https://www.codechef.com/users/ojes" },
  { name: "LeetCode", detail: "Top 4.2%", url: "https://leetcode.com/u/atulyadav02/" },
];

export const navItems = [
  "home",
  "about",
  "education",
  "experience",
  "work",
  "skills",
  "contact",
];
