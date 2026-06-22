"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, ShoppingCart, Home, Code2, Globe } from "lucide-react";

const projects = [
  {
    title: "Daor E-Commerce Backend",
    description: "Robust .NET backend for a full-scale e-commerce platform. Features secure JWT authentication, complex product catalog management, distributed shopping cart state via Redis, and a seamless transactional checkout process. Built using Clean Architecture and CQRS.",
    repo: "https://github.com/Suhailaslamk/Daor-E-Commerce-Backend",
    icon: <ShoppingCart className="w-6 h-6 text-emerald-400" />,
    tags: ["C#", "ASP.NET Core", "SQL Server", "Redis", "Clean Architecture", "CQRS"],
    gradient: "from-emerald-500/10 to-transparent",
    border: "group-hover:border-emerald-500/30",
  },
  {
    title: "Daor E-Commerce Frontend",
    description: "Modern, responsive storefront for Daor Shades. Implements secure user sessions, dynamic product filtering, responsive galleries, and a highly optimized cart and checkout UI flow.",
    repo: "https://github.com/Suhailaslamk/Daor-shades-e-commerse-project",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    tags: ["React", "Redux", "Tailwind CSS", "Vite"],
    gradient: "from-cyan-500/10 to-transparent",
    border: "group-hover:border-cyan-500/30",
  },
  {
    title: "Homiee Platform",
    description: "Full-stack local marketplace platform. ASP.NET Core 8 modular monolith, React 19 SPA, deployed on Azure Kubernetes Service (AKS). Features real-time SignalR chat, geospatial search, AI-assisted image generation via Gemini, and role-based access for Customers, Sellers, and Admins.",
    repo: "https://github.com/Suhailaslamk/Homiee.Backend",
    icon: <Home className="w-6 h-6 text-blue-400" />,
    tags: [".NET 8", "React 19", "SQL Server", "Redis", "Docker", "Kubernetes", "AKS", "SignalR"],
    gradient: "from-blue-500/10 to-transparent",
    border: "group-hover:border-blue-500/30",
  },
  {
    title: "NexTrade",
    description: "Event-driven microservices trading platform built on .NET 8. Features strict separation between an in-memory Kafka-driven matching engine and a DB-owning settlement service. Utilizes one-directional flow, the Outbox Pattern for eventual consistency, and snapshot+replay recovery mechanisms mirroring real exchange architectures.",
    repo: "https://github.com/Suhailaslamk/Nextrade",
    icon: <FolderGit2 className="w-6 h-6 text-purple-400" />,
    tags: [".NET 8", "Microservices", "Kafka", "Outbox Pattern", "Event-Driven"],
    gradient: "from-purple-500/10 to-transparent",
    border: "group-hover:border-purple-500/30",
  },
  {
    title: "Premium Portfolio Website",
    description: "Highly interactive developer portfolio featuring a custom bento grid, glassmorphism design system, live GitHub and LeetCode API integrations, and Framer Motion animations.",
    repo: "https://github.com/Suhailaslamk/my-new-portfolio",
    icon: <Code2 className="w-6 h-6 text-pink-400" />,
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "REST APIs"],
    gradient: "from-pink-500/10 to-transparent",
    border: "group-hover:border-pink-500/30",
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 text-center md:text-left">
          Featured Projects
        </h2>
        <p className="text-neutral-400 max-w-2xl text-center md:text-left">
          A selection of my recent engineering work, spanning robust backend distributed systems to premium frontend interfaces.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project, idx) => (
          <motion.a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative block w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:bg-white/10 ${project.border} shadow-lg hover:shadow-xl`}
          >
            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-black/30 p-3 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-neutral-400 text-base leading-relaxed mb-6 max-w-4xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs font-medium px-3 py-1 bg-black/40 border border-white/10 rounded-full text-neutral-300 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Repo Button */}
              <div className="md:pl-8 flex-shrink-0">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white bg-white/5 px-5 py-3 rounded-full border border-white/10 group-hover:border-white/20 transition-all group-hover:bg-white/10">
                  View Repository
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
