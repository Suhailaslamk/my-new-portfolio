"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend & .NET",
    color: "from-violet-500/20 to-purple-600/10",
    border: "border-violet-500/20",
    accent: "#8b5cf6",
    skills: [
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain colored" },
      { name: "ADO.NET", icon: "devicon-dotnetcore-plain colored" },
      { name: "Entity Framework", icon: "devicon-dotnetcore-plain colored" },
      { name: "Dapper", icon: "devicon-dotnetcore-plain colored" },
      { name: "LINQ", icon: "devicon-dotnetcore-plain colored" },
      { name: "Blazor", icon: "devicon-blazor-original colored" },
      { name: "ML.NET", icon: "devicon-dotnetcore-plain colored" },
    ],
  },
  {
    title: "Frontend & UI",
    color: "from-cyan-500/20 to-blue-600/10",
    border: "border-cyan-500/20",
    accent: "#06b6d4",
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Redux", icon: "devicon-redux-original colored" },
      { name: "Zustand", icon: "devicon-react-original colored" },
      { name: "RxJS", icon: "devicon-rxjs-plain colored" },
    ],
  },
  {
    title: "Databases & Storage",
    color: "from-emerald-500/20 to-green-600/10",
    border: "border-emerald-500/20",
    accent: "#10b981",
    skills: [
      { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "DynamoDB", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
      { name: "Elasticsearch", icon: "devicon-elasticsearch-plain colored" },
      { name: "Azure Blob", icon: "devicon-azure-plain colored" },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "from-sky-500/20 to-indigo-600/10",
    border: "border-sky-500/20",
    accent: "#0ea5e9",
    skills: [
      { name: "Azure", icon: "devicon-azure-plain colored" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { name: "Helm", icon: "devicon-helm-original colored" },
      { name: "AKS", icon: "devicon-azure-plain colored" },
      { name: "ACR", icon: "devicon-azure-plain colored" },
      { name: "CI/CD", icon: "devicon-githubactions-plain colored" },
      { name: "Nginx", icon: "devicon-nginx-original colored" },
    ],
  },
  {
    title: "Architecture & Patterns",
    color: "from-orange-500/20 to-amber-600/10",
    border: "border-orange-500/20",
    accent: "#f97316",
    skills: [
      { name: "Microservices", icon: "devicon-kubernetes-plain colored" },
      { name: "Clean Architecture", icon: "devicon-dotnetcore-plain colored" },
      { name: "CQRS", icon: "devicon-dotnetcore-plain colored" },
      { name: "DDD", icon: "devicon-dotnetcore-plain colored" },
      { name: "Event-Driven", icon: "devicon-apachekafka-original colored" },
      { name: "SOLID", icon: "devicon-csharp-plain colored" },
      { name: "Modular Monolith", icon: "devicon-dotnetcore-plain colored" },
      { name: "OOP", icon: "devicon-cplusplus-plain colored" },
      { name: "MVC", icon: "devicon-dotnetcore-plain colored" },
      { name: "Concurrency", icon: "devicon-csharp-plain colored" },
      { name: "Asynchronous", icon: "devicon-javascript-plain colored" },
    ],
  },
  {
    title: "APIs & Networking",
    color: "from-pink-500/20 to-rose-600/10",
    border: "border-pink-500/20",
    accent: "#ec4899",
    skills: [
      { name: "REST API", icon: "devicon-networkx-plain colored" },
      { name: "gRPC", icon: "devicon-grpc-plain colored" },
      { name: "GraphQL", icon: "devicon-graphql-plain colored" },
      { name: "SignalR", icon: "devicon-dotnetcore-plain colored" },
      { name: "WebSocket", icon: "devicon-html5-plain colored" },
      { name: "WebRTC", icon: "devicon-chrome-plain colored" },
      { name: "Protobuf", icon: "devicon-google-plain colored" },
      { name: "Webhook", icon: "devicon-github-original colored" },
      { name: "Reverse Proxy", icon: "devicon-nginx-original colored" },
      { name: "Load Balancer", icon: "devicon-nginx-original colored" },
      { name: "Rate Limiting", icon: "devicon-nodejs-plain colored" },
      { name: "CDN", icon: "devicon-cloudflare-plain colored" },
      { name: "mTLS", icon: "devicon-networkx-plain colored" },
      { name: "Istio", icon: "devicon-kubernetes-plain colored" },
      { name: "SOAP API", icon: "devicon-networkx-plain colored" },
    ],
  },
  {
    title: "Messaging & Background",
    color: "from-yellow-500/20 to-orange-600/10",
    border: "border-yellow-500/20",
    accent: "#eab308",
    skills: [
      { name: "Kafka", icon: "devicon-apachekafka-original colored" },
      { name: "RabbitMQ", icon: "devicon-rabbitmq-original colored" },
      { name: "Hangfire", icon: "devicon-dotnetcore-plain colored" },
      { name: "Quartz.NET", icon: "devicon-dotnetcore-plain colored" },
      { name: "MediatR", icon: "devicon-dotnetcore-plain colored" },
    ],
  },
  {
    title: "Observability",
    color: "from-teal-500/20 to-cyan-600/10",
    border: "border-teal-500/20",
    accent: "#14b8a6",
    skills: [
      { name: "OpenTelemetry", icon: "devicon-opentelemetry-plain colored" },
      { name: "Prometheus", icon: "devicon-prometheus-original colored" },
      { name: "Grafana", icon: "devicon-grafana-original colored" },
      { name: "Jaeger / Tempo", icon: "devicon-jaeger-plain colored" },
      { name: "Sentry", icon: "devicon-sentry-original colored" },
      { name: "Serilog", icon: "devicon-dotnetcore-plain colored" },
    ],
  },
  {
    title: "Testing & Quality",
    color: "from-red-500/20 to-rose-600/10",
    border: "border-red-500/20",
    accent: "#ef4444",
    skills: [
      { name: "Unit Testing", icon: "devicon-jest-plain colored" },
      { name: "Integration Testing", icon: "devicon-jest-plain colored" },
      { name: "E2E Testing", icon: "devicon-selenium-original colored" },
      { name: "xUnit", icon: "devicon-dotnetcore-plain colored" },
      { name: "Load Testing", icon: "devicon-k6-original colored" },
      { name: "Debugging", icon: "devicon-visualstudio-plain colored" },
    ],
  },
  {
    title: "Tools & Practices",
    color: "from-slate-500/20 to-gray-600/10",
    border: "border-slate-500/20",
    accent: "#64748b",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Swagger", icon: "devicon-swagger-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Agile/Scrum", icon: "devicon-jira-plain colored" },
      { name: "DSA", icon: "devicon-cplusplus-plain colored" },
      { name: "Cloudinary", icon: "devicon-cloudinary-plain colored" },
      { name: "RBAC", icon: "devicon-azure-plain colored" },
      { name: "RAG / MCP", icon: "devicon-python-plain colored" },
      { name: "Versioning", icon: "devicon-git-plain colored" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className={`relative rounded-3xl p-6 bg-gradient-to-br ${category.color} backdrop-blur-xl border ${category.border} shadow-xl overflow-hidden group`}
      style={{
        boxShadow: inView
          ? `0 0 0 0 ${category.accent}00`
          : undefined,
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 8px 40px -8px ${category.accent}44`,
        transition: { duration: 0.25 },
      }}
    >
      {/* Glow accent */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-[60px] opacity-30 transition-opacity duration-300 group-hover:opacity-60"
        style={{ backgroundColor: category.accent }}
      />

      {/* Category title */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-2 h-6 rounded-full"
          style={{ backgroundColor: category.accent }}
        />
        <h3 className="text-base font-bold text-white tracking-wide">
          {category.title}
        </h3>
        <span
          className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `${category.accent}22`,
            color: category.accent,
            border: `1px solid ${category.accent}44`,
          }}
        >
          {category.skills.length}
        </span>
      </div>

      {/* Skills pills with stagger */}
      <motion.div
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {category.skills.map((skill, sIdx) => (
          <motion.div
            key={sIdx}
            variants={pillVariants}
            custom={sIdx}
            whileHover={{ scale: 1.08, y: -2 }}
            className="flex items-center gap-1.5 bg-black/30 border border-white/8 rounded-full px-3 py-1.5 cursor-default"
            style={{
              backdropFilter: "blur(8px)",
            }}
          >
            <i className={`${skill.icon} text-base leading-none`} />
            <span className="text-xs text-neutral-300 font-medium whitespace-nowrap">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export function SkillsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      id="skills"
      className="min-h-screen w-full max-w-7xl mx-auto px-4 py-28 flex flex-col justify-center"
    >
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 32 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 text-center"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={headerInView ? { opacity: 1, letterSpacing: "0.25em" } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 mb-4 block"
        >
          Technical Expertise
        </motion.span>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">Technical </span>
          <span
            className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
          >
            Arsenal
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-neutral-400 text-lg max-w-2xl mx-auto"
        >
          A comprehensive toolkit spanning backend, cloud, DevOps, distributed
          systems, and modern software engineering practices.
        </motion.p>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-violet-500 to-transparent origin-center"
        />
      </motion.div>

      {/* Grid of category cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {skillCategories.map((category, idx) => (
          <SkillCard key={idx} category={category} index={idx} />
        ))}
      </div>

      {/* Total count badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-12 flex justify-center"
      >
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-neutral-400 text-sm font-medium">
            {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)}+ technologies &amp; counting
          </span>
        </div>
      </motion.div>
    </section>
  );
}
